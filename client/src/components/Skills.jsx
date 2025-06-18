import { useRef } from 'react';
import { skillsData } from '../data/skills';

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

      {/* Make outer container overflow-visible to allow tooltip outside */}
      <div className="relative overflow-visible z-10">
        <div
          className="flex gap-16 whitespace-nowrap animate-marquee"
          style={{ minWidth: 'max-content' }}
        >
          {[...skillsData, ...skillsData].map(({ name, icon, level }, index) => (
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
                style={{ pointerEvents: 'auto' }} // make sure it can be hovered
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

      {/* Sound effect */}
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
