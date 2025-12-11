# 🖼️ RWUA Website Image Setup Guide

## 🚀 Quick Fix - Download Placeholder Images

Run this command to download placeholder images immediately:

```bash
cd nextjs_project1/my-app
node scripts/download-images.js
```

This will download high-quality placeholder images that match the theme and fix all 404 errors.

## 📁 Required Image Structure

```
public/rwua-images/
├── logo/
│   ├── rwua-logo.png          (200x200px)
│   └── rwua-logo-white.png    (200x200px)
├── hero/
│   ├── hero-slide-1.jpg       (1920x1080px)
│   ├── hero-slide-2.jpg       (1920x1080px)
│   └── hero-slide-3.jpg       (1920x1080px)
├── about/
│   └── about-main.jpg         (800x600px)
├── services/
│   ├── service-water-supply.jpg     (600x400px)
│   ├── service-sanitation.jpg       (600x400px)
│   ├── service-community.jpg        (600x400px)
│   ├── service-consultation.jpg     (600x400px)
│   ├── service-maintenance.jpg      (600x400px)
│   └── service-technology.jpg       (600x400px)
├── news/
│   ├── news-1.jpg             (400x300px)
│   ├── news-2.jpg             (400x300px)
│   └── news-3.jpg             (400x300px)
├── events/
│   ├── event-1.jpg            (400x300px)
│   ├── event-2.jpg            (400x300px)
│   └── event-3.jpg            (400x300px)
└── placeholder.jpg            (400x300px)
```

## 🎯 Getting Real Images from rwua.com.np

### Method 1: Browser Developer Tools

1. **Visit rwua.com.np**
2. **Open Developer Tools** (F12)
3. **Go to Network tab**
4. **Filter by Images**
5. **Refresh the page**
6. **Right-click on images → Save As**

### Method 2: View Page Source

1. **Visit rwua.com.np**
2. **Right-click → View Page Source**
3. **Search for image URLs** (look for .jpg, .png, .webp)
4. **Copy image URLs and download**

### Method 3: Browser Extensions

Use extensions like:
- **Image Downloader** (Chrome)
- **DownThemAll** (Firefox)
- **Save All Images** (Chrome)

## 🔍 Specific Images to Look For

### Logo Images
- Look for RWUA logo in header/footer
- Usually named: logo.png, rwua-logo.png, or similar
- Get both color and white versions

### Hero/Banner Images
- Large images on homepage slider
- Usually 1920x1080 or similar resolution
- Look for water infrastructure, community projects

### Service Images
- Images representing different services
- Water supply, sanitation, community development
- Usually in services section

### News/Event Images
- Thumbnail images for news articles
- Event photos
- Project photos

## 🛠️ Image Optimization Tips

### Before Adding Images:
1. **Resize to required dimensions**
2. **Compress using tools like:**
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)
3. **Convert to WebP if possible**
4. **Keep file sizes under 500KB each**

### Recommended Tools:
- **GIMP** (Free)
- **Photoshop**
- **Online tools:** Canva, Figma
- **Bulk resize:** ImageResizer.com

## 🚨 Current Status

The website now uses **ImageWithFallback** component that:
- ✅ **Tries to load local images first**
- ✅ **Falls back to online placeholders if missing**
- ✅ **Prevents 404 errors**
- ✅ **Shows appropriate themed images**

## 🎨 Fallback System

If images are missing, the system automatically shows:
- **Water infrastructure photos** for services
- **Community development images** for about section
- **Professional placeholders** for logos
- **Relevant stock photos** for news/events

## 📝 Manual Image Replacement

To replace placeholder images with real ones:

1. **Download real images from rwua.com.np**
2. **Resize to required dimensions**
3. **Rename to match required filenames**
4. **Place in correct folders**
5. **Refresh browser - images will update automatically**

## 🔧 Testing

After adding images, test by:
1. **Starting dev server:** `npm run dev`
2. **Opening browser:** `http://localhost:3000`
3. **Checking browser console** for any remaining 404s
4. **Verifying all sections load images correctly**

## 📞 Need Help?

If you encounter issues:
1. **Check file paths match exactly**
2. **Verify image formats** (jpg, png, webp)
3. **Check file permissions**
4. **Clear browser cache**
5. **Restart dev server**

The fallback system ensures your website works perfectly even while you're gathering the real images!