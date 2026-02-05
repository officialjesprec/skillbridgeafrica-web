import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-700">
                <span className="text-xl font-bold text-white">SB</span>
              </div>
              <div>
                <h3 className="font-bold text-white">SkillBridge Africa</h3>
                <p className="text-xs text-gray-400">Learn from trusted experts</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Connecting learners to verified local skill trainers across Nigeria.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* For Learners */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Learners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/skills" className="hover:text-green-500 transition-colors">
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="hover:text-green-500 transition-colors">
                  Find Trainers
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-green-500 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/dashboard/learner" className="hover:text-green-500 transition-colors">
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* For Trainers */}
          <div>
            <h4 className="font-semibold text-white mb-4">For Trainers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trainer-signup" className="hover:text-green-500 transition-colors">
                  Join as a Trainer
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-green-500 transition-colors">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link to="/dashboard/trainer" className="hover:text-green-500 transition-colors">
                  Trainer Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500 transition-colors">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-500" />
                <a href="mailto:hello@skillbridge.ng" className="hover:text-green-500 transition-colors">
                  hello@skillbridge.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500" />
                <a href="tel:+2348012345678" className="hover:text-green-500 transition-colors">
                  +234 801 234 5678
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-400">
                Available Mon-Sat, 9AM - 6PM WAT
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 SkillBridge Africa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-500 transition-colors">
              Safety Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}