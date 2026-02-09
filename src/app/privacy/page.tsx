export const metadata = {
  title: 'Privacy Policy | FindDoc Hong Kong',
  description: 'How we protect and handle your personal information',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg opacity-90">How we protect and handle your personal information</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              FindDoc ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our platform, website, 
              and services (collectively, the "Services").
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed"><strong>Personal Information:</strong></p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Name, email address, phone number</li>
              <li>Date of birth and gender</li>
              <li>Medical history and health information</li>
              <li>Appointment history and preferences</li>
              <li>Payment information</li>
              <li>Location data</li>
            </ul>

            <p className="text-gray-600 mb-4 leading-relaxed"><strong>Automatically Collected Information:</strong></p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Provide and maintain our Services</li>
              <li>Process appointments and consultations</li>
              <li>Send appointment reminders and notifications</li>
              <li>Improve our platform and user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Information Sharing</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Healthcare Providers:</strong> To facilitate appointments and consultations</li>
              <li><strong>Service Providers:</strong> Payment processors, cloud storage, analytics providers</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Partners:</strong> With your consent for specific services</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information, 
              including encryption of data in transit and at rest, regular security assessments, access controls, 
              and compliance with HIPAA and PDPO standards.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Your Rights</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Under the Personal Data (Privacy) Ordinance (PDPO) of Hong Kong, you have the right to access, 
              correct, delete, or object to the processing of your personal data. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Contact Us</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
<a href="mailto:privacy@doctornearest.com" className="text-primary hover:underline">privacy@doctornearest.com</a>
            </p>

            <div className="mt-10 pt-6 border-t text-gray-400 text-sm">
              <strong>Last Updated:</strong> February 8, 2024
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
