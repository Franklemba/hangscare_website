import { Heart, Users, Stethoscope, HandHeart, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const impacts = [
    {
      icon: Heart,
      title: 'Basic Care',
      description: 'Nutritious meals, clean clothing, blankets, and hygiene supplies',
    },
    {
      icon: Users,
      title: 'Emotional Support',
      description: 'Human connection, listening, and presence for isolated patients',
    },
    {
      icon: Stethoscope,
      title: 'Vulnerable Patients',
      description: 'Standing with the elderly, children, long-term patients, and stigmatized individuals',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Caring Beyond
              <span className="block text-blue-600">Treatment</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Restoring dignity, hope, and humanity to vulnerable patients who have been forgotten by the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => onNavigate?.('get-involved')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Support a Patient
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate?.('about')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-center max-w-3xl mx-auto">
            Hangscare Foundation exists to restore dignity, hope, and humanity to vulnerable patients. While doctors and nurses fight disease, we fight neglect, isolation, and despair. We believe that every person deserves care—not just medical treatment, but genuine human presence and compassion.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Key Impact Areas</h2>
          <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
            We address the deepest needs of vulnerable patients through three pillars of care
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s backwards`,
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{impact.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{impact.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/10 to-slate-600/10 rounded-xl p-8 sm:p-12 border border-blue-200/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Born From the Hospital Ward
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Hangscare Foundation was not born from convenience or theory. It was born in hospital corridors heavy with silence, in wards where machines beep through the night. We encountered patients who had no visitors, no meals beyond hospital rations, and most tragically—no one to speak for them.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              What broke our hearts was not only the illness—it was the loneliness. It was seeing human beings reduced to survival, stripped of dignity simply because they were poor, abandoned, or vulnerable.
            </p>
            <button
              onClick={() => onNavigate?.('about')}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read the Full Story <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Every Patient Deserves Dignity</h2>
          <p className="text-xl opacity-95">
            Join us in transforming healthcare to include compassion, care, and human presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => onNavigate?.('get-involved')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Partner With Us
            </button>
            <button
              onClick={() => onNavigate?.('get-involved')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Volunteer Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
