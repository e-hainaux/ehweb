
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const QJO: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/QJO.png" alt="QJO" width={800} height={600} />
          <h2>Appli Nest & React Native</h2>
          <p>Description détaillée du projet QJO...</p>
          <a href="https://github.com/votre-repo/QJO" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default QJO;
