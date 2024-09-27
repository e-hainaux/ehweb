import React from "react";
import styles from "../styles/Block.module.css";
// import Image from "next/image";

const StackBlock: React.FC = () => {
  return (
    <div className={styles.block}>
      <span className={styles.title}>Stack principale</span>
      {/* <div className={styles.blockImages}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/technos/NodeJS.png"
            alt="Logo Node JS"
            layout="responsive"
            width={320}
            height={87}
            quality={100}
            className={styles.technoLogo}
          />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/technos/ExpressJS.png"
            alt="Logo Express JS"
            layout="responsive"
            width={465}
            height={141}
            quality={100}
            className={styles.technoLogo}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/technos/NextJS.png"
            alt="Logo Next JS"
            layout="responsive"
            width={320}
            height={65}
            quality={100}
            className={styles.technoLogo}
          />
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/technos/ReactJS.png"
            alt="Logo React JS / React Native"
            layout="responsive"
            width={270}
            height={241}
            quality={100}
            className={styles.technoLogo}
          />
        </div>
      </div> */}
      <div className={styles.blockText}>
        <div className={styles.technosTextContainer}>
          <p className={styles.technosText}>{`Node.js`}</p>
          <p className={styles.technosText}>{`Express`}</p>
          <p className={styles.technosText}>{`Next.js`}</p>
          <p className={styles.technosText}>{`React + Native`}</p>
        </div>
        <p
          className={styles.stackInfo}
        >{`Curieux de nature, je suis intéressé par l'apprentissage d'autres technologies.`}</p>
      </div>
    </div>
  );
};

export default StackBlock;
