'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { Popover } from 'antd';
import { FaAt } from 'react-icons/fa';
import LoadingProgress from '../components/LoadingProgress';
import ProjectModal from '../components/ProjectModal';
import useEmblaCarousel from 'embla-carousel-react';
import QJO from '../components/ProjectDetails/QJO';
import ProjectModalContent from '../components/ProjectModalContent';
import HelenePro from '../components/ProjectDetails/HelenePro';
import SYA from '../components/ProjectDetails/SYA';
import DressCode from '../components/ProjectDetails/DressCode';
import GaminRetro from '../components/ProjectDetails/GaminRetro';
import FibroQuoi from '../components/ProjectDetails/FibroQuoi';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopover, setShowPopover] = useState(false);
  const [spin, setSpin] = useState(true);
  const [returnToInitial, setReturnToInitial] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [isCarouselReady, setIsCarouselReady] = useState(false);
  const selectCallbackRef = useRef<(() => void) | null>(null);

  const content = (
    <div>
      <p>
        Retrouvez-moi sur <a className={styles.a} href="https://www.linkedin.com/in/e-hainaux" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </p>
    </div>
  );

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



  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const imageUrls = [
      '/images/QJO.png',
      '/images/HelenePetSitting.png',
      '/images/SYA.png',
      '/images/DressCode.png',
      '/images/GaminRetro.png',
      '/images/FibroQuoi.png'
    ];

    const preloadImages = async () => {
      const totalImages = imageUrls.length;
      let loadedImages = 0;

      const imagePromises = imageUrls.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const img = document.createElement('img');
            img.src = src;
            img.onload = () => {
              loadedImages++;
              setLoadingProgress((loadedImages / totalImages) * 100);
              resolve();
            };
            img.onerror = reject;
          })
      );

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
        setIsCarouselReady(true)
      } catch (error) {
        console.error('Failed to load images:', error);
        setIsLoading(false);
        setIsCarouselReady(true);
      }
    };

    preloadImages();
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: 0,
    skipSnaps: false,
  });

  

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
  
      // Set initial opacity
      setSlideOpacity();
  
      // Update opacity on slide change
      emblaApi.on('select', setSlideOpacity);
  
      return () => {
        emblaApi.off('select', setSlideOpacity);
      };
    }
  }, [emblaApi, isCarouselReady]);

  if (isLoading) {
    return <LoadingProgress progress={loadingProgress} />;
  }

  const projects = [
    {
      id: 1,
      title: "QJO",
      description: "Appli Nest & React Native (développement en cours)",
      imageUrl: "/images/QJO.png",
      fullDescription: "Lors de mon stage à Grow Your Business, on m'a missionné sur cette application. Il s'agit d'une application de gestion de parties de jeux. J'ai d'abord travaillé au développement du backend sous Nest.js avec Prisma. Ensuite, j'ai réalisé certaines pages avec React Native et Expo. (J'utilise un nom de code parce que l'application est encore en cours de création en agence web)",
      technologies: ["Nest", "Prisma", "React Native", "Expo", "TypeScript"],
      githubLink: "",
      liveLink: "",
      component: <QJO />
    },
    {
      id: 2,
      title: "Helene Pro +",
      description: "Site Express & React (développement en cours)",
      imageUrl: "/images/HelenePetSitting.png",
      fullDescription: "Il s'agit d'un projet indépendant ayant pour but de présenter une activité de petsitting. Ce projet me permet de mettre en pratique mes connaissances acquises lors de ma formation à La Capsule. Le projet est en cours de développement.",
      technologies: ["Node.js", "Express", "React"],
      githubLink: "",
      liveLink: "https://helenepetsitting-frontend.vercel.app/",
      component: <HelenePro />
    },
    {
      id: 3,
      title: "SYA - Sara Yoga Arras",
      description: "Site Express & React (développement en cours)",
      imageUrl: "/images/SYA.png",
      fullDescription: "Il s'agit d'un projet indépendant ayant pour but de présenter une activité de yoga. Ce projet me permet de mettre en pratique mes connaissances acquises lors de ma formation à La Capsule. En créant ce site, j'ai également appris à mettre en place un système de vérification reCAPTCHA. Le projet est en cours de développement.",
      technologies: ["Node.js", "Express", "React"],
      githubLink: "",
      liveLink: "https://sya-frontend.vercel.app/",
      component: <SYA />
    },
    {
      id: 4,
      title: "DressCode",
      description: "Appli Express & React Native (MVP de fin de formation)",
      imageUrl: "/images/DressCode.png",
      fullDescription: "DressCode est l'application développée en fin de formation à La Capsule. Nous avons entièrement conceptualisé l'application en groupe de quatre personnes pendant deux semaines. Cela nous a permis de mettre en application les compétences développées au fil de la formation à La Capsule. Il s'agit d'un MVP qui n'est pas disponible sur les stores actuellement. Je vous invite à visualiser la vidéo partagée sur LinkedIn (Cf. lien \"Voir en Live\").",
      technologies: ["Node.js", "Express", "React Native", "Expo"],
      githubLink: "",
      liveLink: "https://www.linkedin.com/posts/e-hainaux_demoday-javascript-reconversion-activity-7178679398005403649-4NIw?utm_source=share&utm_medium=member_desktop",
      component: <DressCode />
    },
    {
      id: 5,
      title: "GaminRetro",
      description: "Site WordPress",
      imageUrl: "/images/GaminRetro.png",
      fullDescription: "Après avoir appris les bases de création de sites web en HTML et CSS, j'ai eu la curiosité de développer un site avec WordPress. L'idée était de créer une ludothèque de jeux vidéo retro personnelle. J'ai entre autre apprécié la création du logo et l'agencement du design général.",
      technologies: ["WordPress"],
      githubLink: "",
      liveLink: "https://gaminretro.fr/",
      component: <GaminRetro />
    },
    {
      id: 6,
      title: "FibroQuoi",
      description: "Site HTML5 & CSS3",
      imageUrl: "/images/FibroQuoi.png",
      fullDescription: "Tout premier site que j'ai développé avant de lancer ma reconversion. IL s'agit de présenter de façon synthétique le syndrôme fibromyalgique. Site initialement développé avec les moyens du bord : HTML et CSS tapés directement dans un bloc-notes windows. J'ai depuis eu la joie d'apprendre à utiliser Visual Studio Code. Fibro-Quoi est en projet de réalisation future sous Vue.js et Tailwind afin de me familiariser avec ces Technos.",
      technologies: ["HTML5", "CSS", "Bloc-notes Windows"],
      githubLink: "",
      liveLink: "https://fibro-quoi.fr/",
      component: <FibroQuoi />
    }
  ];
  
  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.block}>
      <span className={styles.title}>Stack principale</span>
      <div className={styles.blockText}>
          <span className={styles.stack}>Node.js | Express | Next | React.js | React Native </span>
        </div>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>À propos</span>
        <div className={styles.blockText}>
          <p>Développeur web & mobile fullstack en reconversion, j'ai choisi ce domaine après un bilan de compétences.</p>
          <p>Passionné par la technique et la créativité, j'ai suivi une formation à La Capsule en 2024, où j'ai acquis des compétences en JavaScript, Node.js, Express, React et React Native.</p>
          <p>J'ai réalisé deux projets en React.js et effectué un stage chez Grow Your Business, qui a renforcé ma conviction d'être sur le bon chemin.</p>
        </div>
      </div>
      {isCarouselReady && (
  <div className={styles.block}>
    <span className={styles.title}>Réalisations</span>
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
      </div>)}
      <Popover 
        content={content} 
        trigger="click"
        placement="leftBottom"
        open={showPopover}
        onOpenChange={handleVisibleChange}
      >
        <div className={styles.spinnerContainer}>
        <div className={`${styles.arobaseContainer} ${spin ? styles.spin : ''} ${returnToInitial ? styles.returnToInitial : ''}`}>
         
          <FaAt className={styles.arobase} />
        </div>

        </div>
      </Popover>
      
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
      

      <Footer />
    </main>
  );
};

export default Home;