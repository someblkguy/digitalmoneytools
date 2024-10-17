import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <DollarSign size={32} />
          <span>DigitalMoneyTools</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
            <li><Link to="/pillars" className="hover:text-blue-200">Pillars</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;