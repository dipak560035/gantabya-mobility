





'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import gantabyaLogo from '../../logo/gantabyalogo.png';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavItem({ href, children, onClick }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm xl:text-[15px] font-medium transition-all duration-300 ${
        isActive
          ? 'text-[#00d65c]'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      <span className="relative">
        {children}

        {isActive && (
          <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#00d65c]" />
        )}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/electric', label: 'Our Bikes' },
    { href: '/technology', label: 'Technology' },
    { href: '/about-us', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-black/95 via-black/70 to-transparent backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px] md:h-[84px]">
            
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 group shrink-0"
            >
              {/* Logo Box */}
              <div className="bg-[#181818] border border-white/10 rounded-2xl p-2 sm:p-2.5 shadow-lg transition-all duration-300 group-hover:border-[#00d65c]/40 group-hover:shadow-green-500/10">
                <Image
                  src={gantabyaLogo}
                  alt="Gantabya logo"
                  width={44}
                  height={44}
                  priority
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
                  Gantabya
                </span>

                <span className="text-gray-400 text-[11px] sm:text-xs uppercase tracking-[0.25em] mt-1">
                  Mobility
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/Testride">
                <button className="bg-[#00d65c] text-black px-7 xl:px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#00c956] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/30 cursor-pointer">
                  Book Test Ride
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? 'max-h-screen opacity-100 border-t border-white/10'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-2xl px-5 py-6 space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200">
                  {item.label}
                </div>
              </NavItem>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/Testride"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full bg-[#00d65c] text-black py-3 rounded-full font-semibold hover:bg-[#00c956] transition-all duration-300">
                  Book Test Ride
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-[74px] md:h-[84px]" />
    </>
  );
}



































// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import gantabyaLogo from '../../logo/gantabyalogo.png';

// function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link 
//       href={href} 
//       onClick={onClick}
//       className={`transition duration-200 ${
//         isActive 
//           ? 'text-green-500 font-semibold' 
//           : 'text-gray-300 hover:text-white'
//       }`}
//     >
//       {children}
//     </Link>
//   );
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [setIsScrolled]);

//   // Close menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname, setIsMenuOpen]);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/electric', label: 'Our Bikes' },
//     { href: '/technology', label: 'Technology' },
//     { href: '/about-us', label: 'About Us' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/Support', label: 'Support' },
//     { href: '/Contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <header 
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled 
//             ? 'bg-[#111111]/95 backdrop-blur-md border-b border-gray-800' 
//             : 'bg-[#111111]/90 backdrop-blur-sm'
//         }`}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
            
//             {/* Logo Section */}
            
//             <Link href="/" className="flex items-center gap-3 group cursor-pointer">
//                 <Image
//                 src={gantabyaLogo}
//                 alt="Gantabya logo"
//                 className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
//                 width={56}
//                 height={56}
//                 priority
//                   />
//                   </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-6 xl:gap-8">
//               {navItems.map((item) => (
//                 <NavItem key={item.href} href={item.href}>
//                   {item.label}
//                 </NavItem>
//               ))}
//             </div>

//             {/* Desktop CTA Button */}
//             <div className="hidden lg:block">
//               <Link href="/Testride">
//                 <button className="bg-[#00d65c] text-black px-6 xl:px-8 py-2.5 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-green-500/25">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 text-white" />
//               ) : (
//                 <Menu className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>
//         </nav>

//         {/* Mobile Navigation Menu */}
//         <div
//           className={`fixed inset-x-0 top-16 md:top-20 bg-[#111111]/95 backdrop-blur-md border-b border-gray-800 transition-all duration-300 lg:hidden ${
//             isMenuOpen 
//               ? 'opacity-100 visible translate-y-0' 
//               : 'opacity-0 invisible -translate-y-4'
//           }`}
//           style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
//         >
//           <div className="px-4 py-6 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
//             {navItems.map((item) => (
//               <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                 <div className="block py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
//                   {item.label}
//                 </div>
//               </NavItem>
//             ))}
            
