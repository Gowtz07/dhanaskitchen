import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

interface HeroSectionProps {
  onOrderNow: () => void;
}

export const HeroSection = ({ onOrderNow }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional South Indian food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Authentic{' '}
            <span className="bg-gradient-unique bg-clip-text text-transparent animate-pulse">
              South Indian
            </span>{' '}
            Flavors
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Experience traditional home-cooked meals with the perfect blend of spices and love, 
            delivered fresh from Dhana's kitchen to your table.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-saffron" />
              <span>20+ Traditional Dishes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-fresh-green" />
              <span>Fresh & Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-saffron" />
              <span>Serving Avadi</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={onOrderNow}
              variant="saffron"
              size="lg"
              className="text-lg px-8 py-6 min-w-[200px] bg-gradient-accent hover:scale-105 transform transition-smooth shadow-warm"
            >
              Order Now
              <ArrowDown className="h-5 w-5 ml-2 animate-bounce" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 min-w-[200px] border-white text-white hover:bg-white hover:text-foreground"
              asChild
            >
              <a href="tel:9789921302">
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="pt-8 text-sm text-gray-300">
            <p>🌿 Fresh ingredients • 🔥 Customizable spice levels • 📞 WhatsApp ordering</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};