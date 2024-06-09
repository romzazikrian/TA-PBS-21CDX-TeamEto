import React from 'react';
import Navbar from '../app/komponen/navbar';
import styles from '../app/styles/Tentang.module.css';

const Tentang = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1>Tentang Kami</h1>
        <section className={styles.section}>
          <h2>Misi Kami</h2>
          <p>
            Keajaiban Samudra adalah platform yang didedikasikan untuk menyebarkan informasi tentang keindahan dan keajaiban kehidupan laut. Misi kami adalah meningkatkan kesadaran dan pemahaman tentang pentingnya menjaga ekosistem laut yang sehat dan berkelanjutan.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Visi Kami</h2>
          <p>
            Kami bercita-cita untuk menjadi sumber utama informasi dan pendidikan tentang kehidupan laut, membantu masyarakat untuk lebih memahami dan menghargai keindahan serta keanekaragaman hayati yang ada di dalam samudra.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Tim Kami</h2>
          <p>
            Tim kami terdiri dari para ahli biologi laut, peneliti, dan pecinta laut yang berdedikasi untuk menyediakan konten yang akurat dan menarik. Kami bekerja sama dengan berbagai organisasi dan komunitas untuk mendukung konservasi laut dan penyebaran pengetahuan.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Tentang;
