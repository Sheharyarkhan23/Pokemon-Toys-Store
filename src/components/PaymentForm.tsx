import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';

interface PaymentFormProps {
  selectedBank: string;
  banks: Array<{ name: string; logo: string; label: string; additionalLogo: string }>;
  handleBankSelect: (bankName: string) => void;
  handleProceedToBankAuth: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  selectedBank,
  banks,
  handleBankSelect,
  handleProceedToBankAuth,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-pokemon-dark mb-6">
        Step 2: Payment
      </h2>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-pokemon-dark mb-4">
          Bank Selector
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto">
          {banks.map((bank) => (
            <button
              key={bank.name}
              type="button"
              onClick={() => handleBankSelect(bank.name)}
              className={`p-4 shadow-lg my-2 mx-2 border rounded-lg text-left hover:bg-pokemon-gray transition-colors ${
                selectedBank === bank.name
                  ? 'border-pokemon-red bg-pokemon-red/10 ring-2 ring-pokemon-red'
                  : 'border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-pokemon-dark">
                  {bank.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedBank && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">
              Selected: {selectedBank}
            </span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleProceedToBankAuth}
        disabled={!selectedBank}
        className="w-full bg-pokemon-blue hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <Lock className="w-5 h-5" />
        <span>Proceed to Bank Login</span>
      </button>
    </div>
  );
};

export default PaymentForm; 