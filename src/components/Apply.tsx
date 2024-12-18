import { Mail, Phone, MapPin, Linkedin, Facebook, X, Instagram } from 'lucide-react';
import { useState } from 'react';
import { sendEmail } from '../utils/email';

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Update word count for experience field
    if (id === 'experience') {
      const words = value.trim().split(/\s+/);
      setWordCount(words.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (wordCount > 150) {
      alert('Please limit your experience description to 150 words.');
      return;
    }
    setIsSubmitting(true);
    try {
      await sendEmail({
        form_type: 'Partner Application',
        ...formData
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', experience: '' });
      setWordCount(0);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="apply" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Join?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Take the first step towards becoming a partner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8 animate-fade-up animate-fade-up-delay-1">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Industry Experience 
                  <span className={`ml-2 ${wordCount > 150 ? 'text-red-600' : 'text-gray-500'}`}>
                    ({wordCount}/150 words)
                  </span>
                </label>
                <textarea
                  id="experience"
                  rows={8}
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 
                    ${wordCount > 150 ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                  placeholder="Tell us about your experience in the manufacturing industry..."
                ></textarea>
                {wordCount > 150 && (
                  <p className="mt-1 text-sm text-red-600">
                    Please limit your response to 150 words
                  </p>
                )}
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-600">Your application has been submitted successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600">There was an error submitting your application. Please try again.</div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>

          <div className="space-y-8 animate-fade-up animate-fade-up-delay-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Who We're Looking For</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Individuals currently employed or retired from the manufacturing, supply chain, or automotive sectors.
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Individuals with strong networks in Tier 1 and Tier 2 suppliers or OEMs
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  Those looking for flexible, performance-based opportunities
                </li>
              </ul>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="ml-2 text-gray-700">888-655-0030</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <span className="ml-2 text-gray-700">
                    600 W. 6th Street<br />
                    Fourth Floor<br />
                    Fort Worth, TX 76102
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/company/unitedstaffsource" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/unitedstaffsource" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://x.com/UnitedStaff" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <X className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}