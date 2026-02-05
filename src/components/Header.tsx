import { Menu, X, User, LogOut } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-green-600 to-green-700">
              <span className="text-xl font-bold text-white">SB</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-green-700">SkillBridge Africa</h1>
              <p className="text-xs text-gray-600">Learn from trusted experts</p>
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/skills" className="text-gray-700 hover:text-green-700 font-medium">
              Browse Skills
            </Link>
            <Link to="/trainers" className="text-gray-700 hover:text-green-700 font-medium">
              Find Trainers
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-green-700 font-medium">
              How It Works
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link to={user?.type === "trainer" ? "/trainer-dashboard" : "/learner-dashboard"}>
                  <Button variant="outline" className="hidden md:inline-flex gap-2">
                    <User className="h-4 w-4" />
                    {user?.name}
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className="hidden md:inline-flex gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/trainer-signup">
                  <Button variant="ghost" className="hidden md:inline-flex">
                    Are you a trainer?
                  </Button>
                </Link>
                <Link to="/sign-in">
                  <Button variant="outline" className="hidden md:inline-flex">
                    Sign In
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 pb-4 border-t pt-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <Link 
                to="/skills" 
                className="text-gray-700 hover:text-green-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Skills
              </Link>
              <Link 
                to="/trainers" 
                className="text-gray-700 hover:text-green-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Trainers
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gray-700 hover:text-green-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-green-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              {isAuthenticated ? (
                <>
                  <Link 
                    to={user?.type === "trainer" ? "/trainer-dashboard" : "/learner-dashboard"}
                    className="text-gray-700 hover:text-green-700 font-medium py-2 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard ({user?.name})
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-gray-700 hover:text-green-700 font-medium py-2 md:hidden"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/trainer-signup" 
                  className="text-gray-700 hover:text-green-700 font-medium py-2 md:hidden"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Are you a trainer?
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}