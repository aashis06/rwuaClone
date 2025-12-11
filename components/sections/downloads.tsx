'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Download, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Calendar,
  Eye,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadItem {
  id: number;
  title: string;
  category: 'reports' | 'publications' | 'forms' | 'media' | 'guidelines';
  type: 'pdf' | 'doc' | 'image' | 'video';
  size: string;
  date: string;
  downloads: number;
  description: string;
  url: string;
  thumbnail?: string;
}

const Downloads: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const downloadItems: DownloadItem[] = [
    {
      id: 1,
      title: "Annual Report 2023",
      category: "reports",
      type: "pdf",
      size: "2.5 MB",
      date: "2024-01-15",
      downloads: 1250,
      description: "Comprehensive annual report showcasing our achievements and impact in 2023",
      url: "/downloads/annual-report-2023.pdf"
    },
    {
      id: 2,
      title: "Water Quality Guidelines",
      category: "guidelines",
      type: "pdf",
      size: "1.8 MB",
      date: "2023-12-20",
      downloads: 890,
      description: "Technical guidelines for water quality testing and management",
      url: "/downloads/water-quality-guidelines.pdf"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Downloads', icon: <Download className="w-4 h-4" /> },
    { key: 'reports', label: 'Annual Reports', icon: <FileText className="w-4 h-4" /> },
    { key: 'publications', label: 'Publications', icon: <FileText className="w-4 h-4" /> },
    { key: 'forms', label: 'Forms', icon: <FileText className="w-4 h-4" /> },
    { key: 'media', label: 'Media Kit', icon: <ImageIcon className="w-4 h-4" /> },
    { key: 'guidelines', label: 'Guidelines', icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            Resources
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Download
            <span className="text-purple-600"> Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our reports, publications, forms, and other resources to learn more about our work and impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Download Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
                <span className="text-sm text-gray-500">{item.size}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span>{item.downloads} downloads</span>
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;