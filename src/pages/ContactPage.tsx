import { Mail, Phone, MapPin, MessageCircle, HelpCircle, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    description: "Get a response within 24 hours",
    contact: "support@skillbridgeafrica.com",
    action: "Send Email"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    description: "Monday - Friday, 9am - 5pm WAT",
    contact: "+234 800 SKILL BR",
    action: "Call Now"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    description: "Quick responses for urgent issues",
    contact: "+234 812 345 6789",
    action: "Chat on WhatsApp"
  }
];

const helpTopics = [
  {
    icon: <HelpCircle className="h-6 w-6" />,
    title: "General Questions",
    description: "How the platform works, getting started, and account help"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Report an Issue",
    description: "Report suspicious trainers, scams, or safety concerns"
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Trainer Support",
    description: "Help for trainers managing profiles and students"
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We're Here to Help
            </h1>
            <p className="text-lg md:text-xl text-green-100">
              Have questions? Need support? Get in touch with the SkillBridge team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach us. We're committed to responding quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <p className="font-semibold text-green-700 mb-4">{method.contact}</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+234 800 000 0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Can We Help You With?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common topics our team can assist with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {helpTopics.map((topic, index) => (
              <Card key={index} className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Our Office</h2>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <p className="text-lg">
                        <strong className="text-gray-900">SkillBridge Africa</strong>
                      </p>
                      <p>
                        123 Innovation Hub,<br />
                        Yaba, Lagos State,<br />
                        Nigeria
                      </p>
                      <p className="pt-4">
                        <strong className="text-gray-900">Office Hours:</strong><br />
                        Monday - Friday: 9:00 AM - 5:00 PM WAT<br />
                        Saturday: 10:00 AM - 2:00 PM WAT<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center min-h-[300px]">
                    <p className="text-gray-500">Map Placeholder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Message */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Safety Matters to Us
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            If you encounter any suspicious activity, scams, or safety concerns on our platform, 
            please report it immediately. We take every report seriously.
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
            Report a Safety Concern
          </Button>
        </div>
      </section>
    </div>
  );
}
