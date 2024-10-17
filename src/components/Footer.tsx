import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">DigitalMoneyTools</h3>
            <p className="text-gray-400">Empowering content creators to monetize their passion.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/pillars" className="hover:text-white">Pillars</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p className="text-gray-400">Follow us on social media for the latest updates and tips.</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 DigitalMoneyTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;