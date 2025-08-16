import React from 'react';
import { useCheckout } from '../hooks/useCheckout';
import { banks, states } from '../data/banks';
import CheckoutHeader from '../components/CheckoutHeader';
import ShippingForm from '../components/ShippingForm';
import PaymentForm from '../components/PaymentForm';
import OrderSummary from '../components/OrderSummary';
import BankAuthModal from '../components/BankAuthModal';
import CheckoutSuccess from '../components/CheckoutSuccess';
import { CartItem } from '../App';

interface CheckoutProps {
  cartTotal: number;
  cartItems: CartItem[];
  orderId: string;
}

const Checkout: React.FC<CheckoutProps> = ({ cartTotal, cartItems, orderId }) => {
  const {
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
  } = useCheckout(cartTotal, cartItems, orderId);

  if (step === 3) {
    return <CheckoutSuccess />;
  }

  return (
    <div className="min-h-screen bg-pokemon-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CheckoutHeader step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <ShippingForm
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                states={states}
              />
            )}

            {step === 2 && (
              <PaymentForm
                selectedBank={selectedBank}
                banks={banks}
                handleBankSelect={handleBankSelect}
                handleProceedToBankAuth={handleProceedToBankAuth}
              />
            )}
          </div>

          {/* Order Summary */}
          <OrderSummary
            cartTotal={cartTotal}
            shipping={shipping}
            tax={tax}
            total={total}
            FREE_SHIPPING_THRESHOLD={FREE_SHIPPING_THRESHOLD}
          />
        </div>
      </div>

      {/* Bank Authentication Modal */}
      <BankAuthModal
        showBankAuth={showBankAuth}
        connecting={connecting}
        authStep={authStep}
        processingPayment={processingPayment}
        paymentDone={paymentDone}
        processingProgress={processingProgress}
        selectedBank={selectedBank}
        banks={banks}
        cardData={cardData}
        cardType={cardType}
        cardErrors={cardErrors}
        bankLoginData={bankLoginData}
        formData={formData}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleCardDetailsSubmit={handleCardDetailsSubmit}
        handleCardDataChange={handleCardDataChange}
        handleLoginSubmit={handleLoginSubmit}
        handleVerificationContinue={handleVerificationContinue}
        handle2FASubmit={handle2FASubmit}
        handleBankLoginChange={handleBankLoginChange}
        closeBankAuth={closeBankAuth}
        total={total}
      />
    </div>
  );
};

export default Checkout;
