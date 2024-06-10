// components/Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Keajaiban Samudra. Semua hak cipta dilindungi.</p>
        <ul className={styles.socialLinks}>
          <li><a href="https://www.facebook.com" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://www.twitter.com" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.instagram.com" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
