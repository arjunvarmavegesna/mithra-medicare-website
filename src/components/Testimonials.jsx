import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Ramaiah K.', location: 'Pedameram', rating: 5, text: 'Excellent care and very professional staff. The doctors were thorough and kind. I would highly recommend Mithra Medicare to anyone in need of quality healthcare.' },
  { name: 'Sudha V.', location: 'Razole', rating: 5, text: 'I delivered my baby here and the entire experience was wonderful. The gynecology team was outstanding, and the facilities were clean and comfortable.' },
  { name: 'Nagaraju P.', location: 'Amalapuram', rating: 5, text: 'After a road accident, I was rushed to their emergency. The quick response and expert orthopedic care saved my life. Forever grateful.' },
  { name: 'Indira M.', location: 'Kakinada', rating: 4, text: 'Very affordable and quality care. The diagnostic lab results came quickly and the doctors explained everything clearly. Highly satisfied.' },
  { name: 'Seshaiah T.', location: 'Pedameram', rating: 5, text: 'My father received cardiac care here and the cardiologist was simply brilliant. State-of-the-art equipment and compassionate staff.' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

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
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400" fill="#facc15" />
                ))}
              </div>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                {testimonials[current].name[0]}
              </div>
              <p className="font-bold text-primary text-lg">{testimonials[current].name}</p>
              <p className="text-teal text-sm">{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all text-primary">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-teal w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all text-primary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
