export const metadata = {
  title: 'Video Consultation | FindDoc Hong Kong',
  description: 'Consult with doctors from the comfort of your home',
}

export default function VideoConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Consultation</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Consult with doctors from the comfort of your home. Secure, convenient, and available 24/7.
          </p>
          <button className="bg-white text-[#667eea] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Find Available Doctors
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Same-Day Appointments</h3>
              <p className="text-gray-600">See a doctor within minutes, not days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">HIPAA-compliant video consultations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">Transparent pricing, no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600">Get medical care in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose a Doctor</h3>
              <p className="text-gray-600">Browse our network of verified doctors and select one that fits your needs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Book a Time</h3>
              <p className="text-gray-600">Select an available time slot that works for your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Start Video Call</h3>
              <p className="text-gray-600">Join the secure video call at your scheduled time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Common Conditions Treated</h2>
            <p className="text-gray-600">Our doctors can help with a wide range of conditions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Cold & Flu', 'Fever', 'Allergies', 'Skin Issues',
              'Digestive Problems', 'Headaches', 'Mental Health', 'Chronic Conditions',
              'Prescription Refills', 'Lab Results', 'Travel Health', 'Women\'s Health'
            ].map((condition, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
