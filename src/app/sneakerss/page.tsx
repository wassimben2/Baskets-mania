"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

const products = [
  { id: 1, name: 'Air Jordan 1 LOW concord', price: 12000, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_39247f00-107e-434b-978a-5858b0b67727.jpg?v=1745165207&width=990', stock: 'Promotion', sales: 1250, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 2, name: 'Air Jordan 1 High OG "Space Jam"', price: 11800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_53c4b1c0-5b6a-4b56-b89d-34eaf3fe5e51.jpg?v=1745166463', stock: 'Promotion', sales: 890, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 3, name: 'Jordan 1 low green', price: 11800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_e6b90f8f-5978-4cef-b198-991260ee5800.jpg?v=1740520706', stock: 'Promotion', sales: 756, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 4, name: 'Air Jordan 1 low Panda', price: 13200, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_36cb0a97-bf6b-48d8-8ec7-713a95b72589.jpg?v=1740520129', stock: 'Épuisé', sales: 1100, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 5, name: 'Air Jordan 1 high Stage haze', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_d6fe9af8-498b-4e09-baa3-de012363ae12.jpg?v=1740003435', stock: 'En stock', sales: 980, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 6, name: 'Air Jordan 1 High OG « Black Toe » 2025', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/DF424B57-9BCA-4E2A-A4EB-ED26EE8762ED.jpg?v=1755871768', stock: 'En stock', sales: 1340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 7, name: 'Air Jordan 1 Mid White', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/DA91B474-C261-4C64-855D-896AD916B529.jpg?v=1753875889', stock: 'Promotion', sales: 1180, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 8, name: 'Jordan 1 low wolf grey', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_4b29dc21-5df4-4432-82cb-0f02ba2381d1.jpg?v=1740520934', stock: 'Promotion', sales: 920, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 9, name: 'Air Jordan 11 COOL GREY', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/d563a59c8dc319e13143537a0494231f_1.jpg?v=1739615787', stock: 'Promotion', sales: 850, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 10, name: 'Jordan 1 low White', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_e81ba897-0d04-46b7-a83a-1b190f84e825.jpg?v=1740004481', stock: 'Promotion', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 11, name: 'Jordan 1 High Hyper Blue', price: 11900, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_dc7887ef-941a-4d07-86ba-e990fcfd545c.jpg?v=1740004806', stock: 'Promotion', sales: 790, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 12, name: 'Air Jordan 3 retro BLACK CAT', price: 11500, image: 'https://basketsmania.com/cdn/shop/files/3f2003e9997961b60b348b5dcee8a2cf.jpg?v=1739618375', stock: 'Épuisé', sales: 1020, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },
  { id: 13, name: 'Air Jordan 1 Low « Ashen Slate »', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/521EED6E-3718-478C-B6EE-60B546F79A82.jpg?v=1750029584', stock: 'Promotion', sales: 1500, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 14, name: 'Jordan 1 High Royal Blue', price: 12400, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_a975c576-ecb2-4b32-8ff4-5ed7d5d22995.jpg?v=1740003678', stock: 'Promotion', sales: 1450, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 15, name: 'Air Jordan 11 LEGEND BLUE', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250213_105556_434.jpg?v=1739616345', stock: 'Épuisé', sales: 780, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 16, name: 'Air Jordan 11 72-10', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250213_112221_043.jpg?v=1739618149', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 17, name: 'Air Jordan 1 High Lost and Found', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250212_191731_628.jpg?v=1739384935', stock: 'En stock', sales: 650, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 18, name: 'Air Jordan 1 High X DIOR', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_1fefa94e-fa51-41c0-8cd4-38d5cc29573b.png?v=1744658158', stock: 'Promotion', sales: 720, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 19, name: 'Air Jordan 1 High Mocha', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250212_191732_055.jpg?v=1739385293', stock: 'En stock', sales: 580, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 20, name: 'Air Jordan 1 Low « Ice Blue »', price: 11800, image: 'https://basketsmania.com/cdn/shop/files/F923B816-6A01-4C7D-876C-C0FD8CB7E427.jpg?v=1750029948', stock: 'Épuisé', sales: 560, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 21, name: 'Jordan 11 Retro', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_9d63fc8b-586c-41cb-93cd-7c2c08bbd3ba.png?v=1742619723', stock: 'Promotion', sales: 480, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 22, name: 'Air Jordan 1 Retro Low OG UNC', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_633f529a-3238-4702-b602-8880174372c9.jpg?v=1741307588', stock: 'Épuisé', sales: 420, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 23, name: 'Jordan 1 High bred toe', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_2354c21c-0872-4a9b-9ca8-5b4730b1c3e9.jpg?v=1741306544', stock: 'Promotion', sales: 380, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 24, name: 'Air Jordan 1 high OG Starfish', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_02a174b6-8c57-4c51-b65f-302fa8071e63.png?v=1742619354', stock: 'En stock', sales: 340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 25, name: 'حذاء Air Jordan 1 ذو مقدمة عالية باللون الأسود', price: 12700, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_4ca5d7e9-ff12-4433-918c-b73a2b1e815f.jpg?v=1740003367', stock: 'Épuisé', sales: 290, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 26, name: 'Air Jordan 4 OREO', price: 11500, image: 'https://basketsmania.com/cdn/shop/files/4A480CFE-9184-47F3-9AFF-14DB738154E1.jpg?v=1753144156', stock: 'Promotion', sales: 890, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 27, name: 'Air Jordan 1 High 85', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_03ab6b86-38c0-405c-8897-0c408da69947.png?v=1744658969', stock: 'En stock', sales: 670, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 28, name: 'Jordan 11 retro CONCORD', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250213_112212_176.jpg?v=1739616785', stock: 'Épuisé', sales: 450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 29, name: 'Jordan 1 Mid SE Pomegranate (femme)', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_36f1aade-522c-44df-a733-0c118475f34d.png?v=1744658765', stock: 'En stock', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'femme' },
  { id: 30, name: 'Air Jordan 1 High "À ma manière"', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_6e0adeee-59c9-42b4-88eb-43f4d68db9c3.png?v=1744659391', stock: 'En stock', sales: 280, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 31, name: 'Jordan 1 High lucky green', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_aab69568-8b55-4a43-aeb9-2e940fc8fd25.jpg?v=1741634968', stock: 'En stock', sales: 580, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
  { id: 32, name: 'Air Jordan 5 Shattered Backboard', price: 11800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_c4922142-81f5-4c5a-a66e-9f7f3421171f.jpg?v=1740003065', stock: 'Épuisé', sales: 360, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5', category: 'adulte' },
  { id: 33, name: 'Air Jordan 11 SPACE JAM', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250213_105543_003.jpg?v=1739617284', stock: 'Épuisé', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 34, name: 'Air Jordan 11 OG BRED', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/69ea72be90994a2b1ab299c1959e1a4b_1.jpg?v=1739615360', stock: 'Épuisé', sales: 670, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 35, name: 'Air Jordan 4 PALE CITRON', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/38719C8A-EAE0-4D83-AD43-D804E6EE6323.jpg?v=1753144610', stock: 'Épuisé', sales: 450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 36, name: 'Air Jordan 4 x SB', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/D606F0BA-4BD6-4423-BDE9-9B8EA20376F3.jpg?v=1753144065', stock: 'Épuisé', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 37, name: 'Air Jordan 4 pure money', price: 12500, image: 'https://basketsmania.com/cdn/shop/files/2A4A22C3-5C69-48BA-B8CF-708FA20B6BAE.jpg?v=1753143940', stock: 'En stock', sales: 280, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4', category: 'adulte' },
  { id: 38, name: 'Air jordan 3 retro blue unc', price: 12900, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_4ebd478b-1afd-4715-b61b-b8a03df5b360.jpg?v=1739796818', stock: 'Épuisé', sales: 250, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3', category: 'adulte' },
  { id: 39, name: 'Air Jordan 11 GRATITUDE', price: 12900, image: 'https://basketsmania.com/cdn/shop/files/d90ef5713431568e79eef440932227e0_1.jpg?v=1739616113', stock: 'Épuisé', sales: 200, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11', category: 'adulte' },
  { id: 40, name: 'Air Jordan 1 High Palomino', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250212_191732_371.jpg?v=1739385710', stock: 'Épuisé', sales: 180, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1', category: 'adulte' },
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