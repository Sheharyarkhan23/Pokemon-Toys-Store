import React from 'react';

interface ProductPriceProps {
  originalPrice?: number;
  price?: number;
  showSaveBadge?: boolean;
  className?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  originalPrice,
  price,
  showSaveBadge = false,
  className = '',
}) => {
  if (!price) return null;

  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      {originalPrice && originalPrice > price && (
        <span className="text-sm text-gray-500 line-through">
          ${originalPrice} USD
        </span>
      )}
      <span className="text-pokemon-red text-lg font-bold">
        ${price} USD
      </span>
     
    </div>
  );
};

export default ProductPrice; 