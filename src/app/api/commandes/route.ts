import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST : créer une commande
export async function POST(req: Request) {
  try {
    const body = await req.json();

   const {
  nom,
  prenom,
  phone_number,
  wilaya,
  commune,
} = body;

const commande = await prisma.commande.create({
  data: {
    nom,
    prenom,
    phone_number,
    wilaya,
    commune,
  },
});


    return NextResponse.json({ success: true, commande }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de la création de la commande:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}

// GET : récupérer toutes les commandes
export async function GET() {
  try {
    const commandes = await prisma.commande.findMany({
      orderBy: { created_at: "desc" },
    });
    return NextResponse.json({ success: true, commandes });
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
