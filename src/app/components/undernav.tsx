"use client";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa";

export default function Undernav() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Vidéo en background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>

      {/* Contenu par-dessus */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4 pt-24">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <FaStar className="text-yellow-400 text-sm" />
          <span className="text-white text-sm font-medium">Produit Non original</span>
          <FaStar className="text-yellow-400 text-sm" />
        </div>

        {/* Titre principal */}
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-2xl leading-tight">
          Trouvez Vos
          <br />
          <span className="bg-gradient-to-r from-[#c68642] to-[#f4a460] bg-clip-text text-transparent">
            Sneakers
          </span>
          <br />
          Parfaites
        </h1>

        {/* Texte */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl leading-relaxed">
          Découvrez notre collection exclusive de sneakers tendance 
          <br />avec des designs uniques et un confort exceptionnel
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/sneakerss">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#c68642] to-[#f4a460] text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-[#c68642]/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f4a460] to-[#c68642] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                Découvrir la Collection
                <FaArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </Link>

          <Link href="/nouveautes">
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Voir les Nouveautés
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
