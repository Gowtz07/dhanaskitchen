import { useState, useMemo, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MenuCard } from '@/components/MenuCard';
import { Search, Filter } from 'lucide-react';
import { Dish } from '@/types/menu';
import { menuData, categories } from '@/data/menu';
import { cn } from '@/lib/utils';

interface MenuSectionProps {
  onAddToCart: (dish: Dish, quantity: number, spiceLevel: number) => void;
  onViewDetails: (dish: Dish) => void;
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(({ onAddToCart, onViewDetails }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = useMemo(() => {
    let dishes = menuData;

    // Filter by category
    if (selectedCategory !== 'All') {
      dishes = dishes.filter(dish => dish.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      dishes = dishes.filter(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.ingredients.toLowerCase().includes(query) ||
        dish.description?.toLowerCase().includes(query)
      );
    }

    return dishes;
  }, [selectedCategory, searchQuery]);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background via-background/95 to-card/30" id="menu">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white py-3 px-6 rounded-lg mb-8 animate-pulse shadow-2xl">
            <p className="font-bold text-lg">🔥 LIMITED TIME: Special Combo Offers Available! 🔥</p>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            Our <span className="bg-gradient-luxury bg-clip-text text-transparent">Traditional</span> Menu
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
            ⭐ <strong>1000+ Happy Customers Daily!</strong> Discover authentic South Indian flavors, crafted with love and traditional recipes 
            passed down through generations. Each dish tells a story of heritage and taste.
          </p>
          
          {/* Trust Badges */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Badge className="bg-green-500 text-white">✅ Fresh Daily</Badge>
            <Badge className="bg-purple-500 text-white">⚡ Quick Takeaway</Badge>
            <Badge className="bg-orange-500 text-white">💯 100% Authentic</Badge>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search dishes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-border/50 focus:border-saffron"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "saffron" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-smooth",
                  selectedCategory === category 
                    ? "shadow-warm" 
                    : "hover:border-saffron/50 hover:text-saffron"
                )}
              >
                <Filter className="h-3 w-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish, index) => (
            <MenuCard
              key={dish.id}
              dish={dish}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              className="hover:scale-[1.02] transition-smooth animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No dishes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Category Counts */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredDishes.length} of {menuData.length} dishes
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
      </div>
    </section>
  );
});

MenuSection.displayName = 'MenuSection';