"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-neutral-900 text-white max-w-3xl w-full rounded-2xl shadow-[1px 0px 2px 1px rgba(34, 197, 94, 0.6)] overflow-y-auto max-h-[90vh] relative mx-4 my-8 hide-scrollbar"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-row items-center justify-between p-6 border-b border-green-800">
            <div className=" flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-950/80 backdrop-blur-sm rounded-full flex items-center justify-center text-green-500">
                {project.icon}
              </div>
              <div>
                <h1 className="text-xl font-semibold">{project.title}</h1>
              </div>
            </div>
            <button>
                <X
                    className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors duration-200"
                    onClick={onClose}
                />
            </button>
          </div>
            {/* Image Section */}
            <div className="relative max-h-[500px] overflow-hidden p-5 rounded-2xl">
                <img
                    src={project.image}
                    alt={project.title} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                />
            </div>
          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-gray-400 text-left">{project.longDescription}</p>

            <div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-700/20 px-3 py-1 rounded-xl text-green-500 border border-green-800 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm text-left font-semibold text-green-500 mb-2">
                Contributors
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.people.map((person, i) => (
                  <span
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-xl text-white text-xs border border-white/20"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
