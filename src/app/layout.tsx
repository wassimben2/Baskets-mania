import type { Metadata } from "next";
import { Questrial } from "next/font/google";  // 👈 Import Questrial
import "./globals.css";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400", // Questrial n’a qu’un seul poids
});

export const metadata: Metadata = {
  title: "Sneakers Store - Air Jordan Collection",
  description: "Découvrez notre collection exclusive de sneakers Air Jordan authentiques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${questrial.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
