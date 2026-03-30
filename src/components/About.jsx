import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Target, Eye } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">
            Your Health, Our Mission
          </h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-teal rounded-3xl p-10 text-white">
                <p className="text-5xl font-extrabold mb-2">15+</p>
                <p className="text-lg font-semibold mb-6">Years of Excellence in Healthcare</p>
                <p className="text-blue-100 leading-relaxed">
                  Mithra Medicare Hospital has been a beacon of hope and healing in Pedameram, Andhra Pradesh. 
                  Founded with a vision to provide world-class healthcare to every citizen, we combine 
                  compassionate care with cutting-edge medical technology.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400 rounded-2xl opacity-20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-xl opacity-20" />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              At Mithra Medicare Hospital, we believe every patient deserves dignified, 
              affordable, and high-quality medical care. Our team of experienced doctors, 
              nurses, and healthcare professionals work tirelessly to ensure your well-being.
            </p>

            {[
              { icon: Target, title: 'Our Mission', text: 'To deliver compassionate, affordable, and advanced medical care to the community of Pedameram and surrounding regions.' },
              { icon: Eye, title: 'Our Vision', text: 'To be the most trusted multi-specialty hospital in Andhra Pradesh, setting new benchmarks in patient care and clinical excellence.' },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-teal/10 p-3 rounded-xl flex-shrink-0">
                  <Icon className="text-teal w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{text}</p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 mt-4">
              {['Advanced Equipment', 'Expert Specialists', 'Affordable Care', 'Patient-First Approach'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-teal w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
