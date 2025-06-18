import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-center border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/deep015"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/deepraj-o-31884a24b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:omraj767956@gmail.com"
          className="text-gray-400 hover:text-white"
        >
          <Mail size={24} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Deep<sup>TM</sup>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
