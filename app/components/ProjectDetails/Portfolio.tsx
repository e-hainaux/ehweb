
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/ProjectDetails.module.css';

const Portfolio: React.FC = () => (

        <div className={styles.projectDetails}>
          <Image src="/images/Portfolio.png" alt="Portfolio" width={800} height={600} />
          <h2>Site web Next, React & TypeScript</h2>
          <p>Description détaillée du projet Portfolio...</p>
          <a href="https://github.com/votre-repo/Portfolio" target="_blank" rel="noopener noreferrer">Voir le code sur GitHub</a>
        </div>
      );

export default Portfolio;
