import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.medicolegalaid.com';

  // 1. Static Base Routes
  const staticRoutes = [
    '',
    '/about',
    '/consult',
    '/webinars',
    '/blog',
    '/news',
    '/judgements',
    '/seminars',
    '/hospitals',
    '/tips',
    '/access-course',
    '/privacypolicy',
    '/refunds',
    '/termsofuse',
    '/indemnity-webinar',
    '/legal-notice-webinar',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. City-wise pSEO Consult Landing Pages
  const cities = [
    'delhi', 'mumbai', 'bangalore', 'chennai', 'hyderabad',
    'pune', 'ahmedabad', 'kolkata', 'jaipur', 'lucknow'
  ];
  
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/consult/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Blogs
  const blogs = await getAllPosts('blog');
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. News
  const news = await getAllPosts('news');
  const newsRoutes = news.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.meta.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 5. Supreme Court Judgements
  const judgements = [
    'jacob-mathew-vs-state-of-punjab',
    'ima-vs-vp-shantha',
    'rajani-prakash-malik-vs-hospital',
    'miot-vs-balaraman-palaniappan',
    'dr-dilip-shah-vs-subhashchandra',
    'samira-kohli-vs-dr-prabha-manchanda',
    'martin-dsouza-vs-mohd-ishfaq'
  ];
  
  const judgementRoutes = judgements.map((slug) => ({
    url: `${baseUrl}/judgements/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  // 6. Webinars
  // In a real DB scenario, we would map over the DB result. 
  // For now, we mock the URLs that legacy systems might point to.
  const webinarRoutes = [
    { slug: 'indemnity-webinar' },
    { slug: 'legal-notice-webinar' }
  ].map(({ slug }) => ({
    url: `${baseUrl}/webinars/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...blogRoutes,
    ...newsRoutes,
    ...judgementRoutes,
    ...webinarRoutes,
  ];
}
