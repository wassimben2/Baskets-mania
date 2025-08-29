"use client";

import React, { useEffect, useState } from "react";

interface Commande {
  id: number;
  nom: string;
  prenom: string;
  phone_number: string;
  wilaya: string;
  commune: string;
  created_at: string;
}

export default function AfficherCommandes() {
  const [commandes, setCommandes] = useState<Commande[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/commandes") // ⚠️ bien mettre le même endpoint que ton API route
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setCommandes(data.commandes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des commandes...</p>;
  if (commandes.length === 0) return <p>Aucune commande pour le moment.</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Toutes les commandes</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Nom</th>
            <th className="border border-gray-300 p-2">Prénom</th>
            <th className="border border-gray-300 p-2">Téléphone</th>
            <th className="border border-gray-300 p-2">Wilaya</th>
            <th className="border border-gray-300 p-2">Commune</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {commandes.map((c) => (
            <tr key={c.id} className="text-center">
              <td className="border border-gray-300 p-2">{c.nom}</td>
              <td className="border border-gray-300 p-2">{c.prenom}</td>
              <td className="border border-gray-300 p-2">{c.phone_number}</td>
              <td className="border border-gray-300 p-2">{c.wilaya}</td>
              <td className="border border-gray-300 p-2">{c.commune}</td>
              <td className="border border-gray-300 p-2">
                {new Date(c.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
