import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToFooter = () => {
    if (location.pathname === '/') {
      // Scroll to footer on home page
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToNewsletter = () => {
    if (location.pathname === '/') {
      // Scroll to newsletter section on home page
      const newsletter = document.querySelector(
        '#newsletter1'
      ) as HTMLElement | null;
      newsletter?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/public/logo.svg" className="w-[167px] h-36" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-pokemon-dark hover:text-pokemon-red transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-pokemon-dark hover:text-pokemon-red transition-colors"
            >
              Products
            </Link>
            <Link
                              to="/"
                              className="text-pokemon-dark hover:text-pokemon-red transition-colors"
                              onClick={() => window.scrollTo({ top: 4000, behavior: 'smooth' })}
                            >
                              About
                            </Link>
            <Link
                              to="/"
                              className="text-pokemon-dark hover:text-pokemon-red transition-colors"
                              onClick={() => window.scrollTo({ top: 2870, behavior: 'smooth' })}
                            >
                              Contact
                            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-pokemon-gray rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search cards..."
                className="bg-transparent ml-2 outline-none text-sm w-32 lg:w-48"
              />
            </div>

            <Link to="/cart" className="relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <ShoppingCart className="w-6 h-6 text-pokemon-dark hover:text-pokemon-red transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pokemon-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-pokemon-dark" />
              ) : (
                <Menu className="w-6 h-6 text-pokemon-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center bg-pokemon-gray rounded-lg px-3 py-2 mb-4">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cards..."
                  className="bg-transparent ml-2 outline-none text-sm w-full"
                />
              </div>
              <Link
                to="/"
                className="text-pokemon-dark hover:text-pokemon-red transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-pokemon-dark hover:text-pokemon-red transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/pre-orders"
                className="text-pokemon-dark hover:text-pokemon-red transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pre-Orders
              </Link>
              <button
                onClick={() => {
                  scrollToFooter();
                  setIsMenuOpen(false);
                }}
                className="text-pokemon-dark hover:text-pokemon-red transition-colors py-2 cursor-pointer text-left w-full"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToNewsletter();
                  setIsMenuOpen(false);
                }}
                className="text-pokemon-dark hover:text-pokemon-red transition-colors py-2 cursor-pointer text-left w-full"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
