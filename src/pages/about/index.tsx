import { motion } from "motion/react";

const About = () => {
  return (
    <div className="text-zinc-400 flex flex-col gap-4">
      <h4 className="text-xl font-semibold tracking-wide text-zinc-200">
        ABOUT
      </h4>
      <p>
        I'm a developer who thrives on building accessible, pixel-perfect user
        interfaces that merge design and engineering seamlessly. I enjoy working
        at the intersection of design and development, crafting experiences that
        are both visually stunning and highly performant.
      </p>
      <div>
        I have 4 years of experience as a frontend engineer, specializing in
        React, TypeScript, and modern UI frameworks. At{" "}
        <motion.b
          className="text-zinc-300"
          whileHover={{
            color: "#FCFCFC",
          }}
        >
          Edstruments
        </motion.b>
        , I led scrums, refactored core modules, and improved code reusability
        with Storybook. Previously, at{" "}
        <motion.b
          className="text-zinc-300"
          whileHover={{
            color: "#FCFCFC",
          }}
        >
          Infosys
        </motion.b>
        , I worked on a client project with a Micro Frontend Architecture,
        developing reusable components and contributing to an NPM package. My
        work focuses on building scalable, high-performance web applications
        with clean, maintainable code.
      </div>
      <p>
        In my free time, my husband and I love going on hikes and taking long
        walks together, exploring new trails and enjoying the outdoors.
      </p>
    </div>
  );
};

export default About;
