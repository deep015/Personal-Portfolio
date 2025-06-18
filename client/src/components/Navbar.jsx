import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Menu, X, Home, Briefcase, Star, User, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "Home", to: "hero", icon: <Home size={16} /> },
    { name: "Projects", to: "projects", icon: <Briefcase size={16} /> },
    { name: "Testimonials", to: "testimonials", icon: <Star size={16} /> },
    { name: "Skills", to: "skills", icon: <User size={16} /> },
    { name: "Contact", to: "contact", icon: <MessageSquare size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].to);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].to);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between font-bold text-gray-800">
        
        {/* Brand */}
        <div
          onClick={() => {
            scroll.scrollToTop();
            setMobileMenuOpen(false);
          }}
          className="text-2xl font-bold tracking-tight text-blue-600 cursor-pointer transition-transform hover:scale-105"
        >
          Deep<sup>TM</sup>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map(({ name, to, icon }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`flex items-center gap-1 relative py-2 px-1 transition-all cursor-pointer group ${
                  activeSection === to
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {icon}
                <span>{name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full transform scale-x-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                    activeSection === to ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-200 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-base font-semibold text-gray-900">
          {navLinks.map(({ name, to, icon }) => (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                offset={-80}
                duration={500}
                className={`flex items-center gap-2 py-2 px-4 rounded-md transition-all ${
                  activeSection === to
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-blue-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {icon}
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
