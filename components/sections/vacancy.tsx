'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  GraduationCap,
  Download,
  ExternalLink,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobVacancy {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  level: 'entry' | 'mid' | 'senior' | 'executive';
  deadline: string;
  postedDate: string;
  positions: number;
  requirements: string[];
  description: string;
  salary: string;
  benefits: string[];
  applicationLink: string;
}

const Vacancy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const vacancies: JobVacancy[] = [
    {
      id: 1,
      title: "Senior Water Engineer",
      department: "Technical Department",
      location: "Kathmandu, Nepal",
      type: "full-time",
      level: "senior",
      deadline: "2024-02-15",
      postedDate: "2024-01-15",
      positions: 2,
      requirements: [
        "Bachelor's degree in Civil/Environmental Engineering",
        "5+ years experience in water supply projects",
        "Knowledge of rural water systems",
        "Proficiency in AutoCAD and GIS software"
      ],
      description: "Lead technical design and implementation of rural water supply projects across Nepal.",
      salary: "NPR 80,000 - 120,000",
      benefits: ["Health Insurance", "Provident Fund", "Field Allowance", "Professional Development"],
      applicationLink: "#apply-engineer"
    },
    {
      id: 2,
      title: "Community Mobilizer",
      department: "Community Development",
      location: "Sindhupalchok, Nepal",
      type: "full-time",
      level: "mid",
      deadline: "2024-02-20",
      postedDate: "2024-01-20",
      positions: 3,
      requirements: [
        "Bachelor's degree in Social Work/Development Studies",
        "3+ years experience in community development",
        "Excellent communication skills in Nepali",
        "Experience working with rural communities"
      ],
      description: "Facilitate community engagement and capacity building for water and sanitation projects.",
      salary: "NPR 50,000 - 70,000",
      benefits: ["Health Insurance", "Travel Allowance", "Training Opportunities"],
      applicationLink: "#apply-mobilizer"
    },
    {
      id: 3,
      title: "Project Coordinator",
      department: "Project Management",
      location: "Dolakha, Nepal",
      type: "contract",
      level: "mid",
      deadline: "2024-02-25",
      postedDate: "2024-01-25",
      positions: 1,
      requirements: [
        "Master's degree in Project Management/Engineering",
        "4+ years project management experience",
        "PMP certification preferred",
        "Experience with donor-funded projects"
      ],
      description: "Coordinate multi-stakeholder water and sanitation projects ensuring timely delivery.",
      salary: "NPR 90,000 - 110,000",
      benefits: ["Performance Bonus", "Health Insurance", "Professional Certification Support"],
      applicationLink: "#apply-coordinator"
    },
    {
      id: 4,
      title: "Finance Officer",
      department: "Finance & Administration",
      location: "Kathmandu, Nepal",
      type: "full-time",
      level: "mid",
      deadline: "2024-03-01",
      postedDate: "2024-02-01",
      positions: 1,
      requirements: [
        "Bachelor's degree in Accounting/Finance",
        "3+ years experience in NGO/INGO finance",
        "Knowledge of donor compliance requirements",
        "Proficiency in accounting software"
      ],
      description: "Manage financial operations and ensure compliance with donor and regulatory requirements.",
      salary: "NPR 60,000 - 80,000",
      benefits: ["Health Insurance", "Provident Fund", "Annual Bonus"],
      applicationLink: "#apply-finance"
    },
    {
      id: 5,
      title: "Research Intern",
      department: "Research & Development",
      location: "Kathmandu, Nepal",
      type: "internship",
      level: "entry",
      deadline: "2024-02-28",
      postedDate: "2024-02-05",
      positions: 2,
      requirements: [
        "Currently pursuing Master's in relevant field",
        "Strong research and analytical skills",
        "Proficiency in data analysis tools",
        "Interest in water and sanitation sector"
      ],
      description: "Support research activities on water access and sanitation in rural Nepal.",
      salary: "NPR 25,000 - 30,000",
      benefits: ["Learning Opportunities", "Mentorship", "Certificate"],
      applicationLink: "#apply-intern"
    }
  ];

  const jobTypes = [
    { key: 'all', label: 'All Types' },
    { key: 'full-time', label: 'Full Time' },
    { key: 'part-time', label: 'Part Time' },
    { key: 'contract', label: 'Contract' },
    { key: 'internship', label: 'Internship' }
  ];

  const jobLevels = [
    { key: 'all', label: 'All Levels' },
    { key: 'entry', label: 'Entry Level' },
    { key: 'mid', label: 'Mid Level' },
    { key: 'senior', label: 'Senior Level' },
    { key: 'executive', label: 'Executive' }
  ];

  const filteredVacancies = vacancies.filter(vacancy => {
    const typeMatch = selectedType === 'all' || vacancy.type === selectedType;
    const levelMatch = selectedLevel === 'all' || vacancy.level === selectedLevel;
    return typeMatch && levelMatch;
  });

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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-100 text-green-600 border-green-200';
      case 'part-time': return 'bg-blue-100 text-blue-600 border-blue-200';
      case 'contract': return 'bg-orange-100 text-orange-600 border-orange-200';
      case 'internship': return 'bg-purple-100 text-purple-600 border-purple-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'entry': return 'bg-blue-500';
      case 'mid': return 'bg-yellow-500';
      case 'senior': return 'bg-red-500';
      case 'executive': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const isDeadlineNear = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
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
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4"
          >
            Join Our Team
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Current
            <span className="text-orange-600"> Vacancies</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Join RWUA and be part of our mission to transform rural water access in Nepal. 
            Explore exciting career opportunities and make a meaningful impact.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">Filter Jobs</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Job Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                <div className="flex flex-wrap gap-2">
                  {jobTypes.map((type) => (
                    <button
                      key={type.key}
                      onClick={() => setSelectedType(type.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedType === type.key
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Job Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <div className="flex flex-wrap gap-2">
                  {jobLevels.map((level) => (
                    <button
                      key={level.key}
                      onClick={() => setSelectedLevel(level.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedLevel === level.key
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {filteredVacancies.map((vacancy) => (
            <motion.div
              key={vacancy.id}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {vacancy.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{vacancy.department}</p>
                    </div>
                    
                    {isDeadlineNear(vacancy.deadline) && (
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Deadline Soon
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{vacancy.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{vacancy.positions} position{vacancy.positions > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Deadline: {new Date(vacancy.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(vacancy.type)}`}>
                      {vacancy.type.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getLevelColor(vacancy.level)}`}>
                      {vacancy.level.toUpperCase()} LEVEL
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                      {vacancy.salary}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{vacancy.description}</p>

                  {/* Requirements Preview */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {vacancy.requirements.slice(0, 2).map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                      {vacancy.requirements.length > 2 && (
                        <li className="text-blue-600 text-sm">
                          +{vacancy.requirements.length - 2} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:w-48">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Apply Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-semibold py-3 rounded-full transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Job Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredVacancies.length === 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center py-12"
          >
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vacancies found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later for new opportunities.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-orange-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Don't See the Right Position?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              improving rural water access. Send us your resume and we'll keep you in mind 
              for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold">
                Send Resume
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-semibold"
              >
                Job Alerts
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vacancy;