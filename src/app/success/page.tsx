"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/6.jpg", "/7.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-red-200 to-orange-300 rounded-full opacity-20 blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-200 to-green-300 rounded-full opacity-25 blur-lg animate-pulse delay-2000"></div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
      
      </div>

      <div className="flex items-center justify-center min-h-screen px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center border border-gray-200/50 relative"
        >
          
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="bg-white rounded-full p-4 shadow-xl border-4 border-green-100"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
              Commande Confirmée !
            </h1>
            
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">
              Merci pour votre confiance 🙌<br/>
              Notre équipe vous contactera très bientôt pour confirmer votre commande.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-10 border border-gray-200 shadow-inner"
          >
            <div className="text-left space-y-3">
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-2xl mr-3">✅</span>
                <span>Livraison <span className="text-green-600 font-bold">gratuite</span> au bureau.</span>
              </div>
              <div className="flex items-center text-gray-700 text-lg">
                <span className="text-2xl mr-3">🚚</span>
                <span>Livraison <span className="text-red-500 font-bold">payante</span> à domicile.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/"
              className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span className="inline-flex items-center">
                Retour à l'accueil
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9l9 9-9 9" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/sneakerss"
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              <span className="inline-flex items-center">
                Voir les Sneakers
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}