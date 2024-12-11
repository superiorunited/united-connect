import heidiImage from "../assets/heidi.webp";

export default function Success() {
  const testimonials = [
    {
      name: "John D.",
      role: "Former Plant Manager",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "When I first joined United Connect, I didn't realize how much value my network could still provide after retirement. United Staff Source made the entire process seamless—I simply connected them with companies I knew, and they handled the rest. Not only has this program allowed me to stay connected to the industry, but it's also been a rewarding way to continue contributing to its success. I appreciate the professionalism and transparency throughout every interaction."
    },
    {
      name: "Heidi L.",
      role: "Former HR Director",
      image: heidiImage,
      quote: "I spent years building relationships across the automotive industry, and I didn't want that network to go to waste when I stepped back from full-time work. United Staff Source gave me the perfect opportunity to leverage those connections in a meaningful way. The financial rewards have been significant, but more importantly, I feel like I'm helping shape the next generation of leaders in manufacturing. This program is truly a win-win for everyone involved."
    },
    {
      name: "Amir H.",
      role: "Former Quality Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "What stood out to me about this program was how simple and impactful it is. Having worked in automotive quality for years, I've seen firsthand the struggle to find the right talent. Being able to connect companies with United Staff Source has been incredibly rewarding—not just financially, but knowing I'm helping these organizations thrive in a competitive market. It's great to feel valued for the relationships I've spent a career building."
    },
    {
      name: "Matt P.",
      role: "Full Time Consultant and Former Supply Chain Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "United Connect has been a fantastic way to transition out of the day-to-day grind while still staying connected to the manufacturing world. United Staff Source has a team that truly understands the industry, and they made it so easy for me to refer companies I already knew. Watching those connections turn into successful placements has been incredibly satisfying. I wish I had joined sooner!"
    }
  ];

  return (
    <div id="success" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our successful partners
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition animate-fade-up animate-fade-up-delay-${index + 1}`}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}