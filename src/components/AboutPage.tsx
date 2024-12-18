import { Building2, Users, Target, Network, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ussreception } from '../assets';

const features = [
  {
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    title: "Industry Expertise",
    description: "Specialized focus on automotive OEMs, Tier 1, and Tier 2 suppliers"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Top Talent",
    description: "Consistently delivering the top 5% of industry professionals"
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: "Critical Placements",
    description: "Expertise in quality, production management, and executive roles"
  },
  {
    icon: <Network className="h-8 w-8 text-blue-600" />,
    title: "Network Power",
    description: "Leveraging vast industry connections for optimal matches"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <img
          src={ussreception}
          alt="United Staff Source Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
        <div className="absolute inset-0 flex items-center -translate-y-[10%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About United Staff Source
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              Your trusted partner in automotive industry staffing, connecting exceptional talent with leading manufacturers.
            </p>
            <a
              href="https://unitedstaffsource.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition"
            >
              Visit United Staff Source
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-up">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                United Staff Source is a leading recruiting firm specializing in the automotive 
                and manufacturing industries. With decades of experience and a deep understanding 
                of the sector's complexities, we excel at bridging the gap between exceptional 
                talent and the organizations that need it most.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The automotive industry is evolving rapidly, with increased competition, 
                innovation demands, and a growing talent shortage. At United Staff Source, 
                we partner with automotive OEMs, Tier 1, and Tier 2 suppliers to place the 
                leaders and specialists who will drive these organizations forward.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md animate-fade-up animate-fade-up-delay-${index + 1}`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 animate-fade-up animate-fade-up-delay-3">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our focus spans critical areas, including quality management, production management, 
            plant turnarounds, and executive leadership roles. By leveraging our vast network, 
            industry knowledge, and a rigorous vetting process, we consistently deliver the top 
            5% of talent in the market.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            For potential partners, we offer an opportunity to connect us with the companies in 
            your network, ensuring they secure the talent needed to navigate today's challenges 
            and tomorrow's opportunities. At United Staff Source, we're more than a recruiting 
            firm—we're a trusted partner for professionals shaping the future of automotive 
            manufacturing.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/#apply"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Join United Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}