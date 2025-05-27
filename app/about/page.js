import Image from 'next/image';

export default function About() {
  const categories = [
    { title: "Innovation and Creativity", content: "We approach each project with a fresh perspective, combining innovation and creativity to solve challenges." },
    { title: "Client-Centric Approach", content: "We prioritize our clients' needs and objectives, tailoring our solutions to align with their vision and goals." },
    { title: "Expert Team", content: "Our team comprises skilled professionals dedicated to delivering exceptional results." },
    { title: "Proven Results", content: "We have a track record of transforming ideas into successful realities for our clients." },
  ];

  const testimonials = [
    { quote: "Working with Evodynamix has been a game-changer for our business. Their innovative solutions exceeded our expectations!", author: "Al Ruhul Sabbir, Admin Officer", rating: 5 },
    { quote: "The team’s dedication and expertise made our project a success. Highly recommend their services!", author: "Olivia, Marketing Manager", rating: 5 },
    { quote: "Evodynamix transformed our ideas into reality with professionalism and creativity. Amazing experience!", author: "George Pento, Project Manager", rating: 4 },
  ];

  const brands = [
    { name: "Brand 1", logo: "/brand1.png" },
    { name: "Brand 2", logo: "/brand2.jpg" },
    { name: "Brand 3", logo: "/brand3.png" },
    { name: "Brand 4", logo: "/brand4.png" },
    { name: "Brand 5", logo: "/brand5.png" },
  ];

  const teamMembers = [
    { name: "Sakib Hossain", role: "Founder & CEO", photo: "/sakib.jpg" },
    { name: "Medisa Kally", role: "Chief Technology Officer", photo: "/medisa.jpg" },
    { name: "Brown Kytzer", role: "CTO", photo: "/brown.jpg" },
    
  ];

  return (
    <div>
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-[#2A2A3D] to-[#1A2A44] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-5xl font-bold mb-4">
            Who We <span className="text-blue-500">Are</span>
          </h1>
          <p className="text-gray-300 text-lg">
            EvoDynamix Solutions is a dynamic and innovative software development company committed to 
shaping the future through technology. Our mission is to empower ideas, code with precision, and deliver 
digital solutions that make an impact. We're seeking passionate individuals to join our team and embark 
on a journey of growth, learning, and innovation. 
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#1A1A1A] py-16 relative" id="about">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <h2 className="text-[#00FF00] text-xl mb-4 flex items-center">
              <span className="mr-2">-</span> Our Story
            </h2>
            <h1 className="text-white text-3xl font-bold mb-6">
              Providing <span className="text-4xl">top-notch</span> technology
            </h1>
            <p className="text-white mb-8">
              At Evodynamix Solutions, we are more than just a software development company; we are architects of innovation, creators of digital experiences, and partners in your technological journey. Our mission is to empower businesses and individuals alike to harness the full potential of technology, driving progress and transforming ideas into reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="p-4 bg-[#2A2A3D] rounded-lg">
                  <h3 className="text-white text-lg font-semibold mb-2 flex items-center">
                    <span className="text-[#00FF00] mr-2">★</span> {category.title}
                  </h3>
                  <p className="text-gray-300">{category.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <Image src="/about.jpg" alt="Team Collaboration" width={300} height={300} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#00FF00] text-xl mb-4 flex items-center justify-center">
            <span className="mr-2">-</span> Testimonial
          </h2>
          <h3 className="text-white text-3xl font-bold mb-8">What Our Clients Say About Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-[#2A2A3D] rounded-lg">
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#00FF00] text-xl">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Best Brands Worldwide */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-8">Trusted by best brands worldwide</h2>
          <div className="flex justify-center space-x-8 flex-wrap">
            {brands.map((brand, index) => (
              <Image
                key={index}
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="opacity-70 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#00FF00] text-xl mb-4 flex items-center justify-center">
            <span className="mr-2">-</span> Team
          </h2>
          <h3 className="text-white text-3xl font-bold mb-8">Meet the People Behind the Innovation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-white text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}