import React from 'react';
import { CartItem } from '../../App';
import ProductListItem from './ProductListItem';

interface ProductsListProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    set: string;
    category: string;
    isHot?: boolean;
    isNew?: boolean;
  }>;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, addToCart }) => {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductsList; 