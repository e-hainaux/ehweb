import React from 'react';
import styles from '../styles/LoadingProgress.module.css';

interface LoadingProgressProps {
  progress: number;
  isTransitioning: boolean;
}

const LoadingProgress: React.FC<LoadingProgressProps> = ({ progress, isTransitioning }) => (
  <div className={`${styles.progressContainer} ${isTransitioning ? styles.fadeOut : ''}`}>
    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
    <div className={styles.progressText}>Chargement en cours  {Math.round(progress)}%</div>
  </div>
);

export default LoadingProgress;