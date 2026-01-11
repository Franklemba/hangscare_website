import { Handshake, Heart, Users, Lightbulb } from 'lucide-react';

export default function Promise() {
  const promises = [
    {
      icon: Heart,
      title: 'We Promise to Show Up',
      description: 'Every single day, we will keep showing up. Not when it is convenient, but when it matters most. For the patient with no visitors. For the person who has been forgotten.',
    },
    {
      icon: Users,
      title: 'We Promise to Listen',
      description: 'We will truly listen. Not to fix, not to judge, but to understand. To honor every story, every pain, every small victory in the journey toward healing.',
    },
    {
      icon: Lightbulb,
      title: 'We Promise to Choose Compassion',
      description: 'We will choose compassion, even when it is difficult. Even when it costs something. Even when it would be easier not to. Compassion is not optional—it is essential.',
    },
    {
      icon: Handshake,
      title: 'We Promise to Defend Dignity',
      description: 'We make a solemn promise: human dignity is non-negotiable. It cannot be stripped away by poverty, illness, or circumstance. We will defend it, fiercely and always.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-yellow-50 to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Handshake className="w-12 h-12 text-yellow-600" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Our Promise</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A moral contract with the public. A commitment that transcends words and becomes action every single day.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Opening Statement */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-8 sm:p-12 rounded-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hangscare Foundation Exists Because Someone Must Care</h2>
            <p className="text-lg leading-relaxed">
              In a world where patients can be reduced to statistics, where poverty can be treated as a moral failing, where loneliness is overlooked as a symptom—someone must stand and say: this is wrong. This changes now. We will be that someone.
            </p>
          </div>
        </section>

        {/* The Promises */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Solemn Promises</h2>

          <div className="space-y-8">
            {promises.map((promise, index) => {
              const Icon = promise.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 sm:p-10 rounded-xl border-2 border-slate-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.15}s backwards`,
                  }}
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 w-16 h-16 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-yellow-600" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{promise.title}</h3>
                      <p className="text-lg text-slate-700 leading-relaxed">{promise.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Consistency and Commitment */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 sm:p-10 rounded-xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Consistency</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We understand that compassion must be reliable. A patient cannot afford to hope for care one day and despair the next. Therefore, we commit to consistency—showing up not just once, but repeatedly, predictably, faithfully.
              </p>
              <p className="text-slate-600 italic">
                This is our promise: you can count on us.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 rounded-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Compassion as Action</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                We know that compassion is not just a feeling. It is a verb. It is what we do when we feed someone, listen to someone, sit with someone in their pain. Compassion without action is merely sentiment.
              </p>
              <p className="text-slate-600 italic">
                We translate our care into concrete, meaningful action.
              </p>
            </div>
          </div>
        </section>

        {/* The Heart of the Matter */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6">At the Heart of It All: Dignity</h3>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Every promise we make flows from one unshakeable conviction: <span className="font-semibold">human dignity is non-negotiable.</span>
              </p>
              <p className="text-lg leading-relaxed">
                No one is too poor to deserve care. No one is too sick to deserve respect. No one is too broken to deserve hope. These are not political statements—they are simple truths about what it means to be human.
              </p>
              <p className="text-lg leading-relaxed">
                When someone walks through a hospital door, they do not surrender their right to be treated as a person. And if the system has forgotten that, Hangscare Foundation will remember.
              </p>
            </div>
          </div>
        </section>

        {/* Invitation */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-yellow-50 to-slate-50 p-8 sm:p-12 rounded-2xl border-l-4 border-yellow-600">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">We Invite You to Join Us</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              This promise is not just Hangscare's. It is a promise that belongs to everyone who believes that healthcare should include compassion, that poverty does not determine worth, and that human presence is medicine.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We invite the public, partners, and supporters to walk this journey with us. Together, we can turn compassion into action—and ensure that care truly means caring.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            This is Our Promise. This is Our Mission. This is Our Calling.
          </h2>
          <p className="text-xl text-yellow-600 font-semibold">
            Hangscare Foundation – Caring Beyond Treatment
          </p>
        </section>
      </div>
    </div>
  );
}
