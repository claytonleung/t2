export const metadata = {
  title: 'Careers | FindDoc Hong Kong',
  description: 'Join us in transforming healthcare in Hong Kong',
}

const jobs = [
  { title: 'Senior Software Engineer', dept: 'Engineering', type: 'Full-time', tags: ['React', 'Node.js', 'AWS'] },
  { title: 'Product Manager', dept: 'Product', type: 'Full-time', tags: ['Healthcare', 'Strategy', 'Analytics'] },
  { title: 'UX/UI Designer', dept: 'Design', type: 'Full-time', tags: ['Figma', 'Mobile', 'Design Systems'] },
  { title: 'Marketing Manager', dept: 'Marketing', type: 'Full-time', tags: ['Digital', 'Growth', 'Content'] },
  { title: 'Customer Success Manager', dept: 'Operations', type: 'Full-time', tags: ['Support', 'Healthcare', 'Bilingual'] },
]

const benefits = [
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical, dental, and vision coverage' },
  { icon: '💰', title: 'Competitive Salary', desc: 'Above-market compensation with bonuses' },
  { icon: '🏖️', title: 'Flexible Leave', desc: 'Generous annual leave and flexible working' },
  { icon: '📚', title: 'Learning & Development', desc: 'Annual learning budget and conference attendance' },
  { icon: '🏋️', title: 'Wellness Programs', desc: 'Gym membership and mental health support' },
  { icon: '🍱', title: 'Free Meals & Snacks', desc: 'Catered lunches and snacks' },
]

export default function CareersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Careers at FindDoc</h1>
          <p className="text-lg opacity-90">Join us in transforming healthcare in Hong Kong</p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Work at FindDoc?</h2>
            <p className="text-gray-600">Be part of a mission-driven team making healthcare accessible</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">Help millions access quality healthcare</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fast-Paced Growth</h3>
              <p className="text-gray-600">Join a rapidly growing startup</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Work with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Open Positions</h2>
            <p className="text-gray-600">Join our team and shape the future of healthcare</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-500 text-sm">{job.dept} • Hong Kong • {job.type}</p>
                  <div className="flex gap-2 mt-2">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Benefits & Perks</h2>
            <p className="text-gray-600">We take care of our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
