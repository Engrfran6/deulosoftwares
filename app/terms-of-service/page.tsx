import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Deulo Software Solutions',
  description:
    'Our terms of service outline the rules, guidelines, and legal agreements between our company and users of our services.',
};

const TermsOfServicePage = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-primary">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: April 25, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to Deulo Software Solutions. These Terms of Service (&quot;Terms&quot;) govern
            your use of our website and services. By accessing or using our website or services, you
            agree to be bound by these Terms. If you disagree with any part of the Terms, you may
            not access our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
          <p>
            Deulo Software Solutions provides web development, design, and related digital services
            to clients. Our services may include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Website design and development</li>
            <li>Web application development</li>
            <li>API development</li>
            <li>UI/UX design</li>
            <li>Database solutions</li>
            <li>DevOps and cloud services</li>
            <li>AI and machine learning integration</li>
            <li>Maintenance and support</li>
          </ul>
          <p>
            The specific services to be provided will be outlined in a separate agreement or
            statement of work between Deulo Software Solutions and the client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p>
            Some portions of our website or services may require you to create an account. You are
            responsible for maintaining the confidentiality of your account information, including
            your password, and for all activities that occur under your account. You agree to notify
            us immediately of any unauthorized use of your account or any other breach of security.
          </p>
          <p>
            We reserve the right to refuse service, terminate accounts, remove or edit content, or
            cancel orders at our sole discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <h3 className="text-xl font-medium mb-2">Our Intellectual Property</h3>
          <p>
            The website, its original content, features, and functionality are owned by Deulo
            Software Solutions and are protected by international copyright, trademark, patent,
            trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">Client Content</h3>
          <p>
            Clients retain ownership of all intellectual property rights in and to the content they
            provide to us for use in the development of their websites or applications. By providing
            content to us, clients grant us a non-exclusive, worldwide, royalty-free license to use,
            reproduce, modify, and display the content solely for the purpose of providing our
            services.
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">Deliverables</h3>
          <p>
            Upon full payment of all fees due, we will assign to the client all rights, title, and
            interest in the deliverables created specifically for the client, except for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Third-party materials incorporated into the deliverables</li>
            <li>Our pre-existing intellectual property</li>
            <li>Our proprietary development tools and processes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. User Responsibilities</h2>
          <p>When using our website or services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your information as necessary</li>
            <li>
              Use our website and services only for lawful purposes and in accordance with these
              Terms
            </li>
            <li>
              Not use our website or services in any way that could damage, disable, overburden, or
              impair our servers or networks
            </li>
            <li>
              Not attempt to gain unauthorized access to any parts of the website, other accounts,
              computer systems, or networks connected to our servers
            </li>
            <li>
              Not use any robot, spider, or other automated device to access our website or services
            </li>
            <li>Not transmit any viruses, worms, or other malicious code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
          <p>
            Payment terms for our services will be outlined in a separate agreement or statement of
            work. Unless otherwise specified:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>All fees are quoted in US dollars</li>
            <li>A deposit may be required before work begins</li>
            <li>Final payment is due upon completion of the services</li>
            <li>We reserve the right to suspend services if payments are not made on time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Deulo Software Solutions shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
            from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your access to or use of or inability to access or use our website or services</li>
            <li>Any conduct or content of any third party on our website</li>
            <li>Any content obtained from our website</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          <p>
            Our liability for any claim arising out of or relating to these Terms shall not exceed
            the amount you paid to us for the services giving rise to the claim.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Deulo Software Solutions, its
            officers, directors, employees, and agents, from and against any and all claims,
            damages, obligations, losses, liabilities, costs or debt, and expenses (including but
            not limited to attorney&apos;s fees) arising from:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your use of and access to our website or services</li>
            <li>Your violation of any term of these Terms</li>
            <li>
              Your violation of any third-party right, including without limitation any copyright,
              property, or privacy right
            </li>
            <li>Any claim that your content caused damage to a third party</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p>
            We may terminate or suspend your access to our website or services immediately, without
            prior notice or liability, for any reason whatsoever, including without limitation if
            you breach these Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership provisions, warranty
            disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your
            State/Country], without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a
            waiver of those rights. If any provision of these Terms is held to be invalid or
            unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any
            time. We will provide notice of any changes by posting the new Terms on this page and
            updating the &quot;Last updated&quot; date.
          </p>
          <p>
            By continuing to access or use our website or services after those revisions become
            effective, you agree to be bound by the revised Terms. If you do not agree to the new
            Terms, please stop using our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-none pl-0 mb-4">
            <li>
              <strong>Email:</strong> privacy@deulosoftwaresolutions.com
            </li>
            <li>
              <strong>Phone:</strong> +234 (703) 868-9224
            </li>
            <li>
              <strong>Address:</strong> 123 Old Aba Road, Suite 456, Porthacourt, Rivers State
              Nigeria
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 border-t pt-6">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
