import { CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: "Lucrative Compensation",
    items: [
      "20% of placement fee from first hire",
      "5% of referred client's gross annual billings",
      "Ongoing yearly bonuses for active clients"
    ]
  },
  {
    title: "Performance Bonuses",
    items: [
      "Refer 3 clients: $5,000 bonus",
      "Refer 5 clients: $10,000 bonus",
      "Refer 10 clients: $20,000 or luxury trip"
    ]
  },
  {
    title: "Program Benefits",
    items: [
      "Flexible, part-time opportunity",
      "No quotas or commitments",
      "Stay connected to the industry"
    ]
  }
];

export default function Benefits() {
  return (
    <div id="benefits" className="relative py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/90 to-blue-800/95" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Join the Program</h2>
          <p className="mt-4 text-lg text-gray-200">
            Discover the exceptional benefits of becoming a partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/10 shadow-xl animate-fade-up animate-fade-up-delay-${index + 1}`}
            >
              <h3 className="text-xl font-semibold text-white mb-6">{benefit.title}</h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}