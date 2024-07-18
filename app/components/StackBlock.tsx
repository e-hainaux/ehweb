import React from 'react';
import styles from '../styles/Block.module.css';

const StackBlock: React.FC = () => {
  return (
    <div className={styles.block}>
      <span className={styles.title}>Stack principale</span>
      <div className={styles.blockText}>
          <span className={styles.stack}>{`Node.js - Express - Next - React.js - React Native`}</span>
        </div>
    </div>
  );
};

export default StackBlock;