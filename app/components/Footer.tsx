import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>ehweb - © 2024</p>
    </footer>
  );
};

export default Footer;