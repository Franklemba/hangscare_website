import { Quote, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Our Story</h1>
          <p className="text-xl text-yellow-600 font-semibold">Born From the Hospital Ward</p>
        </div>

        <div className="space-y-12">
          {/* Opening Quote */}
          <div className="bg-gradient-to-r from-yellow-50 to-slate-50 rounded-xl p-8 sm:p-12 border-l-4 border-yellow-600">
            <div className="flex gap-4">
              <Quote className="w-8 h-8 text-yellow-600 flex-shrink-0" />
              <p className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-light italic">
                Hangscare Foundation was not born from convenience, comfort, or theory. It was born in hospital corridors heavy with silence, in wards where machines beep through the night, and in beds occupied by people who feel forgotten by the world.
              </p>
            </div>
          </div>

          {/* The Encounters */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Heart className="w-8 h-8 text-yellow-600" />
              What We Encountered
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We encountered patients who had no visitors, no meals beyond hospital rations, no clean clothes, and no one to speak for them. Some had been admitted for months. Others had been discharged but could not leave because they had nowhere to go.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Many lay quietly, not because they were at peace, but because they had lost hope. In their silence was a profound loneliness—the loneliness of being invisible in a place meant to heal.
            </p>
          </div>

          {/* The Heartbreak */}
          <div className="bg-yellow-50 p-8 sm:p-12 rounded-xl border-2 border-yellow-600/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Heartbreak That Changed Everything</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              What broke our hearts was not only the illness—it was the loneliness. It was seeing human beings reduced to survival, stripped of dignity simply because they were poor, abandoned, or vulnerable.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We realized that healthcare had become about survival statistics, not about the person surviving. Recovery meant returning to disease-free bodies, not to restored souls. And we knew something had to change.
            </p>
          </div>

          {/* The Question */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">The Question That Started Everything</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We began with a simple but powerful question: <span className="font-semibold text-yellow-600">What if someone showed up?</span>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              What if someone cared enough to sit beside the bed, to listen, to bring food, to call a patient by name, to remind them that they still matter? What if showing up for the forgotten became the work of an entire foundation?
            </p>
          </div>

          {/* The Birth */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">That Question Became Our Mission</h3>
            <p className="text-lg leading-relaxed mb-6">
              Hangscare Foundation was created to be an answer to that question—a living, breathing answer that shows up every single day for people who have been forgotten.
            </p>
            <p className="text-lg leading-relaxed">
              We are not here to replace medicine. We are here to stand beside medicine. We fight not disease, but neglect. Not the biological failure of bodies, but the spiritual failure of systems that have stopped seeing people as human.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Commitment</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Every patient deserves to be seen. Every person deserves dignity in their most vulnerable moment. Every life deserves care—not just medical care, but the care that comes from genuine human presence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This is not about charity or pity. This is about justice. This is about recognizing that healthcare without compassion is incomplete, and that the measure of a society is how it treats those who have nothing else to give.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We exist because someone must keep showing up. Someone must keep listening. Someone must keep choosing compassion, even when it is difficult. And if no one else will, we will.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-yellow-600 text-white p-8 sm:p-12 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">This is Our Story. Will It Be Yours Too?</h3>
            <p className="text-lg mb-6">
              Join us in creating a healthcare system with a heart—where every patient is remembered, valued, and cared for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
