import { AlertCircle, CreditCard } from 'lucide-react';

interface BankCardInfoProps {
  handleCardDetailsSubmit: (e: React.FormEvent) => void;
  handleCardDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cardData: any;
  cardErrors: any;
  cardType: string;
}

const BankCardForm: React.FC<BankCardInfoProps> = ({
  handleCardDetailsSubmit,
  handleCardDataChange,
  cardData,
  cardErrors,
  cardType,
}: BankCardInfoProps) => {
  const getCardIcon = (type: string) => {
    const iconClass = 'w-8 h-6 object-contain';
    switch (type) {
      case 'visa':
        return (
          <div
            className={`${iconClass} bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            VISA
          </div>
        );
      case 'mastercard':
        return (
          <div
            className={`${iconClass} bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            MC
          </div>
        );
      case 'amex':
        return (
          <div
            className={`${iconClass} bg-blue-500 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            AMEX
          </div>
        );
      case 'discover':
        return (
          <div
            className={`${iconClass} bg-orange-500 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            DISC
          </div>
        );
      case 'jcb':
        return (
          <div
            className={`${iconClass} bg-blue-700 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            JCB
          </div>
        );
      case 'diners':
        return (
          <div
            className={`${iconClass} bg-gray-600 text-white text-xs font-bold flex items-center justify-center rounded`}
          >
            DC
          </div>
        );
      default:
        return <CreditCard className="w-6 h-6 text-gray-400" />;
    }
  };
  return (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Payment Information
        </h3>
      </div>

      <form onSubmit={handleCardDetailsSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cardholder Name *
          </label>
          <input
            type="text"
            name="cardholderName"
            value={cardData.cardholderName}
            onChange={handleCardDataChange}
            placeholder="JOHN DOE"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
          {cardErrors.cardholderName && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {cardErrors.cardholderName}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Card Number *
          </label>
          <div className="relative">
            <input
              type="text"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleCardDataChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {getCardIcon(cardType)}
            </div>
          </div>
          {cardErrors.cardNumber && (
            <div className="flex items-center mt-1 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {cardErrors.cardNumber}
            </div>
          )}
          <div className="mt-1 text-xs text-gray-500">
            Accepted: Visa, Mastercard, American Express, Discover
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expiry Date *
            </label>
            <input
              type="text"
              name="expiryDate"
              value={cardData.expiryDate}
              onChange={handleCardDataChange}
              placeholder="MM/YY"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            {cardErrors.expiryDate && (
              <div className="flex items-center mt-1 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {cardErrors.expiryDate}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {cardType === 'amex' ? 'CID' : 'CVV'} *
            </label>
            <input
              type="text"
              name="cvv"
              value={cardData.cvv}
              onChange={handleCardDataChange}
              placeholder={cardType === 'amex' ? '1234' : '123'}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            {cardErrors.cvv && (
              <div className="flex items-center mt-1 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {cardErrors.cvv}
              </div>
            )}
            <div className="mt-1 text-xs text-gray-500">
              {cardType === 'amex' ? '4 digits on front' : '3 digits on back'}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={
            Object.values(cardErrors).some((error) => error !== '') ||
            !cardData.cardNumber ||
            !cardData.expiryDate ||
            !cardData.cvv ||
            !cardData.cardholderName
          }
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg mt-6"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BankCardForm;
