import React from 'react';

const projects = [
  {
    title: 'Interactive Weather App',
    description: 'A React app that fetches real-time weather data from an API.',
    link: '#',
  },
  {
    title: 'Job Search App',
    description: 'Find remote jobs by title and location. Built with React, JSearch API, and custom backend.',
    link: 'https://myjob-search-app.netlify.app',
  },
  {
    title: 'Responsive Portfolio Site',
    description: 'A clean, mobile-first personal portfolio built with React.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transition hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;