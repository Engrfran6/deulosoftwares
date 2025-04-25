import {Button} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Transform Your Ideas into Reality?</h2>
          <p className="text-white/80 text-lg mb-8">
            Let&apos;s discuss how we can help you achieve your business goals with our custom
            software development services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
