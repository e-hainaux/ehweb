import React from "react";
import Image from "next/image";
import styles from "../../styles/ProjectDetails.module.css";

const DressCode: React.FC = () => (
  <div className={styles.projectDetails}>
    <Image
      src="/images/LogoFuriganaApp.png"
      alt="Furigana App"
      width={800}
      height={600}
    />
    <h2>{`Appli Nest.js & Vue3 (+ Tailwind)`}</h2>
    <p>Description détaillée du projet Furigana App...</p>
    <a
      href="https://github.com/e-hainaux/furigana-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le code sur GitHub
    </a>
  </div>
);

export default DressCode;
