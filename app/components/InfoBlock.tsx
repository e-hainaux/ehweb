import React from 'react';
import styles from '../styles/Block.module.css';

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.block}>
        <span className={styles.title}>À propos</span>
        <div className={styles.blockText}>
          <p>{`Développeur web & mobile fullstack en reconversion, j\'ai choisi ce domaine après un bilan de compétences effectué quelques années auparavant.`}</p>
          <p>{`Je me suis initié aux bases du développement à l'aide de tutoriels et de cours en ligne. Autant attiré par l\'aspect technique que créatif, je me suis lancé dans une formation à La Capsule en 2024, où j\'ai acquis des compétences en JavaScript, Node.js, Express, React et React Native.`}</p>
          <p>{`J\'ai réalisé dans la foulée deux projets en React.js en tant qu'indépendant. Un récent stage chez Grow Your Business a renforcé ma conviction d\'être sur le bon chemin.`}</p>
          <p>{`Je recherche aujourd'hui un premier poste en CDI, que ce soit en backend, frontend ou fullstack.`}</p>
        </div>
    </div>
  );
};

export default InfoBlock;