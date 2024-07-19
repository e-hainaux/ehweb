
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const GaminRetro: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/GaminRetro.png" alt="GaminRetro" width={800} height={600} />
          <h2>Site WordPress</h2>
          <p>Description détaillée du projet GaminRetro...</p>
          <a href="https://github.com/votre-repo/GaminRetro" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default GaminRetro;
