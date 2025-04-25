import {CTASection} from '@/components/cta-section';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {blogPostsData} from '@/data';
import {BlogPost} from '@/types';
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Facebook,
  Linkedin,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';

// Define the blog post data structure

// Generate metadata for the page
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const post = blogPostsData.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const post = blogPostsData.find((post) => post.slug === slug);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

  // Find related posts
  const relatedPosts = post.relatedPosts
    .map((slug) => blogPostsData.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted pt-24 pb-16">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="text-xs font-medium">
                {post.category}
              </Badge>
              <div className="text-xs text-muted-foreground">
                {post.date} • {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar || '/ceo.png'} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={post.image || '/blog-details.png'}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg dark:prose-invert max-w-none bg-gradient-to-b from-background to-muted p-6 rounded-lg shadow-lg">
                <div dangerouslySetInnerHTML={{__html: post.content}} />
                {/* <div>{post.content}</div> */}
              </article>

              {/* Tags */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Link key={index} href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Badge variant="outline" className="hover:bg-muted">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-muted rounded-lg">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={post.author.avatar || '/ceo.png'} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">About {post.author.name}</h3>
                    <p className="text-muted-foreground mb-4">{post.author.bio}</p>
                    <div className="flex gap-4">
                      <Link href="#" className="text-primary hover:text-primary/80">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-primary hover:text-primary/80">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg hover:bg-muted transition-colors">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Previous Post</span>
                  </Link>
                  <h4 className="font-medium mt-2">
                    Building Scalable Mobile Applications with React Native
                  </h4>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted transition-colors text-right">
                  <Link
                    href="#"
                    className="flex items-center justify-end gap-2 text-muted-foreground hover:text-foreground">
                    <span>Next Post</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <h4 className="font-medium mt-2">
                    The Role of AI in Modern Software Development
                  </h4>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Comments (3)</h3>

                <div className="space-y-8">
                  {/* Comment 1 */}
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">John Doe</h4>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          Great article! I especially liked the section on WebAssembly. I&apos;ve
                          been experimenting with it recently and the performance gains are
                          impressive.
                        </p>
                        <button className="text-sm text-primary mt-2 flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" /> Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jane Smith" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Jane Smith</h4>
                          <span className="text-xs text-muted-foreground">3 days ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          I&apos;m curious about your thoughts on the impact of AI-assisted
                          development on junior developers. Do you think it will help them learn
                          faster or potentially hinder their understanding of fundamentals?
                        </p>
                        <button className="text-sm text-primary mt-2 flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" /> Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Comment 3 */}
                  <div className="p-6 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src="/placeholder.svg?height=40&width=40"
                          alt="Robert Johnson"
                        />
                        <AvatarFallback>RJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Robert Johnson</h4>
                          <span className="text-xs text-muted-foreground">5 days ago</span>
                        </div>
                        <p className="text-muted-foreground">
                          The section on edge computing was spot on. We&apos;ve been moving more of
                          our processing to the edge and the performance improvements for our global
                          user base have been substantial.
                        </p>
                        <button className="text-sm text-primary mt-2 flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Comment Form */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Leave a Comment</h4>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border rounded-md"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium mb-1">
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md"
                        required></textarea>
                    </div>
                    <Button type="submit">Post Comment</Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Share Section */}
              <div className="p-6 bg-muted rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Share This Post</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy Link</span>
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={relatedPost.image || '/placeholder.svg'}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  <Link
                    href="/blog/category/web-development"
                    className="block p-3 rounded-md hover:bg-muted transition-colors">
                    Web Development
                  </Link>
                  <Link
                    href="/blog/category/mobile-development"
                    className="block p-3 rounded-md hover:bg-muted transition-colors">
                    Mobile Development
                  </Link>
                  <Link
                    href="/blog/category/ai-ml"
                    className="block p-3 rounded-md hover:bg-muted transition-colors">
                    AI & Machine Learning
                  </Link>
                  <Link
                    href="/blog/category/ui-ux-design"
                    className="block p-3 rounded-md hover:bg-muted transition-colors">
                    UI/UX Design
                  </Link>
                  <Link
                    href="/blog/category/devops"
                    className="block p-3 rounded-md hover:bg-muted transition-colors">
                    DevOps & Cloud
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles and insights delivered straight to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
