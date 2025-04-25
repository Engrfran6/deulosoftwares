import {CTASection} from '@/components/cta-section';
import {ServiceCard} from '@/components/service-card';
import {
  CheckCircle,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  LineChart,
  Smartphone,
  Zap,
} from 'lucide-react';

export const metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive range of software development services including web and mobile app development, custom software, UI/UX design, and more.',
};

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              We offer a comprehensive range of software development services to help businesses
              thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Globe className="h-10 w-10" />}
              title="Web Development"
              description="Custom web applications, responsive websites, and progressive web apps built with modern technologies like React, Next.js, and Vue.js."
              link="/services/web-development"
              expanded
            />
            <ServiceCard
              icon={<Smartphone className="h-10 w-10" />}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift that deliver exceptional user experiences."
              link="/services/mobile-development"
              expanded
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10" />}
              title="Custom Software"
              description="Tailored software solutions designed to address your unique business challenges and requirements, from enterprise applications to specialized tools."
              link="/services/custom-software"
              expanded
            />
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="API Development"
              description="Robust and scalable APIs that enable seamless integration between different systems and applications, built with RESTful or GraphQL architectures."
              link="/services/api-development"
              expanded
            />
            <ServiceCard
              icon={<Layers className="h-10 w-10" />}
              title="UI/UX Design"
              description="User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences that delight your users."
              link="/services/ui-ux-design"
              expanded
            />
            <ServiceCard
              icon={<Database className="h-10 w-10" />}
              title="Database Solutions"
              description="Efficient database design, implementation, and optimization using SQL and NoSQL technologies to ensure your data is secure, accessible, and scalable."
              link="/services/database-solutions"
              expanded
            />
            <ServiceCard
              icon={<Zap className="h-10 w-10" />}
              title="DevOps & Cloud Services"
              description="Streamlined development operations and cloud infrastructure setup using AWS, Azure, or Google Cloud to improve efficiency and reduce costs."
              link="/services/devops-cloud"
              expanded
            />
            <ServiceCard
              icon={<LineChart className="h-10 w-10" />}
              title="AI & Machine Learning"
              description="Intelligent solutions that leverage artificial intelligence and machine learning to automate processes, gain insights, and enhance decision-making."
              link="/services/ai-ml"
              expanded
            />
            <ServiceCard
              icon={<Cpu className="h-10 w-10" />}
              title="Maintenance & Support"
              description="Ongoing maintenance, updates, and support to ensure your software continues to perform optimally and evolves with your business needs."
              link="/services/maintenance-support"
              expanded
            />
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
              future-proof software solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  React.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Next.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Vue.js
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Node.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Express.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Django
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  PHP/Laravel
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mobile</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  React Native
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Flutter
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Swift
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Kotlin
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Ionic
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Database & Cloud</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  AWS
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Firebase
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary"></div>
                  Docker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Industries We Serve</h2>
            <p className="body-text">
              We have experience working with clients across various industries, delivering tailored
              solutions to meet their specific needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Patient management systems, telemedicine platforms, and healthcare analytics
                solutions.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Finance</h3>
              <p className="text-sm text-muted-foreground">
                Banking applications, payment gateways, and financial management tools.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-sm text-muted-foreground">
                Online stores, marketplace platforms, and inventory management systems.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Learning management systems, educational apps, and student portals.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-sm text-muted-foreground">
                Property management platforms, listing websites, and virtual tour applications.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Inventory tracking, supply chain management, and production optimization tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Why Choose Deulo Software Solutions</h2>
            <p className="body-text">
              We&apos;re committed to delivering exceptional software solutions that drive business
              growth and create value for our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Our team of experienced developers and designers brings a wealth of knowledge and
                skills to every project.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re committed to delivering high-quality solutions that meet the highest
                standards of performance and reliability.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We stay at the forefront of technology to provide innovative solutions that give our
                clients a competitive edge.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                We work closely with our clients, involving them in every step of the development
                process to ensure their vision is realized.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">
                We provide ongoing support and maintenance to ensure your software continues to
                perform optimally and evolves with your business.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Value</h3>
              <p className="text-sm text-muted-foreground">
                We deliver solutions that provide real value and return on investment, helping our
                clients achieve their business objectives.
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
