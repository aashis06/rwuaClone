const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Complete image URLs with better fallbacks
const imageUrls = {
  // Logo images - try multiple sources
  'logo/rwua-logo.png': [
    'https://rwua.com.np/wp-content/uploads/2023/01/logo.png',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop&crop=center'
  ],
  'logo/rwua-logo-white.png': [
    'https://rwua.com.np/wp-content/uploads/2023/01/logo-white.png',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=200&h=200&fit=crop&crop=center'
  ],
  
  // Hero images
  'hero/hero-slide-1.jpg': ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center'],
  'hero/hero-slide-2.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop&crop=center'],
  'hero/hero-slide-3.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&fit=crop&crop=center'],
  
  // About image
  'about/about-main.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center'],
  
  // Service images
  'services/service-water-supply.jpg': ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center'],
  'services/service-sanitation.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center'],
  'services/service-community.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center'],
  'services/service-consultation.jpg': ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center'],
  'services/service-maintenance.jpg': ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center'],
  'services/service-technology.jpg': ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center'],
  
  // News images
  'news/news-1.jpg': ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center'],
  'news/news-2.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center'],
  'news/news-3.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&crop=center'],
  
  // Event images
  'events/event-1.jpg': ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&crop=center'],
  'events/event-2.jpg': ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center'],
  'events/event-3.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center'],
  
  // Gallery images
  'gallery/project-1.jpg': ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center'],
  'gallery/project-2.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center'],
  'gallery/training-1.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center'],
  'gallery/training-2.jpg': ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center'],
  'gallery/technical-1.jpg': ['https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center'],
  'gallery/technical-2.jpg': ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center'],
  'gallery/community-1.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center'],
  'gallery/community-2.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=center'],
  'gallery/event-1.jpg': ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop&crop=center'],
  
  // Success story images
  'success/story-1.jpg': ['https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center'],
  'success/story-2.jpg': ['https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&crop=center'],
  'success/story-3.jpg': ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center'],
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadWithFallback(urls, filepath) {
  for (let i = 0; i < urls.length; i++) {
    try {
      await downloadImage(urls[i], filepath);
      console.log(`✅ Downloaded: ${filepath}`);
      return true;
    } catch (error) {
      if (i === urls.length - 1) {
        console.error(`❌ All attempts failed for ${filepath}`);
        return false;
      }
      // Try next URL
      continue;
    }
  }
  return false;
}

async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'rwua-images');
  
  console.log('🚀 Starting comprehensive image download...');
  console.log('📁 Base directory:', baseDir);
  
  let successCount = 0;
  let totalCount = 0;
  
  for (const [relativePath, urls] of Object.entries(imageUrls)) {
    totalCount++;
    const fullPath = path.join(baseDir, relativePath);
    const dir = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Skip if file already exists
    if (fs.existsSync(fullPath)) {
      console.log(`⏭️  Skipped (exists): ${relativePath}`);
      successCount++;
      continue;
    }
    
    const success = await downloadWithFallback(urls, fullPath);
    if (success) successCount++;
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✨ Download complete!`);
  console.log(`📊 Success: ${successCount}/${totalCount} images`);
  
  if (successCount < totalCount) {
    console.log(`\n⚠️  Some images failed to download. The website will use fallback images for missing files.`);
  }
}

if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadAllImages };