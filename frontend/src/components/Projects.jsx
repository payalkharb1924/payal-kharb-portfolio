import ProjectCard from "./miniComponents/ProjectCard";
import letterbox from "../assets/projects/letterbox.mp4";
import gatewayTourism from "../assets/projects/gatewayTourism.mp4";

const projects = [
  // {
  //   title: "My Portfolio",
  //   videoSrc: "/videos/portfolio.mp4",
  //   description:
  //     "A clean, modern portfolio built with React, Tailwind, framer-motion, and daisyUI.",
  //   techStack: ["React", "TailwindCSS", "Framer Motion", "DaisyUI"],
  //   github: "https://github.com/yourname/portfolio",
  //   demo: "https://yourdomain.com",
  // },
  {
    title: "Chat App",
    videoSrc: letterbox,
    description:
      "Realtime chat with authentication and custom themes using Socket.IO and Zustand.",
    techStack: ["React", "Zustand", "Express", "Socket.IO"],
    github: "https://github.com/payalkharb1924/fullstack-chat-app",
    demo: "https://letterbox-yuvy.onrender.com/",
  },
  {
    title: "Gateway Tourism",
    videoSrc: gatewayTourism,
    description:
      "A frontend website for a tourism company, built with HTML, CSS and JavaScript showcasing a responsive design and interactive features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/payalkharb1924/GatewayWebsite",
    demo: "https://payalkharb1924.github.io/GatewayWebsite/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
