import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr.Sayed Anas ",
    feedback: "Deepraj's 'Alumverse' project showcases a well-architected platform that bridges the gap between students and alumni with seamless role-based access control. ",
    role: "T&P Coordinator,BBDU",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Neha Gupta",
    feedback:
      "His AI-powered Kids Story Generator reflects creativity and practical use of generative AI to make learning fun and interactive for children.",
    role: "HR at Mirai Web Technologies",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Mrs. Ranjana Rao",
    feedback:
      "for the acdemic purpose the project Alumverse is very useful for the students to get the information about their alumni.",
    role: "Ass. Professor , BBDU",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
 
  {
    name: "Dr. Prabhash Chandra Pathak",
    feedback:
      "I was so impressed with the professionalism, skill, and efficiency. We had a tight deadline, and they nailed it perfectly.",
    role: "HOD (SOCA), BBDU",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 px-6 md:px-12 bg-white dark:bg-[#0f172a] text-black dark:text-white"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Testimonials
      </motion.h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {testimonials.map(({ name, feedback, role, avatar }, idx) => (
          <motion.div
            key={idx}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-400 dark:border-gray-700 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <FaQuoteLeft className="text-3xl text-indigo-400 dark:text-indigo-300 mb-4" />

            <p className="mb-6 text-gray-800 dark:text-gray-200 italic leading-relaxed">
              {feedback}
            </p>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-300 dark:border-gray-600">
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
              />
              <div className="text-left">
                <h4 className="font-semibold text-base text-indigo-700 dark:text-indigo-300">
                  {name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  </section>
);

export default Testimonials;
