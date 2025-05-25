export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
      <p className="text-lg mb-6">We provide top-notch services to help your business grow.</p>
      <a href="/services" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Our Services
      </a>
    </div>
  );
}