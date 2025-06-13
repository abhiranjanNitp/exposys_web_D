import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { BurgerItem, CartItem } from '../types';
import { signatureBurgers } from '../data/burgers';
import { ingredients } from '../data/ingredients';
import BurgerCard from './BurgerCard';

interface MenuSectionProps {
  onAddToCart: (item: CartItem) => void;
  onCustomizeBurger: (burger: BurgerItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, onCustomizeBurger }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'popular'>('popular');

  // Filter and sort burgers - Higher Order Functions usage
  const filteredBurgers = useMemo(() => {
    let filtered = signatureBurgers.filter(burger => {
      const matchesSearch = burger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          burger.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || burger.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort burgers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.basePrice - b.basePrice;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (burger: BurgerItem) => {
    const totalPrice = burger.basePrice + burger.defaultIngredients.reduce((sum, ingredientId) => {
      const ingredient = ingredients.find(ing => ing.id === ingredientId);
      return sum + (ingredient?.price || 0);
    }, 0);

    const cartItem: CartItem = {
      id: burger.id,
      type: 'preset',
      burger,
      ingredients: burger.defaultIngredients,
      quantity: 1,
      totalPrice
    };

    onAddToCart(cartItem);
  };

  const categories = [
    { value: 'all', label: 'All Burgers' },
    { value: 'signature', label: 'Signature' },
    { value: 'classic', label: 'Classic' },
    { value: 'premium', label: 'Premium' }
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our signature collection of handcrafted burgers, each made with premium ingredients and expert craftsmanship.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-gray-50 rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search burgers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'rating' | 'popular')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBurgers.length} of {signatureBurgers.length} burgers
          </p>
        </div>

        {/* Burger Grid */}
        {filteredBurgers.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No burgers found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBurgers.map(burger => (
              <BurgerCard
                key={burger.id}
                burger={burger}
                onAddToCart={handleAddToCart}
                onCustomize={onCustomizeBurger}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;