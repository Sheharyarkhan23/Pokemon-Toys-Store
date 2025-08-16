import React from 'react';

interface NoResultsProps {
  onShowAll?: () => void;
}

const NoResults: React.FC<NoResultsProps> = ({ onShowAll }) => {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold text-pokemon-dark mb-2">
        No products found
      </h3>
      <p className="text-gray-600 mb-6">
        Try adjusting your filters or search for something else.
      </p>
      {onShowAll && (
        <button
          onClick={onShowAll}
          className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-3 px-6 rounded-lg transition-all duration-300"
        >
          Show All Products
        </button>
      )}
    </div>
  );
};

export default NoResults; 