'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, MapPin, Users, Droplets, Calendar } from 'lucide-react';
import ImageWithFallback from '@/components/ui/image-with-fallback';

interface SuccessStory {
  id: number;
  title: string;
  location: string;
  beneficiaries: number;
  completedYear: string;
  image: string;
  description: string;
  quote: string;
  quotePerson: string;
  impact: {
    waterAccess: string;
    healthImprovement: string;
    timesSaved: string;
  };
}

const SuccessStories: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const successStories: SuccessStory[] = [
    {
      id: 1,
      title: "Transforming Lives in Sindhupalchok",
      location: "Sindhupalchok District",
      beneficiaries: 2500,
      completedYear: "2023",
      image: "/rwua-images/success/story-1.jpg",
      description: "A comprehensive water supply project that brought clean drinking water to 15 remote villages, dramatically improving health outcomes and quality of life for thousands of residents.",
      quote: "Before this project, we had to walk 2 hours daily to fetch water. Now, clean water flows right to our homes. Our children are healthier and can focus on their studies.",
      quotePerson: "Kamala Devi, Village Representative",
      impact: {
        waterAccess: "100% households now have access to clean water",
        healthImprovement: "75% reduction in waterborne diseases",
        timesSaved: "14 hours per week saved per household"
      }
    },
    {
      id: 2,
      title: "Sanitation Revolution in Dolakha",
      location: "Dolakha District",
      beneficiaries: 1800,
      completedYear: "2022",
      image: "/rwua-images/success/story-2.jpg",
      description: "Implementation of improved sanitation facilities and hygiene education programs that transformed community health practices and reduced disease outbreaks.",
      quote: "The sanitation program didn't just build toilets - it changed our entire community's understanding of health and hygiene. We are now a model village for others.",
      quotePerson: "Ram Bahadur Tamang, Community Leader",
      impact: {
        waterAccess: "95% households with improved sanitation",
        healthImprovement: "60% reduction in diarrheal diseases",
        timesSaved: "Improved privacy and dignity for women"
      }
    },
    {
      id: 3,
      title: "Community-Led Water Management",
      location: "Ramechhap District",
      beneficiaries: 3200,
      completedYear: "2023",
      image: "/rwua-images/success/story-3.jpg",
      description: "Empowering local communities to manage their own water systems through training, capacity building, and sustainable financing mechanisms.",
      quote: "We learned to maintain our water system ourselves. This project gave us not just water, but the knowledge and confidence to manage our own development.",
      quotePerson: "Sita Kumari Shrestha, Water Committee Chair",
      impact: {
        waterAccess: "Sustainable water supply for 20+ years",
        healthImprovement: "Community-owned maintenance system",
        timesSaved: "Local employment opportunities created"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
          >
            Impact Stories
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Success
            <span className="text-green-600"> Stories</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Real stories of transformation from communities across Nepal where our water and 
            sanitation projects have made a lasting difference in people's lives.
          </motion.p>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">{story.beneficiaries.toLocaleString()}</div>
                          <div className="text-xs text-gray-600">Beneficiaries</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">{story.completedYear}</div>
                          <div className="text-xs text-gray-600">Completed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">100%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{story.completedYear}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {story.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {story.description}
                </p>

                {/* Quote */}
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "{story.quote}"
                  </blockquote>
                  <cite className="text-blue-600 font-semibold">
                    — {story.quotePerson}
                  </cite>
                </div>

                {/* Impact Metrics */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Droplets className="w-6 h-6 text-blue-500 mb-2" />
                    <p className="text-sm text-gray-600">{story.impact.waterAccess}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Users className="w-6 h-6 text-green-500 mb-2" />
                    <p className="text-sm text-gray-600">{story.impact.healthImprovement}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <Calendar className="w-6 h-6 text-purple-500 mb-2" />
                    <p className="text-sm text-gray-600">{story.impact.timesSaved}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Be Part of the Next Success Story
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in creating more success stories across rural Nepal. Your support 
              can help bring clean water and improved sanitation to communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Support Our Work
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;