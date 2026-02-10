import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doctornearest.com'

  // Define all static routes
  const routes = [
    { path: '', priority: 1.0 },                    // homepage
    { path: '/about', priority: 0.8 },
    { path: '/careers', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/covid-test', priority: 0.8 },
    { path: '/doctor-profile', priority: 0.8 },
    { path: '/doctors', priority: 0.8 },
    { path: '/learn', priority: 0.8 },
    { path: '/privacy', priority: 0.5 },
    { path: '/specialties', priority: 0.8 },
    { path: '/terms', priority: 0.5 },
    { path: '/video-consultation', priority: 0.8 },
    { path: '/sitemap', priority: 0.5 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route.priority,
  }))
}
