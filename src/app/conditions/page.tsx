// app/conditions/page.tsx
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function ConditionsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Titre */}
            <h1 className="text-4xl mb-8 font-black bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">
              Conditions générales
            </h1>

            <div className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : 15 février 2025
            </div>

            <div className="space-y-12">

              {/* Conseil et Accompagnement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Conseil et Accompagnement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Notre équipe est à votre disposition pour vous conseiller et vous aider 
                  à choisir la paire qui correspond le mieux à vos besoins et préférences.
                  Nous fournissons des informations détaillées sur les modèles, 
                  les tailles et l’entretien des sneakers.
                </p>
              </section>

              {/* Disponibilité des Produits */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Disponibilité des Produits
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nos stocks sont mis à jour régulièrement, mais certaines tailles ou modèles 
                  peuvent être en rupture.  
                  Si la paire que vous recherchez n’est pas disponible dans votre pointure, 
                  nous vous proposerons une alternative équivalente en fonction des stocks disponibles.
                </p>
              </section>

              {/* Service Après-Vente */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Service Après-Vente
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pour toute question ou assistance après achat, notre service client est disponible 
                  en boutique ou via nos contacts officiels.  
                  Nous nous engageons à vous offrir une expérience d’achat fiable et agréable.  
                  Merci pour votre confiance !
                </p>
              </section>

              {/* Message final */}
              <section>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-gray-700 leading-relaxed">
                  <p>
                    En choisissant <strong>Baskets Mania</strong>, vous bénéficiez de conseils personnalisés, 
                    d’un suivi de qualité et d’un accompagnement à chaque étape de votre expérience d’achat.
                  </p>
                </div>
              </section>

              {/* Footer note */}
              <div className="text-center text-sm text-gray-500 pt-8 border-t">
                <p>
                  📍 <strong>Baskets Mania – Votre destination sneakers premium</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
