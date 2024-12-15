import { 
  Network, 
  Target, 
  Award, 
  Cpu, 
  Users, 
  MessageSquare, 
  ShieldAlert,
  Lightbulb,
  BarChart3,
  Mail,
  Linkedin,
  BrainCircuit,
  Car,
  Battery,
  Shield,
  Bot,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerGuide() {
  const metrics = [
    { label: 'Average time-to-hire', value: '35 days', subtext: '20% faster than industry average' },
    { label: 'Quality of hire success rate', value: '92%', subtext: 'retention after 12 months' },
    { label: 'Cost-per-hire reduction', value: '30%', subtext: 'compared to traditional methods' },
  ];

  const emergingRoles = [
    { icon: Car, title: 'Automotive Software Engineers' },
    { icon: Bot, title: 'Autonomous Vehicle Software Developers' },
    { icon: Battery, title: 'Vehicle Connectivity Engineers' },
    { icon: Shield, title: 'Automotive Cybersecurity Experts' },
    { icon: BrainCircuit, title: 'AI/ML Engineers for Automotive' },
    { icon: MessageSquare, title: 'Human-Machine Interface (HMI) Designers' },
  ];

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
            Best Practices for Recruiting Clients
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A comprehensive guide for United Connect partners
          </p>
        </div>

        {/* 1. Network Strategy */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Network className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Leverage Your Network Strategically</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <h3 className="text-xl font-semibold mb-4">Key Contacts to Target:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Plant Manager</li>
              <li>Director of Operations</li>
              <li>Vice President of Manufacturing</li>
              <li>HR Director</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Network Reconnection Strategy:</h3>
              <p className="text-gray-600">
                Reach out to former colleagues, industry connections, or associations where you've built credibility. 
                Position this opportunity as mutually beneficial.
              </p>
            </div>
          </div>
        </div>

        {/* 2. Personalized Approach */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Personalize Your Approach</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Tailor Your Pitch</h3>
              <p className="text-gray-600">
                "I know you've mentioned challenges in finding experienced quality managers. 
                United Staff Source specializes in placing top-tier professionals in roles like that."
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Use Shared Experiences</h3>
              <p className="text-gray-600">
                Reference mutual projects, industry challenges, or past successes to build trust and rapport.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Value Proposition */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Position the Value of United Staff Source</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <h3 className="text-xl font-semibold mb-4">Key Differentiators</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Deep understanding of automotive industry dynamics</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                <span className="text-gray-600">Specialized in recruiting for emerging automotive technologies</span>
              </li>
            </ul>

            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                  <div className="mt-2 text-sm font-medium text-gray-900">{metric.label}</div>
                  <div className="mt-1 text-sm text-gray-500">{metric.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Technology Strategy */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Cpu className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Technology-Driven Recruitment Strategies</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Candidate Screening</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Machine learning algorithms for precise matching</li>
                  <li>• 20% faster candidate evaluation</li>
                  <li>• 40% more efficient shortlisting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Forecast workforce trends</li>
                  <li>• Identify potential skill gaps</li>
                  <li>• Proactive talent strategies</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Digital Outreach Templates</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Linkedin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">LinkedIn Connection Request</span>
                  </div>
                  <p className="text-gray-600">
                    "Hi [Name], I noticed your expertise in [specific automotive domain]. Our specialized recruiting team at United Staff Source is revolutionizing talent acquisition in the automotive technology space. Interested in exploring how we're reshaping recruitment?"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Follow-up Email Template</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Subject: Innovative Talent Solutions for [Company/Industry Segment]</p>
                  <p className="text-gray-600">
                    "Hi [Name],<br/><br/>
                    In the rapidly evolving automotive landscape, finding top-tier talent in EV design, autonomous systems, and advanced manufacturing is crucial. United Staff Source offers:<br/>
                    • Targeted recruitment for emerging technological roles<br/>
                    • AI-enhanced candidate matching<br/>
                    • Data-driven placement strategies<br/><br/>
                    Would you be open to a 15-minute insights call?"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Emerging Roles */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Emerging Technology Role Focus</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {emergingRoles.map((role, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <role.icon className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-900 font-medium">{role.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Client Approach */}
        <div className="mt-16">
          <div className="lg:text-center">
            <MessageSquare className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Approaching Potential Clients</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Initial Outreach Template</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2">Subject: A Trusted Solution for Your Automotive Hiring Needs</p>
                  <p className="text-gray-600">
                    "Hi [Name],<br/><br/>
                    I hope this message finds you well. Having worked in the automotive industry, I understand the challenges companies face in finding experienced talent.<br/><br/>
                    I wanted to introduce you to United Staff Source, a recruiting firm specializing in placing top professionals in roles like [specific role relevant to the contact's company].<br/><br/>
                    I'd be happy to connect you with their team to discuss how they can support your hiring goals. Let me know if you'd like more information or to schedule a conversation."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow-Up Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Schedule a brief call to explain services</li>
                  <li>• Highlight minimal time commitment required</li>
                  <li>• Secure referrals through Partner Program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Objection Handling */}
        <div className="mt-16">
          <div className="lg:text-center">
            <ShieldAlert className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Common Challenges and Responses</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="space-y-6">
              {[
                {
                  objection: "We're Already Working with Another Recruiter.",
                  response: "I completely understand. United Staff Source is unique in that we specialize specifically in the automotive sector and focus on finding the top 5% of candidates. I'd be happy to arrange a conversation so you can see how we differ."
                },
                {
                  objection: "We Don't Have Any Immediate Hiring Needs.",
                  response: "That makes sense, but I'd love to introduce you to the team for when the need arises. United Staff Source often works on succession planning or high-stakes roles that can't wait when the time comes."
                },
                {
                  objection: "We Handle Hiring Internally.",
                  response: "I hear that often, but many of our clients appreciate having external experts help with specialized or critical roles. It's a great way to save internal resources and find top-tier talent efficiently."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-2">Objection: "{item.objection}"</p>
                  <p className="text-gray-600">Response: "{item.response}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8. Pro Tips */}
        <div className="mt-16">
          <div className="lg:text-center">
            <Lightbulb className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Pro Tips for Partner Success</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Engagement Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Follow up within a week of initial outreach</li>
                  <li>• Attend trade shows and conferences</li>
                  <li>• Share industry insights and trends</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Industry Focus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Track technological innovation cycles</li>
                  <li>• Align recruitment with industry changes</li>
                  <li>• Build and maintain industry credibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
