import Image from 'next/image';

export default function Contact() {
  return (
    <section className="bg-[#1A1A2E] py-16">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-8 text-blue-500">GET IN TOUCH WITH US</h1>
        <p className="mb-4 text-gray-300">Have a project in mind? Let's connect.</p>
        <div className="flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto">
          {/* Left Side - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/team.jpg" // Replace with your desired image (e.g., thumbs-up)
              alt="Contact Image"
              width={300}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          {/* Right Side - Form */}
          <div className="md:w-2/3 md:pl-8 text-left">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-left mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-[#2A2A3D] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#00C4B4]"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-left mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-[#2A2A3D] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#00C4B4]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white text-left mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 bg-[#2A2A3D] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#00C4B4]"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-left mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 bg-[#2A2A3D] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#00C4B4]"
                  placeholder="Write Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00C4B4] to-[#007BFF] text-white px-6 py-3 rounded-lg hover:from-[#00A399] hover:to-[#0066CC] transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-300 mt-8 mb-6">Email: contact@evodynamix.onmicrosoft.com</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:contact@evodynamix.onmicrosoft.com" className="hover:opacity-80 transition duration-300">
            <Image src="/images/email.svg" alt="Email" width={50} height={50} />
          </a>
          <a href="https://twitter.com/evodynamix" className="hover:opacity-80 transition duration-300">
            <Image src="/images/twitter.svg" alt="Twitter" width={50} height={50} />
          </a>
          <a href="https://linkedin.com/company/evodynamix" className="hover:opacity-80 transition duration-300">
            <Image src="/images/linkedin.svg" alt="LinkedIn" width={50} height={50} />
          </a>
        </div>
      </div>
    </section>
  );
}