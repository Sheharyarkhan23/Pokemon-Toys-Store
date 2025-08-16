import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-pokemon-gray py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-press-start text-pokemon-dark mb-4">
            Payment Complete!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Thank you for your purchase! Your payment has been processed
            successfully.
          </p>
          <div className="bg-pokemon-gray rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Order Number</p>
            <p className="font-bold text-pokemon-dark">
              #PKC-{Date.now().toString().slice(-6)}
            </p>
          </div>
          <Link
            to="/"
            className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess; 