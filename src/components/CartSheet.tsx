import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';
import { SpiceLevel } from '@/components/ui/spice-level';
import { OrderForm } from '@/components/OrderForm';
import { toast } from '@/hooks/use-toast';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { cartItems, updateQuantity, updateSpiceLevel, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add some items to cart before checkout",
        variant: "destructive",
      });
      return;
    }
    
    setShowOrderForm(true);
  };

  const handleOrderSuccess = () => {
    clearCart();
    setShowOrderForm(false);
    onClose();
  };

  const handleOrderCancel = () => {
    setShowOrderForm(false);
  };

  const handleSpiceLevelChange = (itemIndex: number, level: number) => {
    updateSpiceLevel(itemIndex, level);
  };

  const handleQuantityChange = (itemIndex: number, change: number) => {
    const newQuantity = cartItems[itemIndex].selectedQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(itemIndex, newQuantity);
    }
  };

  if (showOrderForm) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-3xl overflow-y-auto">
          <OrderForm
            cartItems={cartItems}
            totalPrice={getTotalPrice()}
            onOrderSuccess={handleOrderSuccess}
            onCancel={handleOrderCancel}
          />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart
            {cartItems.length > 0 && (
              <Badge variant="secondary">{cartItems.length}</Badge>
            )}
          </SheetTitle>
          <SheetDescription>
            Review your order and proceed to checkout
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto space-y-4 my-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">Add some delicious dishes to get started!</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.dish.id}-${item.selectedSpiceLevel}-${index}`} 
                   className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.dish.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.dish.quantity}</p>
                    <p className="text-sm font-medium">₹{item.dish.price} each</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(index)}
                    className="text-destructive hover:text-destructive/80 h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <SpiceLevel
                  level={item.selectedSpiceLevel}
                  onChange={(level) => handleSpiceLevelChange(index, level)}
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(index, -1)}
                      disabled={item.selectedQuantity <= 1}
                      className="h-8 w-8"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-medium w-12 text-center">
                      {item.selectedQuantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(index, 1)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold">₹{(item.dish.price * item.selectedQuantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>

            <Separator />

            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                className="w-full"
                size="lg"
              >
                Proceed to Checkout
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}