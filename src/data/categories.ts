export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'booster-box',
    name: 'Booster Box',
    description:
      'Factory-sealed box containing multiple booster packs (usually 36 in English sets).',
    icon: 'Package',
    image:
      'https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg',
    color: 'from-pokemon-red to-red-600',
  },
  {
    id: 'elite-trainer',
    name: 'Elite Trainer Boxes',
    description:
      'Premium box with booster packs plus accessories for gameplay.',
    icon: 'Star',
    image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg',
    color: 'from-pokemon-yellow to-yellow-500',
  },
  {
    id: 'japanese-sets',
    name: 'Collection Box / Premium Collection',
    description: 'High-end set with exclusive promos and merchandise.',
    icon: 'Globe',
    image: 'https://images.pexels.com/photos/1367225/pexels-photo-1367225.jpeg',
    color: 'from-pokemon-blue to-blue-600',
  },
  {
    id: 'single-packs',
    name: 'Build & Battle Box',
    description: 'Pre-release kit used for tournaments before a set\'s release.',
    icon: 'Clock',
    image:
      'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    color: 'from-purple-500 to-purple-700',
  },
]; 