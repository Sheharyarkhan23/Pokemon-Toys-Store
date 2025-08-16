import React from 'react';
import { Shield, Truck, CheckCircle } from 'lucide-react';

interface OrderSummaryProps {
  cartTotal: number;
  shipping: number;
  tax: number;
  total: number;
  FREE_SHIPPING_THRESHOLD: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartTotal,
  shipping,
  tax,
  total,
  FREE_SHIPPING_THRESHOLD,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
      <h2 className="text-xl font-bold text-pokemon-dark mb-6">
        Order Summary
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${cartTotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">FREE</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-pokemon-red">${total.toFixed(2)}</span>
        </div>

        {cartTotal < FREE_SHIPPING_THRESHOLD && (
          <p className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
            Add ${(FREE_SHIPPING_THRESHOLD - cartTotal).toFixed(2)} more
            to get FREE shipping!
          </p>
        )}
      </div>

      {/* Security Badges */}
      <div className="border-t pt-6">
        <h3 className="font-bold text-pokemon-dark mb-4 text-sm">
          Secure Checkout
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">SSL Encrypted</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-blue-500" />
            <span className="text-sm text-gray-600">
              Free Shipping Over $90
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-pokemon-red" />
            <span className="text-sm text-gray-600">
              Authentic Sealed Products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary; 