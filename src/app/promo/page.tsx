// src/app/enfants/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';

const EnfantsPage = () => {
  // Base de données des produits enfants
  const products = [
    { id: 1, name: 'AIR JORDAN 1 HIGH "HYPER BLUE"', price: 11900, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_dc7887ef-941a-4d07-86ba-e990fcfd545c.jpg?v=1740004806', category: 'hommes', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
    { id: 2, name: 'AIR JORDAN 1 HIGH "ROYAL BLUE"', price: 12400, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_a975c576-ecb2-4b32-8ff4-5ed7d5d22995.jpg?v=1740003678', category: 'hommes', stock: 'En stock', sales: 0, promotion: true, brand: 'Air Jordan', model: 'Air Jordan 1' },
    { id: 3, name: 'AIR JORDAN 11 OG "BRED"', price: 12990, image: 'https://basketsmania.com/cdn/shop/files/69ea72be90994a2b1ab299c1959e1a4b_1.jpg?v=1739615360', category: 'hommes', stock: 'Épuisé', sales: 0, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 11' },
    { id: 4, name: 'AIR JORDAN 5 "SHATTERED BACKBOARD"', price: 11800, image: 'https://basketsmania.com/cdn/shop/files/rn-image_picker_lib_temp_c4922142-81f5-4c5a-a66e-9f7f3421171f.jpg?v=1740003065', category: 'hommes', stock: 'Épuisé', sales: 0, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 5' },
    { id: 5, name: 'AIR JORDAN 1 HIGH "PALOMINO"', price: 12800, image: 'https://basketsmania.com/cdn/shop/files/IMG_20250212_191732_371.jpg?v=1739385710', category: 'hommes', stock: 'Épuisé', sales: 0, promotion: false, brand: 'Air Jordan', model: 'Air Jordan 1' },

  ];

  // États pour les filtres et pagination
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [modelExpanded, setModelExpanded] = useState(true);
  const [brandExpanded, setBrandExpanded] = useState(true);
  
  const itemsPerPage = 12;

  // Extraire les modèles et marques uniques
  const uniqueModels = [...new Set(products.map(p => p.model))];
  const uniqueBrands = [...new Set(products.map(p => p.brand))];

  // Logique de filtrage et tri
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const modelMatch = selectedModels.length === 0 || selectedModels.includes(product.model);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      return modelMatch && brandMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          return b.sales - a.sales;
        case 'price-high-low':
          return b.price - a.price;
        case 'price-low-high':
          return a.price - b.price;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedModels, selectedBrands, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const toggleModel = (model) => {
    setSelectedModels(prev => 
      prev.includes(model) 
        ? prev.filter(m => m !== model)
        : [...prev, model]
    );
    setCurrentPage(1);
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const ProductCard = ({ product }) => (
    <div className="group cursor-pointer">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
          KIDS
        </div>
        {product.stock === 'En rupture de stock' && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            SOLD OUT
          </div>
        )}
        {product.promotion && product.stock !== 'En rupture de stock' && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            SALE
          </div>
        )}
      </div>
      
      <div>
        <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
        <h3 className="font-medium text-sm text-gray-900 mb-2 h-10 overflow-hidden">{product.name}</h3>
        <div className="text-lg font-bold text-gray-900">
          ${product.price}+
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="flex">
          {/* Sidebar Filtres */}
          <div className="w-80 border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto">
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-1">FILTER</h2>
            </div>

            {/* Filtre MODEL */}
            <div className="mb-8">
              <button
                onClick={() => setModelExpanded(!modelExpanded)}
                className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900"
              >
                MODEL
                {modelExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {modelExpanded && (
                <div className="space-y-3 mt-4 max-h-48 overflow-y-auto">
                  {uniqueModels.map(model => (
                    <label key={model} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(model)}
                        onChange={() => toggleModel(model)}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">{model}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filtre BRAND */}
            <div className="mb-8">
              <button
                onClick={() => setBrandExpanded(!brandExpanded)}
                className="flex items-center justify-between w-full py-3 text-left font-medium text-gray-900"
              >
                BRAND
                {brandExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {brandExpanded && (
                <div className="space-y-3 mt-4">
                  {uniqueBrands.map(brand => (
                    <label key={brand} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setSelectedModels([]);
                setSelectedBrands([]);
                setCurrentPage(1);
              }}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all filters
            </button>
          </div>

          {/* Contenu principal */}
          <div className="flex-1 p-6">
            {/* Header avec résultats et tri */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h1 className="text-lg font-medium text-gray-900">
                  PROMO <span className="text-gray-500">{filteredAndSortedProducts.length}</span>
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-none bg-transparent text-sm font-medium text-gray-900 focus:outline-none cursor-pointer"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>

            {/* Grille produits */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-1 text-sm font-medium rounded ${
                          currentPage === pageNum
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">No products found with current filters</div>
                <button
                  onClick={() => {
                    setSelectedModels([]);
                    setSelectedBrands([]);
                    setCurrentPage(1);
                  }}
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EnfantsPage;
