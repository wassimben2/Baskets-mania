"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Français');
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email) {
      console.log('Email soumis:', email);
      setEmail('');
      // Logique d'abonnement ici
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <footer className="bg-gray-50 py-9 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section d'abonnement */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-gray-900 mb-8">
            Abonnez-vous à notre mail !
          </h2>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
              <button
                onClick={handleEmailSubmit}
                className="px-6 py-3 bg-gray-900 text-white rounded-r-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Section langue */}
        <div className="mb-12">
          <label htmlFor="language-select" className="block text-sm text-gray-600 mb-2">
            Langue
          </label>
          <div className="relative inline-block">
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent cursor-pointer"
            >
              <option value="Français">Français</option>
              <option value="English">English</option>
              <option value="Español">Español</option>
              <option value="Deutsch">Deutsch</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Section copyright et liens */}
        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2025, Baskets Mania Commerce électronique propulsé par</span>
            <a 
              href="#" 
              className="text-gray-900 hover:underline font-medium"
            >
              Shopify
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Politique de confidentialité
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Politique de remboursement
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Conditions d'utilisation
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Politique d'expédition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;