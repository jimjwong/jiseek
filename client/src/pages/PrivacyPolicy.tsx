import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative py-24 bg-secondary/20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy outlines how Jiseek collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/40 to-transparent hidden lg:block"></div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            
            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  1. Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Professional information (company name, job title, industry)</li>
                    <li>Communication preferences and inquiry details</li>
                    <li>Information you provide when registering for our training programs or services</li>
                  </ul>
                  <p>
                    We also automatically collect certain information about your device when you use our website, including IP address, browser type, and usage patterns.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you information about our training programs, services, and events</li>
                    <li>Communicate with you about your account or our services</li>
                    <li>Analyze usage patterns to improve our website and services</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to respond to legal process</li>
                    <li>To protect the rights, property, or safety of Jiseek, our clients, or others</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  4. Data Security
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  5. Your Rights and Choices
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt-out of receiving marketing communications from us</li>
                    <li>Object to or restrict certain processing of your information</li>
                    <li>Request a copy of your personal information</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools. However, disabling cookies may limit your ability to use certain features of our website.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  7. International Data Transfers
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you are accessing our services from outside our primary region of operation, please be aware that your information may be transferred to, stored, and processed in countries where our service providers operate. We take appropriate steps to ensure that your information receives adequate protection.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  8. Children's Privacy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-secondary/10">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-serif font-bold text-accent mb-4">
                  10. Contact Us
                </h2>
                <div className="space-y-4 opacity-90">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <ul className="space-y-2">
                    <li>Email: privacy@jiseek.com</li>
                    <li>Phone: [Contact Number]</li>
                    <li>Address: [Business Address]</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}

