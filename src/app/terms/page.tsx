export const metadata = {
  title: 'Terms of Use | FindDoc Hong Kong',
  description: 'Terms and conditions for using FindDoc',
}

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms of Use</h1>
          <p className="text-lg opacity-90">Please read these terms carefully before using our platform</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By accessing and using FindDoc, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Use License</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on FindDoc's 
              website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Disclaimer</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The materials on FindDoc's website are provided on an 'as is' basis. FindDoc makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Medical Disclaimer</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              FindDoc is a platform that connects patients with healthcare providers. We do not provide medical advice, 
              diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with 
              any questions you may have regarding a medical condition.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Limitations</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              In no event shall FindDoc or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
              to use the materials on FindDoc's website.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Revisions</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              FindDoc may revise these terms of service for its website at any time without notice. By using this website 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Hong Kong and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
