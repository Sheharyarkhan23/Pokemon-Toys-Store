import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CheckoutHeaderProps {
  step: number;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({ step }) => {
  return (
    <div className="mb-8">
      <Link
        to="/cart"
        className="inline-flex items-center text-pokemon-blue hover:text-pokemon-red transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Cart
      </Link>
      <h1 className="text-3xl font-press-start text-pokemon-dark mb-2">
        Checkout
      </h1>
      <div className="flex items-center space-x-4">
        <div
          className={`flex items-center ${step >= 1 ? 'text-pokemon-red' : 'text-gray-400'}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 1 ? 'bg-pokemon-red text-white' : 'bg-gray-300'
            }`}
          >
            1
          </div>
          <span className="ml-2 font-semibold">Shipping</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div
          className={`flex items-center ${step >= 2 ? 'text-pokemon-red' : 'text-gray-400'}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 2 ? 'bg-pokemon-red text-white' : 'bg-gray-300'
            }`}
          >
            2
          </div>
          <span className="ml-2 font-semibold">Payment</span>
        </div>
        <div className="w-8 h-px bg-gray-300"></div>
        <div
          className={`flex items-center ${step >= 3 ? 'text-pokemon-red' : 'text-gray-400'}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step >= 3 ? 'bg-pokemon-red text-white' : 'bg-gray-300'
            }`}
          >
            3
          </div>
          <span className="ml-2 font-semibold">Complete</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader; 