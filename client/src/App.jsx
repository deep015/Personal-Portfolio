import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>Your Name | Professional Portfolio</title>
        <meta name="description" content="Welcome to the professional portfolio of Your Name, showcasing projects, skills, and contact information." />
        <meta name="keywords" content="Your Name, portfolio, developer, React, JavaScript, projects, skills" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Name | Professional Portfolio" />
        <meta property="og:description" content="Explore the projects, skills, and contact details of Your Name." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen scroll-smooth">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Projects />
        <Testimonials />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
