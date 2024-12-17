import { Users, CheckCircle, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Refer Clients",
    description: "Introduce us to manufacturers or suppliers in need of recruiting services."
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
    title: "We Deliver",
    description: "Our team handles the recruitment process, ensuring top-tier placements that meet client needs."
  },
  {
    icon: <Trophy className="h-12 w-12 text-blue-600" />,
    title: "Earn Revenue",
    description: "Enjoy competitive commissions and ongoing bonuses based on your referrals' success."
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 -top-4 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            A Simple and Rewarding Process
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 w-full h-1 bg-blue-100 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative bg-white p-8 rounded-lg shadow-lg animate-fade-up animate-fade-up-delay-${index + 1}`}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg">
                  {step.icon}
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}