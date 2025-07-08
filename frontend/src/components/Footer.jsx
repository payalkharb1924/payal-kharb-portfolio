"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-500 text-base-content py-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* Logo / Name */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Payal Kharb</h2>
          <p className="text-sm opacity-80">
            Building intuitive UIs and solving real-world problems with code.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-primary transition-all">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary transition-all">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-all">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with me</h3>
          <div className="flex gap-5">
            <a
              href="https://github.com/payalkharb1924"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/payalkharb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=kharbpayal@gmail.com"
              className="text-xl hover:text-primary transition-all"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm mt-10 text-base-content/60"
      >
        &copy; {new Date().getFullYear()} Payal Kharb. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
