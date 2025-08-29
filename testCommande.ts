// testCommande.ts
import { PrismaClient } from './src/generated/prisma/index.js';


const prisma = new PrismaClient();

async function main() {
  // Créer une commande pour tester
  const newCommande = await prisma.commande.create({
    data: {
      customer_name: "Wassim",
      phone_number: "123456789",
      wilaya: "Alger",
      commune: "Bab Ezzouar",
      sneaker_name: "Air Jordan 1",
      size: "42",
      quantity: 1,
      original_price: 200,
      current_price: 180,
      currency: "€",
      wants_offers: true,
    },
  });
  console.log("Commande créée :", newCommande);

  // Lire toutes les commandes
  const commandes = await prisma.commande.findMany();
  console.log("Toutes les commandes :", commandes);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
