import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackToResources() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Link
        to="/resources"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Resources
      </Link>
    </div>
  );
}
