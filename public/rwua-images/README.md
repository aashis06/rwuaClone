# RWUA Images Directory

## 📁 Folder Structure
```
public/rwua-images/
├── logo/
│   ├── rwua-logo.png
│   ├── rwua-logo-white.png
│   └── favicon.ico
├── hero/
│   ├── hero-slide-1.jpg
│   ├── hero-slide-2.jpg
│   └── hero-slide-3.jpg
├── about/
│   └── about-main.jpg
├── services/
│   ├── service-water-supply.jpg
│   ├── service-sanitation.jpg
│   ├── service-community.jpg
│   ├── service-consultation.jpg
│   ├── service-maintenance.jpg
│   └── service-technology.jpg
├── news/
│   ├── news-1.jpg
│   ├── news-2.jpg
│   └── news-3.jpg
├── events/
│   ├── event-1.jpg
│   ├── event-2.jpg
│   └── event-3.jpg
└── placeholder.jpg
```

## 🖼️ How to Use Images in Components

```tsx
import Image from 'next/image';

// Logo
<Image src="/rwua-images/logo/rwua-logo.png" alt="RWUA Logo" width={60} height={60} />

// Hero images
<Image src="/rwua-images/hero/hero-slide-1.jpg" alt="Hero" fill className="object-cover" />

// Service images
<Image src="/rwua-images/services/service-water-supply.jpg" alt="Water Supply" width={400} height={300} />
```

## 📝 Image Requirements

### Logo Images:
- rwua-logo.png (Color version, 200x200px minimum)
- rwua-logo-white.png (White version for dark backgrounds)
- favicon.ico (32x32px)

### Hero Images:
- hero-slide-1.jpg (1920x1080px minimum)
- hero-slide-2.jpg (1920x1080px minimum) 
- hero-slide-3.jpg (1920x1080px minimum)

### About Section:
- about-main.jpg (800x600px minimum)

### Service Images:
- service-water-supply.jpg (600x400px minimum)
- service-sanitation.jpg (600x400px minimum)
- service-community.jpg (600x400px minimum)
- service-consultation.jpg (600x400px minimum)
- service-maintenance.jpg (600x400px minimum)
- service-technology.jpg (600x400px minimum)

### News & Events:
- news-1.jpg, news-2.jpg, news-3.jpg (400x300px minimum)
- event-1.jpg, event-2.jpg, event-3.jpg (400x300px minimum)

## 🔧 Image Optimization Tips

1. Use WebP format when possible for better compression
2. Optimize images before uploading (use tools like TinyPNG)
3. Ensure images are high quality but not too large (< 500KB each)
4. Use descriptive alt text for accessibility
5. Consider using placeholder.jpg as fallback for missing images

## 📱 Responsive Images

The components are designed to be responsive. Images will automatically scale based on screen size using Tailwind CSS classes and Next.js Image optimization.