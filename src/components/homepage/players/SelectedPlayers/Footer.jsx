import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#060919] pt-36 pb-8 text-white mx-4 mt-48 sm:mx-12 lg:mb-6 rounded-2xl">
      
      {/* ১. ভাসমান নিউজলেটার সেকশন (Floating Newsletter Box) */}
      <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl p-8 rounded-2xl bg-gradient-to-r from-blue-100 via-white via-70% to-orange-500 border border-white shadow-[0px_10px_30px_rgba(19,19,19,0.15)]">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full text-gray-700 text-sm"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 font-semibold text-white hover:opacity-95 transition-all w-full sm:w-auto text-sm shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* ২. ফুটার লোগো ও মূল কনটেন্ট */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* লোগো */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center">
            {/* এখানে আপনার লোগো ইমেজ বা আইকন ব্যবহার করতে পারেন */}
            <div className="bg-white p-2 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">🏏</span>
            </div>
          </div>
        </div>

        {/* ফুটারের ৩ কলাম সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-gray-800 text-sm">
          
          {/* About Us */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">About Us</h4>
            <p className="text-gray-400 leading-relaxed">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">› Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">› Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">› About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">› Contact</a></li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-sm text-white focus:outline-none w-full"
              />
              <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-pink-400 to-orange-400 font-medium text-white text-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* কপিরাইট অংশ */}
        <div className="text-center pt-6 text-gray-500 text-xs">
          <p>©2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
