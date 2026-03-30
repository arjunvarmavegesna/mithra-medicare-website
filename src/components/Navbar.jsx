import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Phone } from 'lucide-react';

const links = ['Home','About','Services','Doctors','Facilities','Testimonials','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Mithra Medicare Hospital" className="h-12 w-auto rounded-lg" />
            <div>
              <p className={`font-bold text-lg leading-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                Mithra Medicare
              </p>
              <p className={`text-xs ${scrolled ? 'text-teal' : 'text-blue-200'}`}>Hospital</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919999999999" className="flex items-center gap-1 text-teal font-semibold text-sm">
              <Phone className="w-4 h-4" />
              Emergency
            </a>
            <a
              href="#contact"
              className="bg-teal text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-cyan-600 transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium hover:text-teal transition-colors"
                >
                  {link}
                </a>
              ))}
              <a href="#contact" className="bg-teal text-white text-center py-2.5 rounded-full font-semibold">
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
