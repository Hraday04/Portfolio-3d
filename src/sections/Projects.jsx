import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { myProjects } from "../constants";
import Project from "../components/Project";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 853 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 50 });
  const springY = useSpring(y, { damping: 20, stiffness: 50 });

  const handleMouseMove = (event) => {
    if (!isMobile) {
      x.set(event.clientX + 20);
      y.set(event.clientY + 20);
    }
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing mb-20"
    >
      <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
        My Projects :
      </h2>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-sky-400 mb-10" />

      <div className="space-y-10">
        {myProjects.map((project) => (
          <Project
            key={project.id}
            {...project}
            setPreview={!isMobile ? setPreview : () => {}}
          />
        ))}
      </div>

      {!isMobile && preview && (
        <motion.img
          src={preview}
          alt="Project Preview"
          className="fixed top-0 left-0 z-50 w-80 h-56 object-cover rounded-lg shadow-xl pointer-events-none border border-white/10"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
