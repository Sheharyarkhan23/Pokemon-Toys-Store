import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (change: number) => void;
  stock: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
  quantity, 
  onQuantityChange, 
  stock 
}) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <span className="font-semibold">Quantity:</span>
      <div className="flex items-center border rounded-lg">
        <button
          onClick={() => onQuantityChange(-1)}
          disabled={quantity <= 1}
          className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
          {quantity}
        </span>
        <button
          onClick={() => onQuantityChange(1)}
          disabled={!stock}
          className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector; 