import React from 'react';
import styles from '../styles/Block.module.css';

const StackBlock: React.FC = () => {
  return (
    <div className={styles.block}>
      <span className={styles.title}>Stack principale</span>
      <div className={styles.blockText}>
          <p>{`Node.js - Express - Next - React.js - React Native`}</p>
          <p className={styles.stack}>{`Curieux de nature, je suis intéressé par l'apprentissage d'autres technologies.`}</p>
        </div>
    </div>
  );
};

export default StackBlock;