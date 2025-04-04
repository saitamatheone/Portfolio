import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Fab X Industries Website",
    description: "Custom-built WordPress site to enhance branding and user experience.",
    link: "https://fabxindustries.com",
  },
  {
    title: "Guide Engineering Web Revamp",
    description: "Redesigned site using WordPress, HTML, CSS, and JavaScript to boost engagement.",
    link: "https://guideeng.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack app with React, PHP, and MySQL featuring cart and payment integration.",
    link: "#",
  },
];

const skills = [
  "React", "Angular", "TypeScript", "JavaScript", "PHP", "WordPress",
  "HTML5", "CSS3", "Tailwind CSS", "Figma", "Git", "Firebase"
];

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">[Your Name]</h1>
        <p className="text-lg text-gray-600">Front-End Developer | React, Angular, TypeScript, PHP</p>
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="mailto:you@example.com"><FaEnvelope /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I’m a front-end developer passionate about crafting clean, responsive, and engaging user interfaces. With experience in modern frameworks like React, Angular, and tools like WordPress and PHP, I love blending design with code to build meaningful web experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener" className="text-blue-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-800">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">Feel free to reach out for collaborations or opportunities.</p>
        <a href="mailto:you@example.com" className="text-blue-500 hover:underline">you@example.com</a>
      </section>
    </div>
  );
}
