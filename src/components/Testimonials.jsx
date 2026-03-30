import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Ravi Kumar', initials: 'RK', dept: 'Gastroenterology Patient', rating: 5, text: 'I came to Mithra Medicare with severe abdominal pain. Dr. Vikranth was incredibly thorough in his diagnosis. The treatment was swift and I recovered fully within a week. Excellent hospital!' },
  { name: 'Padmavathi Srinivas', initials: 'PS', dept: 'Gynaecology Patient', rating: 5, text: 'Dr. Nekkanti Sai Sindhu took care of me throughout my pregnancy with tremendous professionalism and warmth. My delivery was smooth and the entire nursing staff was outstanding.' },
  { name: 'Lakshmi Narayana', initials: 'LN', dept: 'Paediatrics – Parent', rating: 5, text: 'My son needed urgent care and Dr. Murali Areti was exceptional. The paediatric team was so gentle and reassuring. As a parent, I felt completely supported the entire time.' },
  { name: 'Venkata Rao', initials: 'VR', dept: 'Orthopaedics Patient', rating: 5, text: 'I had a knee injury and Dr. Yandapalli handled my orthopaedic case with great expertise. The WhatsApp booking system was so convenient — no hassle, just care.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-lg p-10 md:p-14 text-center relative"
            >
              <Quote className="text-teal/20 w-16 h-16 absolute top-8 left-8" fill="currentColor" />
              <div className="flex justify-center mb-4">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">{s}</span>
                ))}
              </div>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                {testimonials[current].initials}
              </div>
              <p className="font-bold text-primary text-lg">{testimonials[current].name}</p>
              <p className="text-teal text-sm">{testimonials[current].dept}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all text-primary">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${i === current ? 'bg-teal w-8' : 'bg-gray-300 w-2.5'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-all text-primary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
