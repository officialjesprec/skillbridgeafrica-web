import { useState } from "react";
import { 
  Smartphone, 
  Camera, 
  Scissors, 
  Shirt, 
  Hammer, 
  Laptop, 
  Utensils, 
  Car,
  Zap,
  Paintbrush,
  Wrench,
  Music,
  TrendingUp,
  Users,
  DollarSign,
  Clock
} from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  trainerCount: number;
  studentCount: number;
  averagePrice: string;
  averageDuration: string;
  description: string;
  trending?: boolean;
  featured?: boolean;
}

const skillCategories: SkillCategory[] = [
  { 
    id: "phone-repair", 
    name: "Phone Repair", 
    icon: <Smartphone className="h-8 w-8" />, 
    trainerCount: 342,
    studentCount: 4567,
    averagePrice: "₦20,000 - ₦35,000",
    averageDuration: "2-3 months",
    description: "Learn to repair smartphones, tablets, and diagnose hardware issues. High demand skill with good earning potential.",
    trending: true,
    featured: true
  },
  { 
    id: "photography", 
    name: "Photography", 
    icon: <Camera className="h-8 w-8" />, 
    trainerCount: 189,
    studentCount: 2134,
    averagePrice: "₦25,000 - ₦45,000",
    averageDuration: "3-4 months",
    description: "Master camera basics, lighting, composition, and editing. Perfect for events, portraits, and content creation.",
    trending: true
  },
  { 
    id: "barbing", 
    name: "Barbing & Styling", 
    icon: <Scissors className="h-8 w-8" />, 
    trainerCount: 456,
    studentCount: 5823,
    averagePrice: "₦15,000 - ₦30,000",
    averageDuration: "2-4 months",
    description: "Professional hair cutting, styling, and grooming techniques. Start your own shop or work anywhere.",
    featured: true
  },
  { 
    id: "fashion", 
    name: "Fashion Design", 
    icon: <Shirt className="h-8 w-8" />, 
    trainerCount: 234,
    studentCount: 3421,
    averagePrice: "₦20,000 - ₦40,000",
    averageDuration: "3-6 months",
    description: "Learn pattern making, sewing, and design. Create clothing and start your own fashion brand.",
    trending: true
  },
  { 
    id: "carpentry", 
    name: "Carpentry", 
    icon: <Hammer className="h-8 w-8" />, 
    trainerCount: 167,
    studentCount: 1892,
    averagePrice: "₦18,000 - ₦35,000",
    averageDuration: "3-5 months",
    description: "Woodworking, furniture making, and construction skills. Build quality furniture and structures."
  },
  { 
    id: "tech", 
    name: "Tech Skills", 
    icon: <Laptop className="h-8 w-8" />, 
    trainerCount: 298,
    studentCount: 3765,
    averagePrice: "₦30,000 - ₦60,000",
    averageDuration: "4-6 months",
    description: "Web design, basic programming, graphic design, and computer maintenance. Digital skills for modern work.",
    trending: true,
    featured: true
  },
  { 
    id: "catering", 
    name: "Catering & Baking", 
    icon: <Utensils className="h-8 w-8" />, 
    trainerCount: 421,
    studentCount: 5234,
    averagePrice: "₦15,000 - ₦35,000",
    averageDuration: "2-4 months",
    description: "Professional cooking, baking, and catering for events. Start your food business or work at hotels."
  },
  { 
    id: "mechanics", 
    name: "Auto Mechanics", 
    icon: <Car className="h-8 w-8" />, 
    trainerCount: 203,
    studentCount: 2567,
    averagePrice: "₦25,000 - ₦50,000",
    averageDuration: "4-6 months",
    description: "Vehicle maintenance, repairs, and diagnostics. Essential skill with steady income opportunities."
  },
  { 
    id: "electrical", 
    name: "Electrical Works", 
    icon: <Zap className="h-8 w-8" />, 
    trainerCount: 178,
    studentCount: 1923,
    averagePrice: "₦20,000 - ₦40,000",
    averageDuration: "3-5 months",
    description: "Home and industrial electrical installation, wiring, and repairs. High demand trade skill."
  },
  { 
    id: "makeup", 
    name: "Makeup Artistry", 
    icon: <Paintbrush className="h-8 w-8" />, 
    trainerCount: 312,
    studentCount: 4123,
    averagePrice: "₦20,000 - ₦45,000",
    averageDuration: "2-3 months",
    description: "Professional makeup for weddings, events, and photoshoots. Build your portfolio and clientele.",
    trending: true
  },
  { 
    id: "plumbing", 
    name: "Plumbing", 
    icon: <Wrench className="h-8 w-8" />, 
    trainerCount: 145,
    studentCount: 1567,
    averagePrice: "₦18,000 - ₦35,000",
    averageDuration: "3-4 months",
    description: "Water system installation, pipe fitting, and repairs. Essential trade with consistent work."
  },
  { 
    id: "music", 
    name: "Music Production", 
    icon: <Music className="h-8 w-8" />, 
    trainerCount: 98,
    studentCount: 1234,
    averagePrice: "₦30,000 - ₦60,000",
    averageDuration: "4-6 months",
    description: "Beat making, recording, mixing, and mastering. Turn your passion into a profession."
  }
];

