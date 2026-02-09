import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white pt-[60px] pb-6">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-base font-semibold mb-5">Log In/Sign Up</h4>
            <ul className="space-y-3">
              <li><Link href="/login" className="text-gray-400 text-sm hover:text-white transition-colors">Patient Login</Link></li>
              <li><Link href="/login" className="text-gray-400 text-sm hover:text-white transition-colors">Doctor Login</Link></li>
              <li><Link href="/signup" className="text-gray-400 text-sm hover:text-white transition-colors">Register Account</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-base font-semibold mb-5">Find a Doctor</h4>
            <ul className="space-y-3">
              <li><Link href="/doctors" className="text-gray-400 text-sm hover:text-white transition-colors">By Specialty</Link></li>
              <li><Link href="/doctors" className="text-gray-400 text-sm hover:text-white transition-colors">By Location</Link></li>
              <li><Link href="/doctors" className="text-gray-400 text-sm hover:text-white transition-colors">By Hospital</Link></li>
              <li><Link href="/video-consultation" className="text-gray-400 text-sm hover:text-white transition-colors">Video Consultation</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-base font-semibold mb-5">Learn</h4>
            <ul className="space-y-3">
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">Health Topics</Link></li>
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">Medical Articles</Link></li>
              <li><Link href="/covid-test" className="text-gray-400 text-sm hover:text-white transition-colors">COVID-19 Test</Link></li>
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-base font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">For Doctors</Link></li>
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">For Clinics</Link></li>
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">Insurance Partners</Link></li>
              <li><Link href="/learn" className="text-gray-400 text-sm hover:text-white transition-colors">Medical News</Link></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-base font-semibold mb-5">About FindDoc</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2024 FindDoc. All rights reserved. Hong Kong's #1 Healthcare Platform.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="Facebook">f</a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="Instagram">📷</a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="LinkedIn">in</a>
            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors" title="YouTube">▶</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
