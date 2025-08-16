import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    rating: 5,
    comment:
      'Pokéboost Vault is my go-to for Pokémon cards. Every order arrives quickly and in pristine condition. Their selection is top-tier, and I\'ve never had a single issue. Highly recommended for serious collectors!.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    comment:
      "I had a question about a rare card, and their team responded within hours with helpful advice. It is rare to find a store that treats you like a valued customer, not just a transaction.",
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    rating: 5,
    comment:
      'I ordered a vintage card for my nephews birthday, and it came beautifully packaged with a bonus sleeve. He was thrilled! Pokéboost Vault made me look like a hero.',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
  },
  {
    id: 4,
    name: 'Emma Davis',
    rating: 5,
    comment:
      'I\'ve bought from several online card stores, but Pokéboost Vault stands out. Their listings are accurate, prices fair, and delivery is always reliable. I trust them with my collection.',
    avatar:
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
  },
  {
    id: 5,
    name: 'David Kim',
    rating: 5,
    comment:
      'Whether you\'re chasing rare holos or building a deck, Pokéboost Vault has it all. Their inventory is constantly updated, and I\'ve scored some amazing finds. It\'s like treasure hunting!',
    avatar: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(nextTestimonial, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-press-start text-pokemon-dark mb-4">
            What Trainers Say
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Pokéboost Vault for
            their collection.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-pokemon-blue to-pokemon-red p-1">
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-pokemon-yellow fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-pokemon-dark mb-6 font-inter leading-relaxed">
                  "{testimonials[currentIndex].comment}"
                </blockquote>

                <cite className="font-semibold text-pokemon-red">
                  - {testimonials[currentIndex].name}
                </cite>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-x-1/2 bg-white hover:bg-pokemon-gray text-pokemon-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-x-1/2 bg-white hover:bg-pokemon-gray text-pokemon-dark p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-pokemon-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 