export const metadata = {
  title: 'Find Doctors in Hong Kong | FindDoc',
  description: 'Browse and book appointments with verified healthcare professionals',
}

export default function DoctorsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Doctors in Hong Kong</h1>
          <p className="text-lg opacity-90">Browse and book appointments with verified healthcare professionals</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Specialty</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                <option value="">All Specialties</option>
                <option value="gp">General Practice</option>
                <option value="dentist">Dentist</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="gynecology">Gynecology</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="ent">ENT</option>
                <option value="oncology">Oncology</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Location</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                <option value="">All Districts</option>
                <option value="central">Central</option>
                <option value="causeway">Causeway Bay</option>
                <option value="tsim-sha-tsui">Tsim Sha Tsui</option>
                <option value="mong-kok">Mong Kok</option>
                <option value="wan-chai">Wan Chai</option>
                <option value="quarry-bay">Quarry Bay</option>
                <option value="north-point">North Point</option>
                <option value="kowloon">Kowloon Bay</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Doctor's Gender</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                <option value="">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-sm font-semibold text-gray-600 mb-2">Language</label>
              <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                <option value="">Any</option>
                <option value="english">English</option>
                <option value="cantonese">Cantonese</option>
                <option value="mandarin">Mandarin</option>
              </select>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Find Time Slots
            </button>
          </div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <p className="text-gray-600 mb-6">7,038 doctors found in all districts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctor Cards */}
            {[
              { name: 'Dr. Chan Sum Yin Ann', specialty: 'Clinical Oncologist', location: 'Central, Hong Kong' },
              { name: 'Dr. Wong Ka Man', specialty: 'General Practitioner', location: 'Causeway Bay, Hong Kong' },
              { name: 'Dr. Lee Siu Ming', specialty: 'Dentist', location: 'Tsim Sha Tsui, Hong Kong' },
              { name: 'Dr. Chen Wei Ling', specialty: 'Dermatologist', location: 'Wan Chai, Hong Kong' },
              { name: 'Dr. Lau Chi Keung', specialty: 'Cardiologist', location: 'Central & 2 more locations' },
              { name: 'Dr. Ng Mei Fong', specialty: 'Pediatrician', location: 'Mong Kok, Hong Kong' },
              { name: 'Dr. Ho Wai Kit', specialty: 'Orthopedic Surgeon', location: 'Quarry Bay, Hong Kong' },
              { name: 'Dr. Tam Yuk Lin', specialty: 'Gynecologist', location: 'Tsim Sha Tsui, Hong Kong' },
              { name: 'Dr. Yip Kwok Wai', specialty: 'Ophthalmologist', location: 'Central, Hong Kong' },
              { name: 'Dr. Mak Chun Yin', specialty: 'ENT Specialist', location: 'Causeway Bay, Hong Kong' },
              { name: 'Dr. Chow Wing Hang', specialty: 'Psychiatrist', location: 'Wan Chai, Hong Kong' },
              { name: 'Dr. Tsang Man Ho', specialty: 'Endocrinologist', location: 'North Point, Hong Kong' },
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    Dr
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                    <p className="text-primary text-sm">{doctor.specialty}</p>
                    <p className="text-gray-500 text-sm">📍 {doctor.location}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors">
                    Book Now
                  </button>
                  <button className="flex-1 border-2 border-primary text-primary py-2 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2 items-center">
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg opacity-50" disabled>← Previous</button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg">1</button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary">2</button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary">3</button>
              <span className="text-gray-400">...</span>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary">587</button>
              <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-primary">Next →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
