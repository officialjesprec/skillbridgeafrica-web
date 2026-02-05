import { Shield, Users, MapPin, Star } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Every Trainer is Verified",
    description: "We check ID, skills, and past students before approval. No fake profiles.",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Real Reviews from Real People",
    description: "Read honest feedback from students like you who already learned from them.",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Know Before You Go",
    description: "See exact location, pricing, and class duration upfront. No hidden costs.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Local Experts, Local Language",
    description: "Learn from trainers who understand your community and speak your language.",
  },
];

export function TrustSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Why Trust SkillBridge?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We built this platform to help you avoid scams and find real trainers who care about your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
              <span className="text-white font-bold">✓</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">10,000+ successful students</p>
              <p className="text-sm text-gray-600">Learning real skills across Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
