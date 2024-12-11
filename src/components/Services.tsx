import { Code, Palette, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.'
  },
  {
    icon: <Palette className="h-8 w-8 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that deliver exceptional user experiences.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
    title: 'Digital Strategy',
    description: 'Comprehensive digital solutions to grow your online presence.'
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}