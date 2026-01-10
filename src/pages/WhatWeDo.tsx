import { Apple, Utensils, Users, Heart, Accessibility, Baby } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Providing meals beyond hospital rations to nourish both body and spirit.',
    },
    {
      icon: Heart,
      title: 'Clean Clothing & Blankets',
      description: 'Ensuring patients have dignity through clean, comfortable clothing and warm blankets.',
    },
    {
      icon: Accessibility,
      title: 'Hygiene Supplies',
      description: 'Basic necessities that allow patients to maintain their dignity and self-respect.',
    },
    {
      icon: Users,
      title: 'Transport Assistance',
      description: 'Helping patients get where they need to go after discharge.',
    },
  ];

  const vulnerable = [
    { icon: Baby, title: 'Children', description: 'Admitted alone or abandoned, needing care and presence' },
    { icon: Users, title: 'Elderly', description: 'Without family, facing isolation and neglect' },
    { icon: Heart, title: 'Long-term Patients', description: 'Losing hope after months in hospital care' },
    { icon: Accessibility, title: 'Stigmatized Individuals', description: 'Rejected due to poverty, illness, or social status' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">What We Do</h1>
          <p className="text-xl text-slate-600">
            Caring Beyond Medicine
          </p>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            While doctors and nurses fight disease, we fight neglect, isolation, and despair. We exist to restore dignity, hope, and humanity to vulnerable patients.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section 1: Restoring Dignity */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Restoring Dignity Through Basic Care</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            For many patients, healing is delayed not by medicine, but by hunger, discomfort, and neglect. We provide the basic necessities that allow people to feel human again.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Emotional Presence */}
        <section className="mb-20 bg-gradient-to-r from-blue-50 to-slate-50 p-8 sm:p-12 rounded-2xl border border-blue-200">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Emotional Presence & Human Connection</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Sometimes, the greatest need is not something we carry—it is our presence itself.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Sitting With Patients</h3>
                <p className="text-slate-700">Simply being present, offering companionship in moments of fear and pain.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Listening</h3>
                <p className="text-slate-700">Hearing their stories, acknowledging their struggles, honoring their humanity.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">Human Companionship</h3>
                <p className="text-slate-700">Reminding them that they matter, that they are not invisible, that someone cares.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Standing With The Vulnerable */}
        <section>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Standing With the Most Vulnerable</h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            We intentionally reach those who are often overlooked. These are not statistics to us. They are people with names, stories, and dreams.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vulnerable.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 text-center"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${(index + 4) * 0.1}s backwards`,
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{group.title}</h3>
                  <p className="text-sm text-slate-600">{group.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-slate-900 text-white p-8 sm:p-12 rounded-xl">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              We don't measure our impact by statistics. We measure it by names remembered, by hope restored, by a single moment when someone felt seen. These are the victories that matter most.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
