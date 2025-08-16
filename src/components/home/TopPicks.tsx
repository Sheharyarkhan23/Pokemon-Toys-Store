import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import { CartItem } from '../../App';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../../data/featuredProducts';
import ProductBadges from '../products/ProductBadges';

interface TopPicksProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const TopPicks: React.FC<TopPicksProps> = ({ addToCart }) => {
  return (
    <section className="py-16 bg-pokemon-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-press-start text-pokemon-dark mb-4">
            Top Picks
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Best sellers and customer favorites - don't miss out on these
            popular items!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
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
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-pokemon-dark mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center space-x-2 mb-4">
                {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-lg font-bold text-pokemon-red">
                    ${product.price}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/products"
            className="inline-block bg-pokemon-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
            onClick={() => window.scrollTo(0, 0)}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopPicks; 