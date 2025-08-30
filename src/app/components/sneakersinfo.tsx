"use client";
import AfficherCommandes from "../components/affichercommande";
import React, { useState } from "react";
import { ShoppingCart, Phone, User, MapPin, Building, Minus, Plus } from "lucide-react";

interface SneakersInfoProps {
  name: string;
  images: string[];
  description: string;
  originalPrice?: number;
  currentPrice: number;
  currency?: string;
  sizes?: number[];
  isPromotion?: boolean;
  features?: string[];
  colorways?: { name: string; color: string }[];
  soldOutSizes?: number[];
}

export default function SneakersInfo({
  name,
  images,
  description,
  originalPrice,
  currentPrice,
  currency = "DZD",
  sizes = [40, 41, 42, 43, 44, 45],
  isPromotion = false,
  features = [],
  colorways = [],
  soldOutSizes = []
}: SneakersInfoProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || "/api/placeholder/600/600");
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColorway, setSelectedColorway] = useState(colorways[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    wilaya: '',
    commune: ''
  });
  const [wantsOffers, setWantsOffers] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-DZ', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleClickWhatsApp = () => {
    if (!selectedSize) {
      alert("Veuillez sélectionner une pointure !");
      return;
    }

    const phoneNumber = "213775446582";
    const totalPrice = currentPrice * quantity;
    const message = `Salam, Rani hab ndir commande :
Produit : ${name} - Taille : ${selectedSize} - Prix : ${formatPrice(totalPrice)} ${currency} x ${quantity}.
Est-ce que ta9der tconfirmili ida disponible ? Merci d'avance.`;

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  
  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };
    const handleCommander = async () => {
    if (!formData.fullName || !formData.phone || !formData.wilaya || !formData.commune) {
      alert("Veuillez remplir toutes les informations de livraison !");
      return;
    }

    if (!selectedSize) {
      alert("Veuillez sélectionner une pointure !");
      return;
    }

    try {
      const res = await fetch("/api/commandes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: formData.fullName,
          phone_number: formData.phone,
          wilaya: formData.wilaya,
          commune: formData.commune,
          sneaker_name: name,
          size: selectedSize,
          quantity: quantity,
          original_price: originalPrice || currentPrice,
          current_price: currentPrice,
          currency: currency,
          wants_offers: wantsOffers,
        }),
      });

      if (res.ok) {
        alert("✅ Votre commande a été enregistrée avec succès !");
        setFormData({ fullName: "", phone: "", wilaya: "", commune: "" });
        setSelectedSize(null);
        setQuantity(1);
      } else {
        alert("❌ Erreur lors de l'enregistrement de la commande.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("⚠️ Problème de connexion au serveur.");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-orange-50 p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Gradient Overlay animé */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5 animate-pulse"></div>

      {/* Bulles décoratives */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-red-200 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-20 right-16 w-8 h-8 bg-orange-200 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-red-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-gray-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-orange-100 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-red-100 rounded-full opacity-60 animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-10 left-1/2 w-3 h-3 bg-orange-200 rounded-full opacity-80 animate-bounce" style={{animationDelay: '2.5s'}}></div>
      
      {/* Lignes décoratives flottantes */}
      <div className="absolute top-0 left-1/4 w-0.5 h-32 bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-0 right-1/3 w-0.5 h-40 bg-gradient-to-t from-transparent via-orange-200 to-transparent opacity-25 animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Swoosh shapes */}
      <div className="absolute top-1/3 right-20 w-16 h-8 bg-gradient-to-r from-red-100 to-transparent rounded-full opacity-20 transform rotate-12 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-16 w-20 h-6 bg-gradient-to-l from-orange-100 to-transparent rounded-full opacity-25 transform -rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
        
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-6 border border-white/50 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 font-medium uppercase tracking-wide bg-gray-50/50 px-3 py-1 rounded-full">
                BASKETS MANIA
              </div>
              {isPromotion && (
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
                  PROMOTION
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-gray-900 bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent">
                {name}
              </h1>
              
              <div className="flex items-center gap-4">
                {originalPrice && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(originalPrice)} {currency}
                  </span>
                )}
                <span className="text-3xl font-black bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">
                  {formatPrice(currentPrice)} {currency}
                </span>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-3 rounded-2xl">
                <p className="text-green-700 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Frais de livraison offerts
                </p>
              </div>
            </div>

          
           <div className="space-y-4">
  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
    <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
    Choisissez votre pointure
  </h3>
  <div className="grid grid-cols-3 gap-3">
    {sizes.map((size) => {
      const isSoldOut = soldOutSizes.includes(size);
      return (
        <button
          key={size}
          onClick={() => !isSoldOut && setSelectedSize(size)}
          className={`py-4 rounded-2xl font-bold transition-all duration-300 relative group ${
            selectedSize === size && !isSoldOut
              ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105"
              : isSoldOut
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 shadow-md hover:shadow-lg"
          }`}
        >
          <span className={isSoldOut ? "line-through" : ""}>{size}</span>
          {isSoldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-red-500/90 rounded-2xl text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              EPUISÉ
            </div>
          )}
        </button>
      );
    })}
  </div>
</div>


          
            <div className="space-y-4">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner relative group">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  key={selectedImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageSelect(image)}
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-3 transition-all duration-300 hover:scale-110 shadow-lg ${
                        selectedImage === image
                          ? "border-gradient-to-r from-red-500 to-orange-500 shadow-xl scale-105"
                          : "border-gray-200 hover:border-gray-400 hover:shadow-xl"
                      }`}
                      style={selectedImage === image ? {
                        borderImage: 'linear-gradient(45deg, #ef4444, #f97316) 1'
                      } : {}}
                    >
                      <img
                        src={image}
                        alt={`${name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 space-y-6 border border-white/50 hover:shadow-3xl transition-all duration-500">
           
            <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-2xl p-4 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Mon Panier</h3>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={selectedImage}
                  alt={name}
                  className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800">{name} - Taille {selectedSize || '40'}</h4>
                  <p className="text-xl font-black bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">{formatPrice(currentPrice)} {currency}</p>
                </div>
              </div>
            </div>

           
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 text-center flex items-center justify-center gap-2">
                <div className="w-2 h-6 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                Vos Informations de Livraison
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nom et Prénom"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-400 text-black font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Numéro de téléphone"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-400 text-black font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <input
                    type="text"
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleInputChange}
                    placeholder="Wilaya"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-400 text-black font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-white" />
                  </div>
                  <input
                    type="text"
                    name="commune"
                    value={formData.commune}
                    onChange={handleInputChange}
                    placeholder="Commune"
                    className="w-full pl-14 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-100 focus:border-red-400 text-black font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <input
                    type="checkbox"
                    id="offers"
                    checked={wantsOffers}
                    onChange={(e) => setWantsOffers(e.target.checked)}
                    className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded-lg focus:ring-red-500 text-black"
                  />
                  <label htmlFor="offers" className="text-sm text-gray-700 font-medium">
                    Je souhaite recevoir les offres spéciales
                  </label>
                </div>
              </div>
            </div>

          
            <div className="border-t-2 border-gray-100 pt-6 space-y-4">
              <div className="space-y-3 bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-black font-medium">Prix unitaire</span>
                  <span className="font-bold text-black">{formatPrice(currentPrice)} {currency}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Livraison</span>
                  <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">GRATUITE</span>
                </div>
                
                <div className="flex items-center justify-between text-xl font-black pt-3 border-t-2 border-gray-200">
                  <span className="bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">Total</span>
                  <span className="bg-gradient-to-r from-gray-900 to-red-600 bg-clip-text text-transparent">{formatPrice(currentPrice * quantity)} {currency}</span>
                </div>
              </div>

            
              <div className="flex items-center justify-center gap-4 my-6">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="bg-white border-2 border-gray-200 px-6 py-3 rounded-2xl shadow-sm">
                  <span className="text-2xl font-black text-black">{quantity}</span>
                </div>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

            
              <div className="space-y-3">
                <button 
  onClick={handleCommander}
  className="group w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-2xl font-black text-lg hover:from-orange-600 hover:to-red-600 flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
>
  <ShoppingCart className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12" />
  COMMANDER MAINTENANT
</button>


              <button
        onClick={handleClickWhatsApp}
        className="group w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-5 rounded-2xl font-black text-lg hover:from-green-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-3xl"
      >
        <Phone className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-12" />
        Commander via WhatsApp
      </button>
      
              </div>
            </div>
          </div>
        </div>
        <AfficherCommandes />
      </div>
    </div>
    
  );
}