import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { ingredients } from '../data/ingredients';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  cartTotal: number;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  cartTotal,
  onCheckout
}) => {
  if (!isOpen) return null;

  const getIngredientName = (ingredientId: string) => {
    const ingredient = ingredients.find(ing => ing.id === ingredientId);
    return ingredient?.name || ingredientId.replace('-', ' ');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="text-orange-600" />
              <span>Your Cart</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <ShoppingBag size={64} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some delicious burgers to get started!</p>
              <button
                onClick={onClose}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Start Ordering
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {item.type === 'preset' ? item.burger?.name : item.customBurger?.name}
                        </h3>
                        {item.notes && (
                          <p className="text-sm text-gray-600 mt-1">{item.notes}</p>
                        )}
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Ingredients */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {item.ingredients.slice(0, 4).map((ingredientId, index) => (
                          <span key={index} className="bg-white text-gray-600 px-2 py-1 rounded text-xs">
                            {getIngredientName(ingredientId)}
                          </span>
                        ))}
                        {item.ingredients.length > 4 && (
                          <span className="bg-white text-gray-600 px-2 py-1 rounded text-xs">
                            +{item.ingredients.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-orange-600">
                          ${item.totalPrice.toFixed(2)}
                        </div>
                        <div className="text-xs text-gray-500">
                          ${(item.totalPrice / item.quantity).toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8.25%):</span>
                    <span className="font-semibold">${(cartTotal * 0.0825).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold">$2.99</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">Total:</span>
                      <span className="text-xl font-bold text-orange-600">
                        ${(cartTotal + cartTotal * 0.0825 + 2.99).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;