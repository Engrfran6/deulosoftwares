import {CTASection} from '@/components/cta-section';
import {Button} from '@/components/ui/button';
import {servicesData} from '@/data';
import {ArrowRight, CheckCircle} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';

// Generate metadata for the page
export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;

  const service = servicesData.find((service) => service.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

// Generate static params for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const service = servicesData.find((service) => service.slug === slug);

  // If service not found, return 404
  if (!service) {
    notFound();
  }

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
              <span className="gradient-text">{service.title}</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.heroImage || '/service-details.png'}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-2">Overview</h2>
              <p className="body-text">{service.overview}</p>
              <Button asChild>
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Benefits</h2>
            <p className="body-text">
              Our {service.title.toLowerCase()} services provide numerous advantages for your
              business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="body-text">
              We follow a structured approach to deliver high-quality {service.title.toLowerCase()}{' '}
              solutions.
            </p>
          </div>

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start p-6 bg-muted rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Technologies We Use</h2>
            <p className="body-text">
              We leverage the latest technologies and frameworks to build robust, scalable, and
              future-proof {service.title.toLowerCase()} solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-background rounded-full shadow-sm text-sm font-medium transition-all duration-300 hover:shadow-md hover:bg-primary hover:text-primary-foreground">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {service.caseStudies.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-2 mb-4">Case Studies</h2>
              <p className="body-text">
                Explore some of our successful {service.title.toLowerCase()} projects and the
                results we&apos;ve achieved for our clients.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {service.caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={caseStudy.image || '/service-details.png'}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                    <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                    <Button asChild variant="outline">
                      <Link href={caseStudy.link}>View Case Study</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-text">
              Find answers to common questions about our {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Related Services</h2>
            <p className="body-text">
              Explore other services that complement our {service.title.toLowerCase()} solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{relatedService.title}</h3>
                  <p className="text-muted-foreground mb-4">{relatedService.description}</p>
                  <Button asChild variant="outline">
                    <Link href={`/services/${relatedService.slug}`}>Learn More</Link>
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
