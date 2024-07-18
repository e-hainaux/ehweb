import QJO from '../components/ProjectDetails/QJO';
import HelenePro from '../components/ProjectDetails/HelenePro';
import SYA from '../components/ProjectDetails/SYA';
import DressCode from '../components/ProjectDetails/DressCode';
import GaminRetro from '../components/ProjectDetails/GaminRetro';
import FibroQuoi from '../components/ProjectDetails/FibroQuoi';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fullDescription: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  component: React.ComponentType;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "QJO",
        description: "Appli Nest & React Native (développement en cours)",
        imageUrl: "/images/QJO.png",
        fullDescription: "Lors de mon stage à Grow Your Business, on m'a missionné sur cette application. Il s'agit d'une application de gestion de parties de jeux. J'ai d'abord travaillé au développement du backend sous Nest.js avec Prisma. Ensuite, j'ai réalisé certaines pages avec React Native et Expo. (J'utilise un nom de code parce que l'application est encore en cours de création en agence web)",
        technologies: ["Nest", "Prisma", "React Native", "Expo", "TypeScript"],
        githubLink: "",
        liveLink: "",
        component: QJO
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
        component: HelenePro
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
        component: SYA
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
        component: DressCode
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
        component: GaminRetro
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
        component: FibroQuoi
      }
];