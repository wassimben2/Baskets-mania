"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

const products = [
  { id: 1, name: 'JORDAN 1 RETRO HIGH OG "BRED"', price: 180, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', stock: 'En stock', sales: 1250, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 2, name: 'JORDAN 1 LOW "WHITE/BLACK"', price: 120, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', stock: 'En rupture de stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 3, name: 'JORDAN 1 MID "CHICAGO"', price: 150, image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400', stock: 'En stock', sales: 756, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 4, name: 'JORDAN 3 RETRO "WHITE CEMENT"', price: 200, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400', stock: 'En stock', sales: 1100, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3' },
  { id: 5, name: 'JORDAN 3 "BLACK CEMENT"', price: 200, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400', stock: 'En stock', sales: 980, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 3' },
  { id: 6, name: 'JORDAN 4 RETRO "WHITE/FIRE RED"', price: 220, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400', stock: 'En rupture de stock', sales: 1340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4' },
  { id: 7, name: 'JORDAN 4 "BRED"', price: 220, image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400', stock: 'En stock', sales: 1180, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 4' },
  { id: 8, name: 'JORDAN 4 "UNIVERSITY BLUE"', price: 220, image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400', stock: 'En stock', sales: 920, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4' },
  { id: 9, name: 'JORDAN 5 "FIRE RED"', price: 210, image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', stock: 'En stock', sales: 850, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5' },
  { id: 10, name: 'JORDAN 5 "METALLIC SILVER"', price: 210, image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400', stock: 'En stock', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 5' },
  { id: 11, name: 'JORDAN 6 "CARMINE"', price: 200, image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400', stock: 'En rupture de stock', sales: 790, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 6' },
  { id: 12, name: 'JORDAN 6 "INFRARED"', price: 200, image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400', stock: 'En stock', sales: 1020, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 6' },
  { id: 13, name: 'JORDAN 11 "CONCORD"', price: 250, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', stock: 'En stock', sales: 1500, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11' },
  { id: 14, name: 'JORDAN 11 "BRED"', price: 250, image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', stock: 'En rupture de stock', sales: 1450, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11' },
  { id: 15, name: 'JORDAN 11 LOW "WHITE/RED"', price: 200, image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400', stock: 'En stock', sales: 780, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 11' },
  { id: 16, name: 'JORDAN 12 "FLU GAME"', price: 200, image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 12' },
  { id: 17, name: 'JORDAN 12 "FRENCH BLUE"', price: 200, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400', stock: 'En stock', sales: 650, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 12' },
  { id: 18, name: 'ZOOM KOBE 3 PROTRO "HALO"', price: 197, image: 'https://images.unsplash.com/photo-1600054800747-be294a6a0e3d?w=400', stock: 'En rupture de stock', sales: 720, promotion: false, brand: 'Nike', model: 'Kobe 3' },
  { id: 19, name: 'JORDAN 40 "BLUE SUEDE"', price: 267, image: 'https://images.unsplash.com/photo-1603787081207-362bcef7dd9d?w=400', stock: 'En stock', sales: 580, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 40' },
  { id: 20, name: 'JORDAN 7 "OLYMPIC"', price: 190, image: 'https://images.unsplash.com/photo-1566479179817-c0a3b8971d4f?w=400', stock: 'En stock', sales: 560, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 7' },
  { id: 21, name: 'JORDAN 8 "AQUA"', price: 200, image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=400', stock: 'En stock', sales: 480, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 8' },
  { id: 22, name: 'JORDAN 9 "UNIVERSITY BLUE"', price: 190, image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?w=400', stock: 'En rupture de stock', sales: 420, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 9' },
  { id: 23, name: 'JORDAN 10 "STEEL"', price: 190, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400', stock: 'En stock', sales: 380, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 10' },
  { id: 24, name: 'JORDAN 14 "LAST SHOT"', price: 200, image: 'https://images.unsplash.com/photo-1600185365926-3a218a352e96?w=400', stock: 'En stock', sales: 340, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 14' },
  { id: 25, name: 'JORDAN 15 "STEALTH"', price: 190, image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=400', stock: 'En stock', sales: 290, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 15' },
  { id: 26, name: 'JORDAN 1 x FRAGMENT', price: 350, image: 'https://images.unsplash.com/photo-1600054800747-be294a6a0e3d?w=400', stock: 'En rupture de stock', sales: 200, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 27, name: 'JORDAN 1 x TRAVIS SCOTT', price: 400, image: 'https://images.unsplash.com/photo-1608643482765-3b46b8c3ea4b?w=400', stock: 'En rupture de stock', sales: 180, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 28, name: 'JORDAN 4 x OFF-WHITE', price: 450, image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400', stock: 'En rupture de stock', sales: 150, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 4' },
  { id: 29, name: 'JORDAN 1 LOW "PINK QUARTZ"', price: 120, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400', stock: 'En stock', sales: 450, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 30, name: 'JORDAN 1 MID "PASTEL"', price: 150, image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400', stock: 'En stock', sales: 380, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },
  { id: 31, name: 'JORDAN 35 "BRED"', price: 185, image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400', stock: 'En stock', sales: 320, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 35' },
  { id: 32, name: 'JORDAN 36 "FIRST LIGHT"', price: 200, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400', stock: 'En stock', sales: 280, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 36' },
  { id: 33, name: 'JORDAN 37 "PSYCHIC ENERGY"', price: 200, image: 'https://images.unsplash.com/photo-1616644681134-9f9e3e0b7b6d?w=400', stock: 'En rupture de stock', sales: 240, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 37' },
  { id: 34, name: 'JORDAN 38 "STAY LOYAL"', price: 200, image: 'https://images.unsplash.com/photo-1634739048-6ac4b8e3c70c?w=400', stock: 'En stock', sales: 220, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 38' },
  { id: 35, name: 'JORDAN LUKA 1 "BRED"', price: 120, image: 'https://images.unsplash.com/photo-1574439906568-ce73c1dc39a4?w=400', stock: 'En stock', sales: 190, promotion: false, brand: 'Air Jordan', model: 'Jordan Luka' },
  { id: 36, name: 'JORDAN LUKA 2 "MIDNIGHT NAVY"', price: 130, image: 'https://images.unsplash.com/photo-1608643473653-a0c4fff93e5f?w=400', stock: 'En stock', sales: 160, promotion: false, brand: 'Air Jordan', model: 'Jordan Luka' },
  { id: 37, name: 'JORDAN ZION 1 "NOAH"', price: 120, image: 'https://images.unsplash.com/photo-1593789198777-f29bc259780e?w=400', stock: 'En stock', sales: 140, promotion: false, brand: 'Air Jordan', model: '' },
  { id: 38, name: 'JORDAN ZION 2 "VOODOO"', price: 130, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', stock: 'En rupture de stock', sales: 120, promotion: false, brand: 'Air Jordan', model: 'Jordan Zion' },
  { id: 39, name: 'CHAUSSETTES JORDAN CREW (PACK DE 3)', price: 25, image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400', stock: 'En stock', sales: 890, promotion: false, brand: 'Air Jordan', model: 'Chaussettes' },
  { id: 40, name: 'CHAUSSETTES JORDAN NO SHOW (PACK DE 6)', price: 30, image: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=400', stock: 'En stock', sales: 670, promotion: true, brand: 'Air Jordan', model: 'Chaussettes' },
];

export default function SneakersPage() {
  const [models, setModels] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [page, setPage] = useState(1);
  const [modelOpen, setModelOpen] = useState(true);
  const [brandOpen, setBrandOpen] = useState(true);
  
  const itemsPerPage = 12;
  const uniqueModels = [...new Set(products.map((p) => p.model).filter(m=> m && m.trim() !== "" ))];
  const uniqueBrands = [...new Set(products.map((p) => p.brand).filter(m=> m && m.trim() !== "" ))];

  const filtered = useMemo(() => {
    let result = products.filter(p => 
      (models.length === 0 || models.includes(p.model)) && 
      (brands.length === 0 || brands.includes(p.brand))
    );

    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-high-low': return b.price - a.price;
        case 'price-low-high': return a.price - b.price;
        case 'newest': return b.id - a.id;
        default: return b.sales - a.sales;
      }
    });

    return result;
  }, [models, brands, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const current = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const toggle = (list, setList, item) => {
    setList(prev => prev.includes(item) ? prev.filter(x => x !== item) : [...prev, item]);
    setPage(1);
  };

  const clear = () => {
    setModels([]);
    setBrands([]);
    setPage(1);


  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="flex">
          <div className="w-80 border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-900 mb-8">FILTER</h2>

            <div className="mb-8">
              <button onClick={() => setModelOpen(!modelOpen)} className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900">
                MODEL
                {modelOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {modelOpen && (
                <div className="space-y-3 mt-4 max-h-48 overflow-y-auto">
                  {uniqueModels.map(model => (
                    <label key={model} className="flex items-center text-sm">
                      <input type="checkbox" checked={models.includes(model)} onChange={() => toggle(models, setModels, model)} className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">{model}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-8">
              <button onClick={() => setBrandOpen(!brandOpen)} className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900">
                BRAND
                {brandOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {brandOpen && (
                <div className="space-y-3 mt-4">
                  {uniqueBrands.map(brand => (
                    <label key={brand} className="flex items-center text-sm">
                      <input type="checkbox" checked={brands.includes(brand)} onChange={() => toggle(brands, setBrands, brand)} className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button onClick={clear} className="text-sm text-gray-500 hover:text-gray-700 underline">Clear all filters</button>
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-lg font-medium text-gray-900">TOUT <span className="text-gray-500">{filtered.length}</span></h1>
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
                  <div className="text-lg font-bold text-gray-900">${product.price}+</div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
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