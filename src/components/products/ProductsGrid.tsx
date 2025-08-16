import React from 'react';
import { CartItem } from '../../App';
import ProductCard from './ProductCard';

interface ProductsGridProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    set: string;
    isHot?: boolean;
    isNew?: boolean;
  }>;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsGrid; 