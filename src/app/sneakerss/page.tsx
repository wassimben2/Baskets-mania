"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

const products = [
  { id: 1, name: 'Air Jordan 1 LOW concord', price: 120000, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', stock: 'En stock', sales: 1250, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 2, name: 'JORDAN 1 LOW "WHITE/BLACK"', price: 120, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', stock: 'En rupture de stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 3, name: 'JORDAN 1 MID "CHICAGO"', price: 150, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400', stock: 'En stock', sales: 756, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 4, name: 'JORDAN 3 RETRO "WHITE CEMENT"', price: 200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400', stock: 'En stock', sales: 1100, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },
  { id: 5, name: 'JORDAN 3 "BLACK CEMENT"', price: 200, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400', stock: 'En stock', sales: 980, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },
  { id: 6, name: 'JORDAN 4 RETRO "WHITE/FIRE RED"', price: 220, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400', stock: 'En rupture de stock', sales: 1340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 7, name: 'JORDAN 4 "BRED"', price: 220, image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400', stock: 'En stock', sales: 1180, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 8, name: 'JORDAN 4 "UNIVERSITY BLUE"', price: 220, image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400', stock: 'En stock', sales: 920, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 9, name: 'JORDAN 5 "FIRE RED"', price: 210, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', stock: 'En stock', sales: 850, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5', category: 'adulte' },
  { id: 10, name: 'JORDAN 5 "METALLIC SILVER"', price: 210, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400', stock: 'En stock', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 5', category: 'adulte' },
  { id: 11, name: 'JORDAN 6 "CARMINE"', price: 200, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400', stock: 'En rupture de stock', sales: 790, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 6', category: 'adulte' },
  { id: 12, name: 'JORDAN 6 "INFRARED"', price: 200, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400', stock: 'En stock', sales: 1020, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 6', category: 'adulte' },
  { id: 13, name: 'JORDAN 11 "CONCORD"', price: 250, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', stock: 'En stock', sales: 1500, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 14, name: 'JORDAN 11 "BRED"', price: 250, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', stock: 'En rupture de stock', sales: 1450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 15, name: 'JORDAN 11 LOW "WHITE/RED"', price: 200, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400', stock: 'En stock', sales: 780, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 16, name: 'JORDAN 12 "FLU GAME"', price: 200, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 12', category: 'adulte' },
  { id: 17, name: 'JORDAN 12 "FRENCH BLUE"', price: 200, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', stock: 'En stock', sales: 650, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 12', category: 'adulte' },
  { id: 18, name: 'ZOOM KOBE 3 PROTRO "HALO"', price: 197, image: 'https://images.unsplash.com/photo-1600054800747-be294a6a0e3d?w=400', stock: 'En rupture de stock', sales: 720, promotion: false, brand: 'Nike', model: 'Kobe 3', category: 'adulte' },
  { id: 19, name: 'JORDAN 40 "BLUE SUEDE"', price: 267, image: 'https://images.unsplash.com/photo-1603787081207-362bcef7dd9d?w=400', stock: 'En stock', sales: 580, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 40', category: 'adulte' },
  { id: 20, name: 'JORDAN 7 "OLYMPIC"', price: 190, image: 'https://images.unsplash.com/photo-1566479179817-c0a3b8971d4f?w=400', stock: 'En stock', sales: 560, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 7', category: 'adulte' },
  
  // Produits enfants
  { id: 21, name: 'JORDAN 1 LOW GS "BRED TOE"', price: 80, image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400', stock: 'En stock', sales: 480, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'enfant' },
  { id: 22, name: 'JORDAN 4 GS "UNIVERSITY BLUE"', price: 150, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400', stock: 'En rupture de stock', sales: 420, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'enfant' },
  { id: 23, name: 'JORDAN 11 GS "CONCORD"', price: 180, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400', stock: 'En stock', sales: 380, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'enfant' },
  { id: 24, name: 'JORDAN 3 GS "WHITE CEMENT"', price: 140, image: 'https://images.unsplash.com/photo-1600185365926-3a218a352e96?w=400', stock: 'En stock', sales: 340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'enfant' },
  { id: 25, name: 'JORDAN 5 GS "FIRE RED"', price: 150, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=400', stock: 'En stock', sales: 290, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5', category: 'enfant' },
  
  // Accessoires
  { id: 39, name: 'CHAUSSETTES JORDAN CREW (PACK DE 3)', price: 25, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Chaussettes', category: 'accessoire' },
  { id: 40, name: 'CHAUSSETTES JORDAN NO SHOW (PACK DE 6)', price: 30, image: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=400', stock: 'En stock', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Chaussettes', category: 'accessoire' },
  { id: 41, name: 'CASQUETTE JORDAN JUMPMAN', price: 35, image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400', stock: 'En stock', sales: 450, promotion: false, brand: 'Air Jordan', model: 'Casquette', category: 'accessoire' },
  { id: 42, name: 'SAC À DOS JORDAN', price: 75, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', stock: 'En stock', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Sac', category: 'accessoire' },
  { id: 43, name: 'LACETS JORDAN (PACK DE 2)', price: 15, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400', stock: 'En stock', sales: 280, promotion: true, brand: 'Air Jordan', model: 'Lacets', category: 'accessoire' },
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

  // Filtrer les produits selon l'onglet actif
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
      // Filtre par disponibilité
      const availabilityMatch = availability.length === 0 || availability.includes(p.stock);
      
      // Filtre par prix
      const minPrice = priceRange.min === '' ? 0 : parseFloat(priceRange.min);
      const maxPriceFilter = priceRange.max === '' ? Infinity : parseFloat(priceRange.max);
      const priceMatch = p.price >= minPrice && p.price <= maxPriceFilter;
      
      return availabilityMatch && priceMatch;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-high-low': return b.price - a.price;
        case 'price-low-high': return a.price - b.price;
        case 'newest': return b.id - a.id;
        default: return b.sales - a.sales;
      }
    });

    return result;
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
      <div className="min-h-screen bg-white pt-20">
        <div className="flex">
          {/* Sidebar de filtres */}
          <div className="w-80 border-r border-gray-200 p-6 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-8">FILTER</h2>

            {/* Navigation par onglets */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-4">CATÉGORIES</h3>
              <div className="space-y-2">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtre par disponibilité */}
            <div className="mb-8">
              <button onClick={() => setAvailabilityOpen(!availabilityOpen)} className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900">
                DISPONIBILITÉ
                {availabilityOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {availabilityOpen && (
                <div className="space-y-3 mt-4">
                  <label className="flex items-center text-sm">
                    <input 
                      type="checkbox" 
                      checked={availability.includes('En stock')} 
                      onChange={() => toggle(availability, setAvailability, 'En stock')} 
                      className="mr-3 h-4 w-4" 
                    />
                    <span className="text-gray-700">En stock</span>
                  </label>
                  <label className="flex items-center text-sm">
                    <input 
                      type="checkbox" 
                      checked={availability.includes('En rupture de stock')} 
                      onChange={() => toggle(availability, setAvailability, 'En rupture de stock')} 
                      className="mr-3 h-4 w-4" 
                    />
                    <span className="text-gray-700">En rupture de stock</span>
                  </label>
                </div>
              )}
            </div>

            {/* Filtre par prix */}
            <div className="mb-8">
              <button onClick={() => setPriceOpen(!priceOpen)} className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900">
                PRIX
                {priceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {priceOpen && (
                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-3">
                    Le prix le plus élevé est de DA {maxPrice.toLocaleString()}.00
                    <button 
                      onClick={resetPriceRange}
                      className="ml-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      (Réinitialiser)
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">DE :</label>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">د.ج</span>
                        <input
                          type="number"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                          placeholder="0"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">À :</label>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">د.ج</span>
                        <input
                          type="number"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                          placeholder={maxPrice.toString()}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={clear} className="text-sm text-gray-500 hover:text-gray-700 underline">Clear all filters</button>
          </div>

          {/* Zone principale avec les produits */}
          <div className="flex-1 p-6">
            {/* En-tête avec tri */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-lg font-medium text-gray-900">
                {tabs.find(t => t.id === activeTab)?.label} 
                <span className="text-gray-500 ml-2">{filtered.length}</span>
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">Sort By:</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border-none bg-transparent text-sm font-medium text-gray-900 focus:outline-none cursor-pointer">
                  <option value="relevance">Relevance</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Grille des produits */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {current.map(product => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    {product.stock === 'En rupture de stock' && <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">SOLD OUT</div>}
                    {product.promotion && <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">SALE</div>}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-medium text-sm text-gray-900 mb-2 h-10 overflow-hidden">{product.name}</h3>
                  <div className="text-lg font-bold text-gray-900">DA {product.price}</div>
                </div>
              ))}
            </div>

            {/* Pagination (seulement pour l'onglet TOUT) */}
            {totalPages > 1 && activeTab === 'tout' && (
              <div className="flex items-center justify-center gap-4">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" />Previous
                </button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let num = totalPages <= 5 ? i + 1 : page <= 3 ? i + 1 : page >= totalPages - 2 ? totalPages - 4 + i : page - 2 + i;
                    return (
                      <button key={num} onClick={() => setPage(num)} className={`px-3 py-1 text-sm font-medium rounded ${page === num ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-100'}`}>
                        {num}
                      </button>
                    );
                  })}
                </div>
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed">
                  Next<ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Message pour les onglets limités */}
            {activeTab !== 'tout' && current.length === 5 && (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <div className="text-gray-600 mb-2">Affichage limité à 5 produits</div>
                <button 
                  onClick={() => handleTabChange('tout')} 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Voir tous les produits
                </button>
              </div>
            )}

            {/* Message quand aucun produit */}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">No products found with current filters</div>
                <button onClick={clear} className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}