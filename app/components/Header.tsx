import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const img = new window.Image();
      img.src = '/images/headPic2.png';
      img.onload = () => {
        setImageLoaded(true);
      };
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        {!imageLoaded && <div className={styles.placeholder}>Chargement image...</div>}
        <Image 
          src="/images/headPic2.png" 
          alt="Profile photo" 
          layout="responsive"  
          width={150} 
          height={150} 
          className={`${styles.photo} ${imageLoaded ? styles.loaded : styles.hidden}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Emilien Hainaux</h1>
        <div className={styles.subtitleContainer}>
          <span className={styles.subtitle}>Concepteur développeur</span>
          <span className={styles.subtitle}>web & mobile</span>
        </div>
      </div>
    </header>
  );
};

export default Header;