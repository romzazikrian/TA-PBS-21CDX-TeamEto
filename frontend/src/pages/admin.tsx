import React, { useState } from "react";
import Navbar from "../app/komponen/navbar";
import styles from "../app/styles/Admin.module.css";

const AdminDashboard = () => {
  // Dummy data untuk simulasi kiriman saran
  const [feedbacks] = useState([
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
  ]);

  // Dummy data untuk simulasi menu data
  const [menuData] = useState([
    {
      id: 0,
      title: "Dashboard",
      icon: "fa fa-dashboard",
      link: "/admin/dashboard",
    },
    {
      id: 1,
      title: "Users",
      icon: "fa fa-users",
      link: "/admin/users",
    },
    {
      id: 4,
      title: "Reports",
      icon: "fa fa-chart-bar",
      link: "/admin/reports",
    },
    {
      id: 5,
      title: "Categories",
      icon: "fa fa-tags",
      link: "/admin/categories",
    },
    {
      id: 6,
      title: "Analytics",
      icon: "fa fa-analytics",
      link: "/admin/analytics",
    },
    {
      id: 7,
      title: "Support",
      icon: "fa fa-life-ring",
      link: "/admin/support",
    },
    {
      id: 8,
      title: "Settings",
      icon: "fa fa-cog",
      link: "/admin/settings",
    },
  ]);

  // State untuk menampilkan atau menyembunyikan dropdown notifikasi
  const [showNotifications, setShowNotifications] = useState(false);

  // State untuk menampilkan atau menyembunyikan dropdown settings
  const [showSettings, setShowSettings] = useState(false);

  // Handler untuk toggle dropdown notifikasi
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  // Handler untuk toggle dropdown settings
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div>
      <Navbar isAdmin={true} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <div className={styles.notifications}>
            <div
              className={styles.notificationIcon}
              onClick={toggleNotifications}
            >
              <i className="fa fa-bell"></i>
              {/* Tampilkan badge jika ada notifikasi */}
              {feedbacks.length > 0 && (
                <span className={styles.badge}>{feedbacks.length}</span>
              )}
            </div>
            {/* Dropdown notifikasi */}
            {showNotifications && (
              <div className={styles.notificationDropdown}>
                {feedbacks.length > 0 ? (
                  feedbacks.map((feedback) => (
                    <div key={feedback.id} className={styles.notificationItem}>
                      <p>{feedback.message}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.notificationItem}>
                    <p>No new notifications</p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={styles.settings}>
            <div className={styles.settingIcon} onClick={toggleSettings}>
              <i className="fa fa-cog"></i>
            </div>
            {/* Dropdown settings */}
            {showSettings && (
              <div className={styles.settingDropdown}>
                <ul className={styles.settingList}>
                  <li className={styles.settingItem}>
                    <a href="/admin/settings">General Settings</a>
                  </li>
                  <li className={styles.settingItem}>
                    <a href="/admin/settings">Account Settings</a>
                  </li>
                  {/* Tambahkan lebih banyak item settings sesuai kebutuhan */}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <div className={styles.menuList}>
            {menuData.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <a href={item.link}>
                  <i className={item.icon}></i> {item.title}
                </a>
              </div>
            ))}
          </div>
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
