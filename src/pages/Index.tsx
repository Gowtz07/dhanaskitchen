import { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MenuSection } from '@/components/MenuSection';
import { CartSheet } from '@/components/CartSheet';
import { DishDetailsModal } from '@/components/DishDetailsModal';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useCart } from '@/hooks/useCart';
import { Dish } from '@/types/menu';

const Index = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateSpiceLevel,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const menuRef = useRef<HTMLElement>(null);

  const handleOrderNow = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDetails = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCloseDetails = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Header */}
      <Header 
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection onOrderNow={handleOrderNow} />

      {/* Menu Section */}
      <MenuSection
        ref={menuRef}
        onAddToCart={addToCart}
        onViewDetails={handleViewDetails}
      />

      {/* Footer */}
      <Footer />

      {/* Cart Sheet */}
      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        totalPrice={getTotalPrice()}
        onUpdateQuantity={updateQuantity}
        onUpdateSpiceLevel={updateSpiceLevel}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />

      {/* Dish Details Modal */}
      <DishDetailsModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={handleCloseDetails}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Index;
