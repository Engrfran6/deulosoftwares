import {QuoteForm} from '@/components/quote-form';
import {CheckCircle} from 'lucide-react';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Get a Quote | Deulo Software Solutions',
  description: 'Request a free, no-obligation quote for your software development project.',
};

export default function GetQuotePage() {
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
              Request a <span className="gradient-text">Free Quote</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              Tell us about your project, and we&apos;ll provide you with a detailed, no-obligation
              quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-2 mb-6">Request Your Custom Quote</h2>
              <QuoteForm />
            </div>

            <div>
              <h2 className="heading-2 mb-6">Why Choose Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      We provide clear, detailed quotes with no hidden costs or surprise fees.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Tailored Solutions</h3>
                    <p className="text-muted-foreground">
                      Every quote is customized to your specific project requirements and business
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Flexible Engagement Models</h3>
                    <p className="text-muted-foreground">
                      Choose from fixed-price projects, time and materials, or dedicated team
                      models.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Quick Response</h3>
                    <p className="text-muted-foreground">
                      Receive your detailed quote within 2 business days of submitting your request.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">No Obligation</h3>
                    <p className="text-muted-foreground">
                      Our quotes are completely free with no commitment required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      1
                    </span>
                    <p>We&apos;ll review your project requirements</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      2
                    </span>
                    <p>Our team will prepare a detailed quote</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      3
                    </span>
                    <p>We&apos;ll schedule a call to discuss the quote and answer any questions</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      4
                    </span>
                    <p>If you&apos;re satisfied, we&apos;ll move forward with a project plan</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-text">
              Common questions about our quote process and project development
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How detailed will my quote be?</h3>
              <p className="text-muted-foreground">
                Our quotes include a breakdown of costs for each phase of development, estimated
                timeline, resource allocation, and technology stack recommendations. We aim to
                provide as much detail as possible to help you make an informed decision.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How long is my quote valid?</h3>
              <p className="text-muted-foreground">
                Typically, our quotes are valid for 30 days. However, we understand that
                decision-making can take time, so we&apos;re flexible and can discuss extensions if
                needed.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                What if my project requirements change?
              </h3>
              <p className="text-muted-foreground">
                We understand that requirements can evolve. If your needs change after receiving a
                quote, simply let us know, and we&apos;ll provide a revised estimate based on the
                new requirements.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do you offer any discounts?</h3>
              <p className="text-muted-foreground">
                We offer competitive pricing based on the value we provide. For long-term
                partnerships or larger projects, we&apos;re open to discussing package pricing that
                benefits both parties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
