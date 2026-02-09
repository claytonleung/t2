export const metadata = {
  title: 'Learn | Health Topics & Medical Articles | FindDoc Hong Kong',
  description: 'Health topics, medical articles, and educational resources',
}

const topics = [
  { icon: '🦠', title: 'COVID-19', desc: 'Latest updates on COVID-19, vaccines, testing, and prevention' },
  { icon: '❤️', title: 'Heart Health', desc: 'Information on cardiovascular diseases and prevention' },
  { icon: '🧠', title: 'Mental Health', desc: 'Resources on anxiety, depression, and mental wellness' },
  { icon: '🍎', title: 'Nutrition & Diet', desc: 'Healthy eating guidelines and nutrition advice' },
  { icon: '🏃', title: 'Fitness & Exercise', desc: 'Exercise routines and fitness tips' },
  { icon: '👶', title: 'Children\'s Health', desc: 'Pediatric care and child development' },
  { icon: '🌙', title: 'Sleep Health', desc: 'Understanding sleep disorders and improving sleep' },
  { icon: '💉', title: 'Vaccinations', desc: 'Vaccine schedules and immunization guides' },
]

const articles = [
  { category: 'PREVENTIVE CARE', title: '10 Essential Health Check-ups Everyone Should Have', color: 'from-[#667eea] to-[#764ba2]' },
  { category: 'NUTRITION', title: 'The Mediterranean Diet: A Guide to Heart-Healthy Eating', color: 'from-[#f093fb] to-[#f5576c]' },
  { category: 'SLEEP HEALTH', title: 'Understanding Sleep Apnea: Symptoms and Treatment', color: 'from-[#4facfe] to-[#00f2fe]' },
]

const tools = [
  { icon: '📊', title: 'BMI Calculator', desc: 'Calculate your Body Mass Index' },
  { icon: '💓', title: 'Heart Rate Checker', desc: 'Check your resting heart rate' },
  { icon: '🍺', title: 'Alcohol Unit Calculator', desc: 'Track your alcohol consumption' },
  { icon: '🤰', title: 'Pregnancy Due Date', desc: 'Estimate your due date' },
]

export default function LearnPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Learn</h1>
          <p className="text-lg opacity-90">Health topics, medical articles, and educational resources</p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Health Topics</h2>
            <p className="text-gray-600">Browse our comprehensive library of health information</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{topic.desc}</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Articles</h2>
            <p className="text-gray-600">Latest health news and medical insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center text-6xl`}>🩺</div>
                <div className="p-6">
                  <span className="text-xs text-primary font-semibold">{article.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-3">{article.title}</h3>
                  <a href="#" className="text-primary font-semibold text-sm hover:underline">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Health Tools & Calculators</h2>
            <p className="text-gray-600">Free tools to help you monitor your health</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.desc}</p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                  Calculate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
