import { Heart, Users, Briefcase, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('donate');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
  });
  const [submitted, setSubmitted] = useState<'contact' | 'volunteer' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from('contacts').insert([contactForm]);
      setContactForm({ name: '', email: '', message: '' });
      setSubmitted('contact');
      setTimeout(() => setSubmitted(null), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await supabase.from('volunteers').insert([volunteerForm]);
      setVolunteerForm({ name: '', email: '', phone: '', availability: '' });
      setSubmitted('volunteer');
      setTimeout(() => setSubmitted(null), 5000);
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
    } finally {
      setLoading(false);
    }
  };

  const ways = [
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your financial support directly provides meals, clothing, hygiene supplies, and transport assistance to vulnerable patients.',
      color: 'from-red-50 to-pink-50',
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Be the human presence that changes lives. Sit with patients, listen to their stories, and remind them they matter.',
      color: 'from-yellow-50 to-cyan-50',
    },
    {
      icon: Briefcase,
      title: 'Partner With Us',
      description: 'Healthcare institutions, corporations, and organizations can partner with us to scale our impact and reach more patients.',
      color: 'from-amber-50 to-orange-50',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Get Involved</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            There are many ways to join us in creating a healthcare system with a heart.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Ways to Get Involved */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">How You Can Help</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(way.title.toLowerCase())}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 text-left cursor-pointer ${
                    activeTab === way.title.toLowerCase()
                      ? 'border-yellow-600 bg-yellow-50 shadow-lg'
                      : 'border-slate-200 hover:border-yellow-300'
                  }`}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <div className={`bg-gradient-to-br ${way.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{way.title}</h3>
                  <p className="text-slate-600">{way.description}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Tab Content */}
        <section className="mb-20">
          {/* Donate Tab */}
          {activeTab === 'donate' && (
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 sm:p-12 rounded-2xl border-2 border-red-200 fade-in">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Support a Patient</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Every donation directly impacts a patient's life. Your support provides:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Nutritious meals beyond hospital rations',
                      'Clean clothing and blankets',
                      'Essential hygiene supplies',
                      'Transport assistance after discharge',
                      'Human presence and emotional support',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border-2 border-red-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Donation Options</h4>
                  <div className="space-y-3">
                    {['One-time Donation', 'Monthly Support', 'Donate in Memory', 'Corporate Giving'].map((option, i) => (
                      <button
                        key={i}
                        className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Volunteer Tab */}
          {activeTab === 'volunteer' && (
            <div className="bg-gradient-to-r from-yellow-50 to-cyan-50 p-8 sm:p-12 rounded-2xl border-2 border-yellow-200 fade-in">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Join Our Volunteer Community</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Volunteers are the heart of Hangscare. You don't need medical training—you just need a caring heart and willingness to show up.
                  </p>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">What Volunteers Do</h4>
                  <ul className="space-y-3">
                    {[
                      'Sit with patients and listen to their stories',
                      'Bring meals and comfort items',
                      'Help with basic assistance tasks',
                      'Provide emotional support',
                      'Assist with discharge transitions',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleVolunteerSubmit} className="bg-white p-8 rounded-xl border-2 border-yellow-200 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Availability</label>
                    <select
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-yellow-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {loading ? 'Submitting...' : 'Sign Up to Volunteer'}
                  </button>

                  {submitted === 'volunteer' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
                      Thank you! We'll be in touch soon with volunteer opportunities.
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* Partner Tab */}
          {activeTab === 'partner' && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 sm:p-12 rounded-2xl border-2 border-amber-200 fade-in">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Partner With Hangscare</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    We welcome partnerships with healthcare institutions, corporations, and organizations committed to improving patient care and dignity.
                  </p>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Partnership Benefits</h4>
                  <ul className="space-y-3">
                    {[
                      'Expand healthcare compassion initiatives',
                      'Access to volunteer network',
                      'Impact reporting and transparency',
                      'Corporate social responsibility alignment',
                      'Joint community initiatives',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleContactSubmit} className="bg-white p-8 rounded-xl border-2 border-amber-200 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Partnership Interest</label>
                    <textarea
                      required
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Tell us about your organization and partnership interests..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {loading ? 'Submitting...' : 'Contact Us'}
                  </button>

                  {submitted === 'contact' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
                      Thank you! We'll review your inquiry and get in touch soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Contact Info */}
        <section>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <a href="mailto:info@hangscare.org" className="text-yellow-400 hover:text-yellow-300">
                  info@hangscare.org
                </a>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Phone</h4>
                <a href="tel:+1-555-123-4567" className="text-yellow-400 hover:text-yellow-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Address</h4>
                <p className="text-slate-300">
                  Healthcare District<br />
                  City, State
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
