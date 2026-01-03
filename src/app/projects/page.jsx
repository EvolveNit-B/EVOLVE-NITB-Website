"use client";

export const dynamic = "force-dynamic";

import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  return (
    <>
      <Navbar />
      <motion.div className="relative w-full min-h-[100vh] bg-[#121212] overflow-hidden flex flex-col items-center md:px-20 px-5 py-16 pt-22 text-white text-center ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="md:text-7xl text-4xl font-bold tracking-wide">
            What We Build At<span className="text-green-500"> Evolve</span>
          </h1>
          <p className="md:max-w-3xl max-w-4xs text-sm mt-6 font-normal text-gray-400">
            Our projects are a reflection of rigorous problem-solving,
            interdisciplinary collaboration, and a commitment to technical
            excellence. Whether in embedded systems, software engineering, or
            AI-driven solutions, each initiative represents a hands-on approach
            to learning and innovation in real-world contexts.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-neutral-950 overflow-hidden backdrop-blur-sm border-[0.5px] border-green-600 rounded-2xl hover:shadow-[1px_0px_10px_1px_rgba(34,197,94,0.6)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-neutral-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-500">
                    {project.icon}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start px-6 pt-6 pb-7 mt-4 gap-4">
                <div>
                  <h1 className="md:text-2xl text-xl font-semibold group-hover:text-green-600">
                    {project.title}
                  </h1>
                </div>
                <div>
                  <p className="text-gray-400 md:text-md md:tracking-wider md:leading-5 text-xs font-medium text-left max-w-md">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="bg-green-700/20 hover:bg-green-800/20 px-3 py-1 rounded-xl text-green-500 border-[1px] border-green-800 md:text-sm text-xs transition-colors duration-100"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div
                  onClick={() => openModal(projects[index])}
                  className="bg-green-600 py-1 mt-5 hover:bg-green-700 w-[100%] rounded-lg text-black"
                >
                  <button className="font-medium tracking-wide">Details</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <ProjectModal
          isOpen={modalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </motion.div>
      <Footer />
    </>
  );
}
