import { useState, useEffect } from "react";

const useImagePreloader = (imageUrls: string[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const totalImages = imageUrls.length;
      let loadedImages = 0;

      const imagePromises = imageUrls.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
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
        setIsTransitioning(true);
        setIsCarouselReady(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load images:", error);
        setIsTransitioning(true);
        setIsCarouselReady(false);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [imageUrls]);

  return { isLoading, loadingProgress, isTransitioning, isCarouselReady };
};

export default useImagePreloader;
