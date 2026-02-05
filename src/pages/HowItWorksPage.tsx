import { Search, UserCheck, GraduationCap, Shield, MapPin, MessageCircle, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const steps = [
  {
    number: "1",
    icon: <Search className="h-10 w-10" />,
    title: "Search for a Skill",
    description: "Browse by category or search for the skill you want to learn. See all trainers in your area.",
    details: [
      "Filter by location to find trainers near you",
      "Compare prices and duration upfront",
      "See verified credentials before you contact anyone"
    ]
  },
  {
    number: "2",
    icon: <UserCheck className="h-10 w-10" />,
    title: "Choose a Verified Trainer",
    description: "Compare location, price, duration, and reviews. Pick the trainer that feels right for you.",
    details: [
      "Read real reviews from past students",
      "Check verification badges and certificates",
      "See trainer experience and student count"
    ]
  },
  {
    number: "3",
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Start Learning",
    description: "Contact your trainer and begin your journey. Learn real skills that help you earn.",
    details: [
      "Contact trainer directly through the platform",
      "Agree on schedule and payment terms",
      "Start your skill journey with confidence"
    ]
  },
];

const safetyFeatures = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Trainers Only",
    description: "Every trainer is verified with ID and certificates before joining the platform."
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Clear Location Info",
    description: "See exact locations and neighborhoods upfront. No surprises about where to go."
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Real Student Reviews",
    description: "Read honest reviews from real students who completed the training."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Transparent Pricing",
    description: "All prices shown upfront. No hidden fees or surprise costs."
  }
];

const faqs = [
  {
    question: "How do I know a trainer is verified?",
    answer: "Verified trainers have a green 'Verified' badge on their profile. This means we've checked their ID, certificates, and spoken to past students."
  },
  {
    question: "Do I pay through SkillBridge?",
    answer: "No, you arrange payment directly with your trainer. This keeps costs lower for you. We recommend paying in installments as you learn."
  },
  {
    question: "What if I'm not satisfied with a trainer?",
    answer: "You can leave honest reviews and report issues through the platform. We take complaints seriously and will investigate."
  },
  {
    question: "Can I learn multiple skills?",
    answer: "Yes! You can browse all categories and connect with as many trainers as you want."
  }
];

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How SkillBridge Works
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8">
              Simple, safe, and transparent. Learn practical skills from verified local trainers you can trust.
            </p>
            <Link to="/sign-up">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Three Simple Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From finding a trainer to starting your learning journey - we make it easy and safe.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Step Number and Icon */}
                      <div className="flex md:flex-col items-center md:items-start gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white font-bold text-2xl flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex items-center justify-center text-green-700">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-700 mb-4 text-lg">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <div className="h-8 w-0.5 bg-green-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Your Safety Comes First
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We know trust is important. Here's how we protect you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Common Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We have answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians learning practical skills from verified local trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sign-up">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Get Started Free
              </Button>
            </Link>
            <Link to="/trainers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Trainers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
