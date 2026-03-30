import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Brain, Bone, Baby, UserCheck, Zap, FlaskConical, Pill } from 'lucide-react';

const services = [
  { icon: Heart, title: 'Cardiology', desc: 'Advanced cardiac care with ECG, echo, and interventional procedures.', color: 'from-red-500 to-rose-400' },
  { icon: Brain, title: 'General Medicine', desc: 'Comprehensive diagnosis and treatment for all general health conditions.', color: 'from-purple-500 to-violet-400' },
  { icon: Bone, title: 'Orthopedics', desc: 'Expert bone and joint care, fracture management, and joint replacement.', color: 'from-orange-500 to-amber-400' },
  { icon: Baby, title: 'Pediatrics', desc: 'Specialized care for infants, children, and adolescents.', color: 'from-pink-500 to-fuchsia-400' },
  { icon: UserCheck, title: 'Gynecology', desc: "Women's health, antenatal care, and safe delivery services.", color: 'from-teal-500 to-cyan-400' },
  { icon: Zap, title: 'Emergency Care', desc: '24/7 emergency services with rapid response trauma team.', color: 'from-yellow-500 to-orange-400' },
  { icon: FlaskConical, title: 'Diagnostics & Lab', desc: 'State-of-the-art laboratory with rapid result processing.', color: 'from-blue-500 to-indigo-400' },
  { icon: Pill, title: 'Pharmacy', desc: 'In-house pharmacy with all essential medicines available round the clock.', color: 'from-green-500 to-emerald-400' },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Our Departments</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Comprehensive medical services under one roof, delivered by expert specialists.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="text-white w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4">
                <span className="text-teal text-sm font-semibold group-hover:underline">Learn more →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
