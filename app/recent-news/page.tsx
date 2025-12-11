'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';
import { wpAPI, WPPost, getEmbeddedImageUrl, stripHtml, formatDate } from '@/lib/wordpress';

interface NewsPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
}

export default function RecentNewsPage() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample news data (replace with actual WordPress data)
  const sampleNews: NewsPost[] = [
    {
      id: 1,
      title: "नयाँ पानी आपूर्ति परियोजना सुरु",
      excerpt: "सिन्धुपाल्चोकमा नयाँ पानी आपूर्ति परियोजना सुरु गरिएको छ जसले ५००० भन्दा बढी मानिसहरूलाई फाइदा पुर्याउनेछ।",
      content: "विस्तृत समाचार यहाँ...",
      date: "2024-01-15",
      author: "RWUA टोली",
      image: "/rwua-images/news/news-1.jpg",
      slug: "new-water-supply-project",
      category: "परियोजना"
    },
    {
      id: 2,
      title: "सामुदायिक तालिम कार्यक्रम सम्पन्न",
      excerpt: "२०० भन्दा बढी सामुदायिक सदस्यहरूले पानी प्रणाली मर्मत र व्यवस्थापनमा तालिम लिएका छन्।",
      content: "विस्तृत समाचार यहाँ...",
      date: "2024-01-10",
      author: "तालिम विभाग",
      image: "/rwua-images/news/news-2.jpg",
      slug: "community-training-completed",
      category: "तालिम"
    },
    {
      id: 3,
      title: "स्थानीय सरकारसँग साझेदारी सम्झौता",
      excerpt: "ग्रामीण क्षेत्रमा पानी र सरसफाइ सेवा विस्तार गर्न तीन स्थानीय सरकारसँग समझदारी पत्रमा हस्ताक्षर।",
      content: "विस्तृत समाचार यहाँ...",
      date: "2024-01-05",
      author: "व्यवस्थापन टोली",
      image: "/rwua-images/news/news-3.jpg",
      slug: "partnership-agreement",
      category: "साझेदारी"
    }
  ];

  const categories = ['सबै', 'परियोजना', 'तालिम', 'साझेदारी', 'घोषणा'];

  const filteredNews = sampleNews.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || selectedCategory === 'सबै' || 
                           post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ताजा अपडेट
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RWUA का नवीनतम समाचार, घोषणा र गतिविधिहरूको बारेमा जानकारी पाउनुहोस्
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="समाचार खोज्नुहोस्..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                >
                  पूरा पढ्नुहोस्
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">कुनै समाचार फेला परेन</h3>
            <p className="text-gray-600">कृपया अर्को खोजशब्द प्रयोग गर्नुहोस् वा फिल्टर परिवर्तन गर्नुहोस्।</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredNews.length > 0 && (
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              थप समाचार लोड गर्नुहोस्
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}