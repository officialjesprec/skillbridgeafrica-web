import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Clock, DollarSign, Star, CheckCircle2, Phone, 
  MessageCircle, Users, Award, Calendar, Shield, ExternalLink 
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";

const trainerData = {
  id: "1",
  name: "Chinedu Okafor",
  skill: "Phone Repair & Maintenance",
  location: "Ilorin, Kwara State",
  fullAddress: "123 Ibrahim Taiwo Road, GRA, Ilorin, Kwara State",
  price: "₦25,000 - ₦35,000",
  duration: "4-6 weeks",
  rating: 4.9,
  reviewCount: 127,
  verified: true,
  imageUrl: "https://images.unsplash.com/photo-1543335864-4477fcdb2b22?q=80&w=1080",
  experience: "8 years experience",
  studentsCount: 450,
  bio: "I've been repairing phones professionally for 8 years. I teach you everything from screen replacement to motherboard repair. My students start earning within weeks of completing training. I provide practical hands-on experience with real phones.",
  whatYouLearn: [
    "Screen and battery replacement",
    "Software troubleshooting and flashing",
    "Motherboard repair and soldering",
    "Water damage repair",
    "Business setup and customer service",
    "Where to buy parts at wholesale prices",
  ],
  schedule: "Monday to Friday, 9AM - 4PM",
  classSize: "Maximum 8 students per batch",
  certification: "Certificate of completion provided",
  portfolio: [
    {
      id: 1,
      title: "iPhone 14 Pro Logic Board Repair",
      description: "Successfully diagnosed and repaired a dead logic board using advanced microsoldering.",
      image: "https://images.unsplash.com/photo-1601524909162-cd87252be8ee?q=80&w=500"
    },
    {
      id: 2,
      title: "Student Training Batch A",
      description: "A group of 8 students during their final practical assessment on motherboard soldering.",
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=500"
    }
  ],
  reviews: [
    { id: "1", name: "Sadiq Musa", rating: 5, date: "2 weeks ago", text: "Best decision I made this year. Chinedu is patient and explains everything clearly.", verified: true },
    { id: "2", name: "Ibrahim Lawal", rating: 5, date: "1 month ago", text: "Very professional trainer. I opened my shop after 6 weeks.", verified: true },
  ],
};

