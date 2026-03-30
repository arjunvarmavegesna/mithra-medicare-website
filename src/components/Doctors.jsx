import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WA_BASE = "https://wa.me/919876543210?text=";

const DOCTORS = [
  { name: "Dr. Chunduri Sai Babu", designation: "General Surgeon", qualification: "MS, SFAIS", emoji: "🧑‍⚕️", category: "surgery", desc: "Experienced general surgeon specializing in laparoscopic and open surgical procedures." },
  { name: "Dr. A.S.N. Malleswaramma", designation: "Gynaecologist", qualification: "MBBS, M.D., D.G.O", emoji: "👩‍⚕️", category: "women", desc: "Specialist in obstetrics and gynaecology with extensive experience in women's health care." },
  { name: "Dr. Nekkanti Sai Sindhu", designation: "Gynaecologist", qualification: "M.S. (Obst. & Gynae.)", emoji: "👩‍⚕️", category: "women", desc: "Expert in obstetrics and gynaecological surgeries, dedicated to comprehensive women's care." },
  { name: "Dr. Ch. V.V. Vikranth", designation: "Gastroenterologist", qualification: "MBBS, M.D., D.M. Gastroenterology", emoji: "🧑‍⚕️", category: "medicine", desc: "DM-qualified gastroenterologist with expertise in digestive disorders, endoscopy, and liver diseases." },
  { name: "Dr. Mutyala Priyanka", designation: "Dermatologist", qualification: "M.D. Dermatology, Venerology", emoji: "👩‍⚕️", category: "others", desc: "Specialist in skin diseases, cosmetic dermatology, and venereological conditions." },
  { name: "Dr. Naga Vijayendra Vaishnavi Vaddi", designation: "Anaesthesiologist", qualification: "M.D. Anaesthesiology", emoji: "👩‍⚕️", category: "others", desc: "Expert anaesthesiologist ensuring safe and effective anaesthesia care for all surgical procedures." },
  { name: "Dr. Pavan Pradeep Yandapalli", designation: "Orthopaedic Surgeon", qualification: "MS Orthopaedics", emoji: "🧑‍⚕️", category: "surgery", desc: "MS-qualified orthopaedic surgeon specializing in fractures, joint care, and sports injuries." },
  { name: "Dr. K.G.V. Prasanth", designation: "General Physician", qualification: "MBBS, MD, CPCDM", emoji: "🧑‍⚕️", category: "medicine", desc: "Internal medicine specialist with CPCDM certification for advanced diabetes and chronic disease management." },
  { name: "Dr. Murali Areti", designation: "Paediatrician", qualification: "MD – Paediatrics", emoji: "🧑‍⚕️", category: "medicine", desc: "Dedicated paediatrician providing comprehensive healthcare for children from birth through adolescence." },
  { name: "Dr. K. Valli Manasa", designation: "Radiologist", qualification: "MD – Radiology", emoji: "👩‍⚕️", category: "others", desc: "MD-qualified radiologist providing expert diagnostic imaging interpretation for accurate medical diagnosis." },
  { name: "Dr. A.S.V. Suma Devi", designation: "ENT Specialist", qualification: "MS OTO Rhino Laryngology", emoji: "👩‍⚕️", category: "others", desc: "Specialist in ear, nose and throat conditions including otolaryngology and rhinological procedures." },
  { name: "Dr. Satish Babu Medidi", designation: "Pulmonologist", qualification: "MBBS, MD (Respiratory Medicine)", emoji: "🧑‍⚕️", category: "medicine", desc: "Respiratory medicine specialist managing asthma, COPD, lung infections, and comprehensive pulmonary care." },
  { name: "Dr. Oleti Ravi Teja", designation: "Gastro Surgeon", qualification: "MS / M.Ch", emoji: "🧑‍⚕️", category: "surgery", desc: "Advanced gastrointestinal and laparoscopic surgeon with M.Ch qualification for complex GI surgical procedures." },
];

const FILTERS = [
  { key: 'all', label: 'All Doctors' },
  { key: 'surgery', label: 'Surgery' },
  { key: 'women', label: "Women's Health" },
  { key: 'medicine', label: 'Medicine' },
  { key: 'others', label: 'Others' },
];

const catColors = {
  surgery: 'from-orange-400 to-red-500',
  women: 'from-pink-400 to-fuchsia-500',
  medicine: 'from-blue-400 to-indigo-500',
  others: 'from-teal-400 to-cyan-500',
};

export default function Doctors() {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = filter === 'all' ? DOCTORS : DOCTORS.filter(d => d.category === filter);

  return (
    <section id="doctors" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Our Medical Team</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Meet Our Specialist Doctors</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Experienced, qualified, and deeply committed to your health.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === f.key
                  ? 'bg-teal text-white shadow-md shadow-teal/30'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-teal hover:text-teal'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((doc, i) => {
            const waMsg = WA_BASE + encodeURIComponent(`Hello, I would like to book an appointment with ${doc.name} (${doc.designation}) at Mithra Medicare Hospital.`);
            return (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className={`bg-gradient-to-br ${catColors[doc.category]} h-32 flex items-center justify-center text-5xl`}>
                  {doc.emoji}
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 font-medium mb-1">Doctor #{String(DOCTORS.indexOf(doc) + 1).padStart(2, '0')}</p>
                  <h3 className="font-bold text-primary text-base leading-snug">{doc.name}</h3>
                  <p className="text-teal font-semibold text-sm mt-1">{doc.designation}</p>
                  <p className="text-gray-400 text-xs mt-1">{doc.qualification}</p>
                  <a
                    href={waMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-green-500 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book with this Doctor
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
