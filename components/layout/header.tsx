'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Menu, X, ChevronDown, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuItem {
  id: number;
  title: string;
  url: string;
  children?: MenuItem[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items - exact match to rwua.com.np structure
  const navigationItems: MenuItem[] = [
    { id: 1, title: 'Home', url: '#hero' },
    { id: 2, title: 'Gallery', url: '#gallery' },
    { 
      id: 3, 
      title: 'News & Press', 
      url: '#news',
      children: [
        { id: 31, title: 'Save the Children Program', url: '#save-children' },
        { id: 32, title: 'News & Updates', url: '#news-updates' },
      ]
    },
    { id: 4, title: 'Success Story', url: '#success-stories' },
    { id: 5, title: 'All Vacancy', url: '#vacancy' },
    { id: 6, title: 'Contact Us', url: '#contact' },
    { 
      id: 7, 
      title: 'Download', 
      url: '#download',
      children: [
        { id: 71, title: 'Annual Reports', url: '#reports' },
        { id: 72, title: 'Publications', url: '#publications' },
        { id: 73, title: 'Forms', url: '#forms' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling when page loads
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes (back/forward navigation)
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation - both internal links and smooth scroll
  const handleNavigation = (url: string) => {
    if (url.startsWith('#')) {
      // Check if we're on the home page
      const isHomePage = pathname === '/';
      
      if (isHomePage) {
        // If on home page, smooth scroll to section
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // If not on home page, navigate to home page
        // For hero section (Home), just go to root, otherwise add hash
        if (url === '#hero') {
          router.push('/');
        } else {
          router.push('/' + url);
        }
      }
    } else {
      // Navigate to page for regular links
      router.push(url);
    }
    setIsMenuOpen(false);
  };

  // Top navbar items with Nepali text - linking to actual pages
  const topNavItems = [
    { title: 'सफलताको कथा', url: '/success-stories' },
    { title: 'फेसबूक बाट ल्याइेका समाचार', url: '/facebook-news' },
    { title: 'ताजा अपडेट', url: '/recent-news' },
    { title: 'पुराना र नयाँ जानकारी', url: '/old-new-info' },
    { title: 'दर्ता न. ८/५०/५१', url: '/registration' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >


      {/* Contact Info Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📧 info@rwua.com.np</span>
            <span>📞 +977-1-4123456</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2">
              <a href="https://twitter.com/rwua_nepal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/rwua-nepal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/rwua_nepal" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
            {/* Top Yellow Navbar with Nepali Text */}
      <div className="bg-yellow-200 py-2 px-4 text-sm">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
            {topNavItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.url)}
                  className="text-gray-800 hover:text-gray-900 font-medium transition-all duration-300 relative group py-1"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <ImageWithFallback
              src="/rwua-images/logo/rwua-logo.svg"
              alt="RWUA Logo"
              width={60}
              height={60}
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">RWUA</span>
              <span className="text-sm text-gray-600">Rural Water Users Association</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => handleNavigation(item.url)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  <span>{item.title}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => handleNavigation(child.url)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 border-t pt-4"
            >
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.url)}
                      className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {item.title}
                    </button>
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.id}
                            onClick={() => handleNavigation(child.url)}
                            className="block w-full text-left py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {child.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;