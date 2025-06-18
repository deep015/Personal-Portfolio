import { useRef } from 'react';

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Advanced",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Intermediate",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Advanced",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: "Advanced",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "Intermediate",
  },
  {
    name: "NPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    level: "Advanced",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Beginner",
  },
  {
    name: "Framer Motion",
    icon: "https://framerusercontent.com/images/motion-icon.svg",
    level: "Intermediate",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    level: "Intermediate",
  },
  {
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    level: "Intermediate",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: "Advanced",
  },
  {
    name: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    level: "Beginner",
  },
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    level: "Beginner",
  },
];

const getStars = (level) => {
  const levels = {
    Beginner: 2,
    Intermediate: 3,
    Advanced: 4,
    Expert: 5,
  };
  const stars = levels[level] || 0;
  return '⭐'.repeat(stars);
};

const Skills = ({ soundEnabled }) => {
  const audioRef = useRef(null);

  const handlePlaySound = () => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
        Tech Stack
      </h2>

      <div className="relative overflow-visible z-10">
        <div
          className="flex gap-16 whitespace-nowrap animate-marquee"
          style={{ minWidth: 'max-content' }}
        >
          {[...skills, ...skills].map(({ name, icon, level }, index) => (
            <div
              key={index}
              onMouseEnter={handlePlaySound}
              className="relative group flex flex-col items-center justify-center mx-6 min-w-[120px] p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
            >
              <img
                src={icon}
                alt={name}
                className="w-14 h-14 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="text-sm font-semibold text-gray-700 dark:text-white">
                {name}
              </p>

              {/* Tooltip */}
              <div
                className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-[9999] bg-black/90 text-white text-xs px-3 py-2 rounded shadow-xl whitespace-nowrap text-center min-w-[110px]"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold">{level}</span>
                  <span className="text-yellow-400 flex gap-[2px] group-hover:animate-pulse">
                    {getStars(level)}
                  </span>
                </div>
                <div className="absolute left-1/2 -bottom-1.5 w-2 h-2 rotate-45 bg-black/90 transform -translate-x-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <audio ref={audioRef} src="/sounds/hover.mp3" preload="auto" />

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
