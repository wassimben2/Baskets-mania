'use client';
import { FaSearch, FaShoppingBasket, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const navTitles = [
        "Acceuil",
        "Sneakers",
        "Enfants",
        "Promo",
        "Accesoires",
        "Contact",
        "Informations"
    ];
    {/*les langues disponibles*/}
    const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'AR' }
    ];
    {/*traduction t3 lnavbar*/}
    const translations = {
        fr: {
            Acceuil: "Acceuil",
            Sneakers: "Sneakers",
            Enfants: "Enfants",
            Promo: "Promo",
            Accesoires: "Accesoires",
            Contact: "Contact",
            Informations: "Informations"
        },
        en: {
            Acceuil: "Home",
            Sneakers: "Sneakers",
            Enfants: "Kids",
            Promo: "Sale",
            Accesoires: "Accessories",
            Contact: "Contact",
            Informations: "Information"
        },
        ar: {
            Acceuil: "الصفحة الرئيسية",
            Sneakers: "أحذية رياضية",
            Enfants: "أطفال",
            Promo: "تخفيضات",
            Accesoires: "إكسسوارات",
            Contact: "اتصال",
            Informations: "معلومات"
        }
    }
    //useState hooks pour manager les etats 
    const [currentLang, setCurrentLang] = useState('fr');
    const [activeItem, setActiveItem] = useState('Acceuil');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <nav className="w-full bg-white/98 backdrop-blur-md border-b border-gray-200/50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    <div className="flex items-center">
                        <Image
                            src="/5.png"
                            alt="Logo"
                            width={60}
                            height={20}
                        />
                    </div>
                   {/*la logique dyal changement de langues*/}
                    <div className="hidden md:flex items-center">
                        <ul className="flex gap-6 list-none m-0 p-0">
                            {navTitles.map((title) => (
                                <li key={title}>
                                    <a
                                        href="#"
                                        onClick={() => setActiveItem(title)}
                                        className={`
                                            relative px-4 py-2.5 text-sm font-semibold tracking-wide transition-all duration-250 
                                            ${activeItem === title 
                                                ? 'text-black bg-gray-50' 
                                                : 'text-gray-700 hover:text-black hover:bg-gray-50'
                                            }
                                            rounded-lg hover:transform hover:scale-[1.02]
                                        `}
                                    >
                                        {translations[currentLang][title]}
                                        {activeItem === title && (
                                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-black rounded-full"></div>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-6">
                        
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
                            {/*bouton dyal la recherche w sa logique*/}
                            <FaGlobe className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none" />
                        </div>
                         
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
                                    if (isSearchOpen) {
                                        setSearchQuery(''); 
                                    }
                                }}
                                className={`
                                    p-2.5 transition-all duration-250 relative z-10 rounded-lg hover:bg-gray-100
                                    ${isSearchOpen 
                                        ? 'text-black bg-gray-100' 
                                        : 'text-gray-600 hover:text-black'
                                    }
                                `}
                            >
                                <FaSearch className="text-lg" />
                            </button>
                        </div>
                        {/*bouton panier w sa logique*/}
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