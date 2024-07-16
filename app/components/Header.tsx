import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image src="/images/headPic2.png" alt="Profile photo" width={150} height={150} className={styles.photo} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Emilien Hainaux</h1>
        <p className={styles.subtitle}>Concepteur développeur web & mobile</p>
      </div>
    </header>
  );
};

export default Header;