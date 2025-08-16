import React from 'react';
import { Shield, Truck, RefreshCw } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="flex jsutify-between gap-4 mb-8 p-4 bg-pokemon-gray rounded-lg">
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-green-500" />
        <span className="text-sm font-medium">
          Authentic Guaranteed
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <Truck className="w-5 h-5 text-blue-500" />
        <span className="text-sm font-medium">
          Free Shipping $99+
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <RefreshCw className="w-5 h-5 text-purple-500" />
        <span className="text-sm font-medium">Easy Returns</span>
      </div>
    </div>
  );
};

export default TrustBadges; 