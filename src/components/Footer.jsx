import { Heart, Phone, Mail, MapPin, Share2, Camera, AtSign, Play } from 'lucide-react';

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
                <p className="text-blue-300 text-xs">Hospital, Pedameram</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Caring for You, Every Step of the Way. Your trusted healthcare partner in Andhra Pradesh.
            </p>
            <div className="flex gap-3 mt-5">
              {[Share2, Camera, AtSign, Play].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/10 hover:bg-teal p-2 rounded-lg transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home','About Us','Services','Doctors','Facilities','Testimonials','Contact'].map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(' ','')}`} className="text-blue-200 hover:text-teal text-sm transition-colors">
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
              {['General Medicine','Cardiology','Orthopedics','Pediatrics','Gynecology','Emergency Care','Lab & Diagnostics'].map(d => (
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
                Pedameram, East Godavari Dist., Andhra Pradesh
              </li>
              <li className="flex gap-3 text-blue-200 text-sm">
                <Phone className="w-4 h-4 text-teal flex-shrink-0" />
                +91 99999 99999
              </li>
              <li className="flex gap-3 text-blue-200 text-sm">
                <Mail className="w-4 h-4 text-teal flex-shrink-0" />
                info@mithramedicare.in
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-blue-300 text-sm">© 2025 Mithra Medicare Hospital. All rights reserved.</p>
          <p className="text-blue-300 text-sm">Made with ❤️ in Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