//             {/* Mobile CTA Button */}
//             <div className="pt-4 px-4">
//               <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full bg-[#00d65c] text-black px-6 py-3 font-semibold rounded-full hover:bg-[#00b34d] transition-all duration-200 cursor-pointer">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Spacer to prevent content from hiding under fixed header */}
//       <div className="h-16 md:h-20" />
//     </>
//   );
// }















// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import gantabyaLogo from '../../logo/gantabyalogo.png';

// function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-all duration-200
//         ${isActive
//           ? 'text-white'
//           : 'text-gray-400 hover:text-white'
//         } group`}
//     >
//       {children}
//       {/* Active indicator bar */}
//       {isActive && (
//         <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00d65c] to-[#00b34d] rounded-full" />
//       )}
//       {/* Hover underline effect */}
//       <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00d65c] to-[#00b34d] rounded-full transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100 ${isActive ? 'hidden' : ''}`} />
//     </Link>
//   );
// }

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();

//   // Handle scroll effect with higher threshold for cleaner look
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 5);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close menu when route changes
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname]);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/electric', label: 'Our Bikes' },
//     { href: '/technology', label: 'Technology' },
//     { href: '/about-us', label: 'About Us' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/Support', label: 'Support' },
//     { href: '/Contact', label: 'Contact' },
//   ];

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
//           isScrolled
//             ? 'bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
//             : 'bg-black border-b border-white/5'
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
//           <div className="flex items-center justify-between h-20 lg:h-24">
//             {/* Logo Section - Enhanced size and spacing */}
//             <Link href="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
//               <div className="relative">
//                 <Image
//                   src={gantabyaLogo}
//                   alt="Gantabya logo"
//                   className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
//                   width={64}
//                   height={64}
//                   priority
//                 />
//               </div>
//               {/* Optional brand text - uncomment if needed */}
//               {/* <span className="hidden sm:inline-block text-white font-bold text-xl tracking-tight">
//                 Gantabya
//               </span> */}
//             </Link>

//             {/* Desktop Navigation - Perfect gap management */}
//             <div className="hidden lg:flex items-center gap-8 xl:gap-10">
//               {navItems.map((item) => (
//                 <NavItem key={item.href} href={item.href}>
//                   {item.label}
//                 </NavItem>
//               ))}
//             </div>

//             {/* Desktop CTA Button */}
//             <div className="hidden lg:block">
//               <Link href="/Testride">
//                 <button className="bg-gradient-to-r from-[#00d65c] to-[#00b34d] text-black px-8 py-2.5 text-sm font-bold rounded-full hover:from-[#00e665] hover:to-[#00c455] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-green-500/20 hover:shadow-green-500/40">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? (
//                 <X className="w-6 h-6 text-white" />
//               ) : (
//                 <Menu className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu - Modern overlay design */}
//         <div
//           className={`fixed inset-x-0 top-20 lg:top-24 bg-black/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 lg:hidden ${
//             isMenuOpen
//               ? 'opacity-100 visible translate-y-0'
//               : 'opacity-0 invisible -translate-y-8 pointer-events-none'
//           }`}
//           style={{ maxHeight: isMenuOpen ? 'calc(100vh - 5rem)' : '0', overflowY: 'auto' }}
//         >
//           <div className="px-6 py-8 space-y-1">
//             {navItems.map((item) => (
//               <NavItem key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
//                 <div className="block py-4 px-4 rounded-xl hover:bg-white/5 transition-all duration-200">
//                   <span className="text-base font-medium">{item.label}</span>
//                 </div>
//               </NavItem>
//             ))}

//             {/* Mobile CTA Button */}
//             <div className="pt-8 px-4">
//               <Link href="/Testride" onClick={() => setIsMenuOpen(false)}>
//                 <button className="w-full bg-gradient-to-r from-[#00d65c] to-[#00b34d] text-black px-6 py-4 font-bold rounded-xl hover:from-[#00e665] hover:to-[#00c455] transition-all duration-300 cursor-pointer shadow-lg">
//                   Book Test Ride
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Spacer to prevent content from hiding under fixed header */}
//       <div className="h-20 lg:h-24" />
//     </>
//   );
// }