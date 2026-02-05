import { Search, UserCheck, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    icon: <Search className="h-8 w-8" />,
    title: "Search for a Skill",
    description: "Browse by category or search for the skill you want to learn. See all trainers in your area.",
  },
  {
    number: "2",
    icon: <UserCheck className="h-8 w-8" />,
    title: "Choose a Verified Trainer",
    description: "Compare location, price, duration, and reviews. Pick the trainer that feels right for you.",
  },
  {
    number: "3",
    icon: <GraduationCap className="h-8 w-8" />,
    title: "Start Learning",
    description: "Contact your trainer and begin your journey. Learn real skills that help you earn.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            How SkillBridge Works
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Simple, clear, and safe. Three easy steps to start your skill journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-green-400/30" />
              )}
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                {/* Step number */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 font-bold text-xl">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center text-green-100">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-green-100 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/sign-up">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
              Get Started Now
            </Button>
          </Link>
          <Link to="/how-it-works">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}