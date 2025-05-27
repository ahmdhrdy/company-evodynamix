import Link from 'next/link';
import Image from 'next/image'; // Import Image component

export default function Navbar() {
  return (
    <nav className="bg-[#2A2A3D] p-2 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/logo.png" // Path to your logo
            alt="Logo"
            width={100} // Adjust width as needed
            height={30} // Adjust height as needed
          />
        </div>
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-300">About</Link>
          <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link href="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
          <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <button className="bg-[#FF5733] text-white px-4 py-2 rounded hover:bg-[#E04E2C]">
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}