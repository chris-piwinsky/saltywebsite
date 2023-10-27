import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.notice}>&copy; The Salty Curmudgeons 2023 | All Rights Reserved | LLC</p>
    </footer>
  );
};

export default Footer;
