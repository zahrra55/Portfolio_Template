import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

interface Skill {
  name: string;
  icon: JSX.Element;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'database';
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: <FaReact className="w-8 h-8" />,
    level: 90,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-8 h-8" />,
    level: 85,
    category: 'frontend',
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="w-8 h-8" />,
    level: 95,
    category: 'frontend',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="w-8 h-8" />,
    level: 88,
    category: 'backend',
  },
  {
    name: 'Python',
    icon: <FaPython className="w-8 h-8" />,
    level: 82,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-8 h-8" />,
    level: 85,
    category: 'database',
  },
  {
    name: 'AWS',
    icon: <FaAws className="w-8 h-8" />,
    level: 75,
    category: 'devops',
  },
  {
    name: 'Docker',
    icon: <FaDocker className="w-8 h-8" />,
    level: 80,
    category: 'devops',
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    devops: 'DevOps & Cloud',
    database: 'Database Management',
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([category, title]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {title}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="text-blue-600 dark:text-blue-400">
                            {skill.icon}
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 