import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Mail, Instagram } from 'react-feather';
import styles from './Contact.module.css'; // Import the CSS module

const ContactPage: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <div className={styles.contactContainer}>
        <h1 className={`${styles.header} text-3xl font-semibold mb-4`}>Contact Us</h1>
        <p className={`${styles.paragraph} text-gray-600`}>
          We are a passionate team dedicated to serving our customers and
          providing the best products and services. Feel free to reach out to us
          through email or connect with us on Instagram.
        </p>
        <div className={styles.contactMethod}>
          <Mail size={20} className={`${styles.contactIcon} mr-2`} />
          <a href="mailto:your_email@example.com" className={styles.contactLink}>Email Us</a>
        </div>
        <div className={styles.contactMethod}>
          <Instagram size={20} className={`${styles.contactIcon} mr-2`} />
          <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Follow us on Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
