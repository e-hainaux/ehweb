import React, { useState } from "react";
import { Popover } from "antd";
import { FaAt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const PopoverContent: React.FC = () => (
  <div className={styles.popContainer}>
    <p>Contactez-moi ! </p>
    <div className={styles.socialLinks}>
      <a
        className={styles.linkedIn}
        href="https://www.linkedin.com/in/e-hainaux"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        className={styles.gitHub}
        href="https://github.com/e-hainaux"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
      </a>
    </div>
  </div>
);

const ContactPopover: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [spin, setSpin] = useState(true);
  const [returnToInitial, setReturnToInitial] = useState(false);

  const handleVisibleChange = (visible: boolean) => {
    setShowPopover(visible);
    if (visible) {
      setSpin(false);
    } else {
      setReturnToInitial(true);
      setTimeout(() => {
        setSpin(true);
        setReturnToInitial(false);
      }, 200);
    }
  };

  return (
    <Popover
      content={<PopoverContent />}
      trigger="click"
      placement="leftBottom"
      open={showPopover}
      onOpenChange={handleVisibleChange}
    >
      <div className={styles.spinnerContainer}>
        <div
          className={`${styles.arobaseContainer} ${spin ? styles.spin : ""} ${
            returnToInitial ? styles.returnToInitial : ""
          }`}
        >
          <FaAt className={styles.arobase} />
        </div>
      </div>
    </Popover>
  );
};

export default ContactPopover;
