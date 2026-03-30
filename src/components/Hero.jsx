import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Award } from 'lucide-react';

const floatingIcons = [
  { icon: Heart, x: '10%', y: '20%', size: 40, delay: 0 },
  { icon: Shield, x: '85%', y: '15%', size: 32, delay: 0.5 },
  { icon: Clock, x: '5%', y: '70%', size: 28, delay: 1 },
  { icon: Award, x: '90%', y: '65%', size: 36, delay: 0.8 },
  { icon: Heart, x: '75%', y: '80%', size: 24, delay: 1.5 },
  { icon: Shield, x: '20%', y: '85%', size: 30, delay: 0.3 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a3c6e 0%, #0f2a52 40%, #0891b2 100%)',
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full bg-teal -top-40 -right-40 opacity-10"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300 -bottom-20 -left-20 opacity-10"
        />
      </div>

      {/* Floating medical icons */}
      {floatingIcons.map(({ icon: Icon, x, y, size, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-white opacity-10"
          style={{ left: x, top: y }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay }}
        >
          <Icon width={size} height={size} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">24/7 Emergency Services Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Mithra{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
            Medicare
          </span>
          <br />Hospital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-blue-100 mb-4 font-light"
        >
          Caring for You, Every Step of the Way
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-blue-200 mb-10 text-sm md:text-base"
        >
          📍 Pedameram, Andhra Pradesh, India
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-1"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            Our Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '10,000+', label: 'Patients Served' },
            { value: '50+', label: 'Expert Doctors' },
            { value: '15+', label: 'Years of Service' },
            { value: '24/7', label: 'Emergency Care' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-cyan-300">{stat.value}</p>
              <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
