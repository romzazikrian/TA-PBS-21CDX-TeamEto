import React from 'react';
import Navbar from '../app/komponen/navbar';
import BagianHero from '../app/komponen/BagianHero';
import styles from '../app/styles/Beranda.module.css';


export default function Beranda() {
  return (
    <div>
      <Navbar />
      <BagianHero />
      <main className={`${styles.main} ${styles.center}`}>
        <h2 className={styles.heading}>Selamat Datang di Keajaiban Samudra</h2>
        <p className={styles.paragraph}>Kami menyediakan informasi tentang keindahan dan keajaiban samudra, menjelajahi aspek kehidupan laut, dan ekosistem laut.</p>
        <div className={styles.fotoContainer}>
          <div className={styles.fotoItem}>
            <img src="/images/foto_hewan.jpg" alt="Foto Hewan" />
            <p>Foto Hewan</p>
          </div>
          <div className={styles.fotoItem}>
            <img src="/images/foto_ekosistem.jpg" alt="Foto Ekosistem" />
            <p>Foto Ekosistem</p>
          </div>
        </div>
      </main>
    </div>
  );
}
