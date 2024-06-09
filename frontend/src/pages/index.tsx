import React from 'react';
import Navbar from '../app/komponen/navbar';
import BagianHero from '../app/komponen/BagianHero';
import styles from '../app/styles/Beranda.module.css';

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
