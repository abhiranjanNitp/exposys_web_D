import React from 'react';
import { Star, Plus } from 'lucide-react';
import { BurgerItem } from '../types';

interface BurgerCardProps {
  burger: BurgerItem;
  onAddToCart: (burger: BurgerItem) => void;
  onCustomize: (burger: BurgerItem) => void;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ burger, onAddToCart, onCustomize }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={burger.image}
          alt={burger.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {burger.popular && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Popular
            </span>
          )}
          <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
            burger.category === 'premium' ? 'bg-purple-500' :
            burger.category === 'signature' ? 'bg-blue-500' : 'bg-green-500'
          }`}>
            {burger.category.charAt(0).toUpperCase() + burger.category.slice(1)}
          </span>
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-bold text-orange-600">${burger.basePrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {burger.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium text-gray-600">{burger.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {burger.description}
        </p>

        {/* Ingredients Preview */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-1">Includes:</div>
          <div className="flex flex-wrap gap-1">
            {burger.defaultIngredients.slice(0, 4).map((ingredient, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                {ingredient.replace('-', ' ')}
              </span>
            ))}
            {burger.defaultIngredients.length > 4 && (
              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs">
                +{burger.defaultIngredients.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(burger)}
            className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus size={16} />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={() => onCustomize(burger)}
            className="border border-orange-600 text-orange-600 py-2 px-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;