import React from 'react';
import Navbar from './components/navbar';
import Undernav from './components/undernav';
import SneakersSection from './components/global';
import link from 'next/link';
export default function Home() {
  return(
    <div>
<Navbar />
<Undernav />
<SneakersSection />

    </div>
  );
}