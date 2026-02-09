export const metadata = {
  title: 'COVID-19 Test & Assessment | FindDoc Hong Kong',
  description: 'Check your symptoms and find testing locations',
}

export default function CovidTestPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">COVID-19 Self Assessment</h1>
          <p className="text-lg opacity-90">Check your symptoms and find testing locations</p>
        </div>
      </section>

      {/* Assessment */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            {/* Warning */}
            <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8 rounded-r-lg">
              <p className="text-gray-700 text-sm">
                <strong>⚠️ Important:</strong> This tool is for informational purposes only and is not a substitute for professional medical advice. 
                If you have severe symptoms, please call 999 or go to the nearest emergency room immediately.
              </p>
            </div>

            {/* Assessment Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Progress */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                <div className="w-1/5 h-full bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </div>

              <p className="text-sm text-gray-500 mb-2">Question 1 of 5</p>
              <h3 className="text-xl font-semibold mb-6">Are you experiencing any of the following symptoms?</h3>

              <div className="space-y-3 mb-8">
                {['Fever or chills', 'New or worsening cough', 'Shortness of breath', 'Loss of taste or smell', 'None of the above'].map((symptom, index) => (
                  <label key={index} className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary transition-colors">
                    <input type="checkbox" className="w-5 h-5 text-primary rounded" />
                    <span className="text-gray-700">{symptom}</span>
                  </label>
                ))}
              </div>

              <div className="flex justify-between pt-6 border-t">
                <button className="px-6 py-3 border-2 border-gray-200 rounded-lg text-gray-600 font-semibold opacity-50" disabled>
                  Previous
                </button>
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">COVID-19 Information</h2>
            <p className="text-gray-600">Stay informed with the latest updates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💉', title: 'Vaccination', desc: 'Learn about COVID-19 vaccines in Hong Kong' },
              { icon: '🧪', title: 'Testing Options', desc: 'PCR tests and rapid antigen tests' },
              { icon: '🏠', title: 'Quarantine Guidelines', desc: 'Current isolation requirements' },
              { icon: '🛡️', title: 'Prevention', desc: 'Best practices for protection' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