export function SkillsPage() {
  const [filter, setFilter] = useState<"all" | "trending" | "featured">("all");

  const filteredSkills = skillCategories.filter(skill => {
    if (filter === "all") return true;
    if (filter === "trending") return skill.trending;
    if (filter === "featured") return skill.featured;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn Practical Skills
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8">
              Browse the most in-demand skills in Nigeria. Each category has verified trainers ready to teach you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                size="lg" 
                className={filter === "all" ? "bg-white text-green-700" : "bg-white/20 text-white hover:bg-white/30"}
                onClick={() => setFilter("all")}
              >
                All Skills
              </Button>
              <Button 
                size="lg" 
                className={filter === "trending" ? "bg-white text-green-700" : "bg-white/20 text-white hover:bg-white/30"}
                onClick={() => setFilter("trending")}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Trending
              </Button>
              <Button 
                size="lg" 
                className={filter === "featured" ? "bg-white text-green-700" : "bg-white/20 text-white hover:bg-white/30"}
                onClick={() => setFilter("featured")}
              >
                Featured
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1">12+</p>
              <p className="text-gray-600">Skill Categories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1">3,000+</p>
              <p className="text-gray-600">Verified Trainers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1">40,000+</p>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-green-700 mb-1">100%</p>
              <p className="text-gray-600">Verified Profiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {filter === "all" && "All Skills"}
              {filter === "trending" && "Trending Skills"}
              {filter === "featured" && "Featured Skills"}
            </h2>
            <p className="text-gray-600">
              {filteredSkills.length} skill categories available
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <Card 
                key={skill.id}
                className="overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] cursor-pointer border-2 hover:border-green-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                      {skill.icon}
                    </div>
                    <div className="flex gap-1">
                      {skill.trending && (
                        <Badge className="bg-orange-100 text-orange-700">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {skill.featured && (
                        <Badge className="bg-blue-100 text-blue-700">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {skill.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        Trainers
                      </span>
                      <span className="font-semibold">{skill.trainerCount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <TrendingUp className="h-4 w-4" />
                        Students Trained
                      </span>
                      <span className="font-semibold">{skill.studentCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="h-4 w-4" />
                        Average Price
                      </span>
                      <span className="font-semibold text-green-700">{skill.averagePrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        Duration
                      </span>
                      <span className="font-semibold">{skill.averageDuration}</span>
                    </div>
                  </div>

                  <Link to={`/trainers?skill=${skill.id}`}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View {skill.trainerCount} Trainers
                    </Button>
                  </Link>
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
            Can't Find the Skill You're Looking For?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            We're always adding new skills and trainers. Contact us to request a skill category or suggest trainers in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                Contact Us
              </Button>
            </Link>
            <Link to="/trainers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse All Trainers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Learn Through SkillBridge?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Verified Trainers</h3>
                  <p className="text-sm text-gray-600">
                    Every trainer is verified with ID and certificates
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <DollarSign className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Clear Pricing</h3>
                  <p className="text-sm text-gray-600">
                    See all costs upfront. No hidden fees or surprises
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">Real Reviews</h3>
                  <p className="text-sm text-gray-600">
                    Read honest feedback from real students
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
