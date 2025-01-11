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
  ArrowLeft,
  Factory,
  CheckSquare,
  Wrench,
  TrendingUp,
  HardHat,
  ClipboardCheck,
  Building2,
  Cog,
  Globe2,
  MapPin,
  Building,
  Package,
  HelpCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { partnersuccess1 } from '../assets';
import aisLogo from '../assets/UPC Logos/ais.svg';
import amLogo from '../assets/UPC Logos/am.svg';
import apLogo from '../assets/UPC Logos/ap.svg';
import avgLogo from '../assets/UPC Logos/avg.svg';
import epcLogo from '../assets/UPC Logos/epc.svg';
import fLogo from '../assets/UPC Logos/f.svg';
import intLogo from '../assets/UPC Logos/int.svg';
import lmLogo from '../assets/UPC Logos/lm.svg';
import matLogo from '../assets/UPC Logos/mat.svg';
import mitLogo from '../assets/UPC Logos/mit.svg';
import pmLogo from '../assets/UPC Logos/pm.svg';
import rshLogo from '../assets/UPC Logos/rsh.svg';
import valLogo from '../assets/UPC Logos/val.svg';

export default function PartnerGuide() {
  const navigate = useNavigate();
  const metrics = [
    { label: 'Average time-to-hire', value: '13.7 Days', subtext: 'up to 30% faster than competitors' },
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

  const traditionalRoles = [
    { icon: Factory, title: 'Plant Managers' },
    { icon: CheckSquare, title: 'Quality Management Leaders' },
    { icon: Wrench, title: 'Production Managers' },
    { icon: TrendingUp, title: 'Turnaround Specialists' },
    { icon: HardHat, title: 'Operations Directors' },
    { icon: ClipboardCheck, title: 'Process Improvement Managers' },
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

      <div className="relative h-[500px] w-full">
        <img
          src={partnersuccess1}
          alt="Partner Success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/60" />
        <div className="absolute inset-0 flex items-center -translate-y-[10%]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Best Practices for Referring Clients
              
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mb-8">
              A comprehensive guide for United Connect partners
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
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
            <h3 className="text-xl font-semibold mb-4 text-center">Key Differentiators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Deep understanding of automotive industry dynamics</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Specialized in recruiting for emerging automotive technologies</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Global reach allows seamless talent sourcing across borders</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Unrivaled network of top-tier automotive professionals across all levels and disciplines</span>
                </div>
                <div className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-blue-600 mr-2">•</span>
                  <span className="text-gray-600">Smart use of AI technology to continuously improve sourcing, skills matching, and behavioral analysis</span>
                </div>
              </div>
            </div>

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
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Candidate Screening</h3>
                <ul className="space-y-2 text-gray-600 list-none">
                  <li>Machine learning algorithms for precise matching</li>
                  <li>20% faster candidate evaluation</li>
                  <li>40% more efficient shortlisting</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <ul className="space-y-2 text-gray-600 list-none">
                  <li>Forecast workforce trends</li>
                  <li>Identify potential skill gaps</li>
                  <li>Proactive talent strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Digital Outreach */}
        <div className="mt-16">
          <div className="lg:text-center">
            <MessageSquare className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-2xl font-bold text-gray-900">Digital Outreach Templates</h2>
          </div>
          <div className="mt-5 bg-white rounded-lg shadow px-6 py-8">
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

        {/* 6. Market Focus */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900">
            Market Focus
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Our specialized focus on the manufacturing sector allows us to understand and address unique industry challenges.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Industry Segments</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <Factory className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>OEM Manufacturers</span>
                </li>
                <li className="flex items-center">
                  <Car className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Tier 1 Suppliers</span>
                </li>
                <li className="flex items-center">
                  <Cog className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Tier 2 Suppliers</span>
                </li>
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Technology Providers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Geographic Focus</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <Building2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Major Manufacturing Hubs</span>
                </li>
                <li className="flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Emerging Tech Centers</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Regional Development Zones</span>
                </li>
                <li className="flex items-center">
                  <Globe2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>Global Operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Engagements Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            Engagements
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              The companies listed below may not be available for referrals as they are either under contract with us or actively engaged in our sales process.
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center p-4">
              <img src={aisLogo} alt="AIS Logo" className="h-12 w-auto object-contain" />
              <img src={amLogo} alt="AM Logo" className="h-16 w-auto object-contain" />
              <img src={apLogo} alt="AP Logo" className="h-24 w-auto object-contain" />
              <img src={avgLogo} alt="AVG Logo" className="h-12 w-auto object-contain" />
              <img src={epcLogo} alt="EPC Logo" className="h-12 w-auto object-contain" />
              <img src={fLogo} alt="F Logo" className="h-12 w-auto object-contain" />
              <img src={intLogo} alt="INT Logo" className="h-12 w-auto object-contain" />
              <img src={lmLogo} alt="LM Logo" className="h-12 w-auto object-contain" />
              <img src={matLogo} alt="MAT Logo" className="h-12 w-auto object-contain" />
              <img src={mitLogo} alt="MIT Logo" className="h-12 w-auto object-contain" />
              <img src={pmLogo} alt="PM Logo" className="h-24 w-auto object-contain" />
              <img src={rshLogo} alt="RSH Logo" className="h-24 w-auto object-contain" />
              <img src={valLogo} alt="VAL Logo" className="h-12 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Roles Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            High-Demand Positions
          </h2>
          
          {/* Emerging Roles */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Emerging Technology Roles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergingRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
                >
                  <div className="w-full flex items-center gap-3">
                    <role.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <h4 className="text-lg font-medium text-gray-900">{role.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Roles */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Core Manufacturing Roles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {traditionalRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
                >
                  <div className="w-full flex items-center gap-3">
                    <role.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <h4 className="text-lg font-medium text-gray-900">{role.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. Client Approach */}
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

        {/* 8. Objection Handling */}
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

        {/* 9. Pro Tips */}
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

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="lg:text-center">
            <HelpCircle className="h-12 w-12 text-blue-600 mx-auto" />
            <h2 className="mt-2 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Common questions about our partner program and how it works
            </p>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Is there a limit to how many referrals I can make?</h3>
                <p className="mt-2 text-gray-600">
                  There is no limit to the number of referrals you can make. We encourage partners to refer any qualified opportunities that align with our expertise in the automotive and manufacturing sectors.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">What is the compensation structure?</h3>
                <p className="mt-2 text-gray-600">
                  • First Placement Commission: Earn 20% of the placement fee for the first hire made with any referred client.<br />
                  • Ongoing Revenue Bonus: Receive 5% of the gross annual billings from your referred client every year they remain active with United Staff Source.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Are there additional performance incentives?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! There are additional annual performance bonuses based on the number of clients that you refer.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Is there a limit to how much I can earn?</h3>
                <p className="mt-2 text-gray-600">
                  No, there are no earning caps. The more referrals you provide, and the more successful placements we make, the more you earn.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">How does the referral process work?</h3>
                <p className="mt-2 text-gray-600">
                  Our referral process is straightforward. Once you identify a potential client, simply submit their information through our <a href="https://unitedpartnerconnect.com/referral-process" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">partner portal</a>. Our team will reach out within 24 hours and keep you updated on the progress. You'll receive compensation for successful placements.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">What types of positions do you typically fill?</h3>
                <p className="mt-2 text-gray-600">
                  We specialize in automotive and manufacturing positions across all levels, from skilled technicians to executive leadership. This includes roles in engineering, operations, quality control, and management.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">How long does it typically take to fill a position?</h3>
                <p className="mt-2 text-gray-600">
                  Our average time-to-fill is 13.7 days, which is up to 30% faster than competitors. However, the exact timeline can vary based on the position's requirements and market conditions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Will I need to be present for the client meeting?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, you will need to be present for the initial introduction meeting. After that, our team will handle all ongoing communications and meetings with the client directly.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">Who do I contact for support?</h3>
                <p className="mt-2 text-gray-600">
                  Your Program Relationship Manager, who helped you through the sign-up process, will be your primary point of contact for any questions or support needs. They are dedicated to ensuring your success in the program and are available to assist you throughout your partnership journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
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
