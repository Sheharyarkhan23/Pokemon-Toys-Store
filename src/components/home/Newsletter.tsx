import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      className="py-16 bg-gradient-to-r from-pokemon-red to-pokemon-blue newsletter1"
      id="newsletter1"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 text-pokemon-yellow mx-auto mb-4 animate-float" />
            <h2 className="text-3xl md:text-4xl font-press-start text-white mb-4">
              Get Exclusive Drops
            </h2>
            <p className="text-white/90 text-lg font-inter max-w-2xl mx-auto">
              Be the first to know about new releases, special discounts, and
              rare card drops. Join our community of serious collectors!
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-pokemon-yellow/50 outline-none text-pokemon-dark"
                  required
                />
                <button
                  type="submit"
                  className="bg-pokemon-yellow hover:bg-yellow-400 text-pokemon-dark font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4 font-inter">
                Join 50,000+ trainers who never miss a release. Unsubscribe
                anytime.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="w-12 h-12 text-pokemon-yellow mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">
                Welcome Aboard!
              </h3>
              <p className="text-white/90">
                You're now part of our exclusive community. Check your email for
                a welcome gift!
              </p>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-press-start text-pokemon-yellow text-sm mb-3">
                Early Access
              </h4>
              <p className="font-inter text-sm opacity-90">
                Get 24-hour early access to new releases and limited editions.
              </p>
            </div>
            <div>
              <h4 className="font-press-start text-pokemon-yellow text-sm mb-3">
                Exclusive Deals
              </h4>
              <p className="font-inter text-sm opacity-90">
                Subscriber-only discounts up to 20% off retail prices.
              </p>
            </div>
            <div>
              <h4 className="font-press-start text-pokemon-yellow text-sm mb-3">
                Rare Alerts
              </h4>
              <p className="font-inter text-sm opacity-90">
                Instant notifications when rare cards come back in stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 