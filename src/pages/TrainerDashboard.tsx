import { useState } from "react";
import { 
  Users, 
  Star, 
  TrendingUp, 
  MessageCircle, 
  Calendar, 
  DollarSign,
  Eye,
  MapPin,
  Clock,
  Edit,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

// Mock data for the trainer
const trainerData = {
  name: "Ibrahim Adewale",
  skill: "Phone Repair Specialist",
  location: "Yaba, Lagos",
  rating: 4.8,
  totalReviews: 127,
  totalStudents: 243,
  profileViews: 1456,
  verified: true,
  joinDate: "January 2024",
  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
};

const stats = [
  {
    title: "Total Students",
    value: "243",
    change: "+12 this month",
    icon: <Users className="h-5 w-5" />,
    trend: "up"
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "127 reviews",
    icon: <Star className="h-5 w-5" />,
    trend: "neutral"
  },
  {
    title: "Profile Views",
    value: "1,456",
    change: "+234 this week",
    icon: <Eye className="h-5 w-5" />,
    trend: "up"
  },
  {
    title: "Active Students",
    value: "18",
    change: "Currently learning",
    icon: <TrendingUp className="h-5 w-5" />,
    trend: "up"
  }
];

const recentStudents = [
  {
    name: "Fatima Hassan",
    skill: "Phone Repair - Basics",
    status: "Active",
    startDate: "Feb 1, 2026",
    progress: 65
  },
  {
    name: "Chidi Okonkwo",
    skill: "Phone Repair - Advanced",
    status: "Active",
    startDate: "Jan 28, 2026",
    progress: 80
  },
  {
    name: "Aisha Bello",
    skill: "Phone Repair - Basics",
    status: "Completed",
    startDate: "Jan 15, 2026",
    progress: 100
  },
  {
    name: "Tunde Bakare",
    skill: "Phone Repair - Basics",
    status: "Active",
    startDate: "Feb 3, 2026",
    progress: 45
  }
];

const recentReviews = [
  {
    student: "Aisha Bello",
    rating: 5,
    date: "2 days ago",
    comment: "Oga Ibrahim na the best! He patient well well and he dey teach am properly. I don learn how to repair phone screen now. God bless you sir!"
  },
  {
    student: "Mohammed Yusuf",
    rating: 5,
    date: "5 days ago",
    comment: "Very good trainer. He show me everything step by step. The workshop clean and all tools dey available. I recommend am."
  },
  {
    student: "Grace Obi",
    rating: 4,
    date: "1 week ago",
    comment: "Good teacher but sometimes he too busy. But overall, I learn a lot. Worth the money."
  }
];

const upcomingSessions = [
  {
    student: "Fatima Hassan",
    time: "Today, 2:00 PM",
    topic: "Screen Replacement - Practical",
    type: "Hands-on Session"
  },
  {
    student: "Chidi Okonkwo",
    time: "Tomorrow, 10:00 AM",
    topic: "Motherboard Diagnosis",
    type: "Advanced Training"
  },
  {
    student: "Tunde Bakare",
    time: "Feb 7, 3:00 PM",
    topic: "Basic Tools & Safety",
    type: "Theory Session"
  }
];

export function TrainerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={trainerData.imageUrl} alt={trainerData.name} />
                <AvatarFallback>{trainerData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{trainerData.name}</h1>
                  {trainerData.verified && (
                    <Badge className="bg-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600">{trainerData.skill}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {trainerData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {trainerData.rating} ({trainerData.totalReviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Eye className="h-4 w-4 mr-2" />
                View Public Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {stat.icon}
                      </div>
                      {stat.trend === "up" && (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Students */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentStudents.map((student, index) => (
                      <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex-1">
                          <p className="font-semibold">{student.name}</p>
                          <p className="text-sm text-gray-600">{student.skill}</p>
                          <p className="text-xs text-gray-500 mt-1">{student.startDate}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{student.progress}% complete</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Sessions */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingSessions.map((session, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold">{session.student}</p>
                            <p className="text-sm text-gray-600">{session.topic}</p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {session.time}
                              </span>
                              <span>•</span>
                              <span>{session.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{review.student}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-semibold text-lg">{student.name}</p>
                        <p className="text-gray-600">{student.skill}</p>
                        <p className="text-sm text-gray-500 mt-1">Started: {student.startDate}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant={student.status === "Active" ? "default" : "secondary"}>
                          {student.status}
                        </Badge>
                        <div className="text-sm">
                          <div className="text-gray-600">Progress</div>
                          <div className="font-semibold">{student.progress}%</div>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>All Reviews ({trainerData.totalReviews})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentReviews.map((review, index) => (
                    <div key={index} className="pb-6 border-b last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold text-lg">{review.student}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
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
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-lg">{session.student}</p>
                            <p className="text-gray-600">{session.topic}</p>
                          </div>
                          <Badge>{session.type}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Start Session
                        </Button>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
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
