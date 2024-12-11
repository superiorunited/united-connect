import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { faqData } from '../data/faqData';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 pr-12">
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">{answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">
              United Connect FAQ
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about becoming a partner
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqData.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="bg-white rounded-lg shadow-sm">
                  {section.items.map((item, itemIndex) => (
                    <FAQItem key={itemIndex} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8">
              Join United Connect today and start earning income now.
            </p>
            <Link
              to="/#apply"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}