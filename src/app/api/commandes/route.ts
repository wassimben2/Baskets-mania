// app/api/commandes/route.js
import { NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET - Récupérer toutes les commandes
export async function GET() {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM commandes ORDER BY date_commande DESC'
    );
    return NextResponse.json({ commandes: rows });
  } catch (error) {
    console.error('Erreur lors de la récupération des commandes:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des commandes' },
      { status: 500 }
    );
  }
}

// POST - Créer une nouvelle commande
export async function POST(request) {
  try {
    const body = await request.json();
    
    const {
      fullName,
      phone,
      wilaya,
      commune,
      sneakerName,
      size,
      quantity,
      currentPrice
    } = body;

    // Validation des données
    if (!fullName || !phone || !wilaya || !commune || !sneakerName || !size || !quantity || !currentPrice) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      );
    }

    // Calculer le prix total
    const prixTotal = currentPrice * quantity;

    // Insérer dans la base de données
    const [result] = await pool.execute(
      `INSERT INTO commandes (nom_prenom, telephone, wilaya, commune, basket_modele, pointure, quantite, prix_unitaire, prix_total) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [fullName, phone, wilaya, commune, sneakerName, size, quantity, currentPrice, prixTotal]
    );

    return NextResponse.json({
      success: true,
      message: 'Commande créée avec succès',
      commandeId: result.insertId
    });

  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la création de la commande' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour le statut d'une commande
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, statut } = body;

    if (!id || !statut) {
      return NextResponse.json(
        { error: 'ID et statut sont obligatoires' },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      'UPDATE commandes SET statut_commande = ? WHERE id = ?',
      [statut, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Commande non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Statut de la commande mis à jour'
    });

  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une commande
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID de la commande requis' },
        { status: 400 }
      );
    }

    const [result] = await pool.execute(
      'DELETE FROM commandes WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Commande non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Commande supprimée avec succès'
    });

  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    );
  }
}