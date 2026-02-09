export const metadata = {
  title: 'Find Doctors by Specialty | FindDoc Hong Kong',
  description: 'Browse 45+ medical specialties and find the right doctor for your needs',
}

const specialties = [
  { letter: 'A', name: 'Allergy & Immunology', icon: '🩺', conditions: 'Hay Fever, Food Allergies, Asthma, Eczema' },
  { letter: 'A', name: 'Anesthesiology', icon: '🧠', conditions: 'General Anesthesia, Pain Management, Critical Care' },
  { letter: 'C', name: 'Cardiology', icon: '🫀', conditions: 'Heart Disease, Hypertension, Chest Pain, Arrhythmia' },
  { letter: 'D', name: 'Dentistry', icon: '🦷', conditions: 'Toothache, Cavities, Cleaning, Braces, Whitening' },
  { letter: 'D', name: 'Dermatology', icon: '🧴', conditions: 'Acne, Eczema, Skin Cancer, Hair Loss, Psoriasis' },
  { letter: 'E', name: 'Ear, Nose & Throat (ENT)', icon: '👁️', conditions: 'Sinusitis, Hearing Loss, Tonsillitis, Vertigo' },
  { letter: 'E', name: 'Endocrinology', icon: '🔬', conditions: 'Diabetes, Thyroid Disorders, Hormone Imbalance' },
  { letter: 'G', name: 'General Practice', icon: '👨‍⚕️', conditions: 'Cold & Flu, Fever, Check-ups, Vaccinations' },
  { letter: 'G', name: 'Gastroenterology', icon: '🩺', conditions: 'GERD, IBS, Liver Disease, Stomach Pain' },
  { letter: 'G', name: 'Gynecology', icon: '🚺', conditions: 'Pregnancy, Menstrual Issues, Fertility, Menopause' },
  { letter: 'H', name: 'Hematology', icon: '🩸', conditions: 'Anemia, Leukemia, Blood Clots, Bleeding Disorders' },
  { letter: 'I', name: 'Infectious Disease', icon: '🦠', conditions: 'COVID-19, HIV/AIDS, Hepatitis, Tropical Diseases' },
  { letter: 'I', name: 'Internal Medicine', icon: '💉', conditions: 'Chronic Diseases, Multi-system Disorders' },
  { letter: 'N', name: 'Nephrology', icon: '🧠', conditions: 'Kidney Disease, Dialysis, Hypertension' },
  { letter: 'N', name: 'Neurology', icon: '🧠', conditions: 'Stroke, Epilepsy, Migraine, Parkinson\'s Disease' },
  { letter: 'O', name: 'Ophthalmology', icon: '👁️', conditions: 'Cataracts, Glaucoma, Myopia, Eye Infections' },
  { letter: 'O', name: 'Orthopedics', icon: '🦴', conditions: 'Back Pain, Sports Injuries, Fractures, Arthritis' },
  { letter: 'O', name: 'Oncology', icon: '🔬', conditions: 'All Types of Cancer, Tumors, Chemotherapy' },
  { letter: 'P', name: 'Pediatrics', icon: '👶', conditions: 'Child Fever, Growth Issues, Vaccinations, Development' },
  { letter: 'P', name: 'Psychiatry', icon: '🧠', conditions: 'Depression, Anxiety, Bipolar Disorder, ADHD' },
  { letter: 'P', name: 'Pulmonology', icon: '🫁', conditions: 'Asthma, COPD, Pneumonia, Sleep Apnea' },
  { letter: 'R', name: 'Radiology', icon: '📡', conditions: 'X-Ray, CT Scan, MRI, Ultrasound, Mammography' },
  { letter: 'R', name: 'Rheumatology', icon: '🩺', conditions: 'Rheumatoid Arthritis, Lupus, Gout, Fibromyalgia' },
  { letter: 'S', name: 'Surgery', icon: '🔪', conditions: 'General Surgery, Laparoscopic Surgery, Minimally Invasive' },
  { letter: 'U', name: 'Urology', icon: '🚹', conditions: 'Kidney Stones, Prostate Issues, Urinary Infections' },
  { letter: 'V', name: 'Video Consultation', icon: '🎥', conditions: 'Online Diagnosis, Prescription, Follow-up Care' },
]

const letters = ['A', 'C', 'D', 'E', 'G', 'H', 'I', 'N', 'O', 'P', 'R', 'S', 'U', 'V']

export default function SpecialtiesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Find Doctors by Specialties</h1>
          <p className="text-lg opacity-90">Browse 45+ medical specialties and find the right doctor for your needs</p>
        </div>
      </section>

      {/* Specialties List */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          {/* Alphabetical Quick Links */}
          <div className="mb-10 text-center">
            <p className="text-gray-500 mb-3">Jump to:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {letters.map(letter => (
                <a 
                  key={letter} 
                  href={`#${letter}`}
                  className="px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                id={specialty.letter}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-3xl mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{specialty.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {specialty.name === 'Video Consultation' 
                    ? 'Remote medical consultations from home' 
                    : `${specialty.name} diagnosis and treatment services`
                  }
                </p>
                <p className="text-xs text-gray-400 mb-4">
                  <strong className="text-gray-500">
                    {specialty.name === 'Video Consultation' ? 'Services:' : 'Common conditions:'}
                  </strong> {specialty.conditions}
                </p>
                <a 
                  href={specialty.name === 'Video Consultation' ? '/video-consultation' : '/doctors'}
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
                >
                  {specialty.name === 'Video Consultation' ? 'Learn More' : 'Book Doctor'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
