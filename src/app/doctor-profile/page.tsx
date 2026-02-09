export const metadata = {
  title: 'Dr. Wong Ka Man - General Practitioner | FindDoc Hong Kong',
  description: 'Book an appointment with Dr. Wong Ka Man, General Practitioner in Causeway Bay',
}

export default function DoctorProfilePage() {
  return (
    <>
      {/* Profile Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-12 text-white">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-5xl flex-shrink-0">
              👨‍⚕️
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-1">Dr. Wong Ka Man</h1>
              <p className="text-lg opacity-90 mb-2">General Practitioner (GP)</p>
              <p className="opacity-80">📍 Causeway Bay, Hong Kong</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 pb-3 border-b">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Wong Ka Man is an experienced General Practitioner with over 15 years of clinical experience. 
                  He completed his medical training at the University of Hong Kong and has worked in both public and 
                  private healthcare settings. Dr. Wong is known for his patient-centered approach and thorough consultations.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 pb-3 border-b">Qualifications</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🎓</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Medical Degree</h4>
                      <p className="text-gray-700">MBBS, University of Hong Kong (2005)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">📜</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Professional Registration</h4>
                      <p className="text-gray-700">Registered Medical Practitioner, Hong Kong Medical Council</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🏆</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Specializations</h4>
                      <p className="text-gray-700">Family Medicine, Chronic Disease Management, Preventive Care</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 pb-3 border-b">Languages</h2>
                <div className="flex gap-2 flex-wrap">
                  {['English', 'Cantonese', 'Mandarin'].map((lang) => (
                    <span key={lang} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinic Info */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 pb-3 border-b">Clinic Information</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🏥</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Clinic Name</h4>
                      <p className="text-gray-700">Wong & Associates Medical Centre</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">📍</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Address</h4>
                      <p className="text-gray-700">Suite 1205, 12/F, Times Square Tower 2<br/>1 Matheson Street, Causeway Bay, Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🚇</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Nearest MTR</h4>
                      <p className="text-gray-700">Causeway Bay Station (Exit A)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg flex-shrink-0">🕐</div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500">Opening Hours</h4>
                      <p className="text-gray-700">Mon-Fri: 9:00 AM - 7:00 PM<br/>Sat: 9:00 AM - 1:00 PM<br/>Sun & Public Holidays: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
                <div className="text-3xl font-bold text-primary mb-1">$500</div>
                <p className="text-sm text-gray-500 mb-6">Consultation fee (first visit)</p>

                {/* Calendar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <button className="text-gray-400 hover:text-primary">‹</button>
                    <span className="font-semibold">February 2024</span>
                    <button className="text-gray-400 hover:text-primary">›</button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-sm">
                    {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                      <div key={d} className="text-gray-400 text-xs py-2">{d}</div>
                    ))}
                    {[...Array(10)].map((_, i) => {
                      const day = i + 1
                      const isAvailable = [1,2,5,6,7,8,9].includes(day)
                      const isSelected = day === 6
                      return (
                        <div 
                          key={i} 
                          className={`py-2 rounded cursor-pointer text-sm ${
                            isSelected ? 'bg-primary text-white' : 
                            isAvailable ? 'bg-secondary/20 text-secondary hover:bg-secondary/30' : 
                            'text-gray-300'
                          }`}
                        >
                          {day}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Available Time Slots - Thu, Feb 6</p>
                  <div className="grid grid-cols-3 gap-2">
                    {['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM'].map((time, i) => (
                      <button 
                        key={i} 
                        className={`py-2 px-1 text-sm rounded border-2 transition-colors ${
                          time === '10:00 AM' 
                            ? 'bg-primary text-white border-primary' 
                            : 'border-gray-200 hover:border-primary'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Book Now
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  or <a href="#" className="text-primary hover:underline">Send WhatsApp</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
