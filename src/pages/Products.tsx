import React from 'react';
import { CartItem } from '../App';
import products from '../data/products.json';
import { useProducts } from '../hooks/useProducts';
import {
  ProductsHeader,
  ProductsControls,
  ProductsGrid,
  ProductsList,
  NoResults,
} from '../components/products';

interface ProductsProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const Products: React.FC<ProductsProps> = ({ addToCart }) => {
  const {
    sortBy,
    viewMode,
    sortedProducts,
    handleSortChange,
    handleViewModeChange,
  } = useProducts(products);

  return (
    <div className="min-h-screen bg-pokemon-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader />

        <ProductsControls
          sortBy={sortBy}
          viewMode={viewMode}
          onSortChange={handleSortChange}
          onViewModeChange={handleViewModeChange}
        />

        {/* Products Display */}
        {sortedProducts.length > 0 ? (
          viewMode === 'grid' ? (
            <ProductsGrid products={sortedProducts} addToCart={addToCart} />
          ) : (
            <ProductsList products={sortedProducts} addToCart={addToCart} />
          )
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
};

export default Products;
