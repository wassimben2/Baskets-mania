/*
  Warnings:

  - You are about to drop the column `currency` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `current_price` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `customer_name` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `original_price` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `sneaker_name` on the `commande` table. All the data in the column will be lost.
  - You are about to drop the column `wants_offers` on the `commande` table. All the data in the column will be lost.
  - Added the required column `nom` to the `commande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prenom` to the `commande` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."commande" DROP COLUMN "currency",
DROP COLUMN "current_price",
DROP COLUMN "customer_name",
DROP COLUMN "original_price",
DROP COLUMN "quantity",
DROP COLUMN "size",
DROP COLUMN "sneaker_name",
DROP COLUMN "wants_offers",
ADD COLUMN     "nom" TEXT NOT NULL,
ADD COLUMN     "prenom" TEXT NOT NULL;
