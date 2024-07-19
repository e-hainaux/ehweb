
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const HelenePro: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/HelenePetSitting.png" alt="HelenePro" width={800} height={600} />
          <h2>Site web Express, Next & React</h2>
          <p>Description détaillée du projet HelenePro...</p>
          <a href="https://github.com/votre-repo/HelenePro" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default HelenePro;
