import { FaCheckCircle } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Mis habilidades</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-lg font-medium text-blue-700 flex items-center">
                <FaCheckCircle className="mr-2" /> {skill.name}
              </span>
              <span className="text-sm font-medium text-blue-700">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${skill.level}%`, transition: 'width 0.5s' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
