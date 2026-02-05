import { Smartphone, Camera, Scissors, Shirt, Hammer, Laptop, Utensils, Car } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  trainerCount: number;
}

const categories: Category[] = [
  { id: "phone-repair", name: "Phone Repair", icon: <Smartphone className="h-6 w-6" />, trainerCount: 342 },
  { id: "photography", name: "Photography", icon: <Camera className="h-6 w-6" />, trainerCount: 189 },
  { id: "barbing", name: "Barbing & Styling", icon: <Scissors className="h-6 w-6" />, trainerCount: 456 },
  { id: "fashion", name: "Fashion Design", icon: <Shirt className="h-6 w-6" />, trainerCount: 234 },
  { id: "carpentry", name: "Carpentry", icon: <Hammer className="h-6 w-6" />, trainerCount: 167 },
  { id: "tech", name: "Tech Skills", icon: <Laptop className="h-6 w-6" />, trainerCount: 298 },
  { id: "catering", name: "Catering", icon: <Utensils className="h-6 w-6" />, trainerCount: 421 },
  { id: "mechanics", name: "Auto Mechanics", icon: <Car className="h-6 w-6" />, trainerCount: 203 },
];

export function SkillCategories() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Popular Skills to Learn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from the most in-demand skills. Each category has verified trainers ready to teach you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to="/skills">
              <Card
                className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 hover:border-green-500"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">
                    {category.trainerCount} trainers
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/skills">
            <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
              View All Skills
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}