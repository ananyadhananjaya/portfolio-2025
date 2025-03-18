import { motion } from "motion/react";

type jobComp = {
  year: string;
  role: string;
  company: string;
  about: string;
  skills: string[];
};

const PrevJobComp = ({ year, role, about, skills, company }: jobComp) => {
  const generateSkill = (skill: string) => {
    return (
      <motion.p
        key={skill}
        className="bg-purple-800 text-purple-100 p-1 rounded-4xl px-4 capitalize tracking-wide"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {skill}
      </motion.p>
    );
  };
  return (
    <div className="flex flex-col md:flex-row pt-6">
      <div className="flex-2">{year}</div>
      <div className="flex-6">
        <div className="flex flex-col gap-4">
          <div>
            <h5 className="text-xl text-zinc-200 uppercase tracking-wide font-medium">
              {role}
            </h5>
            <h5 className="text text-zinc-400 tracking-wider font-medium">
              {company}
            </h5>
          </div>
          <p>{about}</p>
          <div className="flex gap-4 flex-wrap">
            {skills.map((it) => generateSkill(it))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrevJobComp;
