export const metadata = {
  title: 'Contact Us | FindDoc Hong Kong',
  description: 'Get in touch with our team',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90">We're here to help. Get in touch with our team.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
              <p className="text-gray-600 mb-8">Have questions about our services? Need help with an appointment? Our team is ready to assist you.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📧</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
<a href="mailto:support@doctornearest.com" className="text-gray-600 hover:text-primary">support@doctornearest.com</a>
                    <p className="text-sm text-gray-400">For general inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Call Us</h4>
                    <a href="tel:+85230001234" className="text-gray-600 hover:text-primary">+852 3000 1234</a>
                    <p className="text-sm text-gray-400">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">💬</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <a href="https://wa.me/85290001234" className="text-gray-600 hover:text-primary">+852 9000 1234</a>
                    <p className="text-sm text-gray-400">Quick responses</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Address</h4>
                    <p className="text-gray-600">Suite 1201, 12/F, Tower 1<br/>Admiralty Centre, 18 Harcourt Road<br/>Admiralty, Hong Kong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Send us a Message</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none" required>
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="appointment">Appointment Issue</option>
                    <option value="technical">Technical Support</option>
                    <option value="doctor">Doctor Registration</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Your Message</label>
                  <textarea 
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-y"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 h-72 bg-gray-100 rounded-2xl flex items-center justify-center text-6xl">
            🗺️
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">How do I book an appointment?</h4>
              <p className="text-gray-600 text-sm">You can book an appointment by searching for a doctor, selecting your preferred time slot, and confirming your booking. You'll receive a confirmation email immediately.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Can I cancel or reschedule my appointment?</h4>
              <p className="text-gray-600 text-sm">Yes, you can cancel or reschedule your appointment through your account dashboard or by contacting the clinic directly. Please check the cancellation policy for each doctor.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">How do video consultations work?</h4>
              <p className="text-gray-600 text-sm">Video consultations allow you to consult with doctors remotely. Simply book a video appointment, and you'll receive a link to join the secure video call at your scheduled time.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
