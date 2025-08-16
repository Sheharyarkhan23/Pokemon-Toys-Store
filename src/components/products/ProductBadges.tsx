import React from 'react';

interface ProductBadgesProps {
  isHot?: boolean;
  isNew?: boolean;
  originalPrice?: number;
  price?: number;
}

const ProductBadges: React.FC<ProductBadgesProps> = ({
  isHot,
  isNew,
  originalPrice,
  price,
}) => {
  const showSaveBadge = originalPrice && price && originalPrice - price >= 20;

  return (
    <div className="absolute top-2 left-2 flex flex-col space-y-1">
      {false && (
        <span className="bg-pokemon-red text-white text-xs font-bold px-2 py-1 rounded">
          HOT
        </span>
      )}
      {false && (
        <span className="bg-pokemon-blue text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </span>
      )}
      {showSaveBadge && (
        <span className="bg-pokemon-red text-white text-xs font-bold px-2 py-1 rounded">
          Save ${20} USD
        </span>
      )}
    </div>
  );
};

export default ProductBadges; 