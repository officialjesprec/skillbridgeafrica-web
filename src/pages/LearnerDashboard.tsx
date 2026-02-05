import { useState } from "react";
import { 
  BookOpen, 
  Star, 
  Calendar, 
  MessageCircle,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Search,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";

// Mock data for the learner
const learnerData = {
  name: "Sadiq Musa",
  location: "Ilorin, Kwara State",
  memberSince: "January 2026",
  imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&h=400&fit=crop"
};

const stats = [
  {
    title: "Active Courses",
    value: "2",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-700"
  },
  {
    title: "Completed",
    value: "1",
    icon: <Award className="h-5 w-5" />,
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Saved Trainers",
    value: "5",
    icon: <Star className="h-5 w-5" />,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    title: "This Week",
    value: "3",
    icon: <Calendar className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-700"
  }
];

const activeCourses = [
  {
    id: "1",
    skill: "Phone Repair - Basics",
    trainer: "Ibrahim Adewale",
    trainerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    location: "Yaba, Lagos",
    progress: 65,
    startDate: "Feb 1, 2026",
    nextSession: "Today, 2:00 PM",
    status: "In Progress",
    rating: 4.8
  },
  {
    id: "2",
    skill: "Photography Basics",
    trainer: "Ngozi Okafor",
    trainerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    location: "Ikoyi, Lagos",
    progress: 30,
    startDate: "Feb 3, 2026",
    nextSession: "Tomorrow, 10:00 AM",
    status: "In Progress",
    rating: 4.9
  }
];

const completedCourses = [
  {
    skill: "Basic Computer Skills",
    trainer: "Ahmed Bello",
    completedDate: "Jan 28, 2026",
    finalRating: 5,
    certificate: true
  }
];

const upcomingSessions = [
  {
    skill: "Phone Repair - Basics",
    trainer: "Ibrahim Adewale",
    time: "Today, 2:00 PM",
    topic: "Screen Replacement - Practical",
    location: "Yaba, Lagos",
    duration: "2 hours"
  },
  {
    skill: "Photography Basics",
    trainer: "Ngozi Okafor",
    time: "Tomorrow, 10:00 AM",
    topic: "Camera Settings & Composition",
    location: "Ikoyi, Lagos",
    duration: "3 hours"
  },
  {
    skill: "Phone Repair - Basics",
    trainer: "Ibrahim Adewale",
    time: "Feb 7, 2:00 PM",
    topic: "Battery Replacement",
    location: "Yaba, Lagos",
    duration: "2 hours"
  }
];

const savedTrainers = [
  {
    id: "3",
    name: "Tunde Bakare",
    skill: "Fashion Design",
    location: "Surulere, Lagos",
    rating: 4.7,
    reviews: 89,
    price: "₦25,000/month",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
  },
  {
    id: "4",
    name: "Amina Yusuf",
    skill: "Catering & Baking",
    location: "Garki, Abuja",
    rating: 4.9,
    reviews: 156,
    price: "₦20,000/month",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    id: "5",
    name: "Emeka Nwosu",
    skill: "Barbing & Styling",
    location: "Asaba, Delta State",
    rating: 4.6,
    reviews: 92,
    price: "₦15,000/month",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];

export function LearnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={learnerData.imageUrl} alt={learnerData.name} />
                <AvatarFallback>{learnerData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {learnerData.name}!</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {learnerData.location}
                  </span>
                  <span>Member since {learnerData.memberSince}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Link to="/trainers">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4 mr-2" />
                  Find Trainers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="saved">Saved Trainers</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${stat.color} mb-3`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Active Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeCourses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:border-green-500 transition-colors">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={course.trainerImage} alt={course.trainer} />
                          <AvatarFallback>{course.trainer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{course.skill}</h3>
                              <p className="text-gray-600">with {course.trainer}</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-700">
                              {course.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {course.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {course.rating}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-semibold">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex items-center gap-3 mt-3">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Continue Learning
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Message Trainer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.slice(0, 3).map((session, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold">{session.topic}</p>
                            <p className="text-sm text-gray-600">{session.skill}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {session.time}
                              </span>
                              <span>•</span>
                              <span>{session.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link to="/trainers">
                      <Button variant="outline" className="w-full justify-start">
                        <Search className="h-4 w-4 mr-2" />
                        Find New Trainers
                      </Button>
                    </Link>
                    <Link to="/skills">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Browse Skills
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Messages
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Award className="h-4 w-4 mr-2" />
                      My Certificates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            {/* Active Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Active Courses ({activeCourses.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeCourses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex flex-col md:flex-row gap-4">
                        <Avatar className="h-20 w-20">
                          <AvatarImage src={course.trainerImage} alt={course.trainer} />
                          <AvatarFallback>{course.trainer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-xl">{course.skill}</h3>
                              <p className="text-gray-600">Trainer: {course.trainer}</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-700">{course.status}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 my-3 text-sm">
                            <div>
                              <span className="text-gray-500">Started:</span>
                              <span className="ml-2 font-medium">{course.startDate}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Next Session:</span>
                              <span className="ml-2 font-medium">{course.nextSession}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Overall Progress</span>
                              <span className="font-semibold">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Link to={`/trainer/${course.id}`}>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                View Details
                              </Button>
                            </Link>
                            <Button size="sm" variant="outline">
                              Message Trainer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Completed Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Completed Courses ({completedCourses.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedCourses.map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg bg-green-50 border-green-200">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{course.skill}</h3>
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          </div>
                          <p className="text-gray-600">Trainer: {course.trainer}</p>
                          <p className="text-sm text-gray-500 mt-1">Completed: {course.completedDate}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <span className="text-sm text-gray-600">Your Rating:</span>
                            {[...Array(course.finalRating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        {course.certificate && (
                          <Button size="sm" variant="outline">
                            <Award className="h-4 w-4 mr-2" />
                            View Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Your Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">{session.topic}</h3>
                              <p className="text-gray-600">{session.skill} with {session.trainer}</p>
                            </div>
                            <Badge>{session.duration}</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {session.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {session.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Saved Trainers Tab */}
          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Saved Trainers ({savedTrainers.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {savedTrainers.map((trainer, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:border-green-500 transition-colors">
                      <div className="flex gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={trainer.imageUrl} alt={trainer.name} />
                          <AvatarFallback>{trainer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{trainer.name}</h3>
                          <p className="text-gray-600">{trainer.skill}</p>
                          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {trainer.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{trainer.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">({trainer.reviews} reviews)</span>
                          </div>
                          <p className="font-semibold text-green-700 mt-2">{trainer.price}</p>
                          <div className="flex gap-2 mt-3">
                            <Link to={`/trainer/${trainer.id}`}>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                View Profile
                              </Button>
                            </Link>
                            <Button size="sm" variant="outline">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
