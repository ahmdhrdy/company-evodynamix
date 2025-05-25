import Link from 'next/link';

export default function Navbar({ className }) {
  return (
    <nav className={`flex space-x-6 py-2 ${className}`}>
      <Link href="/home" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Home</Link>
      <Link href="/about" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">About</Link>
      <Link href="/services" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Services</Link>
      <Link href="/portfolio" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Portfolio</Link>
      <Link href="/contact" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Contact</Link>
    </nav>
  );
}