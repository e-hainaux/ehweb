
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const O20J24Q: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/O20J24Q.png" alt="O20J24Q" width={800} height={600} />
          <h2>Appli Nest & React Native</h2>
          <p>Description détaillée du projet O20J24Q...</p>
          <a href="https://github.com/votre-repo/O20J24Q" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default O20J24Q;
