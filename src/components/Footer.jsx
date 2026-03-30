import { Heart, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const WA_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Mithra%20Medicare%20Hospital.";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-teal p-2 rounded-lg">
                <Heart className="text-white w-5 h-5" fill="white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">Mithra Medicare</p>
                <p className="text-blue-300 text-xs">Hospital, Rajamahendravaram</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Your trusted multispecialty healthcare partner — dedicated to compassionate, expert care for every patient.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home','About Us','Doctors','Services','Appointment','Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ','').replace('aboutus','about')}`} className="text-blue-200 hover:text-teal text-sm transition-colors">
                    → {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-lg mb-4">Departments</h4>
            <ul className="space-y-2">
              {['General Surgery','Gynaecology','Gastroenterology','Orthopaedics','Paediatrics','Pulmonology','ENT','Dermatology'].map(d => (
                <li key={d} className="text-blue-200 text-sm">• {d}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                Main Road, Rajamahendravaram, Andhra Pradesh – 533 101
              </li>
              <li className="flex gap-3 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a><br />
                  <a href="tel:+918832123456" className="hover:text-white">+91 88321 23456</a>
                </div>
              </li>
              <li className="flex gap-3 text-blue-200 text-sm">
                <Clock className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                Mon–Sat: 8AM – 9PM<br />Sunday: 9AM – 2PM<br />Emergency: 24/7
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col gap-2">
          <p className="text-blue-300 text-sm">© 2025 Mithra Medicare Hospital. All rights reserved.</p>
          <p className="text-blue-400 text-xs">
            <strong>Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified medical professional for diagnosis and treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
