import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 text-white text-center">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find and Book Doctors in Hong Kong</h1>
            <p className="text-xl mb-8 opacity-90">Hong Kong's #1 Medical and Healthcare Information and Appointment Platform</p>
            
            {/* Search Box */}
            <div className="bg-white rounded-xl p-6 shadow-xl flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-semibold text-gray-600 mb-2 text-left">Specialty</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 focus:border-primary focus:outline-none">
                  <option value="">All Specialties</option>
                  <option value="gp">General Practice</option>
                  <option value="dentist">Dentist</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="gynecology">Gynecology</option>
                  <option value="ophthalmology">Ophthalmology</option>
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-semibold text-gray-600 mb-2 text-left">Location</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 focus:border-primary focus:outline-none">
                  <option value="">All Districts</option>
                  <option value="central">Central</option>
                  <option value="causeway">Causeway Bay</option>
                  <option value="tsim-sha-tsui">Tsim Sha Tsui</option>
                  <option value="mong-kok">Mong Kok</option>
                  <option value="wan-chai">Wan Chai</option>
                  <option value="quarry-bay">Quarry Bay</option>
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-semibold text-gray-600 mb-2 text-left">Doctor Name</label>
                <input 
                  type="text" 
                  placeholder="Search by name..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-800 focus:border-primary focus:outline-none"
                />
              </div>
              <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Find Doctors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">7,000+</h3>
              <p className="text-gray-600">Verified Doctors</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">45+</h3>
              <p className="text-gray-600">Medical Specialties</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">700+</h3>
              <p className="text-gray-600">Health Topics</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500K+</h3>
              <p className="text-gray-600">Appointments Booked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Specialties */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Popular Specialties</h2>
            <p className="text-gray-600 text-lg">Find the right specialist for your healthcare needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Specialty Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold mb-2">General Practice</h3>
              <p className="text-gray-600 text-sm mb-3">Primary healthcare services for common illnesses and preventive care</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Cold & Flu, Fever, Check-ups, Vaccinations</p>
            </div>

            {/* Specialty Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">🦷</div>
              <h3 className="text-xl font-semibold mb-2">Dentistry</h3>
              <p className="text-gray-600 text-sm mb-3">Dental care including cleaning, fillings, and cosmetic procedures</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Toothache, Cavities, Cleaning, Braces</p>
            </div>

            {/* Specialty Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-2">Cardiology</h3>
              <p className="text-gray-600 text-sm mb-3">Heart and cardiovascular system diagnosis and treatment</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Heart Disease, Hypertension, Chest Pain</p>
            </div>

            {/* Specialty Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">🧴</div>
              <h3 className="text-xl font-semibold mb-2">Dermatology</h3>
              <p className="text-gray-600 text-sm mb-3">Skin, hair, and nail conditions diagnosis and treatment</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Acne, Eczema, Skin Cancer, Hair Loss</p>
            </div>

            {/* Specialty Card 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">👶</div>
              <h3 className="text-xl font-semibold mb-2">Pediatrics</h3>
              <p className="text-gray-600 text-sm mb-3">Healthcare for infants, children, and adolescents</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Child Fever, Growth Issues, Vaccinations</p>
            </div>

            {/* Specialty Card 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">🦴</div>
              <h3 className="text-xl font-semibold mb-2">Orthopedics</h3>
              <p className="text-gray-600 text-sm mb-3">Bone, joint, and muscle conditions treatment</p>
              <p className="text-xs text-gray-400"><strong className="text-gray-500">Common conditions:</strong> Back Pain, Sports Injuries, Fractures</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/specialties" className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              View All Specialties
            </Link>
          </div>
        </div>
      </section>

      {/* Video Consultation CTA */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] py-20 text-white text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Consultation Available</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Consult with doctors from the comfort of your home. Same-day appointments available.
          </p>
          <Link 
            href="/video-consultation"
            className="inline-block bg-white text-[#667eea] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}
