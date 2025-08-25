import react from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import SneakersInfo from '../components/sneakersinfo';
export default function AboutProduct() {

  return(
       <main className="bg-gray-100 min-h-screen">

       <Navbar />
       <SneakersInfo />
    </main>

  );
}
