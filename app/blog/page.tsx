// // 'use client'

// // import React from 'react';
// // import Image from 'next/image';

// // const BlogSection: React.FC = () => {
// //   const blogPosts = [
// //     {
// //       category: 'Industry',
// //       title: 'The Future of EVs in Nepal',
// //       description: 'How electric vehicles are reshaping transportation in the Himalayas.',
// //       date: 'Jan 15, 2024',
// //       color: 'text-blue-400',
// //       bg: 'bg-blue-500/10',
// //       image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHx8fDA%3D', 
// //     },
// //     {
// //       category: 'Tips',
// //       title: '5 Tips for Battery Longevity',
// //       description: "Maximize your electric motorcycle's battery life with expert tips.",
// //       date: 'Jan 15, 2025',
// //       color: 'text-green-400',
// //       bg: 'bg-green-500/10',
// //       image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhdHRlcnklMjBwYWNrfGVufDB8fDB8fHww', 
// //     },
// //     {
// //       category: 'News',
// //       title: "Nepal's Growing Charging Network",
// //       description: 'New charging stations are making long-distance EV travel possible.',
// //       date: 'Feb 28, 2026',
// //       color: 'text-purple-400',
// //       bg: 'bg-purple-500/10',
// //       image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
// //     },
// //     {
// //       category: 'Tips',
// //       title: 'EV Riding: What You Need to Know',
// //       description: 'Mastering the slopes of Nepal on an electric motorcycle.',
// //       date: 'Jan 15, 2024',
// //       color: 'text-green-400',
// //       bg: 'bg-green-500/10',
// //       image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Path to your thumbnail image
// //     },
// //     {
// //       category: 'Company',
// //       title: 'Gantabya 2025: Year in Review',
// //       description: "A look back at our biggest milestones and what's coming next.",
// //       date: 'Mar 8, 2026',
// //       color: 'text-orange-400',
// //       bg: 'bg-orange-500/10',
// //       image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Path to your thumbnail image
// //     },
// //     {
// //       category: 'News',
// //       title: 'How Much CO₂ Are We Saving?',
// //       description: 'Environmental impact of 5,000+ EV bikes in Nepal.',
// //       date: 'Jan 5, 2026',
// //       color: 'text-purple-400',
// //       bg: 'bg-purple-500/10',
// //       image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop', 
// //     },
// //   ];

// //   return (
// //     <section className="py-20 bg-[#0a0a0a] text-white">
// //       <div className="max-w-6xl mx-auto px-6">

// //         <div className="text-center mb-14">
// //           <h2 className="text-4xl font-bold mb-3">
// //             Blog &<span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
// //           </h2>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {blogPosts.map((post, index) => (
// //             <article
// //               key={index}
// //               className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden
// //                          hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
// //                          transition-all duration-300 group flex flex-col h-full"
// //             >
            
// //               <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
// //                 <Image
// //                   src={post.image}
// //                   alt={post.title}
// //                   width={700}
// //                   height={420}
// //                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// //                 />
// //               </div>
       

              
// //               <div className="p-5 flex flex-col grow">
// //                 <div className="mb-3">
// //                   <span
// //                     className={`px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
// //                   >
// //                     {post.category}
// //                   </span>
// //                 </div>

// //                 <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
// //                   {post.title}
// //                 </h3>

// //                 <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
// //                   {post.description}
// //                 </p>

// //                 <div className="flex items-center justify-between pt-3 border-t border-gray-800 mt-auto">
// //                   <div className="flex items-center text-gray-500 text-xs">
// //                     <svg
// //                       className="w-4 h-4 mr-1 text-gray-500"
// //                       fill="none"
// //                       stroke="currentColor"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth="2"
// //                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
// //                       />
// //                     </svg>
// //                     {post.date}
// //                   </div>

// //                   <a
// //                     href=""
// //                     className="text-green-400 text-sm font-medium flex items-center gap-1
// //                                group-hover:gap-2 transition-all"
// //                   >
// //                     Read More
// //                     <span className="transition-transform group-hover:translate-x-1">
// //                       →
// //                     </span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default BlogSection;



























// 'use client'

// import React from 'react';
// import Image from 'next/image';

// const BlogSection: React.FC = () => {
//   const blogPosts = [
//     {
//       category: 'Industry',
//       title: 'The Future of EVs in Nepal',
//       description: 'How electric vehicles are reshaping transportation in the Himalayas. From reducing carbon emissions to navigating mountain terrain, discover the EV revolution in Nepal.',
//       date: 'Jan 15, 2024',
//       color: 'text-blue-400',
//       bg: 'bg-blue-500/10',
//       image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHx8fDA%3D', 
//     },
//     {
//       category: 'Tips',
//       title: '5 Tips for Battery Longevity',
//       description: "Maximize your electric motorcycle's battery life with expert tips on charging habits, storage, and maintenance for long-lasting performance.",
//       date: 'Jan 15, 2025',
//       color: 'text-green-400',
//       bg: 'bg-green-500/10',
//       image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhdHRlcnklMjBwYWNrfGVufDB8fDB8fHww', 
//     },
//     {
//       category: 'News',
//       title: "Nepal's Growing Charging Network",
//       description: 'New charging stations are making long-distance EV travel possible across Nepal. Explore the expanding infrastructure and its impact.',
//       date: 'Feb 28, 2026',
//       color: 'text-purple-400',
//       bg: 'bg-purple-500/10',
//       image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
//     },
//     {
//       category: 'Tips',
//       title: 'EV Riding: What You Need to Know',
//       description: 'Mastering the slopes of Nepal on an electric motorcycle. Essential tips for riding in hilly terrain and extreme weather conditions.',
//       date: 'Jan 15, 2024',
//       color: 'text-green-400',
//       bg: 'bg-green-500/10',
//       image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       category: 'Company',
//       title: 'Gantabya 2025: Year in Review',
//       description: "A look back at our biggest milestones and what's coming next in 2026. Celebrating achievements and future innovations.",
//       date: 'Mar 8, 2026',
//       color: 'text-orange-400',
//       bg: 'bg-orange-500/10',
//       image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       category: 'News',
//       title: 'How Much CO₂ Are We Saving?',
//       description: 'Environmental impact of 5,000+ EV bikes in Nepal. Discover the carbon reduction achievements and sustainability goals.',
//       date: 'Jan 5, 2026',
//       color: 'text-purple-400',
//       bg: 'bg-purple-500/10',
//       image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop',
//     },
//   ];

