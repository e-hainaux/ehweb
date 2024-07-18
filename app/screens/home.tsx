'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Popover } from 'antd';
import { FaAt } from 'react-icons/fa';
import LoadingProgress from '../components/LoadingProgress';

import StackBlock from '../components/StackBlock';
import InfoBlock from '../components/InfoBlock';
import RealisationsBlock from '../components/RealisationsBlock';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopover, setShowPopover] = useState(false);
  const [spin, setSpin] = useState(true);
  const [returnToInitial, setReturnToInitial] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
    
  const [isCarouselReady, setIsCarouselReady] = useState(false);
  

  const content = (
    <div>
      <p>
        Retrouvez-moi sur <a className={styles.a} href="https://www.linkedin.com/in/e-hainaux" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  );

  const handleVisibleChange = (visible: boolean) => {
    setShowPopover(visible);
    if (visible) {
      setSpin(false);
    } else {
      setReturnToInitial(true);
      setTimeout(() => {
        setSpin(true);
        setReturnToInitial(false);
      }, 200);
    }
  };



  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const imageUrls = [
      '/images/QJO.png',
      '/images/HelenePetSitting.png',
      '/images/SYA.png',
      '/images/DressCode.png',
      '/images/GaminRetro.png',
      '/images/FibroQuoi.png'
    ];

    const preloadImages = async () => {
      const totalImages = imageUrls.length;
      let loadedImages = 0;

      const imagePromises = imageUrls.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const img = document.createElement('img');
            img.src = src;
            img.onload = () => {
              loadedImages++;
              setLoadingProgress((loadedImages / totalImages) * 100);
              resolve();
            };
            img.onerror = reject;
          })
      );

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
        setIsCarouselReady(true)
      } catch (error) {
        console.error('Failed to load images:', error);
        setIsLoading(false);
        setIsCarouselReady(true);
      }
    };

    preloadImages();
  }, []);

 

  if (isLoading) {
    return <LoadingProgress progress={loadingProgress} />;
  }

  return (
    <main className={styles.container}>
      <Header />
      <StackBlock />
      <InfoBlock />
      
      {isCarouselReady && (<RealisationsBlock />)}
      
      <Popover 
        content={content} 
        trigger="click"
        placement="leftBottom"
        open={showPopover}
        onOpenChange={handleVisibleChange}
      >
        <div className={styles.spinnerContainer}>
        <div className={`${styles.arobaseContainer} ${spin ? styles.spin : ''} ${returnToInitial ? styles.returnToInitial : ''}`}>
         
          <FaAt className={styles.arobase} />
        </div>

        </div>
      </Popover>     

      <Footer />
    </main>
  );
};

export default Home;