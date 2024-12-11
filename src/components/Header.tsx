import { Link, useLocation } from 'react-router-dom';
import { logo } from '@/assets';

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const getLink = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="United Staff Source Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="ml-3 flex flex-col">
                <span className="text-2xl font-extrabold text-gray-900">United
                <span className="font-bold text-gray-700"> Connect</span></span>
                <span className="text-sm text-gray-600 -mt-1">Partner Program</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition">About United Staff Source</Link>
            <Link to={getLink('#how-it-works')} className="text-gray-700 hover:text-blue-600 transition">About Program</Link>
            <Link to={getLink('#benefits')} className="text-gray-700 hover:text-blue-600 transition">Benefits</Link>
            <Link to={getLink('#success')} className="text-gray-700 hover:text-blue-600 transition">Success Stories</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
            <Link to={getLink('#apply')} className="text-gray-700 hover:text-blue-600 transition">Apply</Link>
          </div>

          <Link 
            to={getLink('#apply')}
            className="hidden md:inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}