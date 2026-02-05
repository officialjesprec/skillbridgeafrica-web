import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Learn a Real Skill?
          </h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who are building better futures through verified skill training.
          </p>
          
          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span>No registration fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span>Browse for free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span>All trainers verified</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sign-up">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 text-base md:text-lg px-8"
              >
                Find a Trainer Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/trainer-signup">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-base md:text-lg px-8"
              >
                Are you a trainer?
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-green-100">
            Questions? <Link to="/contact" className="underline font-semibold hover:text-white">Contact us</Link> or call us at <a href="tel:+2348012345678" className="underline font-semibold hover:text-white">+234 801 234 5678</a>
          </p>
        </div>
      </div>
    </section>
  );
}