import {CTASection} from '@/components/cta-section';
import {ProcessStep} from '@/components/process-step';
import {ServiceCard} from '@/components/service-card';
import {TestimonialCard} from '@/components/testimonial-card';
import {Button} from '@/components/ui/button';
import {processSteps, services, testimonials} from '@/data';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container-custom relative z-10 section-padding h-[65vh] flex items-center justify-center">
          <div className="flex flex-col justify-center items-center space-y-6">
            <span>We Deliver</span>
            <div className="heading-1 max-w-5xl text-center leading-tight">
              {/* Transforming Ideas Into{' '} */}
              World-Class <span className="gradient-text">Digital Solutions</span>
              <br />
              {/* Powerful Digital Solutions */}
              <span className="underline underline-offset-[20px] decoration-slate-600 pr-4">
                On-Time
              </span>
              <span className="underline underline-offset-[20px] decoration-slate-600">
                In-Budget
              </span>
            </div>
            <p className="body-text text-center text-wrap max-w-5xl">
              {/* We build custom web applications, mobile apps, and enterprise software that drive
                business growth and deliver exceptional user experiences. */}
              Being a top Mobile app and Web development company, we help Startups, Mid-Size, and
              Enterprise businesses to get their digital products done the right way on time, in
              budget.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 uppercase">
              <Button asChild size="lg">
                <Link href="/get-quote">
                  Get a quote in 24 hours <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Logos Section */}
      {/* <section className="bg-muted py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-muted-foreground">
              Trusted by innovative companies
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 bg-muted-foreground/20 rounded-md flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Client {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="body-text">
              We offer a comprehensive range of software development services to help businesses
              thrive in the digital landscape.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Development Process</h2>
            <p className="body-text">
              We follow a structured and collaborative approach to deliver high-quality software
              solutions that meet your business objectives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
            <p className="body-text">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
              working with Deulo Software Solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
