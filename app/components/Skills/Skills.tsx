"use client"
interface SkillsProps {
    skills: string[];
  }
  
  const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
      <section id="skills" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-medium">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  Skills.defaultProps = {
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
      "HTML",
      "TypeScript",
      "Git & GitHub"
    ]
  };
  
  export default Skills;
  