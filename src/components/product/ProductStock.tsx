import React from 'react';

interface ProductStockProps {
  stock: boolean;
}

const ProductStock: React.FC<ProductStockProps> = ({ stock }) => {
  return (
    <div className="mb-6">
      <p
        className={`font-semibold ${stock ? 'text-green-600' : 'text-orange-500'}`}
      >
        {stock ? `In Stock` : 'Out of Stock'}
      </p>
      <p className="text-sm text-gray-600 mt-1">
        Usually ships within 1-2 business days
      </p>
    </div>
  );
};

export default ProductStock; 