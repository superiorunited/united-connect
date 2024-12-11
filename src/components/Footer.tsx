import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '@/assets';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getLink = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="United Staff Source Logo" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="ml-3 flex flex-col">
                <span className="text-2xl font-extrabold">United
                <span className="font-bold"> Connect</span></span>
                <span className="text-sm -mt-1">Partner Program</span>
              </span>
            </Link>
            <p className="text-gray-400">
              Transform your industry connections into recurring revenue with United Connect.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition">About United Staff Source</Link></li>
              <li><Link to={getLink('#how-it-works')} className="text-gray-400 hover:text-white transition">About Program</Link></li>
              <li><Link to={getLink('#benefits')} className="text-gray-400 hover:text-white transition">Benefits</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              <li><Link to={getLink('#apply')} className="text-gray-400 hover:text-white transition">Apply</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">888-655-0030</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  600 W. 6th Street<br />
                  Fourth Floor<br />
                  Fort Worth, TX 76102
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/unitedstaffsource" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/unitedstaffsource" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/UnitedStaff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">X (Twitter)</span>
                <X className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}