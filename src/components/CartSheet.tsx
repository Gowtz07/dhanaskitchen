import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { SpiceLevel } from '@/components/ui/spice-level';
import { CartItem } from '@/types/menu';
import { Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (index: number, quantity: number) => void;
  onUpdateSpiceLevel: (index: number, spiceLevel: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartSheet = ({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  onUpdateQuantity,
  onUpdateSpiceLevel,
  onRemoveItem,
  onClearCart,
}: CartSheetProps) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const generateWhatsAppMessage = () => {
    let message = `🍽️ *Order from Dhana's Home Food*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n\n`;
    
    message += `📋 *Order Items:*\n`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.dish.name}*\n`;
      message += `   Quantity: ${item.selectedQuantity}\n`;
      message += `   Spice Level: ${item.selectedSpiceLevel}/5\n`;
      message += `   Price: ₹${item.dish.price} x ${item.selectedQuantity} = ₹${item.dish.price * item.selectedQuantity}\n\n`;
    });

    message += `💰 *Total Amount: ₹${totalPrice}*\n\n`;
    
    if (specialInstructions.trim()) {
      message += `📝 *Special Instructions:*\n${specialInstructions}\n\n`;
    }
    
    message += `📍 *Delivery Type:* Take-away\n`;
    message += `📍 *Service Area:* Avadi\n\n`;
    message += `Thank you for choosing Dhana's Home Food! 🙏`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Please fill in your name and phone number');
      return;
    }

    if (cartItems.length === 0) {
      alert('Your cart is empty');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919789921302?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            🛒 Your Cart
            {cartItems.length > 0 && (
              <span className="text-sm bg-saffron text-white px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            )}
          </SheetTitle>
          <SheetDescription>
            Review your order and place it via WhatsApp
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground">Add some delicious dishes to get started!</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.dish.id}-${item.selectedSpiceLevel}-${index}`} 
                     className="border border-border/50 rounded-lg p-4 space-y-3">
                  {/* Item Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.dish.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.dish.quantity}</p>
                      <p className="text-sm font-medium text-saffron">₹{item.dish.price} each</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveItem(index)}
                      className="text-destructive hover:text-destructive/80 h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Spice Level */}
                  <SpiceLevel
                    level={item.selectedSpiceLevel}
                    onChange={(level) => onUpdateSpiceLevel(index, level)}
                  />

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(index, item.selectedQuantity - 1)}
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
                        onClick={() => onUpdateQuantity(index, item.selectedQuantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold">₹{item.dish.price * item.selectedQuantity}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-border/50 pt-4 space-y-4">
              {/* Total */}
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-saffron">₹{totalPrice}</span>
              </div>

              <Separator />

              {/* Customer Details */}
              <div className="space-y-3">
                <h4 className="font-semibold">Customer Details</h4>
                <div className="space-y-2">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Your phone number"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instructions">Special Instructions</Label>
                    <Textarea
                      id="instructions"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="Any special requests or dietary requirements..."
                      className="mt-1"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <Button
                  onClick={handleWhatsAppOrder}
                  className={cn(
                    "w-full bg-green-600 hover:bg-green-700 text-white",
                    "flex items-center justify-center gap-2 font-semibold py-6"
                  )}
                  disabled={!customerName.trim() || !customerPhone.trim()}
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
                
                <Button
                  variant="outline"
                  onClick={onClearCart}
                  className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Clear Cart
                </Button>
              </div>

              <div className="text-xs text-muted-foreground text-center">
                🌟 Take-away only • Serving Avadi area
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};