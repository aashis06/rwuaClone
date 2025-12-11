'use client';

import React, { useState, useEffect } from 'react';
import ImageWithFallback from '@/components/ui/image-with-fallback';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Bell,
  MapPin,
  User,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { wpAPI, WPPost, getEmbeddedImageUrl, stripHtml, formatDate } from '@/lib/wordpress';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  author: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  slug: string;
}

interface Notice {
  id: number;
  title: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
  content: string;
  slug: string;
}

const NewsEvents: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'notices'>('news');
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch WordPress posts with improved error handling
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const { posts } = await wpAPI.getPosts({ per_page: 6, _embed: true });
        setPosts(posts);
        
        if (posts.length === 0) {
          console.warn('No posts found from WordPress API - using fallback data');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load news articles');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Convert WordPress posts to NewsItem format
  const convertPostsToNewsItems = (wpPosts: WPPost[]): NewsItem[] => {
    return wpPosts.map(post => ({
      id: post.id,
      title: stripHtml(post.title.rendered),
      excerpt: stripHtml(post.excerpt.rendered),
      date: post.date,
      category: 'News', // You can map categories if needed
      image: getEmbeddedImageUrl(post, 'medium'),
      slug: post.slug,
      author: post._embedded?.author?.[0]?.name || 'RWUA Team'
    }));
  };

  // Fallback sample data
  const fallbackNewsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Water Supply Project Launched in Sindhupalchok",
      excerpt: "RWUA announces the launch of a major water supply project that will benefit over 5,000 residents in remote villages.",
      date: "2024-01-15",
      category: "Project Launch",
      image: "/rwua-images/news/news-1.jpg",
      slug: "new-water-supply-project-sindhupalchok",
      author: "RWUA Team"
    },
    {
      id: 2,
      title: "Community Training Program Successfully Completed",
      excerpt: "Over 200 community members received training on water system maintenance and management practices.",
      date: "2024-01-10",
      category: "Training",
      image: "/rwua-images/news/news-2.jpg",
      slug: "community-training-program-completed",
      author: "Training Department"
    },
    {
      id: 3,
      title: "Partnership Agreement Signed with Local Government",
      excerpt: "RWUA signs MOU with three local governments to expand water and sanitation services in rural areas.",
      date: "2024-01-05",
      category: "Partnership",
      image: "/rwua-images/news/news-3.jpg",
      slug: "partnership-agreement-local-government",
      author: "Management Team"
    }
  ];

  // Use WordPress posts if available, otherwise use fallback
  const newsItems = posts.length > 0 ? convertPostsToNewsItems(posts) : fallbackNewsItems;

  const events: Event[] = [
    {
      id: 1,
      title: "Annual General Meeting 2024",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "RWUA Headquarters, Kathmandu",
      description: "Join us for our annual general meeting to discuss achievements and future plans.",
      image: "/rwua-images/events/event-1.jpg",
      slug: "annual-general-meeting-2024"
    },
    {
      id: 2,
      title: "Water Quality Testing Workshop",
      date: "2024-02-20",
      time: "9:00 AM",
      location: "Community Center, Pokhara",
      description: "Hands-on workshop on water quality testing methods and equipment usage.",
      image: "/rwua-images/events/event-2.jpg",
      slug: "water-quality-testing-workshop"
    },
    {
      id: 3,
      title: "Rural Water Conference 2024",
      date: "2024-03-01",
      time: "8:00 AM",
      location: "Hotel Himalaya, Kathmandu",
      description: "National conference on rural water supply and sanitation challenges and solutions.",
      image: "/rwua-images/events/event-3.jpg",
      slug: "rural-water-conference-2024"
    }
  ];

  const notices: Notice[] = [
    {
      id: 1,
      title: "Tender Notice: Water Supply System Construction",
      date: "2024-01-20",
      priority: "high",
      content: "Sealed quotations are invited for the construction of water supply system in Ramechhap district.",
      slug: "tender-notice-water-supply-construction"
    },
    {
      id: 2,
      title: "Office Closure Notice - Public Holiday",
      date: "2024-01-18",
      priority: "medium",
      content: "RWUA offices will remain closed on January 26th due to Republic Day. Emergency services available.",
      slug: "office-closure-notice-public-holiday"
    },
    {
      id: 3,
      title: "New Membership Registration Open",
      date: "2024-01-15",
      priority: "low",
      content: "Registration for new RWUA membership is now open. Apply online or visit our office.",
      slug: "new-membership-registration-open"
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-600 border-green-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
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
          className="text-center mb-12"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          >
            Stay Updated
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Latest News, Events &
            <span className="text-blue-600"> Notices</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed about our latest projects, upcoming events, and important announcements 
            from the Rural Water Users Association.
          </motion.p>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-yellow-100 border border-yellow-200 rounded-lg flex items-center space-x-3"
          >
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <p className="text-yellow-700">
              {error}. Showing sample content instead.
            </p>
          </motion.div>
        )}

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            {[
              { key: 'news', label: 'Latest News', icon: <Bell className="w-4 h-4" /> },
              { key: 'events', label: 'Upcoming Events', icon: <Calendar className="w-4 h-4" /> },
              { key: 'notices', label: 'Important Notices', icon: <Bell className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && activeTab === 'news' && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-gray-600">Loading news articles...</span>
          </div>
        )}

        {/* Content based on active tab */}
        {!loading && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* News Tab */}
            {activeTab === 'news' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                  <motion.article
                    key={item.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <Link 
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-3 text-center shadow-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs text-gray-600 uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <Link 
                        href={`/events/${event.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Notices Tab */}
            {activeTab === 'notices' && (
              <div className="space-y-6">
                {notices.map((notice) => (
                  <motion.div
                    key={notice.id}
                    variants={itemVariants}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-600"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(notice.priority)}`}>
                            {notice.priority.toUpperCase()} PRIORITY
                          </span>
                          <div className="flex items-center space-x-1 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(notice.date)}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {notice.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {notice.content}
                        </p>
                        
                        <Link 
                          href={`/notices/${notice.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                        >
                          Read Full Notice
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Connected with RWUA
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on our projects, 
              events, and important announcements directly in your inbox.
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                if (email) {
                  alert('Thank you for subscribing! We will send updates to ' + email);
                  (e.target as HTMLFormElement).reset();
                }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                type="submit"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEvents;