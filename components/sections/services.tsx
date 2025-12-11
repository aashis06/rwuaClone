'use client';

import React from 'react';
import Image from 'next/image';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Droplets, 
  Wrench, 
  Users, 
  BookOpen, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      id: 1,
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Supply Systems",
      description: "Comprehensive water supply solutions including source development, treatment, and distribution systems for rural communities.",
      features: [
        "Gravity-fed water systems",
        "Solar-powered pumping systems", 
        "Water quality testing and treatment",
        "Distribution network design"
      ],
      image: "/rwua-images/services/service-water-supply.jpg",
      link: "/services/water-supply"
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8" />,
      title: "Sanitation Solutions",
      description: "Complete sanitation infrastructure development including waste management and hygiene promotion programs.",
      features: [
        "Toilet construction and maintenance",
        "Waste water treatment systems",
        "Solid waste management",
        "Hygiene education programs"
      ],
      image: "/rwua-images/services/service-sanitation.jpg",
      link: "/services/sanitation"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Community Development",
      description: "Capacity building and community mobilization programs to ensure sustainable water and sanitation services.",
      features: [
        "Community organization formation",
        "Leadership training programs",
        "Financial management training",
        "Operation and maintenance training"
      ],
      image: "/rwua-images/services/service-community.jpg",
      link: "/services/community-development"
    },
    {
      id: 4,
      icon: <BookOpen className="w-8 h-8" />,
      title: "Technical Consultation",
      description: "Expert technical consultation services for water and sanitation projects, including feasibility studies and design.",
      features: [
        "Feasibility studies",
        "Technical design and planning",
        "Project management support",
        "Quality assurance and monitoring"
      ],
      image: "/rwua-images/services/service-consultation.jpg",
      link: "/services/consultation"
    },
    {
      id: 5,
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Repair",
      description: "Ongoing maintenance and repair services to ensure long-term sustainability of water and sanitation infrastructure.",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Spare parts supply",
        "Technical support hotline"
      ],
      image: "/rwua-images/services/service-maintenance.jpg",
      link: "/services/maintenance"
    },
    {
      id: 6,
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Technology",
      description: "Implementation of innovative technologies and smart solutions for efficient water and sanitation management.",
      features: [
        "Smart water monitoring systems",
        "Mobile payment solutions",
        "Remote monitoring technology",
        "Data analytics and reporting"
      ],
      image: "/rwua-images/services/service-technology.jpg",
      link: "/services/technology"
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
    <section ref={ref} className="py-20 bg-white">
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
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Water & Sanitation
            <span className="text-blue-600"> Solutions</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We provide end-to-end water and sanitation services, from initial planning and 
            construction to ongoing maintenance and community development programs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful project implementation 
              and long-term sustainability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Community needs assessment and feasibility study"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Technical design and project planning with community input"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Construction and installation with quality monitoring"
              },
              {
                step: "04",
                title: "Handover",
                description: "Training and capacity building for sustainable operation"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Water Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your community's water and sanitation needs. 
            Our team of experts is ready to help you develop sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold"
            >
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;