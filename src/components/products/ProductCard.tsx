import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../App';
import ProductBadges from './ProductBadges';
import ProductPrice from './ProductPrice';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    set: string;
    isHot?: boolean;
    isNew?: boolean;
  };
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
      <div className="relative flex justify-center">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-48 group-hover:scale-110 transition-transform duration-300 mt-4"
          />
        </Link>
        
        <ProductBadges
          isHot={product.isHot}
          isNew={product.isNew}
          originalPrice={product.originalPrice}
          price={product.price}
        />
        
        <div className="absolute top-2 right-2">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors">
            <Eye className="w-4 h-4 text-pokemon-dark" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-pokemon-blue font-semibold mb-1">
          {product.set}
        </p>
        <h3 className="font-semibold text-pokemon-dark mb-2 line-clamp-2">
          {product.name}
        </h3>

        <ProductPrice
          originalPrice={product.originalPrice}
          price={product.price}
          showSaveBadge={true}
        />

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 