import React from 'react';

interface ProductHeaderProps {
  set: string;
  name: string;
  price: number;
  originalPrice?: number;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ set, name, price, originalPrice }) => {
  const roundNumber = (num: number) => {
    let half = num / 2;
    let rounded = Math.round(half / 10) * 10 - 0.01;
    return Number(rounded.toFixed(2));
  };

  return (
    <div className="mb-4">
      <p className="text-pokemon-blue font-semibold text-sm mb-2">
        {set}
      </p>
      <h1 className="text-2xl md:text-3xl font-bold text-pokemon-dark mb-4">
        {name}
      </h1>

      <div className="flex items-center space-x-4 mb-6">
        <span
          className={`text-sm text-gray-500 ${roundNumber(price) > 20 ? 'line-through' : ''}`}
        >
          ${price} USD
        </span>

        {price / 2 > 20 && (
          <span className=" text-pokemon-red text-lg font-bold">
            ${originalPrice} USD
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductHeader; 