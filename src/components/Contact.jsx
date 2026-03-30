import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const WA_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Mithra%20Medicare%20Hospital.";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">Contact Us</h2>
          <div className="w-20 h-1 bg-teal mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4">We're here to help. Reach out via phone, WhatsApp, or visit us in person.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: 'Address', value: 'Mithra Medicare Hospital\nMain Road, Rajamahendravaram\nAndhra Pradesh – 533 101' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210\n+91 88321 23456' },
                { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 8:00 AM – 9:00 PM\nSunday: 9:00 AM – 2:00 PM\nEmergency: 24/7' },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us on WhatsApp →', isLink: true },
              ].map(({ icon: Icon, label, value, isLink }, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                  <div className="bg-teal/10 p-3 rounded-xl flex-shrink-0">
                    <Icon className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                    {isLink ? (
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">{value}</a>
                    ) : (
                      <p className="text-gray-700 font-semibold whitespace-pre-line text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-56">
              <iframe
                title="Mithra Medicare Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30547.18484978944!2d81.7577!3d17.0005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4f71e6c7a4d%3A0x7c42f41dd2d12f5!2sRajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </motion.div>

          {/* Booking Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary to-teal rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-2">Simple, Fast & Hassle-Free Booking</h3>
              <p className="text-blue-100 mb-8 text-sm">No waiting in long queues. Book via WhatsApp in minutes.</p>

              <div className="space-y-6 mb-10">
                {[
                  { num: '1', title: 'Message Us on WhatsApp', desc: 'Send your name, preferred doctor, and a convenient time slot.' },
                  { num: '2', title: 'Choose Doctor & Time', desc: 'Our team confirms availability and suggests the best options.' },
                  { num: '3', title: 'Secure Payment via Razorpay', desc: 'Pay your consultation fee safely through a Razorpay link.' },
                  { num: '4', title: 'Appointment Confirmed! ✅', desc: 'Receive confirmation with doctor details, time, and room number.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <p className="font-bold">{step.title}</p>
                      <p className="text-blue-100 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Book via WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
