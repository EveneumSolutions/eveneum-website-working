export function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: January 3, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              Eveneum Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Resume and employment history</li>
              <li>Professional qualifications and skills</li>
              <li>Job preferences and career goals</li>
              <li>Information submitted through contact forms</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide recruitment and staffing services</li>
              <li>Match candidates with job opportunities</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We may share your information with potential employers when you apply for positions through our services.
              We do not sell your personal information to third parties. We may share information with service providers
              who assist us in operating our business, subject to confidentiality agreements.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us using the
              information provided on our Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
