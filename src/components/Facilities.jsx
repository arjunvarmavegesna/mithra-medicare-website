import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Activity, Scissors, Clock, Microscope, Truck, BedDouble } from 'lucide-react';

const facilities = [
  { icon: Activity, title: 'ICU', desc: 'Fully equipped Intensive Care Unit with round-the-clock monitoring and life support systems.', color: 'bg-red-50 text-red-500' },
  { icon: Scissors, title: 'Operation Theatre', desc: 'State-of-the-art modular OT with advanced laparoscopic and surgical equipment.', color: 'bg-blue-50 text-blue-500' },
  { icon: Clock, title: '24/7 Emergency', desc: 'Always-on emergency unit with rapid response team and trauma care facilities.', color: 'bg-orange-50 text-orange-500' },
  { icon: Microscope, title: 'Modern Lab', desc: 'NABL-accredited diagnostic lab with same-day results for most tests.', color: 'bg-purple-50 text-purple-500' },
  { icon: Truck, title: 'Ambulance Services', desc: 'GPS-tracked ambulances with paramedic staff available 24/7 for emergencies.', color: 'bg-teal-50 text-teal-500' },
  { icon: BedDouble, title: 'Inpatient Rooms', desc: 'Comfortable private, semi-private, and general ward rooms with modern amenities.', color: 'bg-green-50 text-green-500' },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="facilities" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">World-Class Facilities</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Equipped with the latest medical technology to support the best patient outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`${color} p-4 rounded-2xl flex-shrink-0 h-fit`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-primary text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary to-teal rounded-3xl p-10 text-white text-center"
        >
          <h3 className="text-3xl font-extrabold mb-3">Need Emergency Care?</h3>
          <p className="text-blue-100 mb-6">Our emergency team is available 24 hours, 7 days a week.</p>
          <a
            href="tel:+919999999999"
            className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Call Now: +91 99999 99999
          </a>
        </motion.div>
      </div>
    </section>
  );
}
