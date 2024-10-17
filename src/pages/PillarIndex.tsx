import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, TrendingUp, DollarSign, Video, PenTool } from 'lucide-react';

const pillarPages = [
  {
    id: 1,
    title: "YouTube Monetization Mastery",
    description: "Comprehensive guide to maximizing your YouTube earnings",
    icon: Youtube,
    color: "text-red-600"
  },
  {
    id: 2,
    title: "Growing Your Audience Across Platforms",
    description: "Strategies for building a loyal following on multiple social media channels",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    id: 3,
    title: "Diversifying Your Income Streams",
    description: "Explore various monetization methods for content creators",
    icon: DollarSign,
    color: "text-yellow-600"
  },
  {
    id: 4,
    title: "Short-Form Content Creation",
    description: "Master the art of creating engaging short-form videos",
    icon: Video,
    color: "text-purple-600"
  },
  {
    id: 5,
    title: "Long-Form Content Strategy",
    description: "Techniques for creating valuable long-form content that drives traffic and revenue",
    icon: PenTool,
    color: "text-blue-600"
  }
];

const PillarIndex: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Pillar Content</h1>
      <p className="text-xl text-gray-600 mb-12 text-center">Dive deep into our comprehensive guides on making money online as a content creator</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillarPages.map((pillar) => (
          <Link key={pillar.id} to={`/pillars/${pillar.id}`} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <pillar.icon className={`w-16 h-16 ${pillar.color} mb-4`} />
            <h2 className="text-2xl font-semibold mb-2">{pillar.title}</h2>
            <p className="text-gray-600">{pillar.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PillarIndex;