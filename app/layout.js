import '../styles/globals.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#2A2A3D] to-[#1A2A44] text-white">
        <header className="relative">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="absolute top-4 left-4"
          />
          <Navbar className="flex justify-center" />
        </header>
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}