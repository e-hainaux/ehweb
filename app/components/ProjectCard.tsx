import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  onClick: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="project-card" onClick={() => onClick(id)}>
      <div className="image-container">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100%"
          className="project-image"
        />
      </div>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>

      <style jsx>{`
        .project-card {
          min-height: 350px;
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
          min-height: 230px;
          overflow: hidden;
        }

        .project-image {
          width: auto;
          height: 100%;
          min-height: 300px;
          object-fit: cover;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #ffba39;
          margin: 1rem 0 0.5rem;
          padding: 0 1rem;
        }

        .project-description {
          font-size: 1rem;
          color: #edeef3;
          padding: 0 1rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
