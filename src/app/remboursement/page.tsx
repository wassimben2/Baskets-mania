// app/politique-remboursement/page.tsx
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

export default function PolitiqueRemboursementPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Titre */}
            <h1 className="text-4xl mb-8 font-black bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">
              Politique de remboursement
            </h1>

            <div className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : 15 février 2025
            </div>

            <div className="space-y-12">
              
              {/* Vérification avant paiement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Vérification avant paiement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nos clients ont la possibilité de vérifier l’état et la qualité des baskets 
                  avant de procéder au paiement. Cette mesure vise à garantir une transparence 
                  totale et la satisfaction de nos clients.
                </p>
              </section>

              {/* Échange en cas de mauvaise pointure */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Échange en cas de mauvaise pointure
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Si la pointure ne convient pas, nous proposons un échange contre une taille 
                    différente du même modèle, sous réserve de disponibilité.
                  </p>
                  <p>
                    Si la taille souhaitée n’est pas disponible, un échange peut être effectué 
                    contre un autre modèle de valeur équivalente.
                  </p>
                </div>
              </section>

              {/* Aucun remboursement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Aucun remboursement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Nous ne procédons à aucun remboursement, quel que soit le motif. 
                  Les clients peuvent uniquement bénéficier d’un échange selon les conditions décrites ci-dessous.
                </p>
              </section>

              {/* Conditions d'échange */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Conditions pour un échange
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed ml-4">
                  <li>L’échange doit être demandé dans un délai de <strong>24h après l’achat</strong>.</li>
                  <li>La paire doit être neuve, non portée et dans son emballage d’origine.</li>
                  <li>Le ticket de caisse ou la preuve d’achat est obligatoire.</li>
                </ul>
              </section>

              {/* Message final */}
              <section>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-gray-700 leading-relaxed">
                  <p>
                    Merci pour votre confiance en <strong>Baskets Mania</strong>. 
                    Nous restons à votre disposition pour toute question et mettons un point d’honneur 
                    à vous offrir une expérience d’achat agréable et transparente.
                  </p>
                </div>
              </section>

              {/* Footer note */}
              <div className="text-center text-sm text-gray-500 pt-8 border-t">
                <p>
                  📍 <strong>Baskets Mania – Votre référence en sneakers</strong>
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
