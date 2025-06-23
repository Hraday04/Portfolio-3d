import { FlipWords } from "./FlipWords";
import { motion, AnimatePresence } from "motion/react";


const HeroText = () => {
  const words = ["Seamless", "Intuitive", "Dynamic", "Responsive", "Customizable"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium drop-shadow-[0_0_1px_skyblue] drop-shadow-[0_0_1px_skyblue] drop-shadow-[0_0_2px_skyblue]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hey, I'm Hraday
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            An Enthusiastic Developer <br /> Commited to make
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}

      <div className="flex- flex-col space-y-6 md:hidden text-3xl text-white">
        <motion.p
          className="text-4xl font-medium drop-shadow-[0_0_1px_skyblue] drop-shadow-[0_0_1px_skyblue] drop-shadow-[0_0_2px_skyblue]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hey, I'm Hraday
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Developing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl mt-2 mb-2"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Apps
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