export function TrainerProfilePage() {
  const [activeTab, setActiveTab] = useState<"about" | "portfolio">("about");
  const trainer = trainerData;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Link to="/trainers" className="inline-flex items-center text-sm text-gray-600 hover:text-green-700 mb-4">
            ← Back to trainers
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative">
                <img 
                  src={trainer.imageUrl} 
                  alt={trainer.name} 
                  className="w-full h-80 md:h-96 object-cover rounded-xl shadow-md" 
                />
                {trainer.verified && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white gap-1">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{trainer.name}</h1>
              <p className="text-xl text-green-700 font-semibold mb-4">{trainer.skill}</p>
              
                            <div className="flex items-center gap-2 mb-6">
                              <div className="flex items-center">
                                {[...new Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(trainer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                              </div>
                              <span className="font-semibold text-lg">{trainer.rating}</span>
                              <span className="text-gray-600">({trainer.reviewCount} reviews)</span>
                            </div>
              
                            <div className="space-y-3 mb-8">
                              <div className="flex items-center text-gray-700">
                                <MapPin className="h-5 w-5 mr-3 text-green-600" />
                                {trainer.location}
                              </div>
                              <div className="flex items-center text-gray-700">
                                <Clock className="h-5 w-5 mr-3 text-green-600" />
                                {trainer.duration}
                              </div>
                              <div className="flex items-center text-gray-700">
                                <DollarSign className="h-5 w-5 mr-3 text-green-600" />
                                {trainer.price}
                              </div>
                            </div>
              
                            <div className="flex gap-4">
                              <Button size="lg" className="bg-green-600 hover:bg-green-700 flex-1">
                                <Phone className="h-5 w-5 mr-2" />
                                Call Trainer
                              </Button>
                              <Button size="lg" variant="outline" className="flex-1">
                                <MessageCircle className="h-5 w-5 mr-2" />
                                Message
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              
                    {/* Main Content */}
                    <div className="container mx-auto px-4 py-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="md:col-span-2">
                          {/* Quick Stats */}
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            <Card>
                              <CardContent className="pt-6">
                                <div className="text-center">
                                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                  <p className="text-2xl font-bold">{trainer.studentsCount}</p>
                                  <p className="text-sm text-gray-600">Students Trained</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-6">
                                <div className="text-center">
                                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                  <p className="text-2xl font-bold">{trainer.experience}</p>
                                  <p className="text-sm text-gray-600">Experience</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="pt-6">
                                <div className="text-center">
                                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                                  <p className="text-lg font-bold text-green-600">✓ Verified</p>
                                  <p className="text-sm text-gray-600">Trainer</p>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
              
                          {/* Tabs */}
                          <div className="mb-8">
                            <div className="flex gap-4 border-b mb-6">
                              <button
                                onClick={() => setActiveTab("about")}
                                className={`px-4 py-2 font-semibold border-b-2 ${
                                  activeTab === "about"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-600 hover:text-gray-900"
                                }`}
                              >
                                About & Curriculum
                              </button>
                              <button
                                onClick={() => setActiveTab("portfolio")}
                                className={`px-4 py-2 font-semibold border-b-2 ${
                                  activeTab === "portfolio"
                                    ? "border-green-600 text-green-600"
                                    : "border-transparent text-gray-600 hover:text-gray-900"
                                }`}
                              >
                                Portfolio
                              </button>
                            </div>
              
                            {activeTab === "about" && (
                              <div className="space-y-8">
                                <div>
                                  <h2 className="text-2xl font-bold mb-4">About the Trainer</h2>
                                  <p className="text-gray-700 leading-relaxed">{trainer.bio}</p>
                                </div>
              
                                <div>
                                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                                  <ul className="grid md:grid-cols-2 gap-3">
                                    {trainer.whatYouLearn.map((item, index) => (
                                      <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
              
                                <Separator />
              
                                <div className="grid md:grid-cols-2 gap-8">
                                  <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                      <Calendar className="h-5 w-5 text-green-600" />
                                      Schedule
                                    </h3>
                                    <p className="text-gray-700">{trainer.schedule}</p>
                                  </div>
                                  <div>
                                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                                      <Users className="h-5 w-5 text-green-600" />
                                      Class Size
                                    </h3>
                                    <p className="text-gray-700">{trainer.classSize}</p>
                                  </div>
                                </div>
              
                                <div>
                                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Award className="h-5 w-5 text-green-600" />
                                    Certification
                                  </h3>
                                  <p className="text-gray-700">{trainer.certification}</p>
                                </div>
                              </div>
                            )}
              
                            {activeTab === "portfolio" && (
                              <div className="grid md:grid-cols-2 gap-6">
                                {trainer.portfolio.map((item) => (
                                  <Card key={item.id}>
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                                    <CardContent className="pt-4">
                                      <h3 className="font-semibold mb-2">{item.title}</h3>
                                      <p className="text-sm text-gray-600">{item.description}</p>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            )}
                          </div>
              
                          {/* Reviews */}
                          <div>
                            <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                            <div className="space-y-4">
                              {trainer.reviews.map((review) => (
                                <Card key={review.id}>
                                  <CardContent className="pt-6">
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <p className="font-semibold flex items-center gap-2">
                                          {review.name}
                                          {review.verified && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                                        </p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                      </div>
                                      <div className="flex">
                                        {[...new Array(5)].map((_, i) => (
                                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                      </div>
                                    </div>
                                    <p className="text-gray-700">{review.text}</p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>
              
                        {/* Right Column - Sidebar */}
                        <div className="md:col-span-1">
                          <Card className="sticky top-8">
                            <CardContent className="pt-6">
                              <h3 className="font-semibold text-lg mb-4">Training Details</h3>
                              <div className="space-y-4">
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Duration</p>
                                  <p className="font-semibold">{trainer.duration}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Price Range</p>
                                  <p className="font-semibold text-green-600">{trainer.price}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-600 mb-1">Mode</p>
                                  <p className="font-semibold">In-Person Training</p>
                                </div>
                                <Separator />
                                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                                  Enroll Now
                                </Button>
                                <Button size="lg" variant="outline" className="w-full">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Share Profile
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }