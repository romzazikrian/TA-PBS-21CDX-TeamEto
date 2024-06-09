// pages/makhluk-laut.tsx
import Navbar from '../app/komponen/navbar';
import styles from '../styles/MakhlukLaut.module.css';

const MakhlukLaut = () => {
  // Array objek dengan informasi makhluk laut
  const makhlukLaut = [
    {
      nama: 'Paus Biru',
      foto: '/images/paus_biru.jpg',
      deskripsi: 'Paus biru (Balaenoptera musculus) adalah mamalia laut terbesar dan hewan terbesar yang pernah ada di bumi. Mereka dikenal dengan warna biru keabu-abuan di bagian atas tubuhnya.'
    },
    {
      nama: 'Kura-kura Penyu',
      foto: '/images/kura_kura_penyu.jpg',
      deskripsi: 'Kura-kura penyu adalah reptil laut yang hidup di berbagai perairan di seluruh dunia. Mereka dikenal dengan cangkang keras dan kebiasaan bertelur di pantai tempat mereka dilahirkan.'
    },
    // Tambahkan entri makhluk laut lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1>Makhluk Laut</h1>
        <div className={styles.makhlukLaut}>
          {makhlukLaut.map((makhluk, index) => (
            <div key={index} className={styles.card}>
              <img src={makhluk.foto} alt={makhluk.nama} className={styles.foto} />
              <div className={styles.deskripsi}>
                <h2>{makhluk.nama}</h2>
                <p>{makhluk.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MakhlukLaut;
