import { useState, useCallback, useEffect } from 'react';
import { CartItem, Dish } from '@/types/menu';
import { toast } from '@/hooks/use-toast';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dhana_cart_v1');
      return saved ? (JSON.parse(saved) as CartItem[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dhana_cart_v1', JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);
  const addToCart = useCallback((dish: Dish, quantity: number, spiceLevel: number) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.dish.id === dish.id && item.selectedSpiceLevel === spiceLevel
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].selectedQuantity += quantity;
        toast({
          title: "Updated cart",
          description: `${dish.name} quantity updated`,
          duration: 2000,
        });
        return newItems;
      } else {
        toast({
          title: "Added to cart",
          description: `${dish.name} added successfully`,
          duration: 2000,
        });
        return [...prev, { dish, selectedQuantity: quantity, selectedSpiceLevel: spiceLevel }];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemIndex: number) => {
    setCartItems(prev => {
      const item = prev[itemIndex];
      toast({
        title: "Removed from cart",
        description: `${item.dish.name} removed`,
        duration: 2000,
      });
      return prev.filter((_, index) => index !== itemIndex);
    });
  }, []);

  const updateQuantity = useCallback((itemIndex: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemIndex);
      return;
    }

    setCartItems(prev => {
      const newItems = [...prev];
      newItems[itemIndex].selectedQuantity = newQuantity;
      return newItems;
    });
  }, [removeFromCart]);

  const updateSpiceLevel = useCallback((itemIndex: number, newSpiceLevel: number) => {
    setCartItems(prev => {
      const newItems = [...prev];
      newItems[itemIndex].selectedSpiceLevel = newSpiceLevel;
      return newItems;
    });
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items removed from cart",
      duration: 2000,
    });
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.dish.price * item.selectedQuantity), 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.selectedQuantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    updateSpiceLevel,
    clearCart,
    getTotalPrice,
    getTotalItems,
  };
};