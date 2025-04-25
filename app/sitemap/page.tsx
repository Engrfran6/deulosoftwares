import {ChevronRight} from 'lucide-react';
import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Deulo Software Solutions',
  description: 'Navigate our website with ease using our comprehensive sitemap.',
};

const SitemapPage = () => {
  const mainPages = [
    {title: 'Home', path: '/', children: []},
    {
      title: 'About',
      path: '/about',
      children: [],
    },
    {
      title: 'Services',
      path: '/services',
      children: [
        {title: 'Web Development', path: '/services/web-development'},
        {title: 'API Development', path: '/services/api-development'},
        {title: 'UI/UX Design', path: '/services/ui-ux-design'},
        {title: 'Database Solutions', path: '/services/database-solutions'},
        {title: 'DevOps & Cloud', path: '/services/devops-cloud'},
        {title: 'AI & Machine Learning', path: '/services/ai-ml'},
        {title: 'Maintenance & Support', path: '/services/maintenance-support'},
      ],
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
      children: [],
    },
    {
      title: 'Blog',
      path: '/blog',
      children: [
        {title: 'The Future of Web Development', path: '/blog/future-of-web-development'},
        {title: 'Optimizing Database Performance', path: '/blog/optimizing-database-performance'},
        {title: 'User-Centered Design', path: '/blog/user-centered-design'},
        {title: 'Securing Your Web Applications', path: '/blog/securing-web-applications'},
        {title: 'The Rise of Progressive Web Apps', path: '/blog/rise-of-progressive-web-apps'},
        {title: 'Implementing CI/CD Pipelines', path: '/blog/implementing-cicd-pipelines'},
      ],
    },
    {
      title: 'Contact',
      path: '/contact',
      children: [],
    },
    {
      title: 'Legal',
      path: '#',
      children: [
        {title: 'Privacy Policy', path: '/privacy-policy'},
        {title: 'Terms of Service', path: '/terms-of-service'},
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-primary">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainPages.map((page, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              <Link href={page.path} className="text-primary hover:underline">
                {page.title}
              </Link>
            </h2>

            {page.children.length > 0 && (
              <ul className="space-y-2">
                {page.children.map((child, childIndex) => (
                  <li key={childIndex} className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-muted-foreground mr-2" />
                    <Link
                      href={child.path}
                      className="text-muted-foreground hover:text-primary hover:underline">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">XML Sitemap</h2>
        <p className="text-muted-foreground mb-4">
          For search engines and web crawlers, we provide an XML sitemap at:
        </p>
        <div className="bg-muted p-4 rounded-md inline-block">
          <code>https://www.deulosoftwaresolutions.com/sitemap.xml</code>
        </div>
      </div>

      <div className="mt-12 border-t pt-6">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default SitemapPage;
