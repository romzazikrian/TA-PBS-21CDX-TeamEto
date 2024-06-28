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

  // Dummy data untuk simulasi menu data
  const menuData = [
    {
      id: 1,
      title: "Users",
      icon: "fa fa-users",
      link: "/admin/users",
    },
    {
      id: 2,
      title: "Products",
      icon: "fa fa-cubes",
      link: "/admin/products",
    },
    // Tambahkan menu data lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <Navbar isAdmin={true} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.menuTitle}>Menu Data</h2>
          <ul className={styles.menuList}>
            {menuData.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <a href={item.link}>
                  <i className={item.icon}></i> {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Feedbacks</h2>
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className={styles.card}>
              <h3>{feedback.user}</h3>
              <p>{feedback.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
