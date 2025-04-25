import {CTASection} from '@/components/cta-section';
import {Button} from '@/components/ui/button';
import {ArrowRight, Calendar, Clock, User} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description:
    'Stay updated with the latest insights, trends, and news in software development, technology, and digital transformation.',
};

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

function BlogPostCard({
  title,
  excerpt,
  date,
  readTime,
  author,
  category,
  image,
  slug,
}: BlogPostProps) {
  return (
    <article className="group overflow-hidden rounded-lg shadow-md bg-background transition-all duration-300 hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            {author}
          </div>
        </div>
        <Link href={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-4">{excerpt}</p>
        <Button asChild variant="ghost" className="p-0 h-auto font-medium">
          <Link href={`/blog/${slug}`} className="flex items-center text-primary">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const blogPosts: BlogPostProps[] = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt:
        'Explore the emerging technologies and methodologies that will shape the future of web development in the coming years.',
      date: 'Apr 15, 2025',
      readTime: '5 min read',
      author: 'Alex Johnson',
      category: 'Web Development',
      image: '/blog.png?height=300&width=500',
      slug: 'future-web-development-trends-2025',
    },
    {
      title: 'Building Scalable Mobile Applications with React Native',
      excerpt:
        'Learn best practices for developing scalable and maintainable mobile applications using React Native.',
      date: 'Apr 10, 2025',
      readTime: '7 min read',
      author: 'Sarah Williams',
      category: 'Mobile Development',
      image: '/blog.png?height=300&width=500',
      slug: 'building-scalable-mobile-apps-react-native',
    },
    {
      title: 'The Role of AI in Modern Software Development',
      excerpt:
        'Discover how artificial intelligence is transforming the software development process and enhancing productivity.',
      date: 'Apr 5, 2025',
      readTime: '6 min read',
      author: 'Michael Chen',
      category: 'AI & ML',
      image: '/blog.png?height=300&width=500',
      slug: 'role-ai-modern-software-development',
    },
    {
      title: 'Optimizing Database Performance for High-Traffic Applications',
      excerpt:
        'Tips and strategies for improving database performance in applications that handle high volumes of traffic.',
      date: 'Mar 28, 2025',
      readTime: '8 min read',
      author: 'David Kim',
      category: 'Database',
      image: '/blog.png?height=300&width=500',
      slug: 'optimizing-database-performance-high-traffic',
    },
    {
      title: 'User-Centered Design: Creating Intuitive Digital Experiences',
      excerpt:
        'A comprehensive guide to implementing user-centered design principles in your digital products.',
      date: 'Mar 20, 2025',
      readTime: '5 min read',
      author: 'Emily Rodriguez',
      category: 'UI/UX Design',
      image: '/blog.png?height=300&width=500',
      slug: 'user-centered-design-intuitive-experiences',
    },
    {
      title: 'Securing Your Web Applications: Best Practices and Common Pitfalls',
      excerpt:
        'Essential security measures to protect your web applications from common vulnerabilities and threats.',
      date: 'Mar 15, 2025',
      readTime: '7 min read',
      author: 'Robert Wilson',
      category: 'Security',
      image: '/blog.png?height=300&width=500',
      slug: 'securing-web-applications-best-practices',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and news in software development,
              technology, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Browse by Category</h2>
            <p className="body-text">
              Explore our articles by topic to find the information most relevant to your interests.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/blog/category/web-development"
              className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-muted-foreground">12 Articles</p>
            </Link>
            <Link
              href="/blog/category/mobile-development"
              className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Mobile Development</h3>
              <p className="text-sm text-muted-foreground">8 Articles</p>
            </Link>
            <Link
              href="/blog/category/ui-ux-design"
              className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">10 Articles</p>
            </Link>
            <Link
              href="/blog/category/ai-ml"
              className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-muted-foreground">6 Articles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-muted rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-4">Subscribe to Our Newsletter</h2>
              <p className="body-text mb-6">
                Get the latest articles, tutorials, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="sm:w-auto">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
