"use client";

import { motion } from "framer-motion";
import { Code, Server, Wrench, Zap } from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "Tailwind", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "VS Code", "Render", "Vercel"],
  },
  {
    title: "Other",
    icon: Zap,
    items: ["Figma", "Framer Motion", "Zustand", "JWT", "REST APIs"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-base-200 text-base-content"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skills</h2>
        <p className="text-base-content/70 text-lg">
          Technologies and tools I work with regularly
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-base-100 rounded-xl shadow-md border border-base-content/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Icon size={28} />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm px-3 py-1 rounded-full border border-base-content/10 bg-base-100/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
