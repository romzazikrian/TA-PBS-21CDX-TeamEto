import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const KomponenNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Keajaiban Samudra</Link>
      </div>
      <ul className={styles.navLink}>
        <li><Link href="/">Beranda</Link></li>
        <li><Link href="/tentang">Tentang</Link></li>
        <li><Link href="/makhluk-laut">Makhluk Laut</Link></li>
        <li><Link href="/ekosistem">Ekosistem</Link></li>
      </ul>
    </nav>
  );
};

export default KomponenNavbar;
