import { Heart, Users, Stethoscope, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const heroImages = [
    '/whatWeDo.jpg',
    '/patient101.avif',
    '/aboutUs.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0" />
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Image - Left Side with Shuffling Animation */}
            <div className="relative z-10 order-first">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent z-10" />
                
                {/* Image Container with Fade Transition */}
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                  {heroImages.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`Hangscare Foundation caring for patients - Image ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105'
                      }`}
                      style={{
                        transform: index === currentImageIndex 
                          ? 'scale(1)' 
                          : 'scale(1.05)',
                        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                      }}
                    />
                  ))}
                  
                  {/* Floating Animation Overlay */}
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-500 rounded-full animate-ping" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </div>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'w-8 bg-yellow-500'
                          : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content - Right Side with Animations */}
            <div className="text-center lg:text-right space-y-8 fade-in-up z-10 order-last lg:order-last">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
                  Caring Beyond
                  <span className="block text-yellow-500 animate-pulse-slow">Treatment</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-100 max-w-3xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Restoring dignity, hope, and humanity to vulnerable patients who have been forgotten by the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => onNavigate?.('get-involved')}
                  className="group bg-gradient-to-r from-yellow-600 to-yellow-700 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Support a Patient
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-slate-900 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                >
                  Learn Our Story
                </button>
              </div>

              {/* Floating Stats or Info Cards */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-yellow-500 font-bold text-lg">100+</div>
                  <div className="text-white/80 text-sm">Patients Helped</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-yellow-500/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-yellow-500 font-bold text-lg">24/7</div>
                  <div className="text-white/80 text-sm">Care Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-slate-600 leading-relaxed">
                Hangscare Foundation exists to restore dignity, hope, and humanity to vulnerable patients. While doctors and nurses fight disease, we fight neglect, isolation, and despair. We believe that every person deserves care—not just medical treatment, but genuine human presence and compassion.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/patients_img.jpg" 
                alt="Hangscare Foundation providing care and support to patients" 
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-yellow-500/20"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s backwards`,
                  }}
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-yellow-600" />
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
          <div className="bg-gradient-to-r from-yellow-600/10 to-slate-600/10 rounded-xl p-8 sm:p-12 border-2 border-yellow-500/30">
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
              className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
            >
              Read the Full Story <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-t-2 border-yellow-500/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Every Patient Deserves Dignity</h2>
          <p className="text-xl opacity-95">
            Join us in transforming healthcare to include compassion, care, and human presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => onNavigate?.('get-involved')}
              className="bg-yellow-600 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Partner With Us
            </button>
            <button
              onClick={() => onNavigate?.('get-involved')}
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500/10 transition-colors"
            >
              Volunteer Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
