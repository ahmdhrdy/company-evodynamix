import '../styles/globals.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#2A2A4D] to-[#1A1A2E] text-white min-h-screen">
        <header className="relative p-4">
          <Image src="/public/logo.jpg" alt="Company Logo" width={50} height={50} className="absolute top-4 left-4" />
          <Navbar className="flex justify-center mt-12" /> {/* Increased margin-top to avoid overlap */}
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 p-4 text-center mt-8">
          <p>© 2025 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </footer>
      </body>
    </html>
  );
}