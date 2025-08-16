import React from 'react';

interface ProductImagesProps {
  image: string;
  name: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ image, name }) => {
  return (
    <div>
      <div className="mb-4 overflow-hidden rounded-lg shadow-md group cursor-zoom-in">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ProductImages; 