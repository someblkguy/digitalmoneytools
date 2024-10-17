import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Proven Strategies to Monetize Your YouTube Channel",
    excerpt: "Discover effective ways to turn your YouTube content into a profitable venture.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-03-01",
    author: "Trey Scott"
  },
  {
    id: 2,
    title: "Mastering TikTok: How to Create Viral Short-Form Content",
    excerpt: "Learn the secrets behind creating engaging TikTok videos that capture audience attention.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-25",
    author: "Trey Scott"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Affiliate Marketing for Content Creators",
    excerpt: "Explore how to effectively incorporate affiliate marketing into your content strategy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-18",
    author: "Trey Scott"
  },
  {
    id: 4,
    title: "Building a Personal Brand: From Zero to Influencer",
    excerpt: "A step-by-step guide to establishing and growing your personal brand online.",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-10",
    author: "Trey Scott"
  },
  {
    id: 5,
    title: "Maximizing Revenue with Digital Products and Online Courses",
    excerpt: "Learn how to create and sell digital products that complement your content strategy.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    date: "2024-02-03",
    author: "Trey Scott"
  }
];

const BlogIndex: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">DigitalMoneyTools Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <span>{post.author}</span>
              </div>
              <Link to={`/blog/${post.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;