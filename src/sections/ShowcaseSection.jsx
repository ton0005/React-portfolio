import React from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Project data with links
const projects = [
  {
    id: "mojito",
    title: "Mojito - Animation web page for bar",
    description:
      "An animation web page for a bar, created with React, GSAP, and TailwindCSS for a visually engaging experience.",
    image: "/images/mojiyo.png",
    bgColor: "bg-[#FFEFDB]",
    liveLink: "https://mojito-eta-two.vercel.app/",
    githubLink: "https://github.com/ton0005/mojito",
  },
  {
    id: "farm-management",
    title: "Industry Farm Management Web Application",
    image: "/images/project2.jpeg",
    bgColor: "bg-[#FFEFDB]",
    liveLink: null,
    githubLink: "https://github.com/ton0005/Back-End_Beerenberg-Family-Farm",
  },
  {
    id: "indigenous-art",
    title: "Indigenous Art Atlas - A map of Indigenous art locations",
    image: "/images/project3.jpeg",
    bgColor: "bg-[#FFE7EB]",
    liveLink: null,
    githubLink: "https://github.com/ton0005/COMP9030-Assignment-main",
  },
  {
    id: "3d-portfolio",
    title: "3D Interactive Portfolio - React & Three.js",
    image: "/images/project4.png",
    bgColor: "bg-[#E8F4FD]",
    liveLink: "https://alice-ton-portfolio.vercel.app/",
    githubLink: "https://github.com/thanhtruc3995/React-portfolio",
  },
  {
    id: "java-app",
    title: "Youtube Trender - Analyzing YouTube Trends with Java",
    image: "/images/Project5.png",
    bgColor: "bg-[#FFF3E8]",
    liveLink: null,
    githubLink: "https://github.com/ton0005/Java",
  },
];

// GitHub Icon Component
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Live Web Icon Component
const LiveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Project Links Component
const ProjectLinks = ({ liveLink, githubLink }) => (
  <div className="flex gap-3 mt-3">
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-50 hover:text-white transition-colors duration-300"
        title="View on GitHub"
      >
        <GitHubIcon />
      </a>
    )}
    {liveLink && (
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-50 hover:text-white transition-colors duration-300"
        title="View Live Site"
      >
        <LiveIcon />
      </a>
    )}
  </div>
);

const showcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const portfolioRef = useRef(null);
  const javaRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, portfolioRef.current, javaRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section id="Projects" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={rydeRef}>
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
            <div className="text-content">
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
              <ProjectLinks
                liveLink={projects[0].liveLink}
                githubLink={projects[0].githubLink}
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className={`image-wrapper ${projects[1].bgColor}`}>
                <img src={projects[1].image} alt={projects[1].title} />
              </div>
              <h2>{projects[1].title}</h2>
              <ProjectLinks
                liveLink={projects[1].liveLink}
                githubLink={projects[1].githubLink}
              />
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className={`image-wrapper ${projects[2].bgColor}`}>
                <img src={projects[2].image} alt={projects[2].title} />
              </div>
              <h2>{projects[2].title}</h2>
              <ProjectLinks
                liveLink={projects[2].liveLink}
                githubLink={projects[2].githubLink}
              />
            </div>
            <div className="project" ref={portfolioRef}>
              <div className={`image-wrapper ${projects[3].bgColor}`}>
                <img src={projects[3].image} alt={projects[3].title} />
              </div>
              <h2>{projects[3].title}</h2>
              <ProjectLinks
                liveLink={projects[3].liveLink}
                githubLink={projects[3].githubLink}
              />
            </div>
            <div className="project" ref={javaRef}>
              <div className={`image-wrapper ${projects[4].bgColor}`}>
                <img src={projects[4].image} alt={projects[4].title} />
              </div>
              <h2>{projects[4].title}</h2>
              <ProjectLinks
                liveLink={projects[4].liveLink}
                githubLink={projects[4].githubLink}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default showcaseSection;
