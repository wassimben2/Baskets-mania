// src/app/contact/page.tsx
import Navbar from '../components/navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-red-200 to-orange-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-200 to-red-200 rounded-full opacity-20 blur-xl animate-pulse delay-500"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 bg-clip-text text-transparent leading-tight">
                Contact
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Vous pouvez nous contacter par mail sur notre boite mail : basketsmania.shop@gmail.com ou bien sur le
              </p>
              <p className="text-xl font-semibold text-gray-800 mt-2">
                +213775446582
              </p>
              <p className="text-lg text-gray-600 mt-4 font-arabic" dir="rtl">
                يمكنك الاتصال بنا عبر البريد الإلكتروني الخاص بنا أو على الرقم التالي 0775446582
              </p>
            </div>

            {/* Formulaire de contact moderne */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-8 md:p-12">
              <form className="space-y-8">
                {/* Première ligne - Nom et Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Nom"
                      className="w-full px-6 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg placeholder-gray-500"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder="E-mail *"
                      className="w-full px-6 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Numéro de téléphone */}
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="Numéro de téléphone"
                    className="w-full px-6 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg placeholder-gray-500"
                  />
                </div>

                {/* Commentaire */}
                <div className="relative">
                  <textarea 
                    rows={6}
                    placeholder="Commentaire"
                    className="w-full px-6 py-4 bg-gray-50/80 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-lg placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                {/* Bouton Envoyer */}
                <div className="text-left">
                  <button 
                    type="submit" 
                    className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <span className="mr-3">Envoyer</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Section contact rapide */}
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">basketsmania.shop@gmail.com</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <p className="text-gray-600 text-sm">+213775446582</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Disponibilité</h3>
                <p className="text-gray-600 text-sm">7j/7 - 24h/24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Effet de parallaxe en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
}