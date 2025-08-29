import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
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
            <h4 className="text-lg font-semibold">Our Specialties</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-300">🍛 Traditional Rice Varieties</div>
              <div className="text-gray-300">🍲 Authentic Gravies & Curries</div>
              <div className="text-gray-300">🥘 Fresh Vegetable Preparations</div>
              <div className="text-gray-300">🥞 South Indian Breakfast Items</div>
              <div className="text-gray-300">🍽️ Complete Traditional Meals</div>
            </div>
            
            <div className="pt-4">
              <h5 className="font-semibold text-sm mb-2">Why Choose Us?</h5>
              <div className="space-y-1 text-xs text-gray-300">
                <div>✅ Home-style authentic cooking</div>
                <div>✅ Customizable spice levels</div>
                <div>✅ Fresh ingredients daily</div>
                <div>✅ Flexible quantity options</div>
                <div>✅ WhatsApp ordering convenience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 Dhana's Home Food. Made with ❤️ for authentic food lovers.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-300">
              <span>🌿 Fresh & Natural</span>
              <span>•</span>
              <span>🔥 Customizable Spice</span>
              <span>•</span>
              <span>📱 Easy Ordering</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};