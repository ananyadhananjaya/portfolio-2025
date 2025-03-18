import { motion } from "motion/react";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-2">
      <motion.h2
        className="text-4xl font-bold"
        transition={{ duration: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Ananya Dhananjaya
      </motion.h2>
      <h4 className="text-2xl font-semibold">Front End Engineer</h4>

      <div className="flex">
        <p className="sm:flex md:flex-wrap flex-1 xl:flex-3 text-zinc-400">
          I design user-centric, pixel-perfect web experiences that are both
          accessible and functional.
        </p>
        <div className="xl:flex-2 flex-0" />
      </div>
    </div>
  );
};

export default Introduction;
