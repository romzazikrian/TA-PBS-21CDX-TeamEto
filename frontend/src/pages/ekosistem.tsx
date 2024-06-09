import React from 'react';
import Navbar from '../app/komponen/navbar';
import styles from '../app/styles/Ekosistem.module.css';

export default function Ekosistem() {
  // Array objek dengan informasi ekosistem laut
  const ekosistemData = [
    {
      nama: 'Terumbu Karang',
      foto: '/images/terumbu_karang.jpeg',
      deskripsi: 'Terumbu karang adalah ekosistem yang terdiri dari koloni organisme karang yang hidup bersama-sama. Mereka menyediakan habitat bagi berbagai spesies laut dan menjadi sumber keanekaragaman hayati yang tinggi.'
    },
    {
      nama: 'Padang Lamun',
      foto: '/images/padang_lamun.jpg',
      deskripsi: 'Padang lamun adalah ekosistem rumput laut yang tumbuh di perairan dangkal. Mereka menyediakan tempat berlindung dan makanan bagi berbagai jenis biota laut, serta membantu menjaga kualitas air laut.'
    },
    // Tambahkan entri ekosistem lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1>Ekosistem Laut</h1>
        <div className={styles.ekosistem}>
          {ekosistemData.map((ekosistem, index) => (
            <div key={index} className={styles.card}>
              <img src={ekosistem.foto} alt={ekosistem.nama} className={styles.foto} />
              <div className={styles.deskripsi}>
                <h2>{ekosistem.nama}</h2>
                <p>{ekosistem.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
