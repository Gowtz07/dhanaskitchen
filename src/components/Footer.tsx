import { Phone, MapPin, Clock, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-warm shadow-warm flex items-center justify-center">
                <UtensilsCrossed className="h-5 w-5 text-white" aria-label="Kitchen utensils logo" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dhana's Home Food</h3>
                <p className="text-sm text-gray-300">Authentic South Indian Cuisine</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the authentic taste of traditional South Indian home cooking, 
              made with love and the finest ingredients. Every dish tells a story of 
              heritage and flavor.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-saffron" />
                <a href="tel:9789921302" className="hover:text-saffron transition-smooth">
                  9789921302
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-fresh-green" />
                <span>Serving Avadi Area</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-saffron" />
                <span>Take-away Service</span>
              </div>
            </div>

            <Button
              variant="fresh"
              size="sm"
              className="mt-4"
              asChild
            >
              <a 
                href="https://wa.me/919789921302" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">What we serve</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Traditional Rice Varieties</span>
                <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Authentic Gravies & Curries</span>
                <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Fresh Vegetable Preparations</span>
                <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">South Indian Breakfast</span>
                <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Complete Traditional Meals</span>
              </div>
              <div className="pt-2">
                <h5 className="font-semibold text-sm mb-2">Why choose us</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Home-style authentic cooking</span>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Customizable spice levels</span>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Fresh ingredients daily</span>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Flexible quantities</span>
                  <span className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">Easy WhatsApp ordering</span>
                </div>
              </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 Dhana's Home Food — Home-style South Indian take-away in Avadi.
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-300">
              <span className="px-2 py-1 rounded-full bg-white/10">🌿 Fresh & Natural</span>
              <span className="px-2 py-1 rounded-full bg-white/10">🔥 Custom Spice</span>
              <span className="px-2 py-1 rounded-full bg-white/10">📱 WhatsApp Ordering</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};