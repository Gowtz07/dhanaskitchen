import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, ShoppingCart, Clock, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-warm shadow-warm flex items-center justify-center">
              <UtensilsCrossed className="h-5 w-5 text-white" aria-label="Kitchen utensils logo" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dhana's Home Food</h1>
              <p className="text-sm text-muted-foreground">Authentic South Indian Cuisine</p>
            </div>
          </div>

          {/* Service Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-fresh-green" />
              <span className="text-muted-foreground">Serving Avadi</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-saffron" />
              <span className="text-muted-foreground">Take-away Only</span>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-fresh-green" />
              <a 
                href="tel:9789921302" 
                className="text-fresh-green font-medium hover:underline"
              >
                9789921302
              </a>
            </div>
          </div>

          {/* Cart Button */}
          <Button
            variant="cart"
            onClick={onCartClick}
            className="relative"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-saffron text-white min-w-[20px] h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Mobile Info */}
        <div className="md:hidden flex items-center justify-center space-x-4 mt-2 pt-2 border-t border-border/50">
          <div className="flex items-center space-x-1 text-xs">
            <MapPin className="h-3 w-3 text-fresh-green" />
            <span className="text-muted-foreground">Avadi</span>
          </div>
          
          <div className="flex items-center space-x-1 text-xs">
            <Clock className="h-3 w-3 text-saffron" />
            <span className="text-muted-foreground">Take-away</span>
          </div>

          <div className="flex items-center space-x-1 text-xs">
            <Phone className="h-3 w-3 text-fresh-green" />
            <a 
              href="tel:9789921302" 
              className="text-fresh-green font-medium"
            >
              9789921302
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};