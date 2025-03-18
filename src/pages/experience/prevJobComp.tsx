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
      <div className="bg-purple-800 text-purple-100 p-1 rounded-4xl px-4 capitalize tracking-wide">
        {skill}
      </div>
    );
  };
  return (
    <div className="flex pt-6">
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
          <p className="flex gap-4 flex-wrap">
            {skills.map((it) => generateSkill(it))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrevJobComp;
