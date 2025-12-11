'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Award, 
  BookOpen, 
  Network,
  CheckCircle,
  Star,
  Download,
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MembershipTier {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Membership: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const membershipTiers: MembershipTier[] = [
    {
      id: 1,
      name: "Individual Member",
      price: "NPR 2,000",
      duration: "Annual",
      description: "Perfect for water professionals and individuals interested in rural water development.",
      features: [
        "Access to technical resources and publications",
        "Participation in training programs",
        "Networking opportunities",
        "Monthly newsletter subscription",
        "Access to member directory",
        "Discounted event registration"
      ],
      color: "blue"
    },
    {
      id: 2,
      name: "Organizational Member",
      price: "NPR 10,000",
      duration: "Annual",
      description: "Ideal for NGOs, consulting firms, and organizations working in water sector.",
      features: [
        "All individual member benefits",
        "Priority project collaboration opportunities",
        "Technical consultation services",
        "Bulk training program discounts",
        "Logo placement on RWUA website",
        "Quarterly progress reports",
        "Access to funding opportunities"
      ],
      popular: true,
      color: "green"
    },
    {
      id: 3,
      name: "Corporate Member",
      price: "NPR 25,000",
      duration: "Annual",
      description: "For corporations and large organizations committed to rural water development.",
      features: [
        "All organizational member benefits",
        "Partnership opportunities in major projects",
        "Corporate social responsibility alignment",
        "Executive networking events",
        "Custom training programs",
        "Brand visibility in RWUA publications",
        "Strategic advisory board participation",
        "Priority vendor consideration"
      ],
      color: "purple"
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Professional Network",
      description: "Connect with water professionals, engineers, and development experts across Nepal and internationally."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Knowledge Sharing",
      description: "Access to technical resources, best practices, research publications, and case studies."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Capacity Building",
      description: "Participate in training programs, workshops, and certification courses to enhance your skills."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Collaboration",
      description: "Opportunities to collaborate on water and sanitation projects with experienced professionals."
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Partner Organizations" },
    { number: "25+", label: "Years of Service" },
    { number: "100+", label: "Successful Projects" }
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

  const getColorClasses = (color: string, popular?: boolean) => {
    const colors = {
      blue: popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white',
      green: popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white',
      purple: popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
            Join Our Community
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Become a Member of
            <span className="text-blue-600"> RWUA</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join a community of dedicated professionals working to improve water access and 
            sanitation in rural Nepal. Together, we can make a lasting impact.
          </motion.p>
        </motion.div>

        {/* Membership Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Membership Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Membership Plan
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the membership tier that best fits your needs and join our mission 
              to transform rural water access in Nepal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={itemVariants}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${getColorClasses(tier.color, tier.popular)}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-2">/ {tier.duration}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${getButtonClasses(tier.color)}`}
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join Now
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Join a Growing Community
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Be part of Nepal's largest network of rural water and sanitation professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Joining RWUA is simple and straightforward. Follow these steps to become a member.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Plan",
                description: "Select the membership tier that suits your needs and goals."
              },
              {
                step: "02",
                title: "Fill Application",
                description: "Complete the online application form with your details."
              },
              {
                step: "03",
                title: "Submit Documents",
                description: "Provide required documents and make the membership payment."
              },
              {
                step: "04",
                title: "Get Approved",
                description: "Receive confirmation and start enjoying member benefits."
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
          className="text-center bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join RWUA today and be part of the solution to Nepal's rural water challenges. 
            Together, we can ensure clean water access for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Apply for Membership
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;