export function TermsConditionsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">Terms and Conditions</h1>
            <p className="text-lg text-muted-foreground">Last updated: January 3, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="prose prose-gray mx-auto max-w-3xl dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Eveneum Solutions website and services, you agree to be bound by these Terms
              and Conditions. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2>Services</h2>
            <p>
              Eveneum Solutions provides staffing and recruitment services, including but not limited to permanent
              staffing, contract staffing, bulk hiring, IT recruitment, and finance & accounting recruitment. We act as
              an intermediary between employers and job seekers.
            </p>

            <h2>User Responsibilities</h2>
            <h3>For Candidates:</h3>
            <ul>
              <li>Provide accurate and truthful information in your resume and applications</li>
              <li>Maintain confidentiality of any proprietary information shared during the recruitment process</li>
              <li>Notify us promptly of any changes to your contact information or job search status</li>
              <li>Attend scheduled interviews and meetings as agreed</li>
            </ul>

            <h3>For Companies:</h3>
            <ul>
              <li>Provide accurate job descriptions and requirements</li>
              <li>Conduct fair and lawful hiring practices</li>
              <li>Pay agreed-upon fees for successful placements</li>
              <li>Provide timely feedback on candidates</li>
            </ul>

            <h2>Fees and Payment</h2>
            <p>
              Recruitment fees are agreed upon in writing before services commence. Payment terms vary based on the
              engagement model (contingency, retained, or RPO). Fees are typically due upon successful placement or as
              otherwise specified in the service agreement.
            </p>

            <h2>Guarantee Period</h2>
            <p>
              We offer a 90-day guarantee period for permanent placements. If a placed candidate leaves or is
              terminated within this period, we will provide a replacement at no additional fee, subject to the terms
              of the service agreement.
            </p>

            <h2>Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of all proprietary and sensitive information shared during
              the recruitment process. This includes candidate information, job requirements, and business strategies.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Eveneum Solutions makes reasonable efforts to match qualified candidates with appropriate positions but
              does not guarantee employment outcomes. We are not liable for hiring decisions made by client companies
              or employment outcomes for candidates.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Eveneum
              Solutions and protected by copyright laws. You may not reproduce, distribute, or create derivative works
              without our written permission.
            </p>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting to the website. Your continued use of our services constitutes acceptance of the
              modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with applicable laws. Any disputes
              shall be resolved through binding arbitration or in the courts of appropriate jurisdiction.
            </p>

            <h2>Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us using the information provided on our
              Contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
