import { Link } from 'react-router-dom';
import { ExternalLink, ArrowLeft } from 'lucide-react';

interface ResourceItem {
  title: string;
  description: string;
  url: string;
}

interface ResourceSection {
  title: string;
  resources: ResourceItem[];
}

export default function IndustryResources() {
  const resourceSections: ResourceSection[] = [
    {
      title: "Associations",
      resources: [
        {
          title: "Original Equipment Suppliers Association (OESA)",
          description: "Represents Tier 1, 2, and 3 suppliers to OEMs, offering insights into industry challenges, regulatory updates, and networking opportunities.",
          url: "https://www.oesa.org"
        },
        {
          title: "Automotive Industry Action Group (AIAG)",
          description: "Provides tools and training on quality, supply chain, and sustainability in automotive manufacturing.",
          url: "https://www.aiag.org"
        },
        {
          title: "Society of Automotive Engineers (SAE International)",
          description: "A hub for automotive engineering standards, research, and professional development opportunities.",
          url: "https://www.sae.org"
        },
        {
          title: "National Association of Manufacturers (NAM)",
          description: "Supports manufacturing companies, including those in the automotive sector, with advocacy, workforce solutions, and industry insights.",
          url: "https://www.nam.org"
        }
      ]
    },
    {
      title: "Workforce Development and Training",
      resources: [
        {
          title: "National Institute for Automotive Service Excellence (ASE)",
          description: "Provides certifications and resources for training employees in technical roles.",
          url: "https://www.ase.com"
        },
        {
          title: "Manufacturing Skill Standards Council (MSSC)",
          description: "Offers training and certifications in production, logistics, and quality systems for manufacturing workers.",
          url: "https://www.msscusa.org"
        }
      ]
    },
    {
      title: "Conferences and Events",
      resources: [
        {
          title: "North American International Auto Show (NAIAS)",
          description: "Offers networking opportunities with major automotive players and industry updates.",
          url: "https://naias.com"
        },
        {
          title: "Automotive Aftermarket Products Expo (AAPEX)",
          description: "Focuses on parts manufacturers and their supply chains, connecting suppliers with OEMs.",
          url: "https://www.aapexshow.com"
        },
        {
          title: "CAR Management Briefing Seminars (MBS)",
          description: "A premier automotive event for discussions on industry trends and workforce challenges.",
          url: "https://www.cargroup.org"
        }
      ]
    },
    {
      title: "Market Data and Industry Research",
      resources: [
        {
          title: "IHS Markit - Automotive Research",
          description: "Detailed insights into automotive manufacturing trends, production forecasts, and workforce needs.",
          url: "https://ihsmarkit.com"
        },
        {
          title: "Automotive News Data Center",
          description: "Provides industry news and market data tailored to the automotive sector.",
          url: "https://www.autonews.com"
        },
        {
          title: "McKinsey's Automotive Insights",
          description: "Reports on trends, technology, and workforce impacts in the automotive manufacturing industry.",
          url: "https://www.mckinsey.com"
        }
      ]
    },
    {
      title: "Tools and Resources",
      resources: [
        {
          title: "Lean Manufacturing Resources",
          description: "Tools and training materials to help streamline production processes and identify staff capable of implementing lean practices.",
          url: "https://www.lean.org"
        },
        {
          title: "Automotive Quality Standards",
          description: "Information on standards like IATF 16949 and their relevance to hiring for quality management roles.",
          url: "https://www.iatfglobaloversight.org"
        }
      ]
    },
    {
      title: "Collaborative Networks and Groups",
      resources: [
        {
          title: "Regional Manufacturing Institutes",
          description: "Organizations like the Michigan Manufacturing Association and others often host job fairs and training resources.",
          url: "https://www.mimfg.org"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-6">
        <div className="mb-8">
          <Link
            to="/resources"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Resources
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Industry Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Essential resources for automotive and manufacturing industry professionals
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {resourceSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-purple-600">
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              <div className="p-6 space-y-6">
                {section.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                        <p className="mt-2 text-gray-600">{resource.description}</p>
                      </div>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 hover:text-purple-700 ml-4"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/resources"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
