import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', phone: '', email: '', dept: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Contact & Location</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-8">
              {[
                { icon: MapPin, label: 'Address', value: 'Mithra Medicare Hospital, Pedameram, East Godavari Dist., Andhra Pradesh - 533 XXX' },
                { icon: Phone, label: 'Phone', value: '+91 99999 99999 / +91 88888 88888' },
                { icon: Mail, label: 'Email', value: 'info@mithramedicare.in' },
                { icon: Clock, label: 'OPD Hours', value: 'Mon–Sat: 8:00 AM – 8:00 PM\nEmergency: 24/7' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-teal/10 p-3 rounded-xl flex-shrink-0">
                    <Icon className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">{label}</p>
                    <p className="text-gray-700 font-semibold whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-56">
              <iframe
                title="Pedameram Map"
                src="https://maps.google.com/maps?q=Pedameram,+Andhra+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Book an Appointment</h3>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-center font-semibold"
                >
                  ✅ Your appointment request has been sent! We'll call you shortly.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
                  />
                  <input
                    required
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
                />
                <select
                  value={form.dept}
                  onChange={e => setForm({ ...form, dept: e.target.value })}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal text-gray-700"
                >
                  <option value="">Select Department</option>
                  {['General Medicine','Cardiology','Orthopedics','Pediatrics','Gynecology','Emergency','Diagnostics'].map(d => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <textarea
                  rows={4}
                  placeholder="Describe your symptoms or message..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-teal text-gray-700 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-teal text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                  Send Appointment Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
