import React, { useState, useCallback, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import ProjectModalContent from '../components/ProjectModalContent';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, Project } from '../data/projectsData';

interface RealisationsBlockProps {
  isLoading: boolean;
}

const RealisationsBlock: React.FC<RealisationsBlockProps> = ({ isLoading }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
    skipSnaps: false,
  });

  useEffect(() => {
    if (!isLoading) {
      setIsCarouselReady(true);
    }
  }, [isLoading]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi && isCarouselReady) {
      const setSlideOpacity = () => {
        const slides = emblaApi.slideNodes();
        const currentIndex = emblaApi.selectedScrollSnap();
        slides.forEach((slide, index) => {
          if (index === currentIndex) {
            slide.style.opacity = '1';
            slide.style.transition = 'opacity 0.5s ease-in-out';
          } else {
            slide.style.opacity = '0';
            slide.style.transition = 'opacity 0.5s ease-in-out';
          }
        });
      };

      setSlideOpacity();
      emblaApi.on('select', setSlideOpacity);

      return () => {
        emblaApi.off('select', setSlideOpacity);
      };
    }
  }, [emblaApi, isCarouselReady]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  if (isLoading) {
    return <div className={styles.placeholder}/>;
  }
  
    return (
        <div className={`${styles.block} ${styles.lastBlock}`}>
        <span className={styles.title}>Réalisations</span>
        {isCarouselReady && (
            <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
                {projects.map((project) => (
                <div className={styles.emblaSlide} key={project.id}>
                    <ProjectCard 
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    onClick={() => openModal(project)}
                    />
                </div>
                ))}
            </div>
            </div>
        )}
        <button className={styles.emblaPrevButton} onClick={scrollPrev}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <button className={styles.emblaNextButton} onClick={scrollNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
        <ProjectModal isOpen={modalOpen} onClose={closeModal}>
            {selectedProject && (
            <ProjectModalContent
                title={selectedProject.title}
                fullDescription={selectedProject.fullDescription}
                imageUrl={selectedProject.imageUrl}
                technologies={selectedProject.technologies}
                githubLink={selectedProject.githubLink}
                liveLink={selectedProject.liveLink}
            />
            )}
        </ProjectModal>
        </div>
    );
};


export default RealisationsBlock;