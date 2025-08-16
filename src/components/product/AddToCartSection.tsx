import React from 'react';
import { ShoppingCart, Share2 } from 'lucide-react';

interface AddToCartSectionProps {
  onAddToCart: () => void;
  onShare: () => void;
  copied: boolean;
  stock: boolean;
}

const AddToCartSection: React.FC<AddToCartSectionProps> = ({ 
  onAddToCart, 
  onShare, 
  copied, 
  stock 
}) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
      <button
        onClick={onAddToCart}
        className="flex-1 bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        disabled={!stock}
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Add to Cart</span>
      </button>

      <div className="relative">
        <button
          onClick={onShare}
          className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 px-4 rounded-lg transition-all duration-300"
        >
          <Share2 className="w-5 h-5" />
        </button>
        {copied && (
          <div className="absolute left-1/2 -translate-x-1/2 -top-9 bg-black text-white text-xs py-1 px-2 rounded shadow-md whitespace-nowrap">
            URL copied
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartSection; 