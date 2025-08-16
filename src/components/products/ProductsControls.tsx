import React from 'react';
import { Grid, List } from 'lucide-react';

interface ProductsControlsProps {
  sortBy: string;
  viewMode: 'grid' | 'list';
  onSortChange: (value: string) => void;
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const sortOptions = [
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
  { value: 'price-asc', label: 'Price Low to High' },
  { value: 'price-desc', label: 'Price High to Low' },
  { value: 'newest', label: 'Newest First' },
];

const ProductsControls: React.FC<ProductsControlsProps> = ({
  sortBy,
  viewMode,
  onSortChange,
  onViewModeChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {/* View Mode Toggle */}
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 ${
                viewMode === 'grid'
                  ? 'bg-pokemon-yellow'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 ${
                viewMode === 'list'
                  ? 'bg-pokemon-yellow'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsControls; 