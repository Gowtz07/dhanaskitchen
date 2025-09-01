import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, ShoppingCart, Clock, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 glass-morphism border-b border-border/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-luxury shadow-luxury flex items-center justify-center border border-gold/20">
              <UtensilsCrossed className="h-6 w-6 text-charcoal" aria-label="Kitchen utensils logo" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-playfair">Dhana's Home Food</h1>
              <p className="text-sm text-muted-foreground font-inter">Authentic South Indian Cuisine</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm glass-morphism px-3 py-1.5 rounded-full">
              <MapPin className="h-4 w-4 text-emerald" />
              <span className="text-foreground font-medium">Serving Avadi</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm glass-morphism px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4 text-gold" />
              <span className="text-foreground font-medium">Take-away Only</span>
            </div>

            <div className="flex items-center space-x-2 text-sm glass-morphism px-3 py-1.5 rounded-full">
              <Phone className="h-4 w-4 text-emerald" />
              <a 
                href="tel:9789921302" 
                className="text-emerald font-semibold hover:text-gold transition-luxury"
              >
                9789921302
              </a>
            </div>
          </div>

          {/* Cart Button */}
          <Button
            onClick={onCartClick}
            className="relative glass-morphism border border-gold/30 hover:border-gold/50 hover:scale-105 transform transition-luxury shadow-luxury bg-gradient-accent text-charcoal font-semibold"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-ruby text-pearl min-w-[20px] h-5 flex items-center justify-center text-xs font-bold">
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