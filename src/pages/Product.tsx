import React from 'react';
import { CartItem } from '../App';
import { useProduct } from '../hooks/useProduct';
import {
  ProductImages,
  ProductHeader,
  ProductStock,
  QuantitySelector,
  AddToCartSection,
  TrustBadges,
} from '../components/product';

interface ProductProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const Product: React.FC<ProductProps> = ({ addToCart }) => {
  const { product, quantity, copied, handleQuantityChange, handleShare } = useProduct();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product?.id ?? '1',
        name: product?.name ?? '',
        price: product?.price ?? 0,
        image: product?.images ?? '',
        set: product?.set ?? '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-pokemon-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Product Images */}
            <ProductImages image={product.images} name={product.name} />

            {/* Product Info */}
            <div>
              <ProductHeader
                set={product.set}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
              />

              <ProductStock stock={product.stock} />

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                  stock={product.stock}
                />

                <AddToCartSection
                  onAddToCart={handleAddToCart}
                  onShare={handleShare}
                  copied={copied}
                  stock={product.stock}
                />
              </div>

              {/* Trust Badges */}
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
