import React, { useState, useMemo } from 'react';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Ingredient, CustomBurger, CartItem } from '../types';
import { ingredients } from '../data/ingredients';

interface BurgerBuilderProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  initialIngredients?: string[];
  burgerName?: string;
}

const BurgerBuilder: React.FC<BurgerBuilderProps> = ({ 
  isOpen, 
  onClose, 
  onAddToCart, 
  initialIngredients = [],
  burgerName = "Custom Burger"
}) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(initialIngredients);
  const [customName, setCustomName] = useState(burgerName);
  const [quantity, setQuantity] = useState(1);

  // Group ingredients by category - Higher Order Function usage
  const ingredientsByCategory = useMemo(() => {
    return ingredients.reduce((acc, ingredient) => {
      if (!acc[ingredient.category]) {
        acc[ingredient.category] = [];
      }
      acc[ingredient.category].push(ingredient);
      return acc;
    }, {} as Record<string, Ingredient[]>);
  }, []);

  // Calculate total price - Higher Order Function usage
  const totalPrice = useMemo(() => {
    return selectedIngredients.reduce((total, ingredientId) => {
      const ingredient = ingredients.find(ing => ing.id === ingredientId);
      return total + (ingredient?.price || 0);
    }, 0);
  }, [selectedIngredients]);

  // Calculate total calories - Higher Order Function usage
  const totalCalories = useMemo(() => {
    return selectedIngredients.reduce((total, ingredientId) => {
      const ingredient = ingredients.find(ing => ing.id === ingredientId);
      return total + (ingredient?.calories || 0);
    }, 0);
  }, [selectedIngredients]);

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients(prev => {
      if (prev.includes(ingredientId)) {
        return prev.filter(id => id !== ingredientId);
      } else {
        return [...prev, ingredientId];
      }
    });
  };

  const handleAddToCart = () => {
    if (selectedIngredients.length === 0) return;

    const customBurger: CustomBurger = {
      id: `custom-${Date.now()}`,
      name: customName,
      ingredients: selectedIngredients,
      totalPrice,
      createdAt: new Date()
    };

    const cartItem: CartItem = {
      id: customBurger.id,
      type: 'custom',
      customBurger,
      ingredients: selectedIngredients,
      quantity,
      totalPrice: totalPrice * quantity
    };

    onAddToCart(cartItem);
    onClose();
  };

  const categoryLabels = {
    protein: 'Proteins',
    cheese: 'Cheese',
    vegetable: 'Vegetables',
    sauce: 'Sauces',
    extra: 'Extras'
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Build Your Burger</h2>
              <p className="text-gray-600">Customize every ingredient to your taste</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Custom Name Input */}
          <div className="mt-4">
            <input
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Name your burger..."
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ingredients Selection */}
            <div className="lg:col-span-2 space-y-6">
              {Object.entries(ingredientsByCategory).map(([category, categoryIngredients]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-orange-500 pl-3">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {categoryIngredients.map(ingredient => (
                      <div
                        key={ingredient.id}
                        onClick={() => ingredient.available && toggleIngredient(ingredient.id)}
                        className={`
                          p-4 rounded-xl border-2 cursor-pointer transition-all duration-200
                          ${selectedIngredients.includes(ingredient.id)
                            ? 'border-orange-500 bg-orange-50 shadow-md'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-25'
                          }
                          ${!ingredient.available ? 'opacity-50 cursor-not-allowed' : ''}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{ingredient.name}</h4>
                            <p className="text-sm text-gray-600">{ingredient.description}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm font-semibold text-orange-600">
                                +${ingredient.price.toFixed(2)}
                              </span>
                              <span className="text-xs text-gray-500">
                                {ingredient.calories} cal
                              </span>
                            </div>
                          </div>
                          {selectedIngredients.includes(ingredient.id) && (
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <Plus size={16} className="text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Burger</h3>
                
                {/* Selected Ingredients */}
                <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                  {selectedIngredients.length === 0 ? (
                    <p className="text-gray-500 text-sm">No ingredients selected</p>
                  ) : (
                    selectedIngredients.map(ingredientId => {
                      const ingredient = ingredients.find(ing => ing.id === ingredientId);
                      return ingredient ? (
                        <div key={ingredientId} className="flex justify-between items-center text-sm">
                          <span>{ingredient.name}</span>
                          <span className="text-orange-600 font-medium">
                            +${ingredient.price.toFixed(2)}
                          </span>
                        </div>
                      ) : null;
                    })
                  )}
                </div>

                {/* Summary */}
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Total Calories:</span>
                    <span className="font-medium">{totalCalories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per burger:</span>
                    <span className="font-semibold text-orange-600">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-orange-600">
                      ${(totalPrice * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={selectedIngredients.length === 0}
                  className="w-full mt-4 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerBuilder;