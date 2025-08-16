import React from 'react';
import { CartItem } from '../App';
import {
  Hero,
  FeaturedCategories,
  TopPicks,
  Testimonials,
  Newsletter,
} from '../components/home';

interface HomeProps {
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <TopPicks addToCart={addToCart} />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
