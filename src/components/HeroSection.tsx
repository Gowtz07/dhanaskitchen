import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Clock, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-food.jpg';

interface HeroSectionProps {
  onOrderNow: () => void;
}

export const HeroSection = ({ onOrderNow }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional South Indian food spread"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block text-pearl">Authentic</span>{' '}
            <span className="block bg-gradient-luxury bg-clip-text text-transparent premium-glow">
              South Indian
            </span>{' '}
            <span className="block text-pearl">Flavors</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-pearl/90 max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Experience traditional home-cooked meals with the perfect blend of spices and love, 
            delivered fresh from Dhana's kitchen to your table.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base">
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-gold" />
              <span className="text-pearl font-medium">25+ Traditional Dishes</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-emerald" />
              <span className="text-pearl font-medium">Fresh & Fast</span>
            </div>
            <div className="flex items-center space-x-2 glass-morphism px-4 py-2 rounded-full">
              <MapPin className="h-5 w-5 text-gold" />
              <span className="text-pearl font-medium">Serving Avadi</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={onOrderNow}
              size="lg"
              className="text-lg px-10 py-6 min-w-[220px] bg-gradient-luxury text-charcoal font-semibold hover:scale-105 transform transition-luxury shadow-luxury hover:shadow-glow border-2 border-gold/20"
            >
              Order Now
              <ArrowDown className="h-5 w-5 ml-2 animate-bounce" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 min-w-[220px] glass-morphism border-2 border-pearl/30 text-pearl hover:bg-pearl/10 hover:scale-105 transform transition-luxury font-medium"
              asChild
            >
              <a href="tel:9789921302">
                Call Now
              </a>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="pt-8 text-sm text-pearl/80 font-inter">
            <p>🌿 Fresh ingredients • 🔥 Customizable spice levels • 📞 WhatsApp ordering</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-pearl/70" />
      </div>
    </section>
  );
};