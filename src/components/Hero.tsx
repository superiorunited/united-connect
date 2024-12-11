import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hero } from '@/assets';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Network, Your Legacy: Build Enduring Financial Growth
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join United Connect and leverage your professional expertise to connect top-tier talent with leading automotive manufacturers, all while building a growing stream of recurring income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/#apply" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/#how-it-works" 
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}