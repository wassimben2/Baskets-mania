// app/politique-confidentialite/page.tsx
import Navbar from '../components/navbar';
import Footer from '../components/Footer'

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl mb-8 font-black bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 bg-clip-text text-transparent drop-shadow-sm relative">
              Politique de confidentialité
            </h1>
            
            <div className="text-sm text-gray-500 mb-8">
              Dernière mise à jour : 15 février 2025
            </div>
            
            <div className="space-y-12">
              
           
              <section>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Cette politique de confidentialité explique comment <strong>Baskets Mania</strong> (le « Site », « nous », « notre » ou « nos ») 
                    collecte, utilise et divulgue vos informations personnelles lorsque vous visitez, utilisez nos services ou effectuez un achat sur 
                    basketsmania.com (le « Site ») ou communiquez autrement avec nous au sujet du Site (conjointement, les « Services »).
                  </p>
                  
                  <p>
                    Aux fins de la présente politique de confidentialité, « vous », « votre » et « vos » vous désignent en tant qu'utilisateur des Services, 
                    que vous soyez un client, un visiteur du site web ou une autre personne dont nous avons collecté les informations conformément à la présente politique de confidentialité.
                  </p>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                    <p className="text-orange-800">
                      <strong>Veuillez lire attentivement la présente politique de confidentialité.</strong> En utilisant les Services et en y accédant, 
                      vous acceptez la collecte, l'utilisation et la divulgation de vos informations comme décrit dans la présente politique de confidentialité. 
                      Si vous n'acceptez pas la présente politique de confidentialité, veuillez ne pas utiliser les Services ou y accéder.
                    </p>
                  </div>
                </div>
              </section>

              {/* Modifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Modifications de la présente politique de confidentialité
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre, notamment pour refléter les changements 
                    apportés à nos pratiques ou pour d'autres raisons opérationnelles, juridiques ou réglementaires. Nous publierons la politique de 
                    confidentialité révisée sur le Site, actualiserons la date de « Dernière mise à jour » et prendrons toute autre mesure requise par 
                    la législation en vigueur.
                  </p>
                </div>
              </section>

              {/* Collecte d'informations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Comment nous collectons et utilisons vos informations personnelles
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Pour fournir les Services, nous collectons des informations personnelles vous concernant issues de diverses sources, comme indiqué ci-dessous. 
                    Les informations que nous collectons et utilisons varient en fonction de la manière dont vous interagissez avec nous.
                  </p>
                  
                  <p>
                    En plus des utilisations spécifiques exposées ci-dessous, nous pouvons utiliser les informations que nous collectons à votre sujet pour 
                    communiquer avec vous, fournir ou améliorer les Services, nous conformer à toute obligation légale applicable, faire respecter les conditions 
                    de service applicables et protéger ou défendre les Services, nos droits et les droits de nos utilisateurs ou autres.
                  </p>
                </div>
              </section>

              {/* Types d'informations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Informations personnelles que nous collectons
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Informations que nous collectons directement auprès de vous
                    </h3>
                    <p className="mb-3">Les informations que vous nous soumettez directement via nos Services peuvent inclure :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Des coordonnées notamment votre nom, adresse, numéro de téléphone, et e-mail</li>
                      <li>Des informations de commande notamment votre nom, votre adresse de facturation, votre adresse d'expédition, votre confirmation de paiement, votre e-mail et numéro de téléphone</li>
                      <li>Des informations du compte notamment votre nom d'utilisateur, votre mot de passe, vos questions de sécurité et d'autres informations utilisées à des fins de sécurité du compte</li>
                      <li>Les informations sur le service à la clientèle notamment les informations que vous choisissez d'inclure dans vos communications avec nous</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Informations que nous collectons sur votre utilisation
                    </h3>
                    <p>
                      Nous pouvons également collecter automatiquement certaines informations sur votre interaction avec les Services (« Données d'utilisation »). 
                      Pour ce faire, nous pouvons utiliser des cookies, des pixels et des technologies similaires. Les Données d'utilisation peuvent inclure 
                      des informations sur la façon dont vous accédez à notre Site et à votre compte et les utilisez, y compris des informations sur l'appareil, 
                      des informations sur le navigateur, des informations sur votre connexion réseau, votre adresse IP et d'autres informations relatives à votre 
                      interaction avec les Services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Informations que nous obtenons de la part de tiers
                    </h3>
                    <p className="mb-3">Enfin, nous pouvons obtenir des informations vous concernant auprès de tiers, notamment :</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Des entreprises qui prennent en charge notre Site et nos Services, comme Shopify</li>
                      <li>Nos organismes de traitement des paiements, qui collectent des informations de paiement pour traiter vos commandes</li>
                      <li>Des technologies de suivi en ligne telles que les pixels, les balises Web, les kits de développeurs de logiciels, les bibliothèques tierces et les cookies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Utilisation des informations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Comment nous utilisons vos informations personnelles
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">🛍️ Fourniture des Produits et des Services</h3>
                      <p className="text-sm">
                        Pour traiter vos paiements, exécuter vos commandes, vous envoyer des notifications relatives à votre compte, 
                        créer et gérer votre compte, organiser l'expédition et faciliter les retours et échanges.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">📧 Marketing et publicité</h3>
                      <p className="text-sm">
                        Pour envoyer des communications marketing, publicitaires et promotionnelles par e-mail, SMS ou courrier postal, 
                        et pour vous montrer des publicités personnalisées.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">🔒 Sécurité et prévention de la fraude</h3>
                      <p className="text-sm">
                        Pour détecter, enquêter ou prendre des mesures concernant d'éventuelles activités frauduleuses, 
                        illégales ou malveillantes.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">💬 Communication et amélioration</h3>
                      <p className="text-sm">
                        Pour vous fournir le service à la clientèle et améliorer nos Services dans notre intérêt légitime 
                        d'assurer notre réactivité et maintenir notre relation commerciale.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
             

              {/* Divulgation */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Comment nous divulguons les informations personnelles
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>Dans certaines circonstances, nous pouvons divulguer vos informations personnelles à des tiers :</p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Catégorie d'informations
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                            Destinataires
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            Identifiants (coordonnées, informations de commande)
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Fournisseurs de services, partenaires commerciaux et marketing, affiliés
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            Informations commerciales
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Organismes de traitement des paiements, partenaires de traitement des commandes
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            Données d'utilisation et de géolocalisation
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            Fournisseurs d'analyse de données, partenaires du service à la clientèle
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Droits des utilisateurs */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Vos droits
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>Selon votre lieu de résidence, vous pouvez bénéficier des droits suivants :</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">👀 Droit d'accès/de savoir</h4>
                      <p className="text-blue-800 text-sm">Demander l'accès aux informations personnelles que nous détenons à votre sujet</p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">🗑️ Droit de suppression</h4>
                      <p className="text-red-800 text-sm">Demander que nous supprimions vos informations personnelles</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">✏️ Droit de correction</h4>
                      <p className="text-green-800 text-sm">Demander que nous corrigions vos informations personnelles</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">📤 Droit de portabilité</h4>
                      <p className="text-purple-800 text-sm">Recevoir une copie de vos informations personnelles</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Données sur les enfants */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  👶 Données sur les enfants
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p className="text-red-800">
                      <strong>Les Services ne sont pas destinés à être utilisés par des enfants</strong>, et nous ne collectons sciemment 
                      aucune information personnelle sur des enfants. Si vous êtes le parent ou le tuteur d'un enfant qui nous a fourni 
                      ses informations personnelles, vous pouvez nous contacter pour demander leur suppression.
                    </p>
                  </div>
                </div>
              </section>

              {/* Sécurité */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🔐 Sécurité et conservation de vos informations
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Sachez qu'aucune mesure de sécurité n'est parfaite ou inviolable et que nous ne pouvons pas garantir une « sécurité absolue ». 
                    De plus, toutes les informations que vous nous envoyez sont susceptibles de ne pas être sécurisées pendant leur transit.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Recommandation :</strong> Nous vous recommandons de ne pas utiliser de canaux non sécurisés pour nous communiquer 
                      des informations sensibles ou confidentielles.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  📞 Contact
                </h2>
                <div className="text-gray-600 leading-relaxed">
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <p className="mb-4">
                      Si vous avez des questions sur nos pratiques en matière de confidentialité ou cette politique de confidentialité, 
                      ou si vous souhaitez exercer l'un des droits dont vous disposez, veuillez nous contacter :
                    </p>
                    
                    <div className="space-y-2">
                      <p className="font-medium text-orange-800">
                        📧 Email : <a href="mailto:basketsmania.shop@gmail.com" className="text-orange-600 hover:underline">basketsmania.shop@gmail.com</a>
                      </p>
                      <p className="font-medium text-orange-800">
                        📍 Adresse : Dar El Beïda, Dar El Beïda, 16033, DZ
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer note */}
              <div className="text-center text-sm text-gray-500 pt-8 border-t">
                <p>📍 <strong>Baskets Mania – مرجعكم الأول في عالم السنيكرز 🏀👟</strong></p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}