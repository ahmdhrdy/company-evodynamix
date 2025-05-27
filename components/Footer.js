"use client"; // Add this directive to make it a client component

export default function Footer() {
  return (
    <footer className="bg-[#1C2526] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">Evodynamix</div>
          <p className="mb-4">
            When you choose Evodynamix Solutions, you choose a partner dedicated to your success. We don’t just develop software, we craft solutions that fuel progress, foster innovation, and unlock limitless possibilities.
          </p>
          <p className="flex items-center mb-2"><span className="mr-2">📍</span> Dhaka, Bangladesh</p>
          <p className="flex items-center mb-2"><span className="mr-2">📞</span> +8801787395758</p>
          <p className="flex items-center"><span className="mr-2">✉️</span> contact@evodynamix.onmicrosoft.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#00C4B4]">About Us</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">Policy</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">Career</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">Blog</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#00C4B4]">Template Clouds</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">CRM Integration</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">HRM Integration</a></li>
            <li><a href="#" className="hover:text-[#00C4B4]">ERP System</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-between items-center">
        <p className="text-gray-400">© 2025 Evodynamic All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#00C4B4]">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-[#00C4B4]">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-[#00C4B4]">LinkedIn</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#00C4B4] text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}