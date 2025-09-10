import React from 'react';
import Navbar from '../app/components/navbar';
import Undernav from './components/undernav';
import AirJordanCollection from './components/global';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Undernav />
      <AirJordanCollection />
      <Footer />
    </div>
  );
}