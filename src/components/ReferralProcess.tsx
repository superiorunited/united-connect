import { useState } from 'react';
import {
  MessageCircle,
  ThumbsUp,
  Calendar,
  ClipboardList,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendEmail } from '../utils/email';

export default function ReferralProcess() {
  const [formData, setFormData] = useState({
    partnerName: '',
    clientName: '',
    companyName: '',
    position: '',
    email: '',
    phone: '',
    rolesNeeded: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Outreach',
      description: 'Connect with potential clients and introduce United Staff Source services',
    },
    {
      icon: ThumbsUp,
      title: 'Interest Confirmation',
      description: 'Client expresses interest in learning more about our services',
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Share Calendly link to schedule a meeting with USS Senior Partner',
    },
    {
      icon: ClipboardList,
      title: 'Submit Referral',
      description: 'Complete the referral form with client information',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendEmail({
        form_type: 'Partner Referral',
        ...formData
      });
      setSubmitStatus('success');
      setFormData({
        partnerName: '',
        clientName: '',
        companyName: '',
        position: '',
        email: '',
        phone: '',
        rolesNeeded: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error submitting referral:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <Link
            to="/resources"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Resources
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Referral Process
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Follow these steps to submit a new client referral
          </p>
        </div>

        {/* Process Flowchart */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-8">
                    <ArrowRight className="w-8 h-8 text-blue-600 transform -translate-x-1/2" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Referral Form */}
        <div className="mt-16">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Submit New Referral</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="partnerName"
                    id="partnerName"
                    required
                    value={formData.partnerName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                    Referred Person's Name
                  </label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    required
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Name of the person you are referring"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Company where the referred person works"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    Position/Title
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="rolesNeeded" className="block text-sm font-medium text-gray-700">
                    Roles Needed
                  </label>
                  <input
                    type="text"
                    name="rolesNeeded"
                    id="rolesNeeded"
                    required
                    value={formData.rolesNeeded}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Software Engineer, Project Manager"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any additional information about the referral..."
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Referral submitted successfully! We'll be in touch soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  There was an error submitting your referral. Please try again.
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Referral'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
