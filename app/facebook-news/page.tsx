'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Heart, MessageCircle, Share2, ExternalLink, Facebook } from 'lucide-react';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { Button } from '@/components/ui/button';

interface FacebookPost {
  id: number;
  content: string;
  image?: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
  postUrl: string;
}

export default function FacebookNewsPage() {
  const [posts] = useState<FacebookPost[]>([
    {
      id: 1,
      content: "सिन्धुपाल्चोकको दुर्गम गाउँमा नयाँ पानी आपूर्ति प्रणाली स्थापना गरिएको छ। यो परियोजनाले ५०० घरपरिवारलाई सफा पिउने पानीको पहुँच प्रदान गर्नेछ। #CleanWater #RWUA #Nepal",
      image: "/rwua-images/news/news-1.jpg",
      date: "2024-01-15",
      likes: 245,
      comments: 32,
      shares: 18,
      postUrl: "#"
    },
    {
      id: 2,
      content: "आज हाम्रो टोलीले स्थानीय समुदायका महिलाहरूलाई पानी प्रणाली सञ्चालन र मर्मतसम्भारको तालिम दिएको छ। महिला सहभागिता हाम्रो सफलताको मुख्य आधार हो। 💪 #WomenEmpowerment #CommunityDevelopment",
      image: "/rwua-images/gallery/training-1.jpg",
      date: "2024-01-12",
      likes: 189,
      comments: 24,
      shares: 15,
      postUrl: "#"
    },
    {
      id: 3,
      content: "रामेछापमा सामुदायिक शौचालय निर्माण कार्य सम्पन्न भएको छ। यसले स्थानीय बासिन्दाहरूको स्वास्थ्य र सरसफाइमा सुधार ल्याउनेछ। 🚿 #Sanitation #HealthyLiving #RWUA",
      date: "2024-01-10",
      likes: 156,
      comments: 19,
      shares: 12,
      postUrl: "#"
    },
    {
      id: 4,
      content: "विश्व पानी दिवसको अवसरमा हामीले पानीको महत्त्व र संरक्षणको बारेमा जनचेतना कार्यक्रम आयोजना गर्यौं। सबैको सहयोगमा हामी सफल भएका छौं। 🌍💧 #WorldWaterDay #WaterConservation",
      image: "/rwua-images/events/event-1.jpg",
      date: "2024-01-08",
      likes: 312,
      comments: 45,
      shares: 28,
      postUrl: "#"
    }
  ]);

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Facebook className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              फेसबूक बाट ल्याइएका समाचार
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            हाम्रो फेसबूक पेजबाट नवीनतम अपडेट र गतिविधिहरू
          </p>
        </div>

        {/* Facebook Feed */}
        <div className="max-w-2xl mx-auto space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">RWUA Nepal</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('ne-NP')}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-gray-800 leading-relaxed mb-4 whitespace-pre-line">
                  {post.content}
                </p>

                {/* Post Image */}
                {post.image && (
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <ImageWithFallback
                      src={post.image}
                      alt="Facebook post image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-4">
                    <span>{post.likes} मन पराइयो</span>
                    <span>{post.comments} टिप्पणी</span>
                    <span>{post.shares} साझेदारी</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>मन पराउनुहोस्</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>टिप्पणी</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span>साझेदारी</span>
                    </button>
                  </div>
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>फेसबूकमा हेर्नुहोस्</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
            थप पोस्ट लोड गर्नुहोस्
          </Button>
        </div>

        {/* Facebook Page Link */}
        <div className="text-center mt-8">
          <div className="bg-blue-50 rounded-2xl p-6 max-w-md mx-auto">
            <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">हाम्रो फेसबूक पेज फलो गर्नुहोस्</h3>
            <p className="text-gray-600 mb-4">नवीनतम अपडेट र समाचारहरूको लागि</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              फेसबूक पेज भ्रमण गर्नुहोस्
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}