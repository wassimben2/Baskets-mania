import React from 'react';
import Navbar from './components/navbar';
import Undernav from './components/undernav';
import Sneakers from './components/Sneakers';
import AirJordanCollection from './components/global';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Undernav />
      <AirJordanCollection />
      
    </div>
  );
}