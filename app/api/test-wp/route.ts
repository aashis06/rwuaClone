import { NextResponse } from 'next/server';
import { wpAPI, checkWordPressConnection, WP_BASE_URL, WP_API_URL } from '@/lib/wordpress';

export async function GET() {
  try {
    console.log('Testing WordPress API connection...');
    console.log('Base URL:', WP_BASE_URL);
    console.log('API URL:', WP_API_URL);
    
    // First check basic connectivity
    const isConnected = await checkWordPressConnection();
    
    if (!isConnected) {
      return NextResponse.json({
        success: false,
        message: 'WordPress API is not accessible',
        config: {
          baseUrl: WP_BASE_URL,
          apiUrl: WP_API_URL,
          isProduction: WP_BASE_URL.includes('rwua.com.np')
        }
      }, { status: 503 });
    }
    
    // Test fetching posts
    const { posts, total } = await wpAPI.getPosts({ per_page: 5 });
    
    return NextResponse.json({
      success: true,
      message: 'WordPress API connection successful',
      config: {
        baseUrl: WP_BASE_URL,
        apiUrl: WP_API_URL,
        isProduction: WP_BASE_URL.includes('rwua.com.np')
      },
      data: {
        postsCount: posts.length,
        totalPosts: total,
        posts: posts.map(post => ({
          id: post.id,
          title: post.title.rendered,
          slug: post.slug,
          date: post.date,
          hasImage: !!post.featured_media,
          imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
        }))
      }
    });
  } catch (error) {
    console.error('WordPress API test failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'WordPress API connection failed',
      config: {
        baseUrl: WP_BASE_URL,
        apiUrl: WP_API_URL,
        isProduction: WP_BASE_URL.includes('rwua.com.np')
      },
      error: error instanceof Error ? error.message : 'Unknown error',
      details: error instanceof Error ? error.stack : null
    }, { status: 500 });
  }
}