import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
  Truck,
  RefreshCw,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-pokemon-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-pokemon-red rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full border-2 border-pokemon-dark"></div>
              </div>
              <span className="font-press-start text-pokemon-red text-sm">
              Pokéboost Vault
              </span>
            </div>
            <p className="text-gray-300 font-inter text-sm leading-relaxed mb-6">
            Your trusted source for authentic Pokémon trading cards at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-pokemon-yellow transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pokemon-yellow transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pokemon-yellow transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pokemon-yellow transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-press-start text-pokemon-yellow text-xs mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 4000, behavior: 'smooth' })}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => window.scrollTo({ top: 2950, behavior: 'smooth' })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-press-start text-pokemon-yellow text-xs mb-6">
              Customer Care
            </h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Authenticity Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h3 className="font-press-start text-pokemon-yellow text-xs mb-6">
              Why Choose Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-pokemon-yellow" />
                <span className="text-gray-300 font-inter text-sm">
                  100% Authentic Cards
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-pokemon-yellow" />
                <span className="text-gray-300 font-inter text-sm">
                  Fast & Safe Shipping
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5 text-pokemon-yellow" />
                <span className="text-gray-300 font-inter text-sm">
                  Easy Returns
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-pokemon-yellow" />
                <span className="text-gray-300 font-inter text-sm">
                  Secure Payments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-gray-400 font-inter text-sm mb-2">
                Accepted Payment Methods:
              </p>
              <div className="flex space-x-2 items-center">
                <div className="rounded py-1">
                  <img
                    src="/bank-logos/mc-logo.svg"
                    className="w-[50px] h-[40px]"
                  />
                </div>
                <div className="rounded py-1">
                  <img
                    src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg"
                    className="w-[50px] h-[35px]"
                  />
                </div>
                <div className="rounded py-1">
                  <img
                    src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                    className="w-[60px] h-[20px]"
                  />
                </div>
                <div className="rounded py-1">
                  <img
                    src="https://www.paypalobjects.com/marketing/web/logos/paypal-mark-color.svg"
                    alt=""
                    className="w-[50px] h-[40px]"
                  />
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-inter text-sm font-semibold">
                  SSL Secured
                </span>
              </div>
              <p className="text-gray-400 font-inter text-xs">
                256-bit encryption • PCI DSS Compliant
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-inter text-sm">
              © 2025 PokéBoost Vault. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-white font-inter text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
