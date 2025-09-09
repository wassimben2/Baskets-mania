// lib/db.js
import mysql from "mysql2/promise";

// Configuration de la connexion à la base de données
const dbConfig = {
  host: "localhost",
  user: "root", // utilisateur par défaut dans XAMPP
  password: "", // mot de passe par défaut vide
  database: "baskets_shop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Créer un pool de connexions
const pool = mysql.createPool(dbConfig);

export default pool;
