import React from "react";
import ProjectCard from "./project/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Portfolio",
      image: "/images/portfolio.PNG",
      description: [
        "Personal portfolio website built with React, TailwindCSS, and Framer Motion.",
        "Responsive design with dark/light mode toggle.",
      ],
      link: "https://tmakavanaportfolio.netlify.app/",
    },
    {
      name: "E-Commerce Site",
      image: "/images/e1.PNG",
      
                 

      description: [
        "Full-stack e-commerce site using React and backend on Glitch.",
        "Features product listing, cart, checkout, and admin dashboard.",
      ],
      // link: "#",
    },
    {
      name: "Weather Detector",
                image: "/images/wd1.PNG",

      description: [
        "Weather detection app using OpenWeatherMap API.",
        "Shows live weather, temperature, and forecasts for any city.",
      // link: "#",
      ],
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-16 font-nunito z-10 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
      <div className="flex flex-col gap-12">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
