import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onMenuClick, isMenuOpen }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-orange-600">
              🍔 Brrrgrrr
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Menu
            </a>
            <a href="#custom" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Build Your Own
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Menu
              </a>
              <a href="#custom" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Build Your Own
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;