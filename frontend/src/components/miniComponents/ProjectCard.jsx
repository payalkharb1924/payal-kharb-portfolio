"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const ProjectCard = ({
  title,
  videoSrc,
  description,
  techStack,
  github,
  demo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <motion.div
        className="relative w-full md:w-[560px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl cursor-pointer group border border-base-content/10"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-[280px] object-cover group-hover:brightness-75 transition duration-300"
          />
          {/* Click Me Overlay */}
          <div className="mb-18 absolute inset-0 flex items-center justify-center bg-black/30 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Click me
          </div>
        </div>

        {/* Bottom Reveal Section */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-base-100/80 backdrop-blur-md px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold text-base-content mb-2">
            {title}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 text-sm text-primary font-medium mb-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 border border-primary/20 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External Links */}
          <div className="flex gap-3 mt-1">
            {github && (
              <a
                href={github}
                target="_blank"
                data-tip="GitHub"
                rel="noopener noreferrer"
                data-tooltip-id={`tooltip-${title}`}
                data-tooltip-content="GitHub"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                data-tip="Live Demo"
                rel="noopener noreferrer"
                data-tooltip-id={`tooltip-${title}`}
                data-tooltip-content="Live Demo"
                className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>

          <Tooltip id={`tooltip-${title}`} place="top" />
        </motion.div>
      </motion.div>

      {/* MODAL */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-xl w-full bg-base-100 p-6 rounded-xl shadow-lg">
            <Dialog.Title className="text-2xl font-bold text-base-content mb-4">
              {title}{" "}
              <span className="text-[10px] text-base-content/30">
                Double-click to see full
              </span>
            </Dialog.Title>
            <video
              src={videoSrc}
              controls
              className="w-full rounded-xl mb-4 max-h-[500px] object-contain"
            />
            <p className="text-base-content mb-4 text-sm leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 border border-primary/20 px-2 py-1 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  data-tip="GitHub"
                  rel="noopener noreferrer"
                  data-tooltip-id={`tooltip-${title}`}
                  data-tooltip-content="GitHub"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* <Github size={18} /> GitHub */}

                  <FaGithub size={18} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  data-tip="Live Demo"
                  rel="noopener noreferrer"
                  data-tooltip-id={`tooltip-${title}`}
                  data-tooltip-content="Live Demo"
                  className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            <Tooltip id={`tooltip-${title}`} place="top" />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ProjectCard;
