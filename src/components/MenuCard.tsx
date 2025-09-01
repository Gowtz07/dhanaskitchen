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
        "group overflow-hidden hover:shadow-luxury transition-luxury cursor-pointer",
        "border border-border/30 hover:border-gold/40 glass-morphism",
        "hover:scale-[1.03] transform-gpu hover:-translate-y-1",
        "backdrop-blur-sm bg-card/50",
        className
      )}
      style={style}
    >
      <CardHeader className="pb-3 relative">
        <div className="absolute inset-0 bg-gradient-luxury opacity-5 rounded-t-lg"></div>
        <div className="flex items-start justify-between relative z-10">
          <CardTitle className="text-lg leading-tight group-hover:text-gold transition-luxury font-playfair">
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
              "text-xs font-medium",
              dish.category === 'Rice Varieties' && "border-gold/40 text-gold bg-gold/10",
              dish.category === 'Gravies' && "border-emerald/40 text-emerald bg-emerald/10",
              dish.category === 'Side Dishes' && "border-copper/40 text-copper bg-copper/10",
              dish.category === 'Breakfast' && "border-ruby/40 text-ruby bg-ruby/10",
              dish.category === 'Complete Meals' && "border-saffron/40 text-saffron bg-saffron/10",
              dish.category === 'Others' && "border-pearl/40 text-pearl bg-pearl/10"
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
          <div className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
            ₹{dish.price}
          </div>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="min-w-[100px] bg-gradient-accent hover:bg-gradient-luxury text-charcoal font-semibold hover:scale-105 transform transition-luxury shadow-warm"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};