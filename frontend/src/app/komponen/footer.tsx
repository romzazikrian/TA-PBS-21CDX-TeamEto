// components/Footer.js

import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Keajaiban Samudra. Semua hak cipta dilindungi.</p>
      <ul className={styles.socialLinks}>
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.twitter.com">Twitter</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
