import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'Catch Every Card — From Booster Packs to Ultra Premiums',
    subtitle:
      '$20 off all products for limited time! Free shipping on all orders over $99!',
    description: 'Shop the latest releases and rare finds, all in one place.',
    image:
      'https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg',
    cta: 'Shop Now',
  },
  {
    title: 'Build Your Collection, Power Up Your Game',
    subtitle:
      '$20 off all products for limited time! Free shipping on all orders over $99!',
    description:
      'Elite Trainer Boxes, Booster Boxes, and more — shipped fast, packed with care.',
    image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
    cta: 'Shop Now',
  },
  {
    title: 'Your Trusted Pokémon TCG Destination',
    subtitle:
      '$20 off all products for limited time! Free shipping on all orders over $99!',
    description:
      'Authentic cards, competitive prices, and an ever-growing selection.',
    image: 'https://images.pexels.com/photos/1367225/pexels-photo-1367225.jpeg',
    cta: 'Shop Now',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-r from-pokemon-blue to-pokemon-red">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 76, 202, 0.8), rgba(255, 28, 28, 0.8))`,
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-pokemon-yellow text-xs md:text-base font-press-start mb-2 text-center">
                  {slide.subtitle}
                </h2>
                <h1 className="text-white text-center text-xl md:text-3xl lg:text-4xl font-press-start mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-white/90 text-center text-sm md:text-xl mb-8 font-inter">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={handleShopNowClick}
                    className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-2 md:py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 animate-glow"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-2 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-pokemon-yellow' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
