import Image from 'next/image';

export default function Contact() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-8 shadow-md">Contact Us</h1>
      <p className="mb-4 text-gray-300">Have a project in mind? Let's connect.</p>
      <p className="mb-6 text-gray-300">Email: contact@yourcompany.com</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:contact@yourcompany.com" className="hover:opacity-80 transition duration-300">
          <Image src="/images/email.svg" alt="Email" width={50} height={50} />
        </a>
        <a href="https://twitter.com/yourcompany" className="hover:opacity-80 transition duration-300">
          <Image src="/images/twitter.svg" alt="Twitter" width={50} height={50} />
        </a>
        <a href="https://linkedin.com/company/yourcompany" className="hover:opacity-80 transition duration-300">
          <Image src="/images/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </a>
      </div>
    </div>
  );
}