import { useState, FormEvent } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Phone, Mail, User, MapPin, DollarSign, Briefcase, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useAuth } from "../contexts/AuthContext";

export function TrainerSignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    skill: "",
    state: "",
    city: "",
    address: "",
    experience: "",
    priceMin: "",
    priceMax: "",
    duration: "",
    studentsCount: "",
    bio: "",
    password: "",
    termsAccepted: false,
  });
  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the Trainer Agreement");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      await signup(formData, "trainer");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-green-600 to-green-700">
              <span className="text-2xl font-bold text-white">SB</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">Join as a Trainer</h1>
          <p className="text-gray-600">Share your skills and earn by teaching others</p>
        </div>

        {/* Benefits Banner */}
        <div className="bg-linear-to-r from-green-600 to-green-700 rounded-xl p-6 mb-6 text-white">
          <h3 className="font-semibold text-lg mb-3">Why Join SkillBridge?</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-1">✓ Get More Students</div>
              <div className="text-green-100">Reach thousands of learners</div>
            </div>
            <div>
              <div className="font-semibold mb-1">✓ Build Trust</div>
              <div className="text-green-100">Verified badge on your profile</div>
            </div>
            <div>
              <div className="font-semibold mb-1">✓ Free to Join</div>
              <div className="text-green-100">No listing fees ever</div>
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-green-700" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="080 1234 5678"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Skill & Location */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-green-700" />
                Your Skill & Location
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skill">What Skill Do You Teach?</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("skill", value)}
                    value={formData.skill}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary skill" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone-repair">Phone Repair</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="barbing">Barbing & Styling</SelectItem>
                      <SelectItem value="fashion">Fashion Design</SelectItem>
                      <SelectItem value="carpentry">Carpentry</SelectItem>
                      <SelectItem value="tech">Tech Skills</SelectItem>
                      <SelectItem value="catering">Catering</SelectItem>
                      <SelectItem value="mechanics">Auto Mechanics</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("state", value)}
                      value={formData.state}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lagos">Lagos</SelectItem>
                        <SelectItem value="abuja">Abuja</SelectItem>
                        <SelectItem value="kano">Kano</SelectItem>
                        <SelectItem value="rivers">Rivers</SelectItem>
                        <SelectItem value="oyo">Oyo</SelectItem>
                        <SelectItem value="kwara">Kwara</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Area</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="e.g., Ilorin, Ikeja"
                      required
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Training Location Address</Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Where do students come for training?"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Experience & Pricing */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-700" />
                Experience & Pricing
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("experience", value)}
                    value={formData.experience}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priceMin">Price Range (Min)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                      <Input
                        id="priceMin"
                        type="number"
                        placeholder="20,000"
                        className="pl-8"
                        required
                        value={formData.priceMin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priceMax">Price Range (Max)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                      <Input
                        id="priceMax"
                        type="number"
                        placeholder="35,000"
                        className="pl-8"
                        required
                        value={formData.priceMax}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Training Duration</Label>
                  <Input
                    id="duration"
                    type="text"
                    placeholder="e.g., 4-6 weeks"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentsCount">How Many Students Have You Trained?</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("studentsCount", value)}
                    value={formData.studentsCount}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-10">0-10 students</SelectItem>
                      <SelectItem value="10-50">10-50 students</SelectItem>
                      <SelectItem value="50-100">50-100 students</SelectItem>
                      <SelectItem value="100-500">100-500 students</SelectItem>
                      <SelectItem value="500+">500+ students</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">About Your Training</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell students what makes your training special. What will they learn? What can they do after completing?"
                    rows={4}
                    required
                    value={formData.bio}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-600">Be honest and clear. This builds trust.</p>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Account Security</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Create Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 6 characters"
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Notice */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Verification Process</h4>
              <p className="text-sm text-blue-800">
                After registration, our team will contact you to verify your identity and skills. 
                This usually takes 2-3 days. We'll need to see your ID and proof of experience.
              </p>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                className="mt-1"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
              />
              <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                I agree to the{" "}
                <Link to="/trainer-terms" className="text-green-700 hover:underline">
                  Trainer Agreement
                </Link>
                {" "}and confirm that all information provided is accurate
              </label>
            </div>

            {/* Submit Button */}
            <Button
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>

          {/* Already Registered */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already registered?{" "}
              <Link to="/trainer-signin" className="text-green-700 font-semibold hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Questions about joining?{" "}
            <a href="tel:+2348012345678" className="text-green-700 font-semibold hover:underline">
              Call +234 801 234 5678
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}