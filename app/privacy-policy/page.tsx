import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Deulo Software Solutions',
  description:
    'Our privacy policy outlines how we collect, use, and protect your personal information.',
};

const PrivacyPolicyPage = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-primary">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-6">Last updated: April 25, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Deulo Software Solutions (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this
            Privacy Policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

          <h3 className="text-xl font-medium mb-2">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information or services</li>
            <li>Participate in surveys or promotions</li>
            <li>Contact us via email, phone, or other means</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, and
            any other information you choose to provide.
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">Automatically Collected Information</h3>
          <p>
            When you visit our website, we may automatically collect certain information about your
            device, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on those pages</li>
            <li>Referring website addresses</li>
            <li>Other diagnostic data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing, maintaining, and improving our website and services</li>
            <li>Responding to your inquiries and fulfilling your requests</li>
            <li>
              Sending you administrative information, such as updates to our terms and policies
            </li>
            <li>Sending you marketing and promotional communications (with your consent)</li>
            <li>Analyzing website usage to improve user experience</li>
            <li>Protecting our rights and preventing fraud</li>
            <li>Complying with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and
            store certain information. Cookies are files with a small amount of data that may
            include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent. However, if you do not accept cookies, you may not be able to use some
            portions of our website.
          </p>
          <p>We use the following types of cookies:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Essential cookies:</strong> Necessary for the website to function properly
            </li>
            <li>
              <strong>Preference cookies:</strong> Enable the website to remember your preferences
            </li>
            <li>
              <strong>Analytics cookies:</strong> Help us understand how visitors interact with our
              website
            </li>
            <li>
              <strong>Marketing cookies:</strong> Used to track visitors across websites to display
              relevant advertisements
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
          <p>We may share your information in the following situations:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>With service providers:</strong> We may share your information with
              third-party vendors who provide services on our behalf
            </li>
            <li>
              <strong>Business transfers:</strong> If we are involved in a merger, acquisition, or
              sale of assets, your information may be transferred as part of that transaction
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose your information if required by
              law or in response to valid requests by public authorities
            </li>
            <li>
              <strong>With your consent:</strong> We may share your information with third parties
              when we have your consent to do so
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information from unauthorized access, disclosure, alteration, or destruction. However,
            no method of transmission over the Internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal
            information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to restrict or object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the
            &quot;Contact Us&quot; section.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian and
            believe your child has provided us with personal information, please contact us, and we
            will take steps to remove that information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by
            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
            date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicyPage;
