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

  const leftNavItems = [
    { key: "home", path: "/" },
    { key: "sneakers", path: "/sneakerss" }, // Changé de /sneakerss à /sneakerss
  ];

  const rightNavItems = [
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
            : pathname === '/' 
              ? 'bg-transparent' 
              : 'bg-white/95 backdrop-blur-lg shadow-lg'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative flex items-center w-full">

            {/* Menu de navigation gauche - VERSION DESKTOP */}
            <div className="hidden md:flex items-center absolute left-0">
              <ul className="flex gap-8 list-none m-0 p-0">
                {leftNavItems.map(({ key, path }) => {
                  const isActive = pathname === path;
                  return (
                    <li key={key}>
                      <Link
                        href={path}
                        className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                          isActive
                            ? (isHovered || pathname !== '/' ? 'text-black' : 'text-white')
                            : (isHovered || pathname !== '/' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200')
                        } hover:scale-105`}
                      >
                        {translations[currentLang][key]}
                        {isActive && (
                          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full transition-colors duration-300 ${
                            isHovered || pathname !== '/' ? 'bg-black' : 'bg-white'
                          }`}></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Logo au centre absolu de la navbar */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
              <Link href="/">
                <Image src="/5.png" alt="Logo" width={60} height={20} className="filter " />
              </Link>
            </div>

            {/* Actions à droite */}
            <div className="flex items-center gap-4 ml-auto">
              
              {/* Menu de navigation droite - VERSION DESKTOP */}
              <div className="hidden md:flex items-center">
                <ul className="flex gap-6 list-none m-0 p-0">
                  {rightNavItems.map(({ key, path }) => {
                    const isActive = pathname === path;
                    return (
                      <li key={key}>
                        <Link
                          href={path}
                          className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 ${
                            isActive
                              ? (isHovered || pathname !== '/' ? 'text-black' : 'text-white')
                              : (isHovered || pathname !== '/' ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200')
                          } hover:scale-105`}
                        >
                          {translations[currentLang][key]}
                          {isActive && (
                            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full transition-colors duration-300 ${
                              isHovered || pathname !== '/' ? 'bg-black' : 'bg-white'
                            }`}></div>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Barre de recherche - DESKTOP */}
              <div className="relative hidden md:block">
  <button
    onClick={() => {
      setIsSearchOpen(!isSearchOpen);
      if (isSearchOpen) setSearchQuery('');
    }}
    className={`p-2.5 transition-all duration-300 relative z-50 rounded-lg ${
      isSearchOpen
        ? (isHovered || pathname !== '/' ? 'text-black bg-black/20' : 'text-white bg-white/20')
        : (isHovered || pathname !== '/' ? 'text-black hover:text-gray-600 hover:bg-black/20' : 'text-white hover:text-gray-200 hover:bg-white/20')
    }`}
  >
    <FaSearch className="text-lg" />
  </button>
</div>

<div
  className={`absolute top-full left-0 w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
    isSearchOpen ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <div className="w-full bg-white backdrop-blur-xl  shadow-2xl rounded-xl mt-5">
    <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3 ">
      
      {/* Icône recherche à gauche */}
      <FaSearch className="text-gray-600 text-xl" />

      {/* Input bien visible */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="🔎 Rechercher vos sneakers..."
        className="flex-1 bg-white border border-gray-300 rounded-2xl px-5 py-3 text-gray-900 placeholder-gray-500 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-300"
        autoFocus={isSearchOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('Searching for:', searchQuery);
          }
          if (e.key === 'Escape') {
            setIsSearchOpen(false);
            setSearchQuery('');
          }
        }}
      />

      {/* Bouton fermer */}
      <button
        onClick={() => {
          setIsSearchOpen(false);
          setSearchQuery('');
        }}
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        <FaTimes className="text-gray-600 text-lg" />
      </button>
    </div>
  </div>
</div>
              
              {/* Sélecteur de langue - DESKTOP */}
              <div className="relative hidden md:block">
                <select
                  className={`appearance-none backdrop-blur-sm border px-3 py-2 pr-8 text-sm font-medium focus:outline-none transition-all duration-300 cursor-pointer rounded-lg ${
                    isHovered || pathname !== '/'
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
                  isHovered || pathname !== '/' ? 'text-black/70' : 'text-white/70'
                }`} />
              </div>

              {/* Menu mobile - trois traits */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 transition-all duration-300 ${
                  isHovered || pathname !== '/' ? 'text-black' : 'text-white'
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
              {/* Items de gauche */}
              {leftNavItems.map(({ key, path }) => {
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
              {/* Items de droite */}
              {rightNavItems.map(({ key, path }) => {
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