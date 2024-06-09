import React from 'react'

export default function index() {
  return (
    <div>index</div>
    // pages/index.tsx
import Navbar from '../komponen/Navbar';
import BagianHero from '../komponen/BagianHero';
import styles from '../styles/Beranda.module.css';

export default function Beranda() {
  return (
    <div>
      <Navbar />
      <BagianHero />
      <main className={styles.main}>
        <h2>Selamat Datang di Keajaiban Samudra</h2>
        <p>Kami menyediakan informasi tentang keindahan dan keajaiban samudra, menjelajahi aspek kehidupan laut, dan ekosistem laut.</p>
      </main>
    </div>
  );
}

  )
}
