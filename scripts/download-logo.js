const https = require('https');
const fs = require('fs');
const path = require('path');

// Try to download RWUA logo from the actual website
const logoUrls = {
  'logo/rwua-logo.png': 'https://rwua.com.np/wp-content/uploads/2023/01/logo.png',
  'logo/rwua-logo-white.png': 'https://rwua.com.np/wp-content/uploads/2023/01/logo-white.png',
  // Fallback logos if the above don't work
  'logo/rwua-logo-fallback.png': 'https://via.placeholder.com/200x200/2563eb/ffffff?text=RWUA',
  'logo/rwua-logo-white-fallback.png': 'https://via.placeholder.com/200x200/ffffff/2563eb?text=RWUA'
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filepath}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
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

async function downloadLogos() {
  const baseDir = path.join(__dirname, '..', 'public', 'rwua-images');
  
  console.log('🚀 Downloading RWUA logos...');
  
  for (const [relativePath, url] of Object.entries(logoUrls)) {
    const fullPath = path.join(baseDir, relativePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    try {
      await downloadImage(url, fullPath);
    } catch (error) {
      console.error(`❌ Failed to download ${relativePath}:`, error.message);
    }
  }
  
  console.log('✨ Logo download complete!');
}

downloadLogos().catch(console.error);