// pages/admin.js

import React from 'react';
import Navbar from '../app/komponen/navbar';
import styles from '../app/styles/Admin.module.css';

const AdminDashboard = () => {
  // Dummy data untuk simulasi kiriman saran
  const feedbacks = [
    {
      id: 1,
      user: 'Rizal',
      message: 'Saya menyarankan untuk menambahkan fitur pencarian di halaman beranda.',
    },
    {
      id: 2,
      user: 'Budi',
      message: 'Apakah mungkin menambahkan opsi untuk menyimpan artikel ke dalam daftar favorit?',
    },
    // Tambahkan kiriman saran lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar isAdmin={true} />
      <div className={styles.container}>
        <h1 className={styles.title}>Admin Dashboard</h1>
        <div className={styles.content}>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className={styles.card}>
              <h2>{feedback.user}</h2>
              <p>{feedback.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
