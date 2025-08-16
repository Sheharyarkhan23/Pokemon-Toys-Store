export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Pokémon Collector',
    content: 'The quality of these cards is incredible! I\'ve been collecting for years and this is by far the best source for authentic sealed products.',
    rating: 5,
    avatar: '/images/avatars/sarah.jpg',
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Trading Card Enthusiast',
    content: 'Fast shipping and excellent customer service. The booster boxes arrived in perfect condition and the prices are unbeatable.',
    rating: 5,
    avatar: '/images/avatars/mike.jpg',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Gift Buyer',
    content: 'Bought these for my nephew\'s birthday and he absolutely loved them! The packaging was beautiful and everything was as described.',
    rating: 5,
    avatar: '/images/avatars/emily.jpg',
  },
]; 