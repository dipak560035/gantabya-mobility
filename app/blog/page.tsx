

'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'future-of-evs-in-nepal',
      category: 'Industry',
      title: 'The Future of EVs in Nepal',
      description: 'How electric vehicles are reshaping transportation in the Himalayas. From reducing carbon emissions to navigating mountain terrain, discover the EV revolution in Nepal.',
      date: 'Jan 15, 2024',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      // content: `
      //   <p>The electric vehicle revolution is finally taking hold in Nepal, transforming the way people traverse the Himalayan nation's challenging terrain. With rising fuel costs and growing environmental awareness, EVs have become an attractive alternative for Nepali commuters.</p>
        
      //   <h2>The Current Landscape</h2>
      //   <p>Nepal has seen a remarkable 400% increase in EV adoption over the past two years. The government's ambitious goal of achieving 25% EV penetration by 2025 is well within reach, thanks to supportive policies and growing consumer confidence.</p>
        
      //   <h2>Overcoming Mountain Challenges</h2>
      //   <p>Modern EVs are proving their mettle on steep Himalayan slopes. Advanced battery management systems and regenerative braking technology make electric vehicles surprisingly capable in mountainous regions. The torque advantage of electric motors provides excellent hill-climbing ability.</p>
        
      //   <h2>Economic Benefits</h2>
      //   <p>For the average Nepali consumer, EVs offer significant savings. With electricity costs being substantially lower than petrol or diesel, EV owners can save up to 70% on fuel costs. Additionally, reduced maintenance requirements (no oil changes, fewer moving parts) add to the long-term savings.</p>
        
      //   <h2>Environmental Impact</h2>
      //   <p>Nepal's hydropower-rich grid makes EVs even greener. Unlike many countries that rely on fossil fuels for electricity, Nepal's predominantly hydroelectric power means EVs here have near-zero lifetime emissions. Each EV on Nepali roads prevents approximately 2.5 tons of CO2 emissions annually.</p>
        
      //   <h2>Charging Infrastructure Development</h2>
      //   <p>Major progress has been made in developing charging networks. Key highways now feature DC fast chargers, and urban centers have growing networks of AC charging points. The government's partnership with private companies is accelerating infrastructure deployment.</p>
        
      //   <h2>Looking Ahead</h2>
      //   <p>The future looks bright for EVs in Nepal. With battery prices continuing to fall and new models entering the market, electric vehicles are becoming accessible to more Nepalis. The next five years will likely see EVs become the dominant form of personal transportation in Nepal's cities.</p>
      // `,
      // author: {
      //   name: 'Rajesh Thapa',
      //   role: 'EV Industry Expert',
      //   avatar: 'https://ui-avatars.com/api/?name=Rajesh+Thapa&background=22c55e&color=fff'
      // }
    },
    {
      id: 2,
      slug: '5-tips-for-battery-longevity',
      category: 'Tips',
      title: '5 Tips for Battery Longevity',
      description: "Maximize your electric motorcycle's battery life with expert tips on charging habits, storage, and maintenance for long-lasting performance.",
      date: 'Jan 15, 2025',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1600428235269-c326df6361fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      // content: `
      //   <p>Your EV battery is the heart of your electric motorcycle. Proper care can significantly extend its lifespan, saving you money and ensuring optimal performance for years to come. Here are five essential tips for maximizing battery longevity.</p>
        
      //   <h2>1. Avoid Extreme Charging Levels</h2>
      //   <p>Lithium-ion batteries last longest when kept between 20% and 80% charge. Regularly charging to 100% or letting the battery drain completely to 0% can accelerate degradation. Aim to keep your battery in the "sweet spot" for daily use.</p>
        
      //   <h2>2. Be Mindful of Temperature</h2>
      //   <p>Extreme heat is the #1 enemy of battery health. Avoid parking your EV in direct sunlight for extended periods. Similarly, very cold temperatures can temporarily reduce range and long-term exposure can cause damage. When possible, park in shaded or temperature-controlled areas.</p>
        
      //   <h2>3. Use the Right Charger</h2>
      //   <p>While fast chargers are convenient, frequent use can generate excess heat and stress the battery. For daily charging, use a standard Level 2 charger. Reserve DC fast charging for road trips and emergencies when you truly need a quick top-up.</p>
        
      //   <h2>4. Follow the "ABC" Rule</h2>
      //   <p>"Always Be Charging" - when your EV is parked, plug it in. This allows the battery management system to maintain optimal temperature and charge levels. Modern EVs are designed to be plugged in, so don't worry about "overcharging" - the system handles this automatically.</p>
        
      //   <h2>5. Regular Maintenance Matters</h2>
      //   <p>Keep your battery management system updated with the latest firmware. Have your battery health checked annually by professionals. Simple maintenance like keeping battery contacts clean and ensuring proper cooling system function can make a big difference.</p>
        
      //   <h2>Bonus Tip: Drive Smoothly</h2>
      //   <p>Aggressive acceleration and hard braking put extra stress on your battery. Smooth, gradual acceleration and using regenerative braking not only extends range but also promotes battery health over the long term.</p>
        
      //   <p>By following these tips, you can expect your EV battery to retain 80-90% of its capacity even after 5-7 years of regular use.</p>
      // `,
      // author: {
      //   name: 'Srijana KC',
      //   role: 'EV Technician',
      //   avatar: 'https://ui-avatars.com/api/?name=Srijana+KC&background=22c55e&color=fff'
      // }
    },
    {
      id: 3,
      slug: 'nepals-growing-charging-network',
      category: 'News',
      title: "Nepal's Growing Charging Network",
      description: 'New charging stations are making long-distance EV travel possible across Nepal. Explore the expanding infrastructure and its impact.',
      date: 'Feb 28, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1671785291804-5e1286d29049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      // content: `
      //   <p>Nepal is witnessing an unprecedented expansion of its electric vehicle charging infrastructure, transforming the feasibility of long-distance EV travel across the country. From the Terai plains to the Himalayan foothills, charging stations are appearing at an impressive rate.</p>
        
      //   <h2>East-West Highway Now Covered</h2>
      //   <p>The critical Mahendra Highway (East-West Highway) now has fast chargers every 80-100 kilometers, making cross-country EV travel practical for the first time. Major stops in Biratnagar, Janakpur, Narayanghat, Butwal, and Dhangadhi all feature DC fast charging capabilities.</p>
        
      //   <h2>Kathmandu Valley Leading the Way</h2>
      //   <p>The capital region has become a model for urban charging infrastructure. Over 200 charging points now operate across the valley, with many shopping malls, hotels, and public parking facilities offering convenient charging options for EV owners.</p>
        
      //   <h2>Tourist Routes Getting Connected</h2>
      //   <p>Popular tourist destinations including Pokhara, Lumbini, and Chitwan now feature dedicated charging stations. This development is encouraging eco-conscious tourists to explore Nepal using electric transportation options.</p>
        
      //   <h2>Government Initiatives</h2>
      //   <p>The Nepal Electricity Authority has installed 50 fast chargers along major highways as part of its "Green Highway" initiative. The government offers subsidies and land allocation to private companies willing to invest in charging infrastructure.</p>
        
      //   <h2>Private Sector Investment</h2>
      //   <p>Companies like Gantabya, NEA, and various fuel retailers are investing heavily in charging networks. Innovative solutions including solar-powered charging stations and battery swapping stations are being piloted in select locations.</p>
        
      //   <h2>Mobile Apps and Navigation</h2>
      //   <p>New mobile applications now provide real-time information about charger availability, pricing, and compatibility. Route planning tools help EV owners navigate Nepal's growing but still-developing charging network.</p>
        
      //   <h2>Future Plans</h2>
      //   <p>By 2028, Nepal aims to have charging stations in all 77 districts. International cooperation with neighboring countries is also progressing, with plans for cross-border charging corridors connecting Nepal with India and China.</p>
      // `,
      // author: {
      //   name: 'Anil Shrestha',
      //   role: 'Infrastructure Reporter',
      //   avatar: 'https://ui-avatars.com/api/?name=Anil+Shrestha&background=22c55e&color=fff'
      // }
    },
    {
      id: 4,
      slug: 'ev-riding-what-you-need-to-know',
      category: 'Tips',
      title: 'EV Riding: What You Need to Know',
      description: 'Mastering the slopes of Nepal on an electric motorcycle. Essential tips for riding in hilly terrain and extreme weather conditions.',
      date: 'Jan 15, 2024',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      image: 'https://images.unsplash.com/photo-1551288519-b5e4d0bca621?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0',
      content: `
        <p>Riding an electric motorcycle in Nepal's diverse terrain requires some adjustment from traditional bikes. From navigating steep mountain roads to managing range anxiety, here's everything you need to know about mastering EV riding in the Himalayas.</p>
        
        <h2>Understanding Regenerative Braking</h2>
        <p>One of the biggest differences is regenerative braking. On downhill sections, your motor becomes a generator, charging your battery as you descend. This is particularly valuable in Nepal's mountainous terrain, where long downhill sections can actually increase your range.</p>
        
        <h2>Hill Climbing Technique</h2>
        <p>Electric motors deliver instant torque, making them excellent hill climbers. Unlike gas bikes that need to be in the right gear, EVs provide smooth, consistent power on steep inclines. However, climbing uses more energy, so plan your range accordingly when heading into mountain regions.</p>
        
        <h2>Range Management in Mountains</h2>
        <p>Your EV's range varies significantly with elevation changes. A good rule of thumb: climbing 1,000 meters in elevation reduces range by about 15-20%, while descending the same distance can recover some of that energy through regenerative braking.</p>
        
        <h2>Weather Considerations</h2>
        <p>Cold temperatures temporarily reduce battery efficiency. In Nepal's winter months (December-February), expect 15-25% less range. Plan longer trips accordingly and consider carrying a portable charger for extended mountain journeys.</p>
        
        <h2>Charging Strategy in Remote Areas</h2>
        <p>When venturing into remote regions, research charging options in advance. Many teahouses and lodges along popular trekking routes now offer basic charging facilities for a small fee. Carry appropriate adapters and consider a portable charger for emergencies.</p>
        
        <h2>Weight and Handling</h2>
        <p>EVs typically have a lower center of gravity due to battery placement, which improves handling on rough roads. However, they can be heavier than comparable gas bikes. Adjust your riding style, especially when maneuvering on loose gravel or steep switchbacks.</p>
        
        <h2>Essential Accessories</h2>
        <p>Invest in quality rain gear (EVs handle wet conditions well, but you shouldn't), a portable charger, tire repair kit, and a power bank for your devices. Navigation apps with charging station locations are indispensable.</p>
      `,
        // author: {
        //   name: 'Prakash Neupane',
        //   role: 'Adventure Rider',
        //   avatar: 'https://ui-avatars.com/api/?name=Prakash+Neupane&background=22c55e&color=fff'
        // }
    },
    {
      id: 5,
      slug: 'gantabya-2025-year-in-review',
      category: 'Company',
      title: 'Gantabya 2025: Year in Review',
      description: "A look back at our biggest milestones and what's coming next in 2026. Celebrating achievements and future innovations.",
      date: 'Mar 8, 2026',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
      // content: `
      //   <p>2025 was a transformative year for Gantabya. From record-breaking sales to innovative product launches, we've made significant strides in our mission to electrify Nepal's transportation. Here's a comprehensive look back at our achievements.</p>
        
      //   <h2>Record-Breaking Sales</h2>
      //   <p>We sold over 5,000 electric motorcycles in 2025, a 150% increase from the previous year. This growth reflects increasing consumer confidence in EV technology and our reputation for quality and reliability.</p>
        
      //   <h2>New Product Launches</h2>
      //   <p>March saw the launch of the Gantabya Himalayan, our first adventure-touring EV designed specifically for Nepal's terrain. With extended range (150km) and rugged construction, it quickly became our best-selling model.</p>
        
      //   <h2>Expanded Dealer Network</h2>
      //   <p>We opened 15 new dealerships across Nepal, bringing our total to 35 locations nationwide. This expansion has made Gantabya products accessible to customers in all seven provinces.</p>
        
      //   <h2>Charging Infrastructure Partnership</h2>
      //   <p>Our partnership with Nepal Electricity Authority resulted in 25 new fast-charging stations along major highways. This infrastructure investment is critical for enabling long-distance EV travel in Nepal.</p>
        
      //   <h2>Customer Satisfaction Excellence</h2>
      //   <p>We achieved a 94% customer satisfaction rating, with particular praise for our after-sales service and battery warranty program. Our mobile service vans have brought maintenance to customers in remote areas.</p>
        
      //   <h2>Sustainability Impact</h2>
      //   <p>Gantabya EVs on the road have collectively prevented over 12,500 tons of CO2 emissions in 2025 alone. Our manufacturing process now uses 40% renewable energy, with a goal of 100% by 2028.</p>
        
      //   <h2>Looking Ahead to 2026</h2>
      //   <p>Next year brings exciting developments: a more affordable city commuter model, expanded battery swapping stations, and our first export to international markets. We're also developing a mobile app that will offer advanced trip planning and charging network integration.</p>
        
      //   <p>Thank you to our customers, partners, and team members who made 2025 unforgettable. The road ahead is electric, and we're excited to lead the way.</p>
      // `,
      // author: {
      //   name: 'Bikram Gurung',
      //   role: 'CEO, Gantabya',
      //   avatar: 'https://ui-avatars.com/api/?name=Bikram+Gurung&background=22c55e&color=fff'
      // }
    },
    {
      id: 6,
      slug: 'how-much-co2-are-we-saving',
      category: 'News',
      title: 'How Much CO₂ Are We Saving?',
      description: 'Environmental impact of 5,000+ EV bikes in Nepal. Discover the carbon reduction achievements and sustainability goals.',
      date: 'Jan 5, 2026',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      image: 'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1200&auto=format&fit=crop',
      // content: `
      //   <p>With over 5,000 Gantabya electric motorcycles now on Nepali roads, we've crunched the numbers to understand our collective environmental impact. The results are impressive and demonstrate the power of EV adoption in reducing carbon emissions.</p>
        
      //   <h2>The Math Behind the Impact</h2>
      //   <p>Each Gantabya EV replaces approximately 2,500km of monthly travel that would otherwise be done on a petrol motorcycle. Based on average fuel consumption of 40km per liter and Nepal's carbon coefficient for petrol (2.31 kg CO2 per liter), each EV prevents about 175kg of CO2 emissions monthly.</p>
        
      //   <h2>Annual Savings</h2>
      //   <p>With 5,000 EVs operating for an average of 10 months per year, we're preventing approximately 8,750 tons of CO2 emissions annually. This is equivalent to:</p>
      //   <ul>
      //     <li>Planting 145,000 mature trees</li>
      //     <li>Removing 1,900 cars from the road for a year</li>
      //     <li>Powering 1,100 homes for a year</li>
      //   </ul>
        
      //   <h2>Nepal's Unique Green Advantage</h2>
      //   <p>Nepal's electricity grid is approximately 95% renewable (primarily hydropower), making EVs here substantially cleaner than in countries relying on coal or natural gas for electricity generation. The lifetime emissions of a Gantabya EV in Nepal are 90% lower than a comparable petrol motorcycle.</p>
        
      //   <h2>Cumulative Impact by 2028</h2>
      //   <p>If we achieve our goal of 25,000 Gantabya EVs on the road by 2028, the annual CO2 savings would reach 43,750 tons. Over five years, cumulative savings would exceed 150,000 tons of CO2.</p>
        
      //   <h2>Beyond Carbon</h2>
      //   <p>EVs also reduce other pollutants harmful to human health, including nitrogen oxides, particulate matter, and volatile organic compounds. In Kathmandu Valley, where air quality is a major concern, widespread EV adoption could significantly improve respiratory health outcomes.</p>
        
      //   <h2>Manufacturing Footprint</h2>
      //   <p>We're transparent about the environmental cost of battery production. The carbon footprint of manufacturing a Gantabya EV (including its battery) is offset within 6-8 months of typical use in Nepal. Our battery recycling program ensures responsible end-of-life management.</p>
        
      //   <h2>Your Role in This Impact</h2>
      //   <p>Every Gantabya rider is an environmental champion. By choosing electric, you're directly contributing to cleaner air, reduced fossil fuel dependence, and a sustainable future for Nepal. Together, we're proving that economic development and environmental protection can go hand in hand.</p>
      // `,
      // author: {
      //   name: 'Dr. Sarah Lamichhane',
      //   role: 'Environmental Scientist',
      //   avatar: 'https://ui-avatars.com/api/?name=Sarah+Lamichhane&background=22c55e&color=fff'
      // }
    },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Blog &<span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">  News</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest in electric vehicle technology, tips, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article
                className="bg-[#111111] border border-gray-800 rounded-xl overflow-hidden
                           hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]
                           transition-all duration-300 group flex flex-col h-full w-full cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-zinc-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
             
                {/* Content Container */}
                <div className="p-5 md:p-6 flex flex-col grow">
                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${post.bg} ${post.color}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2 min-h-14">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3 min-h-18">
                    {post.description}
                  </p>

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

                    <div className="text-green-400 text-sm md:text-base font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Read More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href=""
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-green-500 
                       text-green-400 rounded-lg hover:bg-green-500/10 transition-all duration-300
                       font-medium group"
          >
            View All Articles
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;














