import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🍔</span>
              <span className="text-2xl font-bold text-orange-500">Brrrgrrr</span>
            </div>
            <p className="text-gray-300 mb-4">
              Crafting the perfect burger experience with premium ingredients and unlimited customization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#custom" className="text-gray-300 hover:text-orange-500 transition-colors">Build Your Own</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Nutritional Info</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-orange-500" />
                <span className="text-gray-300">123 Burger Street, Food City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span className="text-gray-300">(555) 123-BURGER</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span className="text-gray-300">hello@brrrgrrr.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-orange-500" />
                <div>
                  <div className="text-gray-300">Mon - Thu: 11am - 10pm</div>
                  <div className="text-gray-300">Fri - Sat: 11am - 11pm</div>
                  <div className="text-gray-300">Sunday: 12pm - 9pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Brrrgrrr. All rights reserved. Made with ❤️ for burger lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;