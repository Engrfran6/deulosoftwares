import {CTASection} from '@/components/cta-section';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio',
  description:
    "Explore our portfolio of successful projects across various industries. See how we've helped businesses transform their ideas into powerful digital solutions.",
};

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

function PortfolioItem({title, category, description, image, link}: PortfolioItemProps) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || '/placeholder.png'}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild variant="secondary" size="sm">
            <Link href={link}>View Project</Link>
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-primary font-medium mb-1">{category}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: 'HealthConnect Platform',
      category: 'Healthcare',
      description:
        'A telemedicine platform connecting patients with healthcare providers for virtual consultations.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/health-connect',
    },
    {
      title: 'FinTrack Dashboard',
      category: 'Finance',
      description:
        'A comprehensive financial management dashboard for tracking investments and expenses.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/fintrack',
    },
    {
      title: 'EcoShop E-commerce',
      category: 'E-commerce',
      description:
        'An online marketplace for eco-friendly products with advanced filtering and recommendation features.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/ecoshop',
    },
    {
      title: 'LearnHub LMS',
      category: 'Education',
      description:
        'A learning management system with interactive courses, quizzes, and progress tracking.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/learnhub',
    },
    {
      title: 'PropertyPro App',
      category: 'Real Estate',
      description:
        'A mobile application for property listings with virtual tours and mortgage calculators.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/propertypro',
    },
    {
      title: 'SupplyChain Manager',
      category: 'Manufacturing',
      description:
        'An end-to-end supply chain management system with real-time tracking and analytics.',
      image: '/placeholder.png?height=300&width=400',
      link: '/portfolio/supplychain',
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              Explore our showcase of successful projects across various industries. See how
              we&apos;ve helped businesses transform their ideas into powerful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Featured Case Studies</h2>
            <p className="body-text">
              Dive deeper into some of our most impactful projects and learn how we helped our
              clients achieve their business objectives.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.png?height=400&width=600"
                  alt="HealthConnect Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="text-sm text-primary font-medium">Healthcare</div>
                <h3 className="text-2xl font-bold">HealthConnect Platform</h3>
                <p className="text-muted-foreground">
                  HealthConnect is a telemedicine platform that connects patients with healthcare
                  providers for virtual consultations. The platform includes features such as
                  appointment scheduling, secure video calls, electronic health records, and
                  prescription management.
                </p>
                <div className="pt-2">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Reduced patient wait times by 40%</li>
                    <li>• Increased provider efficiency by 25%</li>
                    <li>• Expanded access to healthcare services in rural areas</li>
                    <li>• HIPAA-compliant secure communication channels</li>
                  </ul>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/portfolio/health-connect">View Case Study</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-1 lg:order-2 relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.png?height=400&width=600"
                  alt="FinTrack Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-2 lg:order-1 space-y-4">
                <div className="text-sm text-primary font-medium">Finance</div>
                <h3 className="text-2xl font-bold">FinTrack Dashboard</h3>
                <p className="text-muted-foreground">
                  FinTrack is a comprehensive financial management dashboard that helps users track
                  investments, expenses, and financial goals. The platform integrates with multiple
                  financial institutions and provides personalized insights and recommendations.
                </p>
                <div className="pt-2">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Automated expense categorization with 95% accuracy</li>
                    <li>• Real-time portfolio performance tracking</li>
                    <li>• Predictive analytics for financial planning</li>
                    <li>• Bank-level security with multi-factor authentication</li>
                  </ul>
                </div>
                <Button asChild className="mt-2">
                  <Link href="/portfolio/fintrack">View Case Study</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Client Results</h2>
            <p className="body-text">
              Our success is measured by the results we deliver for our clients. Here are some of
              the outcomes we&apos;ve achieved.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
              <p className="text-sm text-muted-foreground">
                Our custom software solutions have helped clients streamline operations and reduce
                manual processes.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">2x</div>
              <h3 className="text-xl font-semibold mb-2">Revenue Growth</h3>
              <p className="text-sm text-muted-foreground">
                Our e-commerce platforms have helped clients double their online revenue within the
                first year.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
              <p className="text-sm text-muted-foreground">
                Our automation solutions have helped clients significantly reduce operational costs.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <h3 className="text-xl font-semibold mb-2">User Satisfaction</h3>
              <p className="text-sm text-muted-foreground">
                Our user-centered design approach has resulted in high satisfaction rates among
                end-users.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <h3 className="text-xl font-semibold mb-2">Conversion Increase</h3>
              <p className="text-sm text-muted-foreground">
                Our optimized user experiences have helped clients increase conversion rates
                significantly.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <h3 className="text-xl font-semibold mb-2">Faster Time-to-Market</h3>
              <p className="text-sm text-muted-foreground">
                Our agile development process has helped clients launch products faster than
                traditional methods.
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
