// app/informations/page.tsx
import Navbar from '../components/Navbar';


export default function InformationsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">INFORMATIONS</h1>
            
            <div className="space-y-12">
              {/* À propos */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">À propos de nous</h2>
                <p className="text-gray-600 leading-relaxed">
                  Sneakers Shop est votre destination privilégiée pour les sneakers premium. 
                  Depuis notre création, nous nous engageons à offrir les modèles les plus exclusifs 
                  et les plus recherchés du marché. Notre passion pour la culture sneaker nous pousse 
                  à sélectionner uniquement les meilleures pièces pour nos clients.
                </p>
              </section>

              {/* Livraison */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Livraison</h2>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Livraison standard :</strong> 3-5 jours ouvrés - Gratuite dès 100€</p>
                  <p><strong>Livraison express :</strong> 1-2 jours ouvrés - 9.99€</p>
                  <p><strong>Retrait en magasin :</strong> Disponible sous 2h - Gratuit</p>
                  <p>Toutes nos commandes sont expédiées avec suivi et assurance.</p>
                </div>
              </section>

              {/* Retours */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Retours & Échanges</h2>
                <div className="space-y-3 text-gray-600">
                  <p>Vous disposez de 30 jours pour retourner vos articles.</p>
                  <p>Les articles doivent être dans leur état d'origine, avec tous les emballages.</p>
                  <p>Les retours sont gratuits pour les commandes de plus de 100€.</p>
                  <p>Le remboursement est effectué sous 5-7 jours ouvrés après réception.</p>
                </div>
              </section>

              {/* Authenticité */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Garantie d'authenticité</h2>
                <p className="text-gray-600 leading-relaxed">
                  Tous nos produits sont 100% authentiques. Nous travaillons directement avec 
                  les marques et des revendeurs agréés. Chaque paire est vérifiée par nos experts 
                  avant expédition. En cas de doute sur l'authenticité d'un produit reçu, 
                  nous nous engageons à un remboursement intégral.
                </p>
              </section>

              {/* Tailles */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Guide des tailles</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Nos tailles correspondent aux standards européens. 
                    En cas de doute, n'hésitez pas à nous contacter.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="font-medium">EU</div>
                    <div className="font-medium">US</div>
                    <div className="font-medium">UK</div>
                    <div>40</div><div>7</div><div>6</div>
                    <div>41</div><div>8</div><div>7</div>
                    <div>42</div><div>9</div><div>8</div>
                    <div>43</div><div>10</div><div>9</div>
                    <div>44</div><div>11</div><div>10</div>
                    <div>45</div><div>12</div><div>11</div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">Besoin d'aide ?</h2>
                <p className="text-gray-600 mb-4">
                  Notre équipe customer service est disponible pour répondre à toutes vos questions.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>📧 Email : support@sneakersshop.com</p>
                  <p>📞 Téléphone : +33 1 23 45 67 89</p>
                  <p>💬 Chat en ligne : Disponible 9h-18h</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
