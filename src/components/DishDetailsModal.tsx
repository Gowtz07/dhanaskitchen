import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SpiceLevel } from '@/components/ui/spice-level';
import { Plus, Minus } from 'lucide-react';
import { Dish } from '@/types/menu';
import { cn } from '@/lib/utils';

interface DishDetailsModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (dish: Dish, quantity: number, spiceLevel: number) => void;
}

export const DishDetailsModal = ({ 
  dish, 
  isOpen, 
  onClose, 
  onAddToCart 
}: DishDetailsModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState(dish?.spiceLevel || 3);

  if (!dish) return null;

  const handleAddToCart = () => {
    onAddToCart(dish, quantity, selectedSpiceLevel);
    onClose();
    setQuantity(1);
    setSelectedSpiceLevel(dish.spiceLevel);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl text-left">{dish.name}</DialogTitle>
              <DialogDescription className="text-left mt-1">
                {dish.description || "Traditional South Indian dish prepared with authentic spices"}
              </DialogDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-saffron">₹{dish.price}</div>
              <Badge variant="secondary" className="mt-1">
                {dish.quantity}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Category Badge */}
          <div>
            <Badge 
              variant="outline" 
              className={cn(
                "text-sm",
                dish.category === 'Rice Varieties' && "border-saffron/30 text-saffron",
                dish.category === 'Gravies' && "border-fresh-green/30 text-fresh-green",
                dish.category === 'Side Dishes' && "border-accent/50 text-accent-foreground",
                dish.category === 'Breakfast' && "border-primary/30 text-primary",
                dish.category === 'Complete Meals' && "border-destructive/30 text-destructive"
              )}
            >
              {dish.category}
            </Badge>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="font-semibold mb-2">Ingredients</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {dish.ingredients}
            </p>
          </div>

          {/* Max Quantity Info */}
          {dish.maxQuantity && (
            <div className="bg-cream/50 border border-border/50 rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-1">Quantity Information</h4>
              <p className="text-xs text-muted-foreground">
                Maximum available: {dish.maxQuantity}
              </p>
            </div>
          )}

          {/* Spice Level */}
          <div>
            <h4 className="font-semibold mb-3">Customize Spice Level</h4>
            <SpiceLevel
              level={selectedSpiceLevel}
              onChange={setSelectedSpiceLevel}
            />
            <p className="text-xs text-muted-foreground mt-2">
              Default spice level: {dish.spiceLevel}/5
            </p>
          </div>

          {/* Quantity Selection */}
          <div>
            <h4 className="font-semibold mb-3">Select Quantity</h4>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                <span className="text-sm text-muted-foreground">
                  × ₹{dish.price} = ₹{dish.price * quantity}
                </span>
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="pt-4 border-t border-border/50">
            <Button
              onClick={handleAddToCart}
              variant="order"
              className="w-full text-lg py-6"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add to Cart - ₹{dish.price * quantity}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>🌿 Made with fresh ingredients</p>
            <p>🔥 Spice level can be customized</p>
            <p>📞 Contact us for bulk orders</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};