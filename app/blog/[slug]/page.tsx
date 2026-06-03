
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { blogPosts } from "../blogData";

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// interface Props {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default async function BlogDetailPage({ params }: Props) {
//   const { slug } = await params;
//   const post = blogPosts.find((item) => item.slug === slug);

//   if (!post) {
//     notFound();
//   }

//   // Get related posts (excluding current, max 3)
//   const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white">
//       {/* Hero Section */}
//       <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden pt-24">
//         <div className="absolute inset-0">
//           <Image
//             src={post.image}
//             alt={post.title}
//             fill
//             priority
//             className="object-cover"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
//           <div className="max-w-4xl">
//             {/* Category Badge */}
//             <div className="mb-4">
//               <span
//                 className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${post.bg} ${post.color}`}
//               >
//                 {post.category}
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//               {post.title}
//             </h1>

//             {/* Meta Info */}
//             <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
//               <div className="flex items-center gap-1.5">
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//                 {post.date}
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 {post.readTime || "5 min read"}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Main Content */}
//           <div className="lg:col-span-8">
//             {/* Author Section */}
//             <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-700">
//                   <Image
//                     src={post.author.avatar}
//                     alt={post.author.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white text-lg">
//                     {post.author.name}
//                   </h3>
//                   <p className="text-gray-400 text-sm">{post.author.role}</p>
//                 </div>
//               </div>
//               {post.author.bio && (
//                 <p className="text-gray-500 text-sm mt-3 pt-3 border-t border-gray-800">
//                   {post.author.bio}
//                 </p>
//               )}
//             </div>

//             {/* Blog Content */}
//             <article
//               className="
//                 prose prose-invert prose-lg max-w-none
//                 prose-headings:text-white
//                 prose-headings:font-bold
//                 prose-headings:mt-10
//                 prose-headings:mb-4
//                 prose-h1:text-3xl
//                 prose-h2:text-2xl
//                 prose-h3:text-xl
//                 prose-p:text-gray-300
//                 prose-p:leading-relaxed
//                 prose-p:mb-5
//                 prose-li:text-gray-300
//                 prose-strong:text-green-400
//                 prose-strong:font-semibold
//                 prose-a:text-green-400
//                 prose-a:no-underline
//                 prose-a:hover:underline
//                 prose-blockquote:border-l-green-400
//                 prose-blockquote:bg-gray-800/30
//                 prose-blockquote:py-2
//                 prose-blockquote:px-5
//                 prose-blockquote:rounded-lg
//                 prose-blockquote:text-gray-300
//                 prose-code:text-green-400
//                 prose-code:bg-gray-800/50
//                 prose-code:px-1
//                 prose-code:py-0.5
//                 prose-code:rounded
//                 prose-pre:bg-gray-900
//                 prose-pre:border
//                 prose-pre:border-gray-800
//                 prose-pre:rounded-xl
//                 prose-img:rounded-xl
//                 prose-img:shadow-lg
//               "
//               dangerouslySetInnerHTML={{
//                 __html: post.content,
//               }}
//             />

//             {/* Tags Section */}
//             {post.tags && post.tags.length > 0 && (
//               <div className="mt-10 pt-6 border-t border-gray-800">
//                 <div className="flex flex-wrap gap-2">
//                   {post.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-400 rounded-full"
//                     >
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Back to Blog Button */}
//             <div className="mt-10">
//               <Link
//                 href="/#blog"
//                 className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
//               >
//                 <span className="transition-transform group-hover:-translate-x-1">←</span>
//                 Back to all articles
//               </Link>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-4">
//             <div className="sticky top-24 space-y-6">
//               {/* Related Posts */}
//               {relatedPosts.length > 0 && (
//                 <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
//                   <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-800">
//                     Related Articles
//                   </h3>
//                   <div className="space-y-4">
//                     {relatedPosts.map((relatedPost) => (
//                       <Link
//                         key={relatedPost.id}
//                         href={`/blog/${relatedPost.slug}`}
//                         className="group block"
//                       >
//                         <div className="flex gap-3">
//                           <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
//                             <Image
//                               src={relatedPost.image}
//                               alt={relatedPost.title}
//                               fill
//                               className="object-cover transition-transform duration-300 group-hover:scale-105"
//                             />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <span
//                               className={`inline-block text-xs font-semibold rounded-full ${relatedPost.bg} ${relatedPost.color} px-2 py-0.5 mb-1`}
//                             >
//                               {relatedPost.category}
//                             </span>
//                             <h4 className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2">
//                               {relatedPost.title}
//                             </h4>
//                             <p className="text-gray-500 text-xs mt-1">
//                               {relatedPost.date}
//                             </p>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Newsletter Signup */}
//               {/* <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-6">
//                 <div className="text-center">
//                   <div className="text-3xl mb-3">📧</div>
//                   <h3 className="text-lg font-bold text-white mb-2">
//                     Weekly EV Insights
//                   </h3>
//                   <p className="text-sm text-gray-400 mb-4">
//                     Get the latest electric vehicle news and tips straight to your inbox.
//                   </p>
//                   <form className="space-y-3">
//                     <input
//                       type="email"
//                       placeholder="Your email address"
//                       className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
//                     />
//                     <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
//                       Subscribe
//                     </button>
//                   </form>
//                 </div>
//               </div> */}

