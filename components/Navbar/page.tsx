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
          <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#00d65c]" />
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
    { href: '/Support', label: 'Support' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
            : 'bg-linear-to-b from-black/95 via-black/70 to-transparent backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18.5 md:h-21">
            
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

                <span className="text-white text-[11px] sm:text-xs uppercase tracking-[0.25em] mt-1">
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
      <div className="h-18.5 md:h-21" />
    </>
  );
}