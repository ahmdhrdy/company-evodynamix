export default function Services() {
  const services = [
    { title: "Digital Marketing", items: ["SEO & PPC", "Social Media Marketing", "Content Marketing", "Email Marketing"] },
    { title: "Software Development", items: ["Web Application Development", "Mobile App Development", "E-commerce Solutions", "Custom Software Development"] },
    { title: "Technology Consulting", items: ["Strategic IT Planning", "Systems Integration", "Cloud Services", "Digital Transformation"] },
    { title: "Business Strategy", items: ["Market Research", "Strategic Planning", "Business Model Innovation", "Risk Management"] },
    { title: "Quality Assurance", items: ["Comprehensive Testing", "QA Automation", "Performance Testing", "Security Testing"] },
    { title: "Innovation Services", items: ["Product Innovation", "Process Innovation", "Technology Innovation", "Culture of Innovation"] },
  ];

  return (
    <section className="bg-[#1A1A2E] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6">
              <h3 className="text-white text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="text-[#B0B0B0] list-disc pl-5 mb-4">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href="#" className="text-[#00D4FF] underline">Read More</a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#about" className="text-[#00D4FF] text-3xl">↓</a>
        </div>
      </div>
    </section>
  );
}