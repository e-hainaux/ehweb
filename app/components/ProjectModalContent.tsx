import styles from "../styles/ProjectModalContent.module.css";
import Image from "next/image";

interface ProjectModalContentProps {
  title: string;
  fullDescription: string | string[];
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const ProjectModalContent: React.FC<ProjectModalContentProps> = ({
  title,
  fullDescription,
  imageUrl,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalHeader}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.modalImage}
          width={300}
          height={300}
        />
        <h2 className={styles.modalTitle}>{title}</h2>
      </div>
      <div className={styles.descriptionFrame}>
        <div className={styles.descriptionText}>
          <p className={styles.modalDescription}>{fullDescription}</p>
        </div>
        <div className={styles.technologiesFrame}>
          <h3>Technologies utilisées</h3>
          <ul className={styles.technologiesList}>
            {technologies.map((tech, index) => (
              <li key={index} className={styles.technologyItem}>
                {tech}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir en live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModalContent;
