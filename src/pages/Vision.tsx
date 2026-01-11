import { Eye, Heart, Users, Lightbulb, Target } from 'lucide-react';

export default function Vision() {
  const visions = [
    {
      icon: Heart,
      title: 'Compassion as Essential',
      description: 'A future where compassion is not optional in healthcare, but essential to every interaction.',
    },
    {
      icon: Users,
      title: 'No Patient Left Behind',
      description: 'A future where no patient is ignored because they are poor, abandoned, or vulnerable.',
    },
    {
      icon: Lightbulb,
      title: 'Dignity Protected',
      description: 'A future where dignity is protected, even in sickness, and treated as a fundamental right.',
    },
    {
      icon: Target,
      title: 'Body and Spirit Healed',
      description: 'A future where hospitals treat both the body and the spirit, not just the disease.',
    },
  ];

  const goals = [
    'Structured patient welfare programs within hospitals',
    'Psychosocial and emotional support as part of standard care',
    'Stronger systems for patient reintegration after discharge',
    'A national culture that values dignity in illness',
    'Healthcare professionals trained in compassionate care',
    'Community involvement in patient wellness',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Eye className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Our Vision</h1>
          <h2 className="text-3xl text-yellow-600 font-bold">A Healthcare System With a Heart</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Vision Statement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-8 sm:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">We Envision a Future Where...</h2>
            <p className="text-lg leading-relaxed">
              Compassion is not optional in healthcare, but essential. A future where no patient is ignored because they are poor. A future where dignity is protected, even in sickness. A future where hospitals treat both the body and the spirit.
            </p>
          </div>
        </section>

        {/* Vision Pillars */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Vision Pillars</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {visions.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{vision.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{vision.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Strategic Goals & Initiatives</h2>

          <div className="bg-gradient-to-r from-slate-50 to-yellow-50 p-8 sm:p-12 rounded-2xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="text-slate-700 font-semibold leading-relaxed">{goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System-Level Compassion */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-yellow-50 via-white to-slate-50 p-8 sm:p-12 rounded-2xl border-l-4 border-yellow-600">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">System-Level Compassion</h3>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                We believe that compassion must be built into the systems of healthcare, not left to chance or individual virtue. This means:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Training healthcare professionals to see patients as whole people, not just diagnoses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Creating protocols that include psychosocial support in patient care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Building partnerships between hospitals and community organizations like Hangscare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Measuring success not just by survival rates, but by quality of life and dignity preserved</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dignity-Centered Healthcare */}
        <section>
          <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6">Dignity-Centered Healthcare</h3>
            <p className="text-lg leading-relaxed mb-6">
              At the heart of our vision is a radical idea: that dignity is not a luxury for the wealthy or powerful. It is a fundamental right of every human being, especially in their most vulnerable moments.
            </p>
            <p className="text-lg leading-relaxed">
              When someone is admitted to a hospital, they should not lose their personhood. When someone cannot afford basic care, they should not lose their worth. When someone is dying, they should not die alone. This is what dignity-centered healthcare looks like, and this is what we are working toward.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
