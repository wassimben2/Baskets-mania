// app/expedition/page.tsx
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function ExpeditionPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Titre */}
            <h1 className="text-4xl mb-8 font-black bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">
              Expédition & Livraison
            </h1>

            <div className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : 15 février 2025
            </div>

            <div className="space-y-12">

              {/* Intro */}
              <section>
                <p className="text-gray-600 leading-relaxed">
                  Chez <strong>Baskets Mania</strong>, nous nous engageons à expédier vos commandes 
                  dans les meilleures conditions afin de garantir une livraison rapide et sécurisée.  
                  Voici les détails de notre politique d’expédition :
                </p>
              </section>

              {/* Délais et Modes de Livraison */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🚚 Délais et Modes de Livraison
                </h2>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
                  <li>Expédition sous <strong>24 heures</strong> après confirmation de la commande.</li>
                  <li>Livraison disponible via <strong>ZR EXPRESS</strong>.</li>
                  <li>Un numéro de suivi vous sera communiqué une fois la commande expédiée.</li>
                </ul>
              </section>

              {/* Zones de Livraison */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🌍 Zones de Livraison
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Livraison nationale disponible dans toutes les régions de l’Algérie.
                </p>
              </section>

              {/* Frais d’Expédition */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  💰 Frais d’Expédition
                </h2>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
                  <li>Livraison gratuite au bureau <strong>ZR EXPRESS</strong>.</li>
                  <li>Livraison payante à domicile.</li>
                </ul>
              </section>

              {/* Conditions de Livraison */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  📦 Conditions de Livraison
                </h2>
                <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
                  <li>L’adresse de livraison doit être exacte et complète pour éviter tout retard.</li>
                  <li>En cas d’absence lors de la livraison, le transporteur pourra déposer le colis en point relais ou programmer une seconde tentative.</li>
                  <li>Nous ne sommes pas responsables des retards dus aux transporteurs ou aux circonstances exceptionnelles (météo, grèves, etc.).</li>
                </ul>
              </section>

          

              {/* Message final */}
              <section>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-gray-700 leading-relaxed">
                  <p>
                    Nous faisons le maximum pour que vos sneakers vous parviennent rapidement 
                    et en toute sécurité. Merci pour votre confiance !
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
