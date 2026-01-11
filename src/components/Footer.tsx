import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'what-we-do', label: 'What We Do' },
    { id: 'get-involved', label: 'Get Involved' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-20 border-t border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <img 
              src="/hangscare logo.png" 
              alt="Hangscare Foundation Logo" 
              className="h-10 w-auto group-hover:opacity-90 transition-opacity"
            />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Caring Beyond Treatment
            </p>
            <p className="text-slate-400 text-xs">
              Restoring dignity, hope, and humanity to vulnerable patients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-500">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
                <span>info@hangscare.org</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
                <span>+260 974307132</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-500" />
                <span>
                Ndola Teaching Hospital , Ndola, Zambia


                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow-500">Follow Us</h4>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-yellow-600 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-600/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>
              &copy; 2026 Hangscare Foundation. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
