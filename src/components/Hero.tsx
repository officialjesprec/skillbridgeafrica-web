import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800">
                🌍 Trusted by Nigerian learners
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Learn real skills from{" "}
              <span className="text-green-600">trusted local experts</span>
            </h1>

            <p className="text-lg text-gray-700 max-w-xl">
              Find verified trainers in your area. See their location, pricing, and reviews before you start. No surprises. No scams.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">All trainers verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Clear pricing upfront</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700">Real student reviews</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/trainers">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-base">
                  Find a Trainer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="text-base">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHlvdW5nJTIwcGVyc29uJTIwbGVhcm5pbmclMjBza2lsbHN8ZW58MXx8fHwxNzcwMTk4MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Young learner with trainer"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            
            {/* Floating trust badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600">
                  <span className="text-white font-bold text-lg">2K+</span>
                </div>
                <div>
                  <p className="font-semibold">Verified Trainers</p>
                  <p className="text-sm text-gray-600">Across Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}