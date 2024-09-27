"use client";

import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPopover from "../components/ContactPopover";
import LoadingProgress from "../components/LoadingProgress";
import StackBlock from "../components/StackBlock";
import InfoBlock from "../components/InfoBlock";
import RealisationsBlock from "../components/RealisationsBlock";
import useImagePreloader from "../hooks/useImagePreloader";
import imageUrls from "../data/imageUrls";

const Home: React.FC = () => {
  const { isLoading, loadingProgress, isTransitioning, isCarouselReady } =
    useImagePreloader(imageUrls);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (isLoading) {
    return (
      <LoadingProgress
        progress={loadingProgress}
        isTransitioning={isTransitioning}
      />
    );
  }

  return (
    <main className={styles.container}>
      <Header />
      <StackBlock />
      <InfoBlock />

      {isCarouselReady && <RealisationsBlock isLoading={isLoading} />}

      <ContactPopover />

      <Footer />
    </main>
  );
};

export default Home;
