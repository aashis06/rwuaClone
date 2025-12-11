'use client';

import React from 'react';
import Image from 'next/image';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplets, Users, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <Droplets className="w-8 h-8" />,
      number: "500+",
      label: "Water Projects",
      description: "Successfully completed across Nepal"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50,000+",
      label: "People Served",
      description: "Access to clean water provided"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "25+",
      label: "Years Experience",
      description: "In rural water development"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "100+",
      label: "Communities",
      description: "Transformed through our work"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                About RWUA
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transforming Rural Communities Through 
                <span className="text-blue-600"> Water Access</span>
              </h2>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              The Rural Water Users Association (RWUA) has been at the forefront of providing 
              sustainable water solutions to rural communities across Nepal for over two decades. 
              Our mission is to ensure that every rural household has access to clean, safe, and 
              reliable water supply.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              We work closely with local communities, government agencies, and international 
              partners to develop comprehensive water supply and sanitation systems that are 
              environmentally sustainable and economically viable.
            </motion.p>

            {/* Key Features */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Core Values</h3>
              <div className="space-y-3">
                {[
                  "Community-centered approach to water development",
                  "Sustainable and environmentally friendly solutions",
                  "Capacity building and local empowerment",
                  "Transparent and accountable project management"
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Our Projects
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/rwua-images/about/about-main.jpg"
                  alt="RWUA team working on water project"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Clean Water Access</h4>
                      <p className="text-sm text-gray-600">Ensuring sustainable water supply for all</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-blue-600 mb-3">
                    {stat.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-900">{stat.number}</h3>
                    <p className="font-semibold text-gray-700">{stat.label}</p>
                    <p className="text-sm text-gray-500">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide sustainable, community-managed water supply and sanitation services 
              to rural communities in Nepal, ensuring equitable access to clean water and 
              improved quality of life for all.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A Nepal where every rural community has access to safe, reliable, and 
              sustainable water supply and sanitation services, contributing to improved 
              health, dignity, and economic opportunities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;