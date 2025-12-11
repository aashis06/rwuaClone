'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Archive, Search, Filter, Download, Eye } from 'lucide-react';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';

interface ArchiveItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  type: 'news' | 'report' | 'document' | 'image';
  downloadUrl?: string;
  image?: string;
}

export default function OldNewInfoPage() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('सबै');
  const [searchTerm, setSearchTerm] = useState('');

  const archiveItems: ArchiveItem[] = [
    {
      id: 1,
      title: "वार्षिक प्रतिवेदन २०२३",
      description: "RWUA को वार्षिक गतिविधि र उपलब्धिहरूको विस्तृत प्रतिवेदन",
      date: "2023-12-31",
      category: "प्रतिवेदन",
      type: "report",
      downloadUrl: "/downloads/annual-report-2023.pdf",
      image: "/rwua-images/reports/annual-2023.jpg"
    },
    {
      id: 2,
      title: "दोलखामा पानी परियोजना उद्घाटन",
      description: "दोलखा जिल्लाको दुर्गम गाउँमा नयाँ पानी आपूर्ति परियोजनाको उद्घाटन समारोह",
      date: "2023-11-15",
      category: "समाचार",
      type: "news",
      image: "/rwua-images/news/dolakha-project.jpg"
    },
    {
      id: 3,
      title: "सामुदायिक स्वास्थ्य तालिम कार्यक्रम",
      description: "ग्रामीण समुदायमा स्वास्थ्य र सरसफाइ सम्बन्धी तालिम कार्यक्रम सम्पन्न",
      date: "2023-10-20",
      category: "तालिम",
      type: "news",
      image: "/rwua-images/training/health-training.jpg"
    },
    {
      id: 4,
      title: "पानी गुणस्तर परीक्षण निर्देशिका",
      description: "ग्रामीण पानी आपूर्ति प्रणालीको गुणस्तर परीक्षणका लागि तयार गरिएको निर्देशिका",
      date: "2023-09-10",
      category: "निर्देशिका",
      type: "document",
      downloadUrl: "/downloads/water-quality-guidelines.pdf"
    },
    {
      id: 5,
      title: "रामेछापमा सरसफाइ अभियान",
      description: "रामेछाप जिल्लामा सामुदायिक सरसफाइ अभियान सफलतापूर्वक सम्पन्न",
      date: "2023-08-25",
      category: "अभियान",
      type: "news",
      image: "/rwua-images/campaigns/sanitation-ramechhap.jpg"
    },
    {
      id: 6,
      title: "वित्तीय प्रतिवेदन २०२२-२०२३",
      description: "आर्थिक वर्ष २०२२-२०२३ को वित्तीय गतिविधिको विस्तृत प्रतिवेदन",
      date: "2023-07-16",
      category: "प्रतिवेदन",
      type: "report",
      downloadUrl: "/downloads/financial-report-2022-23.pdf"
    }
  ];

  const years = ['2024', '2023', '2022', '2021', '2020'];
  const categories = ['सबै', 'समाचार', 'प्रतिवेदन', 'तालिम', 'निर्देशिका', 'अभियान'];

  const filteredItems = archiveItems.filter(item => {
    const matchesYear = selectedYear === 'सबै' || item.date.startsWith(selectedYear);
    const matchesCategory = selectedCategory === 'सबै' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'report': return '📊';
      case 'document': return '📄';
      case 'news': return '📰';
      case 'image': return '🖼️';
      default: return '📁';
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Archive className="w-12 h-12 text-purple-600 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              पुराना र नयाँ जानकारी
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RWUA का सम्पूर्ण ऐतिहासिक अभिलेख, प्रतिवेदन र जानकारीहरू
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="खोज्नुहोस्..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Year Filter */}
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

        {/* Archive Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Item Image or Icon */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                {item.image ? (
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-6xl">
                    {getTypeIcon(item.type)}
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(item.date).toLocaleDateString('ne-NP')}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>

                <div className="flex gap-2">
                  {item.downloadUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      डाउनलोड
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      हेर्नुहोस्
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Archive className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">कुनै जानकारी फेला परेन</h3>
            <p className="text-gray-600">कृपया अर्को खोजशब्द प्रयोग गर्नुहोस् वा फिल्टर परिवर्तन गर्नुहोस्।</p>
          </div>
        )}

        {/* Archive Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">अभिलेख तथ्याङ्क</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">कुल समाचार</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">वार्षिक प्रतिवेदन</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">80+</div>
              <div className="text-gray-600">तालिम कार्यक्रम</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">वर्षको अनुभव</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}