'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'ראשי', href: '/' },
    { label: 'תפריט', href: '/menu' },
    { label: 'אודות', href: '/about' },
    { label: 'גלריה', href: '/gallery' },
    { label: 'צור קשר', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="block">
            <div className="relative h-12 w-36">
              <Image 
                src="/logo.png" 
                alt="מסעדה ביתא" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-gray-800 hover:text-primary font-medium text-base transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/reservation" 
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md transition-colors font-medium"
          >
            קבע תור עכשיו
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {isOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-lg p-6 pt-20 md:hidden"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="text-gray-800 hover:text-primary font-medium text-lg py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/reservation" 
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors font-medium text-center mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  קבע תור עכשיו
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;