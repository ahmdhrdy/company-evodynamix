export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Build modern websites.', icon: '/images/web.svg' },
    { title: 'Digital Marketing', description: 'Grow your online presence.', icon: '/images/marketing.svg' },
    { title: 'Consulting', description: 'Expert business advice.', icon: '/images/consulting.svg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 shadow-md">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4 mx-auto" />
            <h2 className="text-xl font-bold text-center">{service.title}</h2>
            <p className="text-center">{service.description}</p>
            <button className="mt-4 mx-auto block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}