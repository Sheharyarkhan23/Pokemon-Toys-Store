import { useState, useMemo } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  set: string;
  category: string;
  isHot?: boolean;
  isNew?: boolean;
}

export type ViewMode = 'grid' | 'list';

export const useProducts = (products: Product[]) => {
  const [sortBy, setSortBy] = useState('name-asc');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return {
    sortBy,
    viewMode,
    sortedProducts,
    handleSortChange,
    handleViewModeChange,
  };
}; 