# RWUA Clone - Rural Water Users Association Website

A complete Next.js clone of the Rural Water Users Association (RWUA) Nepal website with WordPress as a headless CMS backend.

## 🌟 Features

- **Pixel-perfect clone** of rwua.com.np
- **Responsive design** that works on all devices
- **WordPress headless CMS** integration
- **Multi-language support** (English & Nepali)
- **Interactive components** with smooth animations
- **SEO optimized** with proper meta tags
- **Modern tech stack** with Next.js 14+ and TypeScript

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React 19
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: WordPress (Headless CMS)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with fallback system
- **State Management**: React Hooks
- **API Integration**: Axios for WordPress REST API

## 📋 Sections Implemented

### Main Website Sections
- ✅ **Hero Section** - Dynamic slider with call-to-action
- ✅ **About Section** - Organization information and mission
- ✅ **Services Section** - Water supply and sanitation services
- ✅ **Gallery Section** - Project photos with lightbox
- ✅ **News & Events** - Latest updates and announcements
- ✅ **Success Stories** - Community impact testimonials
- ✅ **Vacancy Section** - Job opportunities with filtering
- ✅ **Downloads** - Resources and documents
- ✅ **Partners** - Collaborating organizations
- ✅ **Contact** - Contact form and information

### Additional Pages
- ✅ **Success Stories** (`/success-stories`) - Detailed success stories
- ✅ **Recent News** (`/recent-news`) - Latest news in Nepali
- ✅ **Facebook News** (`/facebook-news`) - Social media updates
- ✅ **Archive** (`/old-new-info`) - Historical information
- ✅ **Registration** (`/registration`) - Official registration details

### Navigation Features
- ✅ **Top Navigation Bar** - Nepali language menu items
- ✅ **Main Navigation** - Smooth scrolling between sections
- ✅ **Mobile Menu** - Responsive hamburger menu
- ✅ **Smart Navigation** - Works across all pages

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- WordPress installation (for CMS functionality)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/aashis06/rwuaClone.git
   cd rwuaClone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WP_BASE_URL=https://rwua.com.np
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 WordPress Integration

The project is configured to work with WordPress as a headless CMS:

- **API Endpoint**: Uses WordPress REST API (`/wp-json/wp/v2/`)
- **Content Types**: Posts, Pages, Media, Categories
- **Fallback System**: Graceful handling when WordPress is unavailable
- **Image Optimization**: Automatic fallback to placeholder images

### WordPress Configuration
```typescript
// lib/wordpress.ts
const WP_BASE_URL = process.env.NEXT_PUBLIC_WP_BASE_URL || 'http://localhost/wordpress';
```

## 🎨 Design Features

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts** that adapt to all screen sizes

### Animations
- **Framer Motion** for smooth transitions
- **Intersection Observer** for scroll-triggered animations
- **Hover effects** and micro-interactions

### Image System
- **Fallback mechanism** for missing images
- **SVG placeholders** for logos and icons
- **Optimized loading** with Next.js Image component

## 📱 Mobile Responsiveness

- ✅ Mobile-optimized navigation
- ✅ Touch-friendly interface
- ✅ Responsive typography
- ✅ Optimized images for mobile
- ✅ Fast loading on mobile networks

## 🔧 Configuration Files

### Key Configuration
- `next.config.ts` - Next.js configuration with image domains
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

### Environment Variables
```env
NEXT_PUBLIC_WP_BASE_URL=https://your-wordpress-site.com
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
npm start
```

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for educational and demonstration purposes. Please respect the original website's content and branding.

## 🙏 Acknowledgments

- **RWUA Nepal** - Original website design and content inspiration
- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **WordPress** - Headless CMS functionality

## 📞 Contact

For questions or support, please open an issue in this repository.

---

**Note**: This is a clone project created for educational purposes. All content and design elements are inspired by the original RWUA Nepal website.