//               {/* Share Article */}
//               <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
//                 <h3 className="text-lg font-bold text-white mb-4">Share this article</h3>
//                 <div className="flex gap-3">
//                   <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
//                     <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
//                     </svg>
//                   </button>
//                   <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
//                     <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.78-.2-7.14-2-9.4-4.76-.4.7-.6 1.5-.6 2.3 0 1.58.8 2.97 2.02 3.78-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.38.1-.78.16-1.2.16-.3 0-.58-.03-.87-.08.58 1.82 2.27 3.15 4.28 3.18-1.57 1.23-3.54 1.97-5.7 1.97-.37 0-.74-.02-1.1-.06 2.02 1.3 4.43 2.06 7.02 2.06 8.42 0 13.02-6.97 13.02-13 0-.2 0-.4-.02-.6.9-.65 1.68-1.46 2.3-2.38z"/>
//                     </svg>
//                   </button>
//                   <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
//                     <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (excluding current, max 3)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - Added pt-24 for more spacing from navbar */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="mb-4">
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${post.bg} ${post.color}`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
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
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.readTime || "5 min read"}
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                {post.views}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Added pt-8 and mt-8 for extra spacing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Author Section - Added more top margin */}
            <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 mb-8 mt-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-700">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{post.author.role}</p>
                </div>
              </div>
              {post.author.bio && (
                <p className="text-gray-500 text-sm mt-3 pt-3 border-t border-gray-800">
                  {post.author.bio}
                </p>
              )}
            </div>

            {/* Blog Content */}
            <article
              className="
                prose prose-invert prose-lg max-w-none
                prose-headings:text-white
                prose-headings:font-bold
                prose-headings:mt-10
                prose-headings:mb-4
                prose-h1:text-3xl
                prose-h2:text-2xl
                prose-h3:text-xl
                prose-p:text-gray-300
                prose-p:leading-relaxed
                prose-p:mb-5
                prose-li:text-gray-300
                prose-strong:text-green-400
                prose-strong:font-semibold
                prose-a:text-green-400
                prose-a:no-underline
                prose-a:hover:underline
                prose-blockquote:border-l-green-400
                prose-blockquote:bg-gray-800/30
                prose-blockquote:py-2
                prose-blockquote:px-5
                prose-blockquote:rounded-lg
                prose-blockquote:text-gray-300
                prose-code:text-green-400
                prose-code:bg-gray-800/50
                prose-code:px-1
                prose-code:py-0.5
                prose-code:rounded
                prose-pre:bg-gray-900
                prose-pre:border
                prose-pre:border-gray-800
                prose-pre:rounded-xl
                prose-img:rounded-xl
                prose-img:shadow-lg
              "
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />

            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-400 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog Button */}
            <div className="mt-10">
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Back to all articless
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-800">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-800">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span
                              className={`inline-block text-xs font-semibold rounded-full ${relatedPost.bg} ${relatedPost.color} px-2 py-0.5 mb-1`}
                            >
                              {relatedPost.category}
                            </span>
                            <h4 className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-gray-500 text-xs mt-1">
                              {relatedPost.date}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              {/* <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Weekly EV Insights
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Get the latest electric vehicle news and tips straight to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-green-500 transition-colors"
                    />
                    <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div> */}

              {/* Share Article */}
              <div className="bg-[#111111] border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                    <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                    <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.78-.2-7.14-2-9.4-4.76-.4.7-.6 1.5-.6 2.3 0 1.58.8 2.97 2.02 3.78-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.38.1-.78.16-1.2.16-.3 0-.58-.03-.87-.08.58 1.82 2.27 3.15 4.28 3.18-1.57 1.23-3.54 1.97-5.7 1.97-.37 0-.74-.02-1.1-.06 2.02 1.3 4.43 2.06 7.02 2.06 8.42 0 13.02-6.97 13.02-13 0-.2 0-.4-.02-.6.9-.65 1.68-1.46 2.3-2.38z"/>
                    </svg>
                  </button>
                  <button className="flex-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group">
                    <svg className="w-5 h-5 mx-auto text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
