// Image fallback system for RWUA website
// Using Unsplash for reliable image fallbacks

export const imageFallbacks: Record<string, string> = {
  // Logo images - use data URI for simple logos
  'rwua-logo.png': '/rwua-images/logo/rwua-logo.png',
  'rwua-logo-white.png': '/rwua-images/logo/rwua-logo-white.png',
  
  // Hero images - Unsplash water/community related
  'hero-slide-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop',
  'hero-slide-2.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop',
  'hero-slide-3.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop',
  
  // About image
  'about-main.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  
  // Service images
  'service-water-supply.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
  'service-sanitation.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
  'service-community.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
  'service-consultation.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  'service-maintenance.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
  'service-technology.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
  
  // News images
  'news-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
  'news-2.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  'news-3.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
  
  // Event images
  'event-1.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
  'event-2.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  'event-3.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
  
  // Gallery images
  'project-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
  'project-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
  'training-1.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
  'training-2.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  'technical-1.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop',
  'technical-2.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
  'community-1.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
  'community-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
  'event-1.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
  
  // Success story images
  'story-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
  'story-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
  'story-3.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
  
  // Partner logos - using Unsplash for generic business images
  'world-bank.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
  'unicef.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
  'save-children.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
  'gov-nepal.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
  'adb.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
  'who.png': 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
};

// Default placeholder - a simple gray image from Unsplash
const DEFAULT_PLACEHOLDER = 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop';

// Function to get image URL with fallback
export const getImageWithFallback = (imagePath: string): string => {
  // Extract filename from path
  const filename = imagePath.split('/').pop() || '';
  
  // Return fallback URL if available
  if (imageFallbacks[filename]) {
    return imageFallbacks[filename];
  }
  
  // Default fallback
  return DEFAULT_PLACEHOLDER;
};

// Check if image exists locally
export const checkLocalImage = async (path: string): Promise<boolean> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
