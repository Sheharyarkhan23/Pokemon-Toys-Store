import React from 'react';
import { Package, Star, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const iconMap = {
  Package,
  Star,
  Globe,
  Clock,
};

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-press-start text-pokemon-dark mb-4">
            Featured Categories
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Explore our carefully curated collection of premium Pokémon trading
            cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Link key={category.id} to="/products" onClick={() => window.scrollTo(0, 0)}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                      <IconComponent className="w-12 h-12 mb-4 animate-float" />
                      <h3 className="font-press-start text-sm mb-2 text-center leading-relaxed">
                        {category.name}
                      </h3>
                      <p className="font-inter text-center text-sm opacity-90">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-16" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 