//   return (
//     <section className="py-20 bg-[#0a0a0a] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold mb-3">
//             Blog &<span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Stay updated with the latest in electric vehicle technology, tips, and industry news
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {blogPosts.map((post, index) => (
//             <article
//               key={index}
//               className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden
//                          hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
//                          transition-all duration-300 group flex flex-col h-full max-w-md mx-auto w-full"
//             >
//               {/* Image Container - Fixed aspect ratio for consistency */}
//               <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 />
//               </div>
           
//               {/* Content Container - Optimized padding and spacing */}
//               <div className="p-5 md:p-6 flex flex-col flex-grow">
//                 {/* Category Badge */}
//                 <div className="mb-3">
//                   <span
//                     className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
//                   >
//                     {post.category}
//                   </span>
//                 </div>

//                 {/* Title - Fixed height for consistency */}
//                 <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2 min-h-[3.5rem]">
//                   {post.title}
//                 </h3>

//                 {/* Description - Fixed height with line clamp */}
//                 <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3 min-h-[4.5rem]">
//                   {post.description}
//                 </p>

//                 {/* Footer - Always at bottom */}
//                 <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
//                   <div className="flex items-center text-gray-500 text-xs md:text-sm">
//                     <svg
//                       className="w-4 h-4 mr-1.5 text-gray-500"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                       />
//                     </svg>
//                     {post.date}
//                   </div>

//                   <a
//                     href="#"
//                     className="text-green-400 text-sm md:text-base font-medium flex items-center gap-1
//                                group-hover:gap-2 transition-all duration-300"
//                   >
//                     Read More
//                     <span className="transition-transform duration-300 group-hover:translate-x-1">
//                       →
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Optional: View All Blog Posts Button */}
//         <div className="text-center mt-12">
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 
//                        text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300
//                        font-medium group"
//           >
//             View All Articles
//             <span className="transition-transform group-hover:translate-x-1">→</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


























'use client'

import React from 'react';
import Image from 'next/image';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      category: 'Industry',
      title: 'The Future of EVs in Nepal',
      description: 'How electric vehicles are reshaping transportation in the Himalayas. From reducing carbon emissions to navigating mountain terrain, discover the EV revolution in Nepal.',
      date: 'Jan 15, 2024',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGF8ZW58MHx8MHx8fDA%3D', 
    },
    {
      category: 'Tips',
      title: '5 Tips for Battery Longevity',
      description: "Maximize your electric motorcycle's battery life with expert tips on charging habits, storage, and maintenance for long-lasting performance.",
      date: 'Jan 15, 2025',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhdHRlcnklMjBwYWNrfGVufDB8fDB8fHww', 
    },
    {
      category: 'News',
      title: "Nepal's Growing Charging Network",
      description: 'New charging stations are making long-distance EV travel possible across Nepal. Explore the expanding infrastructure and its impact.',
      date: 'Feb 28, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoYXJnaW5nJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      category: 'Tips',
      title: 'EV Riding: What You Need to Know',
      description: 'Mastering the slopes of Nepal on an electric motorcycle. Essential tips for riding in hilly terrain and extreme weather conditions.',
      date: 'Jan 15, 2024',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      category: 'Company',
      title: 'Gantabya 2025: Year in Review',
      description: "A look back at our biggest milestones and what's coming next in 2026. Celebrating achievements and future innovations.",
      date: 'Mar 8, 2026',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      category: 'News',
      title: 'How Much CO₂ Are We Saving?',
      description: 'Environmental impact of 5,000+ EV bikes in Nepal. Discover the carbon reduction achievements and sustainability goals.',
      date: 'Jan 5, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Blog &<span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest in electric vehicle technology, tips, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden
                         hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
                         transition-all duration-300 group flex flex-col h-full w-full"
            >
              {/* Image Container - Fixed dimensions for proper rendering */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-zinc-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3} // Load first 3 images with priority
                  onError={(e) => {
                    // Fallback for broken images
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.backgroundColor = '#1a1a1a';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      const fallback = document.createElement('div');
                      fallback.className = 'text-gray-500 text-sm';
                      fallback.innerText = 'Image not available';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
           
              {/* Content Container */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                  {post.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                  <div className="flex items-center text-gray-500 text-xs md:text-sm">
                    <svg
                      className="w-4 h-4 mr-1.5 text-gray-500"
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
                    href="#"
                    className="text-green-400 text-sm md:text-base font-medium flex items-center gap-1
                               group-hover:gap-2 transition-all duration-300"
                  >
                    Read More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Posts Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 
                       text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300
                       font-medium group"
          >
            View All Articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;