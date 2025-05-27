import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    { category: "Technology", title: "Project Sky Drone for Security", image: "/p1.jpg" },
    { category: "Kids Life", title: "Block Ideas for Child Skills Development", image: "/p2.jpg" },
    { category: "Business", title: "CRM Integration System", image: "/p3.jpg" },
    { category: "Innovation", title: "Smart Home Automation", image: "/p4.jpg" },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-[#00C4B4] text-xl text-center mb-2">Our Latest Projects</h3>
        <h2 className="text-white text-3xl font-bold text-center mb-8 relative">
          Latest Projects
          <span className="block w-16 h-1 bg-[#00C4B4] mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[#00C4B4] uppercase">{project.category}</p>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mt-8">
          <a href="#" className="bg-gradient-to-r from-[#00C4B4] to-[#007BFF] text-white px-6 py-2 rounded-full">
            All Portfolios
          </a>
        </div>
      </div>
    </section>
  );
}