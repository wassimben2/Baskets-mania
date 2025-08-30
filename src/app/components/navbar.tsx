'use client';
import { FaSearch, FaGlobe, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState('fr');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: "home", path: "/" },
    { key: "sneakers", path: "/sneakerss" },
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
      accessories: "Accessoires",
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
    <>
      <nav 
        className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isHovered 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo à gauche - TOUJOURS VISIBLE */}
            <div className="flex items-center">
              <Link href="/">
                <Image src="/5.png" alt="Logo" width={60} height={20} className="filter drop-shadow-lg" />
              </Link>
            </div>

            {/* Menu de navigation au centre - VERSION DESKTOP */}
            <div className="hidden md:flex items-center">
              <ul className="flex gap-8 list-none m-0 p-0">
                {navItems.map(({ key, path }) => {
                  const isActive = pathname === path;
                  return (
                    <li key={key}>
                      <Link
                        href={path}
                        className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                          isActive
                            ? (isHovered ? 'text-black' : 'text-white')
                            : (isHovered ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200')
                        } hover:scale-105`}
                      >
                        {translations[currentLang][key]}
                        {isActive && (
                          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full transition-colors duration-300 ${
                            isHovered ? 'bg-black' : 'bg-white'
                          }`}></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Actions à droite */}
            <div className="flex items-center gap-4">
              
              {/* Sélecteur de langue - DESKTOP */}
              <div className="relative hidden md:block">
                <select
                  className={`appearance-none backdrop-blur-sm border px-3 py-2 pr-8 text-sm font-medium focus:outline-none transition-all duration-300 cursor-pointer rounded-lg ${
                    isHovered
                      ? 'bg-black/10 border-black/30 text-black focus:border-black/50'
                      : 'bg-white/20 border-white/30 text-white focus:border-white/50'
                  }`}
                  value={currentLang}
                  onChange={(e) => setCurrentLang(e.target.value)}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code} className="text-black">
                      {lang.label}
                    </option>
                  ))}
                </select>
                <FaGlobe className={`absolute right-2.5 top-1/2 transform -translate-y-1/2 text-sm pointer-events-none transition-colors duration-300 ${
                  isHovered ? 'text-black/70' : 'text-white/70'
                }`} />
              </div>

              {/* Barre de recherche - DESKTOP */}
              <div className="relative hidden md:block">
                <div className={`absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isSearchOpen ? 'opacity-100 w-64 translate-x-0' : 'opacity-0 w-0 translate-x-4 pointer-events-none'
                }`}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher des sneakers..."
                    className={`w-full px-4 py-2.5 backdrop-blur-sm border text-sm focus:outline-none transition-all duration-300 rounded-lg ${
                      isHovered
                        ? 'bg-black/10 border-black/30 text-black placeholder-black/70 focus:border-black/50'
                        : 'bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50'
                    }`}
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
                  className={`p-2.5 transition-all duration-300 relative z-10 rounded-lg ${
                    isSearchOpen
                      ? (isHovered ? 'text-black bg-black/20' : 'text-white bg-white/20')
                      : (isHovered ? 'text-black hover:text-gray-600 hover:bg-black/20' : 'text-white hover:text-gray-200 hover:bg-white/20')
                  }`}
                >
                  <FaSearch className="text-lg" />
                </button>
              </div>

              {/* Menu mobile - trois traits */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-all duration-300 ${
                  isHovered ? 'text-black' : 'text-white'
                }`}
              >
                <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
                <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu mobile overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header du menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Image src="/5.png" alt="Logo" width={50} height={17} />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FaTimes className="text-xl text-gray-600" />
            </button>
          </div>

          {/* Navigation mobile */}
          <div className="py-6">
            <ul className="space-y-2">
              {navItems.map(({ key, path }) => {
                const isActive = pathname === path;
                return (
                  <li key={key}>
                    <Link
                      href={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-3 text-lg font-semibold transition-colors ${
                        isActive
                          ? 'text-[#c68642] bg-[#c68642]/10 border-r-4 border-[#c68642]'
                          : 'text-gray-700 hover:text-[#c68642] hover:bg-gray-50'
                      }`}
                    >
                      {translations[currentLang][key]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Sélecteur de langue mobile */}
          <div className="px-6 py-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c68642] text-gray-700"
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.label === 'FR' ? 'Français' : lang.label === 'EN' ? 'English' : 'العربية'}
                </option>
              ))}
            </select>
          </div>

          {/* Barre de recherche mobile */}
          <div className="px-6 py-4 border-t border-gray-200">
            <input
              type="text"
              placeholder="Rechercher des sneakers..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c68642] text-gray-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}