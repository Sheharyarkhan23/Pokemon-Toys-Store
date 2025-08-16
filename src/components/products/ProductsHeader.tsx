import React from 'react';

const ProductsHeader: React.FC = () => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-press-start text-pokemon-dark mb-4">
        All Products
      </h1>
      <p className="text-gray-600 text-lg">
        Discover our complete collection of premium Pokémon trading cards.
      </p>
    </div>
  );
};

export default ProductsHeader; 