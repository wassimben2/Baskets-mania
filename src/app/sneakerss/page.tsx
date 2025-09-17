"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Link from 'next/link';

const products = [
  // --- Ton tableau products inchangé ---
   { id: 1, name: 'Air Jordan 1 LOW concord', price: 12000, image: 'Air Jordan 1 LOW concord/1.png', stock: 'Promotion', sales: 1250, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 2, name: 'Air Jordan 1 High OG "Space Jam"', price: 11800, image: '	Air Jordan 1 High OG Space Jam/1.webp', stock: 'Promotion', sales: 890, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 3, name: 'Jordan 1 low green', price: 11800, image: 'Jordan 1 low green/1.avif', stock: 'Promotion', sales: 756, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },

  { id: 4, name: 'Air Jordan 1 low Panda', price: 13200, image: 'Air Jordan 1 low Panda/1.png', stock: 'Épuisé', sales: 1100, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 5, name: 'Air Jordan 1 high Stage haze', price: 12500, image: 'Air Jordan 1 high Stage haze/1.png', stock: 'En stock', sales: 980, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 6, name: 'Air Jordan 1 High OG « Black Toe » 2025', price: 12800, image: 'Air Jordan 1 High OG « Black Toe » 2025/1.png', stock: 'En stock', sales: 1340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 7, name: 'Air Jordan 1 Mid White', price: 12800, image: 'Air Jordan 1 Mid White/1.png', stock: 'Promotion', sales: 1180, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 8, name: 'Jordan 1 low wolf grey', price: 12500, image: 'Jordan 1 low wolf grey/1.avif', stock: 'Promotion', sales: 920, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },


  { id: 9, name: 'Air Jordan 11 COOL GREY', price: 12990, image: 'Air Jordan 11 COOL GREY/1.jpg', stock: 'Promotion', sales: 850, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 10, name: 'Jordan 1 low White', price: 12800, image: 'Jordan 1 low White/1.png', stock: 'Promotion', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 11, name: 'Jordan 1 High Hyper Blue', price: 11900, image: 'Jordan 1 High Hyper Blue/1.avif', stock: 'Promotion', sales: 790, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 12, name: 'Air Jordan 3 retro BLACK CAT', price: 11500, image: 'Air Jordan 3 retro BLACK CAT/1.avif', stock: 'Épuisé', sales: 1020, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },

  { id: 13, name: 'Air Jordan 1 Low « Ashen Slate »', price: 12500, image: 'Air Jordan 1 Low « Ashen Slate »/1.png', stock: 'Promotion', sales: 1500, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 14, name: 'Jordan 1 High Royal Blue', price: 12400, image: 'Jordan 1 High Royal Blue/1.webp', stock: 'Promotion', sales: 1450, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },

 
  { id: 15, name: 'Air Jordan 11 LEGEND BLUE', price: 12800, image: 'Air Jordan 11 LEGEND BLUE/1.webp', stock: 'Épuisé', sales: 780, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 16, name: 'Air Jordan 11 72-10', price: 12990, image: 'Air Jordan 11 72-10/1.png', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 17, name: 'Air Jordan 1 High Lost and Found', price: 12800, image: 'Air Jordan 1 High Lost and Found/1.jpg', stock: 'En stock', sales: 650, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 18, name: 'Air Jordan 1 High X DIOR', price: 12800, image: 'Air Jordan 1 High X DIOR/1.jpg', stock: 'Promotion', sales: 720, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 19, name: 'Air Jordan 1 High Mocha', price: 12800, image: 'Air Jordan 1 High Mocha/1.avif', stock: 'En stock', sales: 580, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 20, name: 'Air Jordan 1 Low « Ice Blue »', price: 11800, image: 'Air Jordan 1 Low « Ice Blue »/1.jpg', stock: 'Épuisé', sales: 560, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 21, name: 'Jordan 11 Retro', price: 12990, image: 'Jordan 11 Retro/1.webp', stock: 'Promotion', sales: 480, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 22, name: 'Air Jordan 1 Retro Low OG UNC', price: 12500, image: 'Air Jordan 1 Retro Low OG UNC/1.png', stock: 'Épuisé', sales: 420, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 23, name: 'Jordan 1 High bred toe', price: 12800, image: 'Jordan 1 High bred toe/1.webp', stock: 'Promotion', sales: 380, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 24, name: 'Air Jordan 1 high OG Starfish', price: 12800, image: 'Air Jordan 1 high OG Starfish/1.avif', stock: 'En stock', sales: 340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 25, name: 'Jordan 1 High OG Patent bred', price: 12700, image: 'Jordan 1 High OG Patent bred/1.webp', stock: 'Épuisé', sales: 290, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 26, name: 'Air Jordan 4 OREO', price: 11500, image: 'Air Jordan 4 OREO/1.avif', stock: 'Promotion', sales: 890, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 27, name: 'Air Jordan 1 High 85', price: 12500, image: 'Air Jordan 1 High 85/1.avif', stock: 'En stock', sales: 670, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 28, name: 'Jordan 11 retro CONCORD', price: 12800, image: 'Jordan 11 retro CONCORD/1.jpg', stock: 'Épuisé', sales: 450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 29, name: 'Jordan 1 Mid SE Pomegranate (femme)', price: 12500, image: 'Jordan 1 Mid SE Pomegranate (femme)/1.jpg', stock: 'En stock', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'femme' },
  { id: 30, name: 'Air Jordan 1 High "À ma manière"', price: 12800, image: 'Air Jordan 1 High À ma manière/1.jpg', stock: 'En stock', sales: 280, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 31, name: 'Jordan 1 High lucky green', price: 12800, image: 'Jordan 1 High lucky green/1.avif', stock: 'En stock', sales: 580, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 32, name: 'Air Jordan 5 Shattered Backboard', price: 11800, image: 'Air Jordan 5 Shattered Backboard/1.webp', stock: 'Épuisé', sales: 360, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5', category: 'adulte' },
  { id: 33, name: 'Air Jordan 11 SPACE JAM', price: 12990, image: 'Air Jordan 11 SPACE JAM/1.jpg', stock: 'Épuisé', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 34, name: 'Air Jordan 11 OG BRED', price: 12990, image: 'Air Jordan 11 OG BRED/1.png', stock: 'Épuisé', sales: 670, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 35, name: 'Air Jordan 4 PALE CITRON', price: 12500, image: 'Air Jordan 4 PALE CITRON/1.webp', stock: 'Épuisé', sales: 450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 36, name: 'Air Jordan 4 x SB', price: 12500, image: 'Air Jordan 4 x SB/1.avif', stock: 'Épuisé', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 37, name: 'Air Jordan 4 pure money', price: 12500, image: 'Air Jordan 4 pure money/1.jpg', stock: 'En stock', sales: 280, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 38, name: 'Air jordan 3 retro blue unc', price: 12900, image: 'Air jordan 3 retro blue unc/1.avif', stock: 'Épuisé', sales: 250, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },
  { id: 39, name: 'Air Jordan 11 GRATITUDE', price: 12900, image: 'Air Jordan 11 GRATITUDE/1.png', stock: 'Épuisé', sales: 200, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 40, name: 'Air Jordan 1 High Palomino', price: 12800, image: 'Air Jordan 1 High Palomino/1.avif', stock: 'Épuisé', sales: 180, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },

    //ENFANTS
    { id: 41, name: 'AIR JORDAN 1 LOW KIDS "OBSIDIAN"', price: 6500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_0567d8e7-ca1f-491b-88bf-060e6545a9b2.jpg?v=1741723730', category: 'enfant', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
    { id: 42, name: 'AIR JORDAN 1 LOW "CHICAGO"', price: 6000, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_b8e2aa9d-4d86-4bb4-899f-46d7868d9f6f.jpg?v=1741724670', category: 'enfant', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
    { id: 43, name: 'AIR JORDAN 1 LOW KIDS "UNC"', price: 5900, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_6641c03d-d6de-4ab3-a153-0bff48a63aa6.jpg?v=1742469976', category: 'enfant', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
    { id: 44, name: 'AIR JORDAN 1 LOW KIDS', price: 6000, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_8c615d4b-b087-4426-98a2-4e7563896770.jpg?v=1741725001', category: 'enfant', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },


    //ACCESSOIRES
    { id: 45, name: 'CHAUSSETTES NIKE BLANCHES', price: 300, image: 'https://basketsmania.com/cdn/shop/files/48ba1a6af6ab136ce45bc20a4b0cffdc.jpg?v=1739305972&width=990', category: 'accessoire', stock: 'En stock', sales: 0, promotion: false, brand: 'Nike', model: 'Chaussettes' },
    { id: 46, name: 'CHAUSSETTES NIKE NOIRES', price: 300, image: 'https://basketsmania.com/cdn/shop/files/6af0ca7385cba79eccf7ba4edf433067.jpg?v=1739306118&width=990', category: 'accessoire', stock: 'En stock', sales: 0, promotion: false, brand: 'Nike', model: 'Chaussettes' },

   

  // ...
];

export default function SneakersPage() {
  const [activeTab, setActiveTab] = useState('tout');
  const [availability, setAvailability] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortBy, setSortBy] = useState('relevance');
  const [page, setPage] = useState(1);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  
  const itemsPerPage = 12;
  
  const tabs = [
    { id: 'tout', label: 'TOUT' },
    { id: 'enfants', label: 'ENFANTS' },
    { id: 'promo', label: 'PROMO' },
    { id: 'accessoires', label: 'ACCESSOIRES' }
  ];

  const getProductsByTab = (tab) => {
    switch(tab) {
      case 'enfants':
        return products.filter(p => p.category === 'enfant').slice(0, 5);
      case 'promo':
        return products.filter(p => p.promotion === true).slice(0, 5);
      case 'accessoires':
        return products.filter(p => p.category === 'accessoire').slice(0, 5);
      case 'tout':
      default:
        return products;
    }
  };

  const currentTabProducts = getProductsByTab(activeTab);
  const maxPrice = Math.max(...currentTabProducts.map(p => p.price));

  const filtered = useMemo(() => {
    let result = currentTabProducts.filter(p => {
      const availabilityMatch = availability.length === 0 || availability.includes(p.stock);
      const minPrice = priceRange.min === '' ? 0 : parseFloat(priceRange.min);
      const maxPriceFilter = priceRange.max === '' ? Infinity : parseFloat(priceRange.max);
      const priceMatch = p.price >= minPrice && p.price <= maxPriceFilter;
      return availabilityMatch && priceMatch;
    });

    // --- Tri normal ---
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-high-low': return b.price - a.price;
        case 'price-low-high': return a.price - b.price;
        case 'newest': return b.id - a.id;
        default: return b.sales - a.sales;
      }
    });

    // --- Forcer le regroupement des 4 Jordan 11 ---
    const specialNames = [
      'Air Jordan 11 72-10',
      'Air Jordan 11 OG BRED',
      'Air Jordan 11 GRATITUDE',
      
    ];

    const specialProducts = specialNames
      .map(name => result.find(p => p.name === name))
      .filter(Boolean); // éviter les undefined si l’un manque
    const otherProducts = result.filter(p => !specialNames.includes(p.name));

    // On place les spéciales en premier, toujours côte à côte
    return [...specialProducts, ...otherProducts];

  }, [availability, priceRange, sortBy, currentTabProducts]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const current = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const toggle = (list, setList, item) => {
    setList(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]);
    setPage(1);
  };

  const clear = () => {
    setAvailability([]);
    setPriceRange({ min: '', max: '' });
    setPage(1);
  };

  const resetPriceRange = () => {
    setPriceRange({ min: '', max: '' });
    setPage(1);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setAvailability([]);
    setPriceRange({ min: '', max: '' });
    setPage(1);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar de filtres */}
          <aside className="w-full lg:w-80 p-6 bg-white shadow-lg rounded-xl mb-6 lg:mb-0 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filtres</h2>

            {/* Tabs */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-700 mb-3">Catégories</h3>
              <div className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === tab.id 
                        ? 'bg-gray-600 text-white shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="mb-6">
              <button onClick={() => setAvailabilityOpen(!availabilityOpen)} className="flex items-center justify-between w-full py-3 font-medium text-gray-800 hover:text-gray-600">
                Disponibilité
                {availabilityOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {availabilityOpen && (
                <div className="mt-3 space-y-2">
                  <label className="flex items-center text-sm text-black">
                    <input 
                      type="checkbox" 
                      checked={availability.includes('En stock')} 
                      onChange={() => toggle(availability, setAvailability, 'En stock')} 
                      className="mr-2 h-4 w-4 accent-blue-600"
                    />
                    En stock
                  </label>
                  <label className="flex items-center text-sm text-black">
                    <input 
                      type="checkbox" 
                      checked={availability.includes('En rupture de stock')} 
                      onChange={() => toggle(availability, setAvailability, 'En rupture de stock')} 
                      className="mr-2 h-4 w-4 accent-red-600"
                    />
                    En rupture de stock
                  </label>
                </div>
              )}
            </div>

            {/* Prix */}
            <div className="mb-6">
              <button onClick={() => setPriceOpen(!priceOpen)} className="flex items-center justify-between w-full py-3 font-medium text-gray-800 hover:text-gray-600">
                Prix
                {priceOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {priceOpen && (
                <div className="mt-3 space-y-3 text-sm text-gray-600">
                  <div>
                    Le prix max est DA {maxPrice.toLocaleString()}
                    <button onClick={resetPriceRange} className="ml-2 text-blue-600 hover:text-blue-800 underline text-xs">(Réinitialiser)</button>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <input
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    <input
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                </div>
              )}
            </div>

            <button onClick={clear} className="text-sm text-gray-500 hover:text-gray-700 underline">Effacer tous les filtres</button>
          </aside>

          {/* Produits */}
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <h1 className="text-2xl font-bold text-gray-800">
                {tabs.find(t => t.id === activeTab)?.label} 
                <span className="text-gray-500 ml-2">{filtered.length}</span>
              </h1>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-black">Trier par:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 cursor-pointer text-black">
                  <option value="relevance">Pertinence</option>
                  <option value="price-high-low">Prix: High → Low</option>
                  <option value="price-low-high">Prix: Low → High</option>
                  <option value="newest">Nouveautés</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.map(product => (
                <Link key={product.id} href={`/sneakers/${product.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    {product.stock === 'Épuisé' && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">SOLD OUT</div>
                    )}
                    {product.promotion && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">SALE</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="text-lg font-bold text-gray-900">DA {product.price}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && activeTab === 'tout' && (
              <div className="flex justify-center items-center gap-3 mt-8 flex-wrap">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="flex items-center gap-1 px-3 py-1 rounded-full border hover:bg-gray-200 text-black">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let num = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i;
                  return (
                    <button key={num} onClick={() => setPage(num)} className={`px-3 py-1 rounded-full ${page === num ? 'bg-gray-600 text-white' : 'hover:bg-gray-200 text-black'}`}>
                      {num}
                    </button>
                  );
                })}
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="flex items-center gap-1 px-3 py-1 rounded-full border hover:bg-gray-200 text-black">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
