import {CTASection} from '@/components/cta-section';
import {TeamMember} from '@/components/team-member';
import {Button} from '@/components/ui/button';
import {teamMembers} from '@/data';
import {ArrowRight, CheckCircle} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useMemo} from 'react';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Deulo Software Solutions, our mission, values, and the team behind our innovative software development services.',
};

export default function AboutPage() {
  const teams = useMemo(() => [...teamMembers], []);

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
              About <span className="gradient-text">Deulo Software Solutions</span>
            </h1>
            <p className="body-text max-w-2xl mx-auto">
              We&apos;re a team of passionate developers, designers, and strategists dedicated to
              creating innovative software solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-white">
              <Image
                src="/about.svg?height=400&width=600"
                alt="Our Story"
                fill
                priority
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="heading-2">Our Story</h2>
              <p className="body-text">
                Founded in 2020, Deulo Software Solutions was born from a vision to bridge the gap
                between complex technology and business needs. Our founders, with over 15 years of
                experience in software development, recognized that many businesses struggle to find
                reliable partners who truly understand their objectives.
              </p>
              <p className="body-text">
                What started as a small team of three has grown into a diverse group of talented
                professionals united by a common goal: to deliver exceptional software solutions
                that transform ideas into reality and help businesses thrive in the digital age.
              </p>
              <p className="body-text">
                Today, we&apos;re proud to have served clients across various industries, from
                startups to established enterprises, helping them leverage technology to achieve
                their business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Mission & Values</h2>
            <p className="body-text">
              At Deulo Software Solutions, we&apos;re guided by a clear mission and a set of core
              values that define who we are and how we work.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="heading-3 mb-4">Our Mission</h3>
              <p className="body-text mb-6">
                To empower businesses through innovative software solutions that solve real-world
                problems, drive growth, and create exceptional user experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    We strive to understand your business challenges and deliver solutions that
                    address your specific needs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    We&apos;re committed to staying at the forefront of technology to provide you
                    with cutting-edge solutions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm">
                    We believe in building long-term partnerships based on trust, transparency, and
                    mutual success.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg">
              <h3 className="heading-3 mb-4">Our Values</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re committed to delivering high-quality solutions that exceed
                    expectations.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    We embrace creativity and continuously explore new technologies and approaches.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                  <p className="text-sm text-muted-foreground">
                    We operate with honesty, transparency, and ethical standards in all our
                    interactions.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                  <p className="text-sm text-muted-foreground">
                    We believe in the power of teamwork and partnership to achieve the best results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="body-text">
              Our diverse team of experts brings together a wealth of experience and a passion for
              creating innovative software solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teams.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="heading-2">Join Our Team</h2>
              <p className="body-text">
                We&apos;re always looking for talented individuals who are passionate about
                technology and innovation to join our growing team.
              </p>
              <p className="body-text">
                At Deulo Software Solutions, you&apos;ll have the opportunity to work on exciting
                projects, collaborate with skilled professionals, and grow your career in a
                supportive and dynamic environment.
              </p>
              <Button disabled>
                <Button asChild>
                  <Link href="/careers">
                    View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/teammember.png?height=400&width=600"
                alt="Join Our Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
