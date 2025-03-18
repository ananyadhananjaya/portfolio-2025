import PrevJobComp from "./prevJobComp";

const Experience = () => {
  return (
    <div className="text-zinc-400">
      <h4 className="text-xl font-semibold tracking-wide text-zinc-200">
        EXPERIENCE
      </h4>
      <PrevJobComp
        year="2022 - 2024"
        company="Edstruments, India"
        role="senior software engineer"
        about="I joined Edstruments as a 
        Software Engineer and was promoted twice,
        reaching the role of Staff Engineer. I played a 
        key role in leading scrums, improving code reusability,
        and refactoring critical modules. I enhanced the purchasing
        and planning systems based on new designs while
        ensuring test coverage. Additionally, I contributed to
        high-priority bug fixes and production deployments, strengthening
        the overall product."
        skills={[
          "react",
          "typescript",
          "javascript",
          "storybook",
          "figma",
          "tailwind",
          "redux",
          "vite",
          "Git",
        ]}
      />
      <PrevJobComp
        year="2020 - 2022"
        company="Infosys, India"
        role="digital software engineer"
        about="Developed reusable components
        with React, Material-UI, and Redux/MobX 
        for a client project using Micro Frontend Architecture.
        Contributed to NPM packages and optimized applications by fixing critical bugs. 
        Integrated Google Analytics and Maps to enhance ETA projects. 
        Ensured code quality and reliability by implementing Jest testing."
        skills={[
          "react",
          "typescript",
          "micro frontend architecture",
          "mobx",
          "storybook",
          "material UI",
          "Git",
          "google analytics",
          "circle CI",
          "AWS",
        ]}
      />
    </div>
  );
};

export default Experience;
