"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/image-with-fallback";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Droplets,
} from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  // Set year on client to avoid SSR mismatch
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Our Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Membership", href: "/membership" },
    { title: "News & Events", href: "/news" },
    { title: "Contact", href: "/contact" },
  ];

  const services = [
    { title: "Water Supply Systems", href: "/services/water-supply" },
    { title: "Sanitation Solutions", href: "/services/sanitation" },
    { title: "Community Development", href: "/services/community" },
    { title: "Technical Consultation", href: "/services/consultation" },
    { title: "Maintenance & Repair", href: "/services/maintenance" },
    { title: "Training Programs", href: "/services/training" },
  ];

  const resources = [
    { title: "Publications", href: "/resources/publications" },
    { title: "Research Reports", href: "/resources/reports" },
    { title: "Best Practices", href: "/resources/best-practices" },
    { title: "Guidelines", href: "/resources/guidelines" },
    { title: "Photo Gallery", href: "/gallery" },
    { title: "Downloads", href: "/downloads" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:bg-blue-400" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-700" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:bg-pink-600" },
  ];

  return (
    <footer className="bg-gray-900 text-white w-full overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 w-full overflow-hidden">
          {/* Company Info */}
          <div className="w-full min-w-0">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <ImageWithFallback
                src="/rwua-images/logo/rwua-logo-white.svg"
                alt="RWUA Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">RWUA</span>
                <span className="text-sm text-gray-400">Rural Water Users Association</span>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Empowering rural communities through sustainable water and sanitation solutions.
              Building a better future, one drop at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Baneshwor, Kathmandu</p>
                  <p>Nepal - 44600</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+977-1-4123456</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@rwua.com.np</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white`}
                  aria-label="social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full min-w-0">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Droplets className="w-5 h-5 text-blue-400 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    <span className="break-words">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full min-w-0">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Droplets className="w-5 h-5 text-blue-400 mr-2" />
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    <span className="break-words">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Newsletter */}
          <div className="w-full min-w-0">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Droplets className="w-5 h-5 text-blue-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, idx) => (
                <li key={idx}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                    <span className="break-words">{resource.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-gray-800 rounded-lg p-4 w-full">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter for latest updates and news.
              </p>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    suppressHydrationWarning={true}
                    type="email"
                    placeholder="Your email"
                    className="flex-1 min-w-0 w-full max-w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md sm:rounded-l-md sm:rounded-r-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    suppressHydrationWarning={true}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-200 whitespace-nowrap text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear ?? "2025"} Rural Water Users Association (RWUA). All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors whitespace-nowrap">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;