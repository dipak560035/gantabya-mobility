'use client'

import React from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      category: 'Industry',
      title: 'The Future of EVs in Nepal',
      description: 'How electric vehicles are reshaping transportation in the Himalayas.',
      date: 'Jan 15, 2024',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHx8fDA%3D', 
    },
    {
      category: 'Tips',
      title: '5 Tips for Battery Longevity',
      description: "Maximize your electric motorcycle's battery life with expert tips.",
      date: 'Jan 15, 2024', // Added matching date from original picture
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhdHRlcnklMjBwYWNrfGVufDB8fDB8fHww', 
    },
    {
      category: 'News',
      title: "Nepal's Growing Charging Network",
      description: 'New charging stations are making long-distance EV travel possible.',
      date: 'Feb 28, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      category: 'Tips',
      title: 'EV Riding: What You Need to Know',
      description: 'Mastering the slopes of Nepal on an electric motorcycle.',
      date: 'Jan 15, 2024',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Path to your thumbnail image
    },
    {
      category: 'Company',
      title: 'Gantabya 2025: Year in Review',
      description: "A look back at our biggest milestones and what's coming next.",
      date: 'Mar 8, 2026',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Path to your thumbnail image
    },
    {
      category: 'News',
      title: 'How Much CO₂ Are We Saving?',
      description: 'Environmental impact of 5,000+ EV bikes in Nepal.',
      date: 'Jan 5, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop', 
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Blog &<span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden
                         hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
                         transition-all duration-300 group flex flex-col h-full"
            >
            
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              
              <div className="p-5 flex flex-col grow">
                <div className="mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
                  {post.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-800 mt-auto">
                  <div className="flex items-center text-gray-500 text-xs">
                    <svg
                      className="w-4 h-4 mr-1 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {post.date}
                  </div>

                  <a
                    href=""
                    className="text-green-400 text-sm font-medium flex items-center gap-1
                               group-hover:gap-2 transition-all"
                  >
                    Read More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;