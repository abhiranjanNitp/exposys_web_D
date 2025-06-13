import React from 'react';
import { ChefHat, Star, Clock } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onBuildOwn: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderNow, onBuildOwn }) => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 py-20 overflow-hidden">
      
      {/* Background Pattern as SVG */}
      <div className="absolute inset-0 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="burger-bg" patternUnits="userSpaceOnUse" width="50" height="50">
              <circle cx="25" cy="25" r="2" fill="#f97316" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#burger-bg)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Craft Your
              <span className="text-orange-600 block">Perfect Burger</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              From classic favorites to unlimited customization - build your dream burger 
              with premium ingredients and artisanal craft.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <ChefHat className="text-orange-600" size={20} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Ingredients</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="text-yellow-600" size={20} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="text-green-600" size={20} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">15 min</div>
                  <div className="text-sm text-gray-600">Prep Time</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOrderNow}
                className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Order Now
              </button>
              <button
                onClick={onBuildOwn}
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-200"
              >
                Build Your Own
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Delicious burger"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating Tags */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-white px-4 py-2 rounded-full font-bold animate-bounce shadow-lg">
              Fresh Daily!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold animate-pulse shadow-lg">
              Premium Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;