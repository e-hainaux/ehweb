
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const SYA: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/SYA.png" alt="SYA" width={800} height={600} />
          <h2>Site web Express, Next & React</h2>
          <p>Description détaillée du projet SYA...</p>
          <a href="https://github.com/votre-repo/SYA" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default SYA;
