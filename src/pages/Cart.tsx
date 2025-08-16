import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, X, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  total: number;
}

const Cart: React.FC<CartProps> = ({
  items,
  updateQuantity,
  removeFromCart,
  total,
}) => {
  const FREE_SHIPPING_THRESHOLD = 99;
  const SHIPPING_COST = 9.99;
  const shipping = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const finalTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-pokemon-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-8" />
          <h1 className="text-3xl font-press-start text-pokemon-dark mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Looks like you haven't added any cards to your collection yet.
          </p>
          <Link
            to="/"
            className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pokemon-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-press-start text-pokemon-dark mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-6 border-b last:border-b-0"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 ml-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-pokemon-dark text-lg mb-1">
                          {item.name}
                        </h3>
                        <p className="text-pokemon-blue text-sm mb-2">
                          {item.set}
                        </p>
                        <p className="text-pokemon-red font-bold text-lg">
                          ${item.price.toFixed(2)} USD
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="font-bold text-pokemon-dark text-lg">
                        ${(item.price * item.quantity).toFixed(2)} USD
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-pokemon-dark mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)} USD</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)} USD`
                    )}
                  </span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-pokemon-red">
                    ${finalTotal.toFixed(2)} USD
                  </span>
                </div>

                {total < FREE_SHIPPING_THRESHOLD && (
                  <p className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                    Add ${(FREE_SHIPPING_THRESHOLD - total).toFixed(2)} more to
                    get FREE shipping!
                  </p>
                )}
              </div>

              <Link
                to="/checkout"
                className="w-full bg-pokemon-red hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg mt-6 block text-center"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="w-full bg-gray-100 hover:bg-gray-200 text-pokemon-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-3 block text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
