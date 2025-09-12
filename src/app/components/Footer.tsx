"use client";
import { useState } from "react";
import { ChevronDown, Shield, RotateCcw, FileText, Truck, Info } from "lucide-react";

const Footer: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Français");

  return (
    <footer 
      className="relative text-white bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
      style={{
        backgroundImage: "url('/100.jpg')",
      }}
    >
      {/* Overlay sombre stylé */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
      
      {/* Contenu du footer */}
      <div className="relative w-full max-w-6xl mx-auto py-16 px-6 z-10">
        
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Colonne gauche - Branding */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Baskets Mania</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Votre destination exclusive pour les sneakers les plus recherchées. Authenticité garantie, style inégalé.
              </p>
            </div>
            
            {/* Section langue stylée */}
            <div>
              <label className="block text-sm text-gray-400 mb-3 font-medium">
                Choisir la langue
              </label>
              <div className="relative inline-block">
                <select
                  id="language-select"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="appearance-none bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 cursor-pointer hover:bg-white/20 transition-all duration-300 shadow-lg font-medium"
                >
                  <option value="Français" className="bg-gray-900 text-white">Français</option>
                  <option value="English" className="bg-gray-900 text-white">English</option>
                  <option value="Español" className="bg-gray-900 text-white">Español</option>
                  <option value="Deutsch" className="bg-gray-900 text-white">Deutsch</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Colonne droite - Liens */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white mb-6">Informations légales</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/politique"
                className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <Shield className="text-orange-400 group-hover:text-orange-300 w-5 h-5" />
                <span className="text-gray-300 group-hover:text-white font-medium">Confidentialité</span>
              </a>
              
              <a
                href="/remboursement"
                className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <RotateCcw className="text-orange-400 group-hover:text-orange-300 w-5 h-5" />
                <span className="text-gray-300 group-hover:text-white font-medium">Remboursement</span>
              </a>
              
              <a
                href="/conditions"
                className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <FileText className="text-orange-400 group-hover:text-orange-300 w-5 h-5" />
                <span className="text-gray-300 group-hover:text-white font-medium">Conditions</span>
              </a>
              
              <a
                href="/expeditions"
                className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <Truck className="text-orange-400 group-hover:text-orange-300 w-5 h-5" />
                <span className="text-gray-300 group-hover:text-white font-medium">Expédition</span>
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur stylé */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 w-12 h-px"></div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400">
            <span className="font-medium">© 2025, Baskets Mania.</span>
            <span className="ml-1">Tous droits réservés.</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-orange-500/30">
              <span className="text-sm font-medium text-orange-300 flex items-center space-x-2">
                <Info className="w-4 h-4" />
                <span>Made with passion for sneaker lovers</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
