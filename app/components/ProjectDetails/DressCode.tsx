
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const DressCode: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/DressCode.png" alt="HelenePro" width={800} height={600} />
          <h2>Appli Express, Next & React Native</h2>
          <p>Description détaillée du projet DressCode...</p>
          <a href="https://github.com/votre-repo/DressCode" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default DressCode;
