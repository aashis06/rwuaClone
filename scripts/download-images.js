const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Image URLs from rwua.com.np and fallback sources
const imageUrls = {
  // Logo images (you'll need to get these from rwua.com.np)
  'logo/rwua-logo.png': 'https://via.placeholder.com/200x200/2563eb/ffffff?text=RWUA+Logo',
  'logo/rwua-logo-white.png': 'https://via.placeholder.com/200x200/ffffff/2563eb?text=RWUA+Logo',
  
  // Hero images - water/infrastructure themed
  'hero/hero-slide-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center',
  'hero/hero-slide-2.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center',
  'hero/hero-slide-3.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop&crop=center',
  
  // About image
  'about/about-main.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
  
  // Service images
  'services/service-water-supply.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center',
  'services/service-sanitation.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center',
  'services/service-community.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
  'services/service-consultation.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center',
  'services/service-maintenance.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
  'services/service-technology.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
  
  // News images
  'news/news-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center',
  'news/news-2.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
  'news/news-3.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center',
  
  // Event images
  'events/event-1.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&crop=center',
  'events/event-2.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center',
  'events/event-3.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center',
  
  // Gallery images
  'gallery/project-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center',
  'gallery/project-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center',
  'gallery/training-1.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
  'gallery/training-2.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center',
  'gallery/technical-1.jpg': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center',
  'gallery/technical-2.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center',
  'gallery/community-1.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center',
  'gallery/community-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center',
  'gallery/event-1.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center',
  
  // Success story images
  'success/story-1.jpg': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center',
  'success/story-2.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=center',
  'success/story-3.jpg': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center',
};

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {}); // Delete the file on error
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'rwua-images');
  
  console.log('🚀 Starting image download...');
  console.log('📁 Base directory:', baseDir);
  
  for (const [relativePath, url] of Object.entries(imageUrls)) {
    const fullPath = path.join(baseDir, relativePath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      await downloadImage(url, fullPath);
    } catch (error) {
      console.error(`❌ Failed to download ${relativePath}:`, error.message);
    }
  }
  
  console.log('✨ Image download complete!');
}

// Run the download
if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadAllImages, imageUrls };