import axios from 'axios';

// WordPress REST API Configuration with Environment Variable Support
// Priority: Environment Variable -> Fallback to localhost for development
const WP_BASE_URL = process.env.NEXT_PUBLIC_WP_BASE_URL || 'http://localhost/nextjs_project/nextjs_wordpress';
const WP_API_URL = `${WP_BASE_URL}/wp-json/wp/v2`;

// Log the configuration for debugging
console.log('WordPress API Configuration:', {
  baseUrl: WP_BASE_URL,
  apiUrl: WP_API_URL,
  isProduction: WP_BASE_URL.includes('rwua.com.np')
});

// Create axios instance with enhanced configuration
const wpApi = axios.create({
  baseURL: WP_API_URL,
  timeout: 15000, // Increased timeout for external API calls
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'RWUA-NextJS-App/1.0',
  },
  // Add retry logic for network issues
  validateStatus: (status) => status < 500, // Don't throw on 4xx errors
});

// Add request interceptor for debugging
wpApi.interceptors.request.use(
  (config) => {
    console.log(`Making WordPress API request to: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    console.error('WordPress API request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
wpApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      console.error('WordPress API connection failed. Check if WordPress is accessible at:', WP_BASE_URL);
    }
    return Promise.reject(error);
  }
);

// Types for WordPress data
export interface WPPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  acf?: any;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          [key: string]: {
            source_url: string;
            width: number;
            height: number;
          };
        };
      };
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
  acf?: any;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          [key: string]: {
            source_url: string;
            width: number;
            height: number;
          };
        };
      };
    }>;
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface WPMenu {
  id: number;
  title: {
    rendered: string;
  };
  url: string;
  menu_order: number;
  parent: number;
}

// Response type for functions returning multiple items with pagination info
export interface GetPostsResponse {
  posts: WPPost[];
  totalPages: number;
  total: number;
}

// API Functions with enhanced error handling
export const wpAPI = {
  // Posts
  async getPosts(params: {
    per_page?: number;
    page?: number;
    categories?: string;
    search?: string;
    _embed?: boolean;
  } = {}): Promise<GetPostsResponse> {
    try {
      const response = await wpApi.get('/posts', {
        params: {
          per_page: 10,
          _embed: true,
          ...params,
        },
      });
      
      return {
        posts: response.data as WPPost[],
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1', 10),
        total: parseInt(response.headers['x-wp-total'] || '0', 10),
      };
    } catch (error) {
      console.error('Error fetching posts from WordPress API:', error);
      
      // Return empty data structure to prevent component crashes
      return {
        posts: [],
        totalPages: 1,
        total: 0,
      };
    }
  },

  async getPost(slug: string): Promise<WPPost | null> {
    try {
      const response = await wpApi.get('/posts', {
        params: {
          slug,
          _embed: true,
        },
      });
      
      return response.data[0] as WPPost || null;
    } catch (error) {
      console.error(`Error fetching post by slug (${slug}):`, error);
      return null;
    }
  },

  // Pages
  async getPages(params: { per_page?: number; _embed?: boolean } = {}): Promise<WPPage[]> {
    try {
      const response = await wpApi.get('/pages', {
        params: {
          per_page: 100,
          _embed: true,
          ...params,
        },
      });
      
      return response.data as WPPage[];
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  },

  async getPage(slug: string): Promise<WPPage | null> {
    try {
      const response = await wpApi.get('/pages', {
        params: {
          slug,
          _embed: true,
        },
      });
      
      return response.data[0] as WPPage || null;
    } catch (error) {
      console.error(`Error fetching page by slug (${slug}):`, error);
      return null;
    }
  },

  // Media
  async getMedia(id: number): Promise<WPMedia | null> {
    try {
      const response = await wpApi.get(`/media/${id}`);
      return response.data as WPMedia;
    } catch (error) {
      console.error(`Error fetching media (ID: ${id}):`, error);
      return null;
    }
  },

  // Categories
  async getCategories(): Promise<WPCategory[]> {
    try {
      const response = await wpApi.get('/categories', {
        params: {
          per_page: 100,
        },
      });
      
      return response.data as WPCategory[];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Menus (requires custom endpoint or menu plugin)
  async getMenus(menuLocation: string = 'primary'): Promise<WPMenu[]> {
    try {
      // This requires a custom endpoint or menu plugin
      const response = await wpApi.get(`/menus/v1/menus/${menuLocation}`);
      return response.data as WPMenu[];
    } catch (error) {
      console.error(`Error fetching menus (${menuLocation}):`, error);
      // Fallback to pages for navigation if menus fail
      try {
        const pages = await this.getPages();
        return pages.map(page => ({
          id: page.id,
          title: page.title,
          url: `/${page.slug}`,
          menu_order: 0,
          parent: 0
        }));
      } catch (fallbackError) {
        console.error('Fallback to pages also failed:', fallbackError);
        return [];
      }
    }
  },

  // Custom Fields (ACF)
  async getACFFields(postId: number): Promise<any> {
    try {
      const response = await wpApi.get(`/posts/${postId}`, {
        params: {
          acf_format: 'standard',
        },
      });
      
      return response.data.acf || {};
    } catch (error) {
      console.error(`Error fetching ACF fields (Post ID: ${postId}):`, error);
      return {};
    }
  },
};

// Helper functions with improved error handling
export const getImageUrl = (media: WPMedia | undefined, size: string = 'full'): string => {
  // Return placeholder if no media provided
  if (!media) {
    return '/rwua-images/placeholder.svg';
  }

  // Return full size image URL
  if (size === 'full') {
    return media.source_url || '/rwua-images/placeholder.svg';
  }

  // Try to get specific size, with multiple fallbacks
  const sizeUrl = media.media_details?.sizes?.[size]?.source_url;
  if (sizeUrl) {
    return sizeUrl;
  }

  // Fallback to source URL if specific size not available
  if (media.source_url) {
    return media.source_url;
  }

  // Final fallback to placeholder
  return '/rwua-images/placeholder.svg';
};

// Get image URL from embedded media in posts
export const getEmbeddedImageUrl = (post: WPPost, size: string = 'full'): string => {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  
  if (!featuredMedia) {
    return '/rwua-images/placeholder.svg';
  }

  if (size === 'full') {
    return featuredMedia.source_url || '/rwua-images/placeholder.svg';
  }

  const sizeUrl = featuredMedia.media_details?.sizes?.[size]?.source_url;
  return sizeUrl || featuredMedia.source_url || '/rwua-images/placeholder.svg';
};

export const stripHtml = (html: string): string => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// Utility function to check if WordPress API is accessible
export const checkWordPressConnection = async (): Promise<boolean> => {
  try {
    const response = await wpApi.get('/', { timeout: 5000 });
    return response.status === 200;
  } catch (error) {
    console.error('WordPress connection check failed:', error);
    return false;
  }
};

// Export the base URL for use in other parts of the application
export { WP_BASE_URL, WP_API_URL };