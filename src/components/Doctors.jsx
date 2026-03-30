import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award } from 'lucide-react';

const doctors = [
  { name: 'Dr. Ravi Kumar', specialty: 'Cardiologist', exp: '18 yrs', rating: 4.9, color: 'from-red-400 to-rose-500' },
  { name: 'Dr. Priya Sharma', specialty: 'Gynecologist', exp: '14 yrs', rating: 4.8, color: 'from-pink-400 to-fuchsia-500' },
  { name: 'Dr. Venkata Rao', specialty: 'Orthopedic Surgeon', exp: '20 yrs', rating: 4.9, color: 'from-orange-400 to-amber-500' },
  { name: 'Dr. Lakshmi Devi', specialty: 'Pediatrician', exp: '12 yrs', rating: 4.7, color: 'from-teal-400 to-cyan-500' },
  { name: 'Dr. Srinivas Murthy', specialty: 'General Physician', exp: '16 yrs', rating: 4.8, color: 'from-blue-400 to-indigo-500' },
  { name: 'Dr. Anjali Reddy', specialty: 'Emergency Specialist', exp: '10 yrs', rating: 4.9, color: 'from-green-400 to-emerald-500' },
];

export default function Doctors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="doctors" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Meet Our Doctors</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Experienced, compassionate specialists dedicated to your health and recovery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Avatar */}
              <div className={`bg-gradient-to-br ${doc.color} h-48 flex items-center justify-center relative`}>
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl font-bold">
                  {doc.name.split(' ')[1][0]}
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span className="text-white text-xs font-bold">{doc.exp}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-primary text-xl">{doc.name}</h3>
                <p className="text-teal font-medium text-sm mt-1">{doc.specialty}</p>
                <div className="flex items-center gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400" fill={j < Math.floor(doc.rating) ? '#facc15' : 'none'} />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">{doc.rating}</span>
                </div>
                <button className="mt-4 w-full border-2 border-teal text-teal py-2 rounded-xl font-semibold text-sm hover:bg-teal hover:text-white transition-colors group-hover:bg-teal group-hover:text-white">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
