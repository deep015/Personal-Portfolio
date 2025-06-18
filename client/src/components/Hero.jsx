import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Developer", "Designer", "Engineer",];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const localTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900 font-mono px-6 md:px-16">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="radial-dark-bg absolute inset-0 opacity-40" />
        <div className="pulse-glow absolute w-[400px] h-[400px] bg-indigo-900/20 blur-[140px] rounded-full left-[10%] top-[30%]" />
        <div className="pulse-glow absolute w-[300px] h-[300px] bg-slate-800/20 blur-[120px] rounded-full right-[15%] bottom-[20%]" />
      </div>

      {/* Floating Symbols */}
      <motion.div
        className="absolute text-[120px] font-bold opacity-10 select-none pointer-events-none"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 6 }}
      >
        <div className="absolute top-10 left-10 text-gray-500 rotate-12">{`{`}</div>
        <div className="absolute bottom-20 right-24 text-gray-900 rotate-[-50deg]">#</div>
        <div className="absolute top-[45%] left-[60%] text-gray-900 rotate-[45deg]">{`>`}</div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Hi, I’m <span className="text-blue-600">Deepraj</span>, a{" "}
          <span className="text-blue-600">{text}</span>
          <span className="text-blue-600 animate-pulse">|</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto mt-4"
        >
          I bring value to web development projects by merging technical expertise
          with creativity and aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
          >
            let’s-get-in-touch <ArrowRight className="ml-1" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Info */}
     {/* Bottom Info */}
<div className="fixed bottom-0 left-0 w-full text-center text-sm py-2 bg-white text-black backdrop-blur-sm z-50 border-t border-gray-700">
  Based in India &nbsp;|&nbsp; Now in Ambedkar Nagar, U.P. &nbsp;|&nbsp; Local time: {localTime}
</div>

    </section>
  );
}
