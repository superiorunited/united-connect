import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, UserPlus, Newspaper } from 'lucide-react';

export default function PartnerResources() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has access and session hasn't expired
    const hasAccess = sessionStorage.getItem('partner_access');
    const sessionExpiry = sessionStorage.getItem('session_expiry');
    
    if (!hasAccess) {
      navigate('/partner-login');
      return;
    }

    // Check if session has expired
    if (sessionExpiry && Date.now() > parseInt(sessionExpiry)) {
      // Session expired, clear storage and redirect to login
      sessionStorage.removeItem('partner_access');
      sessionStorage.removeItem('session_expiry');
      navigate('/partner-login');
      return;
    }

    // Refresh session expiry time if still valid
    if (sessionExpiry) {
      const newExpiryTime = Date.now() + (2 * 60 * 60 * 1000); // 2 more hours
      sessionStorage.setItem('session_expiry', newExpiryTime.toString());
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Partner Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Access exclusive materials and guides for United Connect partners
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Partner Guide */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Partner Guide
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Comprehensive guide with best practices, templates, and strategies for partner success
              </p>
              <div className="flex justify-center">
                <Link
                  to="/partner-guide"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  View Guide
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Submit Referral */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-6">
                <UserPlus className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Submit Referral
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Submit a new client referral and help connect great companies with exceptional talent
              </p>
              <div className="flex justify-center">
                <Link
                  to="/referral-process"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300"
                >
                  Submit Referral
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Industry Resources */}
          <div className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mx-auto mb-6">
                <Newspaper className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Industry Resources
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Stay informed with the latest automotive and manufacturing industry trends, news, and insights
              </p>
              <div className="flex justify-center">
                <Link
                  to="/industry-resources"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                >
                  View Resources
                  <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
