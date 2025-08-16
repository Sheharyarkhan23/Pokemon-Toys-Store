import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem } from '../../App';
import ProductBadges from './ProductBadges';
import ProductPrice from './ProductPrice';

interface ProductListItemProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    set: string;
    category: string;
    isHot?: boolean;
    isNew?: boolean;
  };
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-48 h-48 flex-shrink-0">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </Link>
          
          <ProductBadges
            isHot={product.isHot}
            isNew={product.isNew}
            originalPrice={product.originalPrice}
            price={product.price}
          />
        </div>

        <div className="flex-1 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="flex-1">
              <p className="text-sm text-pokemon-blue font-semibold mb-1">
                {product.set}
              </p>
              <h3 className="text-xl font-bold text-pokemon-dark mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Category: {product.category}
              </p>

              <ProductPrice
                originalPrice={product.originalPrice}
                price={product.price}
                showSaveBadge={true}
              />
            </div>

            <div className="flex flex-col space-y-2 sm:ml-6">
              <Link
                to={`/product/${product.id}`}
                className="bg-white border-2 border-pokemon-red text-pokemon-red hover:bg-pokemon-red hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Details</span>
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem; 