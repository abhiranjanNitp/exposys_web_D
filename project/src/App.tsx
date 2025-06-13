import React, { useState } from 'react';
import { BurgerItem, CartItem } from './types';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import BurgerBuilder from './components/BurgerBuilder';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerBuilderOpen, setIsBurgerBuilderOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingBurger, setCustomizingBurger] = useState<BurgerItem | null>(null);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount
  } = useCart();

  const handleOrderNow = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuildOwn = () => {
    setIsBurgerBuilderOpen(true);
  };

  const handleCustomizeBurger = (burger: BurgerItem) => {
    setCustomizingBurger(burger);
    setIsBurgerBuilderOpen(true);
  };

  const handleCloseBurgerBuilder = () => {
    setIsBurgerBuilderOpen(false);
    setCustomizingBurger(null);
  };

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here with payment processing!');
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />

      <Hero
        onOrderNow={handleOrderNow}
        onBuildOwn={handleBuildOwn}
      />

      <MenuSection
        onAddToCart={addToCart}
        onCustomizeBurger={handleCustomizeBurger}
      />

      <Footer />

      {/* Modals */}
      <BurgerBuilder
        isOpen={isBurgerBuilderOpen}
        onClose={handleCloseBurgerBuilder}
        onAddToCart={addToCart}
        initialIngredients={customizingBurger?.defaultIngredients || []}
        burgerName={customizingBurger ? `Custom ${customizingBurger.name}` : 'Custom Burger'}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        cartTotal={cartTotal}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;