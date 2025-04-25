import {ContactForm} from '@/components/contact-form';
import {Mail, MapPin, Phone} from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Deulo Software Solutions. We're here to answer your questions and discuss how we can help with your software development needs.",
};

export default function ContactPage() {
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              We&apos;re here to answer your questions and discuss how we can help with your
              software development needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="heading-2 mb-6">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Old Aba Road
                      <br />
                      Suite 456
                      <br />
                      Porthacourt, Rivers State
                      <br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@deulosoftware.com
                      <br />
                      support@deulosoftware.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      +234 (703) 868-9224
                      <br />
                      +234 (703) 868-9224
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="heading-3 mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Find Us</h2>
            <p className="body-text">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </div>

          <div className="h-[400px] bg-background rounded-lg shadow-lg overflow-hidden">
            {/* Replace with actual map component or embed */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-text">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">What is your typical project timeline?</h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on complexity and scope. A simple website might
                take 4-6 weeks, while a complex application could take several months. We&apos;ll
                provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">How much does a typical project cost?</h3>
              <p className="text-muted-foreground">
                Project costs depend on requirements, complexity, and timeline. We offer flexible
                pricing models including fixed-price, time and materials, and retainer options.
                Contact us for a personalized quote.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Do you provide ongoing maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, we offer ongoing maintenance and support services to ensure your software
                continues to perform optimally. We have various maintenance packages to suit
                different needs and budgets.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Can you work with our existing team?</h3>
              <p className="text-muted-foreground">
                We&apos;re experienced in collaborating with in-house teams and can provide the
                specific expertise you need to complement your existing resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
