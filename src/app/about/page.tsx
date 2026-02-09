export const metadata = {
  title: 'About Us | FindDoc Hong Kong',
  description: 'Hong Kong\'s leading healthcare information and appointment platform',
}

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">About FindDoc</h1>
          <p className="text-lg opacity-90">Hong Kong's leading healthcare information and appointment platform</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our User's Health Is Our Number One Priority</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            FindDoc was founded in 2012 with a simple mission: to help people in Hong Kong find the right doctor 
            and make informed healthcare decisions. Inspired by the late Mohan Mahtani, a respected Hong Kong 
            business leader, our platform was created after his family experienced the frustration of searching 
            for reliable medical information.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe that everyone deserves easy access to quality healthcare. That's why we've built an 
            intuitive platform that connects patients with verified healthcare providers across 45+ medical 
            specialties.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 my-10 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary">45+</h4>
              <p className="text-sm text-gray-600">Medical Specialties</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary">700+</h4>
              <p className="text-sm text-gray-600">Health Topics</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary">7,000+</h4>
              <p className="text-sm text-gray-600">Verified Doctors</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">How Patients Use FindDoc</h2>
          <div className="space-y-4 mb-8">
            <p className="text-gray-600"><strong>1. Search:</strong> Use our comprehensive search to find doctors by specialty, location, or name.</p>
            <p className="text-gray-600"><strong>2. Compare:</strong> View real-time availability and compare doctors based on your preferences.</p>
            <p className="text-gray-600"><strong>3. Book:</strong> Schedule your appointment in just 3 clicks. Receive instant confirmation.</p>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-gray-800">Leadership</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            <strong>Ivan Ng - CEO & Founder</strong><br />
            Ivan is the visionary leader behind FindDoc, bringing extensive experience in technology and 
            healthcare innovation. With a background in mobile marketing and telecommunications, he has 
            successfully led FindDoc to become Hong Kong's most trusted healthcare platform.
          </p>
        </div>
      </section>
    </>
  );
}
