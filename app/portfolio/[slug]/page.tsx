import {CTASection} from '@/components/cta-section';
import {Button} from '@/components/ui/button';
import {portfolioData} from '@/data';
import {PortfolioItem} from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';

// Generate metadata for the page
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const portfolio = portfolioData.find((portfolio) => portfolio.slug === slug);

  if (!portfolio) {
    return {
      title: 'Portfolio Not Found',
      description: 'The requested portfolio item could not be found.',
    };
  }

  return {
    title: `${portfolio.title} | Case Study`,
    description: portfolio.description,
  };
}

// Generate static params for all portfolios
export async function generateStaticParams() {
  return portfolioData.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export default async function PortfolioDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  const portfolio = portfolioData.find((portfolio) => portfolio.slug === slug);

  if (!portfolio) {
    notFound();
  }

  // Find related projects
  const relatedProjects = portfolio.relatedProjects
    .map((slug) => portfolioData.find((item) => item.slug === slug))
    .filter(Boolean) as PortfolioItem[];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container-custom relative z-10 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-block text-sm font-medium text-primary mb-2 px-3 py-1 bg-primary/10 rounded-full">
                {portfolio.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 heading-1">
                {portfolio.title}
              </h1>
              <p className="body-text text-xl text-muted-foreground mb-6 heading-2">
                {portfolio.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground body-text">Client</div>
                  <div className="font-medium">{portfolio.client}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-medium">{portfolio.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Year</div>
                  <div className="font-medium">{portfolio.year}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Category</div>
                  <div className="font-medium">{portfolio.category}</div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/get-quote">Request Similar Project</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={portfolio.featuredImage || '/placeholder.svg'}
                alt={portfolio.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6 heading-2">The Challenge</h2>
              <p className="body-text text-muted-foreground mb-8">{portfolio.challenge}</p>

              <h2 className="text-3xl font-bold mb-6 heading-2">Our Solution</h2>
              <p className="body-text text-muted-foreground mb-8">{portfolio.solution}</p>

              <h2 className="text-3xl font-bold mb-6 heading-2">Our Approach</h2>
              <p className="body-text text-muted-foreground">{portfolio.approach}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 heading-2">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-12">
                {portfolio.technologies.map((tech, index) => (
                  <div key={index} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 heading-2">Key Results</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {portfolio.results.map((result, index) => (
                  <div key={index} className="bg-muted p-6 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                    <p className="body-text text-sm text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center heading-2">Project Gallery</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolio.gallery.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-[300px]">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-background">
                  <p className="body-text text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {portfolio.testimonial && (
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-4xl font-serif text-primary mb-6"></div>
              <p className="body-text text-xl md:text-2xl font-medium mb-8">
                {portfolio.testimonial.quote}
              </p>
              <div className="flex items-center justify-center">
                {portfolio.testimonial.image && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={portfolio.testimonial.image || '/placeholder.svg'}
                      alt={portfolio.testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-semibold">{portfolio.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {portfolio.testimonial.position}, {portfolio.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center heading-2">Related Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group overflow-hidden rounded-lg shadow-lg bg-background">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.featuredImage || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button asChild variant="secondary" size="sm">
                        <Link href={`/portfolio/${project.slug}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-primary font-medium mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-2 heading-2">{project.title}</h3>
                    <p className="body-text text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
