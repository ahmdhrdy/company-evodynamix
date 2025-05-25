export default function Portfolio() {
  const projects = [
    { title: 'Project 1', description: 'A web app for clients.', image: '/images/project1.jpg' },
    { title: 'Project 2', description: 'E-commerce platform.', image: '/images/project2.jpg' },
    { title: 'Project 3', description: 'Portfolio redesign.', image: '/images/project3.jpg' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 shadow-md">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src={project.image} alt={project.title} className="w-full h-32 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold text-center">{project.title}</h2>
            <p className="text-center">{project.description}</p>
            <button className="mt-4 mx-auto block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}