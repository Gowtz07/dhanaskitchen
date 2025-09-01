import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SpiceLevel } from '@/components/ui/spice-level';
import { Plus, Info } from 'lucide-react';
import { Dish } from '@/types/menu';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  dish: Dish;
  onAddToCart: (dish: Dish, quantity: number, spiceLevel: number) => void;
  onViewDetails: (dish: Dish) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const MenuCard = ({ dish, onAddToCart, onViewDetails, className, style }: MenuCardProps) => {
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState(dish.spiceLevel);

  const handleAddToCart = () => {
    onAddToCart(dish, 1, selectedSpiceLevel);
  };

  const defaultQuantity = dish.quantity.includes('ML') 
    ? parseInt(dish.quantity) 
    : parseInt(dish.quantity.split(' ')[0]);

  return (
    <Card 
      className={cn(
        "group overflow-hidden hover:shadow-card transition-smooth cursor-pointer",
        "border-border/50 hover:border-saffron/30 bg-gradient-card",
        "hover:scale-[1.02] transform-gpu",
        className
      )}
      style={style}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight group-hover:text-saffron transition-smooth">
            {dish.name}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(dish);
            }}
            className="opacity-0 group-hover:opacity-100 transition-smooth h-8 w-8"
          >
            <Info className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {dish.quantity}
          </Badge>
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs",
              dish.category === 'Rice Varieties' && "border-saffron/30 text-saffron",
              dish.category === 'Gravies' && "border-fresh-green/30 text-fresh-green",
              dish.category === 'Side Dishes' && "border-accent/50 text-accent-foreground",
              dish.category === 'Breakfast' && "border-primary/30 text-primary",
              dish.category === 'Complete Meals' && "border-destructive/30 text-destructive",
              dish.category === 'Others' && "border-accent-purple/40 text-accent-purple"
            )}
          >
            {dish.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {dish.description || dish.ingredients}
          </p>

          <SpiceLevel
            level={selectedSpiceLevel}
            onChange={setSelectedSpiceLevel}
            className="justify-start"
          />
        </div>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <div className="text-xl font-bold text-saffron">
            ₹{dish.price}
          </div>
          
          <Button
            onClick={handleAddToCart}
            variant="order"
            size="sm"
            className="min-w-[100px]"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};