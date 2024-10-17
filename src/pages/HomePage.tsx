import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Video, PenTool, DollarSign, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DigitalMoneyTools</h1>
        <p className="text-xl text-gray-600 mb-8">Your ultimate resource for monetizing long-form and short-form content</p>
        <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">Explore Our Blog</Link>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Grow Your Audience</h3>
          <p className="text-gray-600">Learn strategies to expand your reach and build a loyal following.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Video className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Master Short-Form Content</h3>
          <p className="text-gray-600">Tips and tricks for creating engaging short-form videos that convert.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PenTool className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Long-Form Content Strategies</h3>
          <p className="text-gray-600">Discover how to create valuable long-form content that drives traffic and revenue.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <DollarSign className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Monetization Techniques</h3>
          <p className="text-gray-600">Explore various ways to turn your content into a sustainable income stream.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Zap className="text-blue-600 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Tools and Resources</h3>
          <p className="text-gray-600">Get access to the best tools and resources for content creators.</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-600 mb-8">Dive into our comprehensive guides and start monetizing your content today!</p>
        <Link to="/pillars" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">Explore Pillar Content</Link>
      </section>
    </div>
  );
};

export default HomePage;