// app/informations/page.tsx
import Navbar from '../components/navbar';
import Footer from '../components/Footer'
export default function InformationsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl  mb-8 font-black  bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">Politique de remboursement</h1>
            
            <div className="space-y-12">
             

              

              {/* Politique de remboursement */}
              <section>
                
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>📍 <strong>Baskets Mania – مرجعكم الأول في عالم السنيكرز 🏀👟</strong></p>

                  <p>
                    Chez Baskets Mania, nous mettons un point d’honneur à offrir à nos clients une expérience 
                    d’achat de qualité. Afin d’assurer une transparence totale, voici notre politique concernant les retours et échanges :
                  </p>

                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      <strong>Vérification avant paiement :</strong>  
                      Nos clients ont la possibilité de vérifier l’état et la qualité des baskets avant de procéder au paiement.
                    </li>
                    <li>
                      <strong>Échange en cas de mauvaise pointure :</strong>  
                      Si la pointure ne convient pas, nous proposons un échange contre une taille différente du même modèle, sous réserve de disponibilité.  
                      Si la taille souhaitée n’est pas disponible, un échange peut être effectué contre un autre modèle de valeur équivalente.
                    </li>
                    <li>
                      <strong>Aucun remboursement :</strong>  
                      Nous ne procédons à aucun remboursement, quel que soit le motif.
                    </li>
                    <li>
                      <strong>Conditions pour un échange :</strong>  
                      L’échange doit être demandé dans un délai de <strong>24h</strong> après l’achat.  
                      La paire doit être neuve, non portée et dans son emballage d’origine.  
                      Le ticket de caisse ou la preuve d’achat est obligatoire.
                    </li>
                  </ol>

                  <p>
                    Nous vous remercions pour votre confiance et restons à votre disposition pour toute question !
                  </p>

                  <p>📍 <strong>Baskets Mania – Votre référence en sneakers 🏀👟</strong></p>
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
