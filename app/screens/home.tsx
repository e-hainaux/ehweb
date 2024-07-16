'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';
import Footer from '../components/Footer';
import { Popover } from 'antd';
import LoadingProgress from '../components/LoadingProgress';
import ProjectModal from '../components/ProjectModal';


import O20J24Q from '../components/ProjectDetails/O20J24Q';
// import HelenePro from '../components/ProjectDetails/HelenePro';
// import SYA from '../components/ProjectDetails/SYA';
// import DressCode from '../components/ProjectDetails/DressCode';
// import GaminRetro from '../components/ProjectDetails/GaminRetro';
// import FibroQuoi from '../components/ProjectDetails/FibroQuoi';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopover, setShowPopover] = useState(false);
  const [spin, setSpin] = useState(true);
  const [returnToInitial, setReturnToInitial] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<React.ReactNode | null>(null);

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

  const openModal = (project: React.ReactNode) => {
    setCurrentProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset'; // Réactive le défilement
  };

  useEffect(() => {
    // Nettoyage : s'assurer que le défilement est réactivé si le composant est démonté
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const imageUrls = [
      '/images/O20J24Q.png',
      '/images/HelenePetSitting.png',
      '/images/SYA.png',
      '/images/DressCode.png',
      '/images/GaminRetro.png',
      '/images/FibroQuoi.png',
      '/images/spaceCatCropped.png'
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
      } catch (error) {
        console.error('Failed to load images:', error);
        setIsLoading(false);
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
      <div className={styles.projectsGrid}>
        <ProjectCard 
          title="Appli Nest & React Native"
          description="Nom de code O20J24Q (développement en cours)"
          imageUrl="/images/O20J24Q.png"
          onClick={() => openModal(<O20J24Q />)}
        />
        <ProjectCard 
          title="Helene Pro +"
          description="Site Express & React (développement en cours)"
          imageUrl="/images/HelenePetSitting.png"
          onClick={() => openModal(<O20J24Q />)}
        />
        <ProjectCard 
          title="SYA - Sara Yoga Arras"
          description="Site Express & React (développement en cours)"
          imageUrl="/images/SYA.png"
          onClick={() => openModal(<O20J24Q />)}
        />
        <ProjectCard 
          title="DressCode"
          description="Appli Express & React Native (MVP de fin de formation)"
          imageUrl="/images/DressCode.png"
          onClick={() => openModal(<O20J24Q />)}
        />
        <ProjectCard 
          title="GaminRetro"
          description="Site WordPress"
          imageUrl="/images/GaminRetro.png"
          onClick={() => openModal(<O20J24Q />)}
        />
        <ProjectCard 
          title="FibroQuoi"
          description="Site HTML5 & CSS3"
          imageUrl="/images/FibroQuoi.png"
          onClick={() => openModal(<O20J24Q />)}
        />
      </div>

      <Popover 
        content={content} 
        trigger="click"
        placement="top"
        open={showPopover}
        onOpenChange={handleVisibleChange}
      >
        <div className={`${styles.arobaseContainer} ${spin ? styles.spin : ''} ${returnToInitial ? styles.returnToInitial : ''}`}>
          <Image 
            src="/images/arobase.png" 
            alt="arobase" 
            width={80} 
            height={80} 
            className={styles.arobase} 
          />
        </div>
      </Popover>

      <ProjectModal isOpen={modalOpen} onClose={closeModal}>
        {currentProject}
      </ProjectModal>

      <Footer />
    </main>
  );
};

export default Home;