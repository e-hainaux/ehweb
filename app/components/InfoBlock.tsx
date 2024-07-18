import React from 'react';
import styles from '../styles/Block.module.css';

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.block}>
        <span className={styles.title}>À propos</span>
        <div className={styles.blockText}>
          <p>{`Développeur web & mobile fullstack en reconversion, j\'ai choisi ce domaine après un bilan de compétences.`}</p>
          <p>{`Passionné par la technique et la créativité, j\'ai suivi une formation à La Capsule en 2024, où j\'ai acquis des compétences en JavaScript, Node.js, Express, React et React Native.`}</p>
          <p>{`J\'ai réalisé deux projets en React.js et effectué un stage chez Grow Your Business, qui a renforcé ma conviction d\'être sur le bon chemin.`}</p>
        </div>
    </div>
  );
};

export default InfoBlock;