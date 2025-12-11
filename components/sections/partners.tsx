'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageWithFallback from '@/components/ui/image-with-fallback';

interface Partner {
  id: number;
  name: string;
  logo: string;
  website: string;
  description: string;
}

const Partners: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners: Partner[] = [
    {
      id: 1,
      name: "World Bank",
      logo: "/rwua-images/partners/world-bank.svg",
      website: "https://worldbank.org",
      description: "International financial institution"
    },
    {
      id: 2,
      name: "UNICEF",
      logo: "/rwua-images/partners/unicef.svg",
      website: "https://unicef.org",
      description: "United Nations Children's Fund"
    },
    {
      id: 3,
      name: "Save the Children",
      logo: "/rwua-images/partners/save-children.svg",
      website: "https://savethechildren.org",
      description: "International NGO"
    },
    {
      id: 4,
      name: "Government of Nepal",
      logo: "/rwua-images/partners/gov-nepal.svg",
      website: "https://nepal.gov.np",
      description: "Ministry of Water Supply"
    },
    {
      id: 5,
      name: "Asian Development Bank",
      logo: "/rwua-images/partners/adb.svg",
      website: "https://adb.org",
      description: "Regional development bank"
    },
    {
      id: 6,
      name: "WHO",
      logo: "/rwua-images/partners/who.svg",
      website: "https://who.int",
      description: "World Health Organization"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
          >
            Our Partners
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Working together with leading organizations to improve water access across Nepal
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="group"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="h-16 flex items-center justify-center mb-2">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-center text-gray-600 group-hover:text-gray-900 transition-colors">
                  {partner.name}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;