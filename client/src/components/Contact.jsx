// src/components/Contact.jsx
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import SuccessPopup from '../components/successPopup';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await axios.post('https://personal-portfolio-f45f.onrender.com', form);
      if (res.data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 3000); // hide after 3s
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-br from-white via-sky-100 to-white overflow-hidden">
      {/* Blurred Bubbles */}
      <div className="absolute top-0 left-0 w-50 h-60 bg-blue-200 bubble"></div>
      <div className="absolute bottom-0 right-0 w-46 h-66 bg-purple-200 bubble"></div>
      <div className="absolute top-1/2 left-1/2 w-42 h-42 bg-pink-200 bubble"></div>

      <SuccessPopup show={status === 'success'} />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm mt-2">Failed to send. Try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
