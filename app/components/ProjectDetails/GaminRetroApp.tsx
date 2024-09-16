import React from "react";
import Image from "next/image";
import styles from "../../styles/ProjectDetails.module.css";

const GaminRetroApp: React.FC = () => (
  <div className={styles.projectDetails}>
    <Image
      src="/images/GaminRetroLogo.png"
      alt="GaminRetroApp"
      width={800}
      height={600}
    />
    <h2>Site WordPress</h2>
    <p>Description détaillée du projet GaminRetro...</p>
    <a
      href="https://github.com/e-hainaux/GaminRetro"
      target="_blank"
      rel="noopener noreferrer"
    >
      Voir le code sur GitHub
    </a>
  </div>
);

export default GaminRetroApp;
