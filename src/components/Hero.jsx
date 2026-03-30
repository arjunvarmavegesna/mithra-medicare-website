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

const WA_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Mithra%20Medicare%20Hospital.";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #0f2a52 40%, #0891b2 100%)' }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] rounded-full bg-cyan-400 -top-40 -right-40 opacity-10"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[500px] h-[500px] rounded-full bg-blue-300 -bottom-20 -left-20 opacity-10"
        />
      </div>

      {/* Floating icons */}
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

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">Trusted Multispecialty Hospital · 24/7 Emergency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          Your Health Is Our<br />
          <em className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300 not-italic">
            Sacred Commitment
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-blue-100 mb-2 max-w-2xl mx-auto"
        >
          Expert care across 12+ specialties. Our team of 13 dedicated doctors brings world-class medicine
          with a personal touch — because every patient deserves the very best.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-blue-300 mb-10 text-sm"
        >
          📍 Rajamahendravaram, Andhra Pradesh
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book Appointment on WhatsApp
          </a>
          <a
            href="#doctors"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            Meet Our Doctors ↓
          </a>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '13+', label: 'Specialist Doctors', icon: '👨‍⚕️' },
            { value: '12+', label: 'Departments', icon: '🏥' },
            { value: '10K+', label: 'Patients Served', icon: '❤️' },
            { value: '24/7', label: 'Emergency Care', icon: '🕐' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <p className="text-3xl font-extrabold text-cyan-300">{stat.value}</p>
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
