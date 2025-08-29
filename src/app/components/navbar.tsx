'use client';
import { FaSearch, FaShoppingBasket, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // 👈 permet de savoir sur quelle page on est
  const [currentLang, setCurrentLang] = useState('fr');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { key: "home", path: "/" },
    { key: "sneakers", path: "/sneakerss" }, // 👈 sneakers → basket
    { key: "kids", path: "/enfants" },
    { key: "promo", path: "/promo" },
    { key: "accessories", path: "/accesoires" },
    { key: "contact", path: "/contact" },
    { key: "info", path: "/informations" },
  ];

  const translations: Record<string, Record<string, string>> = {
    fr: {
      home: "Accueil",
      sneakers: "Sneakers",
      kids: "Enfants",
      promo: "Promo",
      accessories: "Accesoires",
      contact: "Contact",
      info: "Informations",
    },
    en: {
      home: "Home",
      sneakers: "Sneakers",
      kids: "Kids",
      promo: "Sale",
      accessories: "Accessories",
      contact: "Contact",
      info: "Information",
    },
    ar: {
      home: "الصفحة الرئيسية",
      sneakers: "أحذية رياضية",
      kids: "أطفال",
      promo: "تخفيضات",
      accessories: "إكسسوارات",
      contact: "اتصال",
      info: "معلومات",
    },
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
  ];

  return (
    <nav className="w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <Image src="/5.png" alt="Logo" width={60} height={20} />
          </div>

          {/* Menu de navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-6 list-none m-0 p-0">
              {navItems.map(({ key, path }) => {
                const isActive = pathname === path; // 👈 active selon la page
                return (
                  <li key={key}>
                    <Link
                      href={path}
                      className={`
                        relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-250 
                        ${isActive
                          ? 'text-black bg-gray-50'
                          : 'text-gray-700 hover:text-black hover:bg-gray-50'}
                        rounded-lg hover:transform hover:scale-[1.02]
                      `}
                    >
                      {translations[currentLang][key]}
                      {isActive && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-black rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Actions (langue, recherche, panier) */}
          <div className="flex items-center gap-6">
            
            {/* Sélecteur de langue */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 px-3 py-2 pr-8 text-gray-700 text-sm font-medium focus:outline-none focus:border-gray-600 transition-all duration-250 cursor-pointer rounded-lg hover:shadow-sm"
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <FaGlobe className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none" />
            </div>

            {/* Barre de recherche */}
            <div className="relative">
              <div className={`
                absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out
                ${isSearchOpen ? 'opacity-100 w-64 translate-x-0' : 'opacity-0 w-0 translate-x-4 pointer-events-none'}
              `}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher des sneakers..."
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm focus:outline-none focus:border-gray-600 transition-colors rounded-lg shadow-sm"
                  autoFocus={isSearchOpen}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Searching for:', searchQuery);
                    }
                  }}
                />
              </div>

              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (isSearchOpen) setSearchQuery('');
                }}
                className={`
                  p-2.5 transition-all duration-250 relative z-10 rounded-lg hover:bg-gray-100
                  ${isSearchOpen
                    ? 'text-black bg-gray-100'
                    : 'text-gray-600 hover:text-black'}
                `}
              >
                <FaSearch className="text-lg" />
              </button>
            </div>

            {/* Panier */}
            <button className="relative p-2.5 text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-250 rounded-lg">
              <FaShoppingBasket className="text-lg" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs flex items-center justify-center font-semibold rounded-full">
                3
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
