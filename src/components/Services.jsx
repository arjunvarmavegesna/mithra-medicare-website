import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  { icon: '🔪', title: 'General Surgery', desc: 'Appendectomy, hernia repair, laparoscopic procedures, wound management, and a full range of general surgical interventions.', bg: '#e8f4fd' },
  { icon: '🤰', title: 'Gynaecology & Obstetrics', desc: 'Antenatal care, safe deliveries, gynaecological surgeries, PCOS management, and complete women\'s reproductive health services.', bg: '#fef0f7' },
  { icon: '🫁', title: 'Gastroenterology', desc: 'Diagnosis and treatment of digestive disorders including liver disease, IBS, acid reflux, colonoscopy, and endoscopy procedures.', bg: '#f0fef4' },
  { icon: '✨', title: 'Dermatology', desc: 'Skin disease treatment, acne management, allergy testing, venereology, and cosmetic dermatology consultations.', bg: '#fff8e8' },
  { icon: '🦴', title: 'Orthopaedics', desc: 'Bone and joint care, fracture management, joint replacement consultations, sports injury rehabilitation, and spine care.', bg: '#f5f0fe' },
  { icon: '💊', title: 'General Medicine', desc: 'Internal medicine, diabetes management (CPCDM certified), hypertension, fever, infection treatment, and chronic disease care.', bg: '#e8f4fd' },
  { icon: '👶', title: 'Paediatrics', desc: 'Complete child healthcare from newborn to adolescent — vaccinations, growth monitoring, fever management, and developmental care.', bg: '#f0fef4' },
  { icon: '📡', title: 'Radiology & Imaging', desc: 'X-rays, ultrasound, and diagnostic imaging services with expert radiological interpretation for accurate diagnosis.', bg: '#fff8e8' },
  { icon: '👂', title: 'ENT', desc: 'Treatment of hearing loss, sinusitis, tonsillitis, nasal polyps, throat disorders, and ENT surgical procedures.', bg: '#fef0f7' },
  { icon: '🫀', title: 'Pulmonology', desc: 'Asthma, COPD, respiratory infections, sleep apnea evaluation, spirometry, and comprehensive lung health management.', bg: '#e8f4fd' },
  { icon: '💉', title: 'Anaesthesia Services', desc: 'Expert anaesthesia care for surgical procedures, pain management consultations, and critical care anaesthetic support.', bg: '#f5f0fe' },
  { icon: '🔬', title: 'Gastro Surgery', desc: 'Advanced gastrointestinal surgical procedures including laparoscopic GI surgery, colorectal surgery, and hepatobiliary interventions.', bg: '#f0fef4' },
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Our Medical Services</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Comprehensive healthcare across 12+ specialties — delivered with precision, care, and the latest medical practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(({ icon, title, desc, bg }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform"
                style={{ background: bg }}
              >
                {icon}
              </div>
              <h3 className="font-bold text-primary text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
