import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
        <div className="image-container">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="project-image" />
      </div>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>

      <style jsx>{`
        .project-card {
          border: none;
          border-radius: 24px;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.3);

          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          cursor: pointer;

        }
        .image-container {
          position: relative;
          width: 100%;
          height: 30vh;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #FFBA39;
          margin: 1rem 0 0.5rem;
          padding: 0 1rem;
        }

        .project-description {
          font-size: 1rem;
          color: #EDEEF3;
          padding: 0 1rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;