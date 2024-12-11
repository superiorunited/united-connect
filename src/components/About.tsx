import { Network, Clock, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Network className="h-8 w-8 text-blue-600" />,
    title: 'Your Network',
    description: 'Leverage your industry connections to generate consistent revenue streams.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Flexible Schedule',
    description: 'Work on your own terms with no quotas or commitments.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-blue-600" />,
    title: 'Lucrative Rewards',
    description: 'Earn substantial commissions and ongoing bonuses for successful referrals.'
  }
];

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Network. Your Expertise. Your Opportunity.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Transform your industry connections into recurring revenue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-8 rounded-lg animate-fade-up animate-fade-up-delay-${index + 1}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 relative animate-fade-up animate-fade-up-delay-3">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Professional meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-blue-900/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <p className="text-lg text-white leading-relaxed">
              United Connect is designed for experienced professionals in the manufacturing industry, 
              offering a unique opportunity to transform your connections into substantial financial rewards. 
              Whether you're a recently retired executive or an industry veteran, your network has incredible value, 
              and we'll help you realize its potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}