import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Star, X } from "lucide-react";
import { TrainerCard, Trainer } from "../components/TrainerCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Mock trainers data
const allTrainers: Trainer[] = [
  {
    id: "1",
    name: "Ibrahim Adewale",
    skill: "Phone Repair Specialist",
    location: "Yaba, Lagos",
    price: "₦25,000/month",
    duration: "3 months",
    rating: 4.8,
    reviewCount: 127,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    experience: "8 years experience",
    studentsCount: 243
  },
  {
    id: "2",
    name: "Ngozi Okafor",
    skill: "Photography & Videography",
    location: "Ikoyi, Lagos",
    price: "₦35,000/month",
    duration: "4 months",
    rating: 4.9,
    reviewCount: 198,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    experience: "10 years experience",
    studentsCount: 312
  },
  {
    id: "3",
    name: "Tunde Bakare",
    skill: "Fashion Design & Tailoring",
    location: "Surulere, Lagos",
    price: "₦30,000/month",
    duration: "5 months",
    rating: 4.7,
    reviewCount: 89,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    experience: "12 years experience",
    studentsCount: 187
  },
  {
    id: "4",
    name: "Amina Yusuf",
    skill: "Catering & Baking",
    location: "Garki, Abuja",
    price: "₦20,000/month",
    duration: "3 months",
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    experience: "7 years experience",
    studentsCount: 234
  },
  {
    id: "5",
    name: "Emeka Nwosu",
    skill: "Barbing & Styling",
    location: "Asaba, Delta State",
    price: "₦18,000/month",
    duration: "2 months",
    rating: 4.6,
    reviewCount: 92,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    experience: "6 years experience",
    studentsCount: 198
  },
  {
    id: "6",
    name: "Fatima Hassan",
    skill: "Makeup Artistry",
    location: "Wuse, Abuja",
    price: "₦28,000/month",
    duration: "3 months",
    rating: 4.8,
    reviewCount: 145,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
    experience: "9 years experience",
    studentsCount: 276
  },
  {
    id: "7",
    name: "Chidi Okonkwo",
    skill: "Auto Mechanics",
    location: "Ikeja, Lagos",
    price: "₦40,000/month",
    duration: "6 months",
    rating: 4.7,
    reviewCount: 78,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    experience: "15 years experience",
    studentsCount: 156
  },
  {
    id: "8",
    name: "Blessing Eze",
    skill: "Web Design & Development",
    location: "VI, Lagos",
    price: "₦45,000/month",
    duration: "5 months",
    rating: 4.9,
    reviewCount: 167,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    experience: "11 years experience",
    studentsCount: 298
  },
  {
    id: "9",
    name: "Ahmed Bello",
    skill: "Carpentry & Furniture Making",
    location: "Kano, Kano State",
    price: "₦22,000/month",
    duration: "4 months",
    rating: 4.6,
    reviewCount: 54,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop",
    experience: "13 years experience",
    studentsCount: 134
  },
  {
    id: "10",
    name: "Grace Obi",
    skill: "Electrical Installation",
    location: "Enugu, Enugu State",
    price: "₦32,000/month",
    duration: "5 months",
    rating: 4.8,
    reviewCount: 98,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    experience: "10 years experience",
    studentsCount: 167
  },
  {
    id: "11",
    name: "Usman Mohammed",
    skill: "Plumbing & Pipe Fitting",
    location: "Kaduna, Kaduna State",
    price: "₦25,000/month",
    duration: "4 months",
    rating: 4.7,
    reviewCount: 76,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    experience: "9 years experience",
    studentsCount: 145
  },
  {
    id: "12",
    name: "Chiamaka Nnamdi",
    skill: "Graphic Design",
    location: "PH, Rivers State",
    price: "₦30,000/month",
    duration: "4 months",
    rating: 4.9,
    reviewCount: 132,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop",
    experience: "8 years experience",
    studentsCount: 223
  }
];

const skillCategories = [
  "All Skills",
  "Phone Repair",
  "Photography",
  "Fashion Design",
  "Catering",
  "Barbing",
  "Makeup",
  "Auto Mechanics",
  "Tech Skills",
  "Carpentry",
  "Electrical",
  "Plumbing",
  "Graphic Design"
];

const locations = [
  "All Locations",
  "Lagos",
  "Abuja",
  "Kano",
  "Enugu",
  "Delta State",
  "Kaduna",
  "Rivers State"
];

export function TrainersPage() {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("rating");

  // Filter and sort trainers
  let filteredTrainers = allTrainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         trainer.skill.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSkill = selectedSkill === "All Skills" || trainer.skill.includes(selectedSkill);
    const matchesLocation = selectedLocation === "All Locations" || trainer.location.includes(selectedLocation);
    
    return matchesSearch && matchesSkill && matchesLocation;
  });

  // Sort trainers
  filteredTrainers = [...filteredTrainers].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
    if (sortBy === "students") return b.studentsCount - a.studentsCount;
    return 0;
  });

  const activeFiltersCount = [
    selectedSkill !== "All Skills",
    selectedLocation !== "All Locations"
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedSkill("All Skills");
    setSelectedLocation("All Locations");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Trainer
            </h1>
            <p className="text-lg text-green-100">
              Browse {allTrainers.length}+ verified trainers across Nigeria. All profiles verified, prices clear.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by skill or trainer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filter Bar */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 bg-green-600">{activeFiltersCount}</Badge>
                  )}
                </Button>
                {activeFiltersCount > 0 && (
                  <Button variant="ghost" onClick={clearFilters} className="text-gray-600">
                    <X className="h-4 w-4 mr-2" />
                    Clear All
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Label className="text-gray-600">Sort by:</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="students">Most Students</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <Card className="mt-4">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="mb-2 block">Skill Category</Label>
                      <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {skillCategories.map(skill => (
                            <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 block">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map(location => (
                            <SelectItem key={location} value={location}>{location}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedSkill !== "All Skills" && (
                <Badge variant="secondary" className="px-3 py-1">
                  {selectedSkill}
                  <button
                    onClick={() => setSelectedSkill("All Skills")}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {selectedLocation !== "All Locations" && (
                <Badge variant="secondary" className="px-3 py-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {selectedLocation}
                  <button
                    onClick={() => setSelectedLocation("All Locations")}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredTrainers.length}</span> trainers
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {/* Trainers Grid */}
          {filteredTrainers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTrainers.map((trainer) => (
                <TrainerCard key={trainer.id} trainer={trainer} />
              ))}
            </div>
          ) : (
            <Card className="py-16">
              <CardContent>
                <div className="text-center">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No trainers found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters} className="bg-green-600 hover:bg-green-700">
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Are You a Trainer?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SkillBridge Africa and reach thousands of students looking to learn from verified trainers like you.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Become a Trainer
          </Button>
        </div>
      </section>
    </div>
  );
}
