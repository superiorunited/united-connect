interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQSection[] = [
  {
    title: "About the Program",
    items: [
      {
        question: "Where can I refer clients, or what countries can I refer clients from?",
        answer: "You can refer clients in all English-speaking countries currently."
      },
      {
        question: "Will recommending your services create a conflict of interest in my industry?",
        answer: "Not at all. Most of our consultants refer companies within their industry vertical but avoid direct competitors. For example, an OEM employee may refer talent to one of their Tier 1 suppliers. It's a win-win for everyone involved!"
      },
      {
        question: "Do I need automotive industry experience?",
        answer: "No, while we focus heavily on manufacturing, we work across multiple industries. Let us know your area of expertise, and we'll see if there's an opportunity available for your specialty."
      },
      {
        question: "Can I refer candidates I know as well as companies?",
        answer: "Absolutely! As an industry expert, your candidate recommendations are highly valued, and there are additional earning opportunities for successful candidate referrals."
      },
      {
        question: "Is there any cost to join the program?",
        answer: "No, never. There are no fees or costs to join the program—just opportunities to earn by leveraging your expertise and connections."
      },
      {
        question: "What is United Connect?",
        answer: "United Connect by United Staff Source allows experienced professionals in the manufacturing and automotive industries to leverage their networks by referring companies in need of recruiting services. In return, partners earn substantial income for successful referrals and ongoing placements."
      },
      {
        question: "Who is eligible to join the program?",
        answer: "This program is ideal for retired or experienced professionals, including executives, managers, and directors, who have strong networks within the manufacturing and automotive industries. If you're well-connected and interested in a flexible, results-driven opportunity, this program is for you."
      },
      {
        question: "What types of companies should I refer?",
        answer: "We specialize in working with automotive OEMs, Tier 1 and Tier 2 suppliers, and other manufacturing companies. Companies with hiring needs in quality management, production management, plant turnarounds, supply chain, or executive leadership are ideal referrals."
      },
      {
        question: "Why should I join the program?",
        answer: "• Build consistent recurring revenue, including commissions and bonuses.\n• Stay engaged in the industry without a full-time commitment.\n• Play a meaningful role in shaping the future of automotive and manufacturing leadership.\n• Leverage your network to help companies succeed while benefiting financially."
      }
    ]
  },
  {
    title: "Referral Process",
    items: [
      {
        question: "How does the referral process work?",
        answer: "1. Submit a Referral: Provide the company's name, a contact person, and any relevant details.\n2. We Handle the Rest: United Staff Source contacts the company, assesses their hiring needs, and manages the recruitment process.\n3. Earn Fees: You'll earn commissions for successful placements and bonuses tied to the client's ongoing activity with us."
      },
      {
        question: "What information do I need to submit a referral?",
        answer: "You'll need to provide:\n• The company's name.\n• The contact person's name, title, and contact information (email or phone).\n• Any relevant context about the company's hiring needs or challenges."
      },
      {
        question: "How do I sign up for the program?",
        answer: "You can join by completing our online application form. Once your application is approved, our team will guide you through the onboarding process."
      }
    ]
  },
  {
    title: "Compensation",
    items: [
      {
        question: "What is the compensation structure?",
        answer: "• First Placement Commission: Earn 20% of the placement fee for the first hire made with any referred client.\n• Ongoing Revenue Bonus: Receive 5% of the gross annual billings from your referred client every year they remain active with United Staff Source."
      },
      {
        question: "Are there additional performance incentives?",
        answer: "Yes! There are additional annual performance bonuses based on the number of clients that you refer."
      },
      {
        question: "Is there a limit to how much I can earn?",
        answer: "No, there are no earning caps. The more referrals you provide, and the more successful placements we make, the more you earn."
      }
    ]
  },
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I get started?",
        answer: "Simply complete the online application form. Once accepted, our program coordinator will provide you with the tools and resources needed to begin submitting referrals."
      },
      {
        question: "Who do I contact if I have questions?",
        answer: "For more information or assistance, contact our team at unitedconnect@unitedstaffsource.com"
      }
    ]
  }
];