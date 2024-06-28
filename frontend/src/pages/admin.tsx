import React from "react";
import Navbar from "../app/komponen/navbar";
import styles from "../app/styles/Admin.module.css";

const AdminDashboard = () => {
  // Dummy data untuk simulasi kiriman saran
  const feedbacks = [
    {
      id: 1,
      user: "Rizal",
      message:
        "Saya menyarankan untuk menambahkan fitur pencarian di halaman beranda.",
    },
    {
      id: 2,
      user: "Budi",
      message:
        "Apakah mungkin menambahkan opsi untuk menyimpan artikel ke dalam daftar favorit?",
    },
    // Tambahkan kiriman saran lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar isAdmin={true} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <div className={styles.notifications}>
            {/* Placeholder for notifications menu */}
            <span className={styles.notificationIcon}>
              <i className="fa fa-bell"></i>
            </span>
            <div className={styles.notificationDropdown}>
              {/* Placeholder for notification items */}
              <div className={styles.notificationItem}>
                <p>New notification 1</p>
              </div>
              <div className={styles.notificationItem}>
                <p>New notification 2</p>
              </div>
              {/* Add more notification items as needed */}
            </div>
          </div>
        </div>
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
};

export default AdminDashboard;
