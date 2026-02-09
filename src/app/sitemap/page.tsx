export const metadata = {
  title: 'Sitemap | FindDoc Hong Kong',
  description: 'Complete guide to all pages on FindDoc',
}

export default function SitemapPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Sitemap</h1>
          <p className="text-lg opacity-90">Complete guide to all pages on FindDoc</p>
        </div>
      </section>

      {/* Sitemap */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Main Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Main Pages</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 hover:text-primary">Homepage</a></li>
                <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
                <li><a href="/careers" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="/sitemap" className="text-gray-600 hover:text-primary">Sitemap</a></li>
              </ul>
            </div>

            {/* Doctor Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Doctor Services</h3>
              <ul className="space-y-2">
                <li><a href="/doctors" className="text-gray-600 hover:text-primary">Find a Doctor</a></li>
                <li><a href="/specialties" className="text-gray-600 hover:text-primary">Medical Specialties</a></li>
                <li><a href="/video-consultation" className="text-gray-600 hover:text-primary">Video Consultation</a></li>
                <li><a href="/doctor-profile" className="text-gray-600 hover:text-primary">Doctor Profile (Example)</a></li>
              </ul>
            </div>

            {/* Learn & Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Learn & Resources</h3>
              <ul className="space-y-2">
                <li><a href="/learn" className="text-gray-600 hover:text-primary">Health Topics</a></li>
                <li><a href="/covid-test" className="text-gray-600 hover:text-primary">COVID-19 Test</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Account</h3>
              <ul className="space-y-2">
                <li><a href="/login" className="text-gray-600 hover:text-primary">Log In</a></li>
                <li><a href="/signup" className="text-gray-600 hover:text-primary">Sign Up</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="text-gray-600 hover:text-primary">Terms of Use</a></li>
                <li><a href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
