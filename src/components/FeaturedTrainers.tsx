import { Link } from "react-router";
import { TrainerCard, Trainer } from "./TrainerCard";
import { Button } from "./ui/button";

const featuredTrainers: Trainer[] = [
  {
    id: "1",
    name: "Chinedu Okafor",
    skill: "Phone Repair & Maintenance",
    location: "Ilorin, Kwara State",
    price: "₦25,000 - ₦35,000",
    duration: "4-6 weeks",
    rating: 4.9,
    reviewCount: 127,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1543335864-4477fcdb2b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcGhvbmUlMjByZXBhaXIlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3MDE5ODA5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "8 years experience",
    studentsCount: 450,
  },
  {
    id: "2",
    name: "Aisha Mohammed",
    skill: "Professional Photography",
    location: "Lagos Island, Lagos",
    price: "₦40,000 - ₦60,000",
    duration: "6-8 weeks",
    rating: 4.8,
    reviewCount: 93,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1647647639098-8014e2a1c6df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcGhvdG9ncmFwaGVyJTIwd2l0aCUyMGNhbWVyYXxlbnwxfHx8fDE3NzAxOTgxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "10 years experience",
    studentsCount: 320,
  },
  {
    id: "3",
    name: "Ibrahim Musa",
    skill: "Barbing & Hair Styling",
    location: "Kano, Kano State",
    price: "₦20,000 - ₦30,000",
    duration: "3-4 weeks",
    rating: 4.9,
    reviewCount: 156,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1662210819678-42791e8255a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwYmFyYmVyJTIwaGFpcmRyZXNzZXJ8ZW58MXx8fHwxNzcwMTk4MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "6 years experience",
    studentsCount: 580,
  },
  {
    id: "4",
    name: "Ngozi Adebayo",
    skill: "Fashion Design & Tailoring",
    location: "Ibadan, Oyo State",
    price: "₦35,000 - ₦50,000",
    duration: "8-10 weeks",
    rating: 4.7,
    reviewCount: 84,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1687422808289-e721259c9eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZmFzaGlvbiUyMHRhaWxvciUyMHNld2luZ3xlbnwxfHx8fDE3NzAxOTgxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    experience: "12 years experience",
    studentsCount: 280,
  },
];

export function FeaturedTrainers() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Top-Rated Trainers
            </h2>
            <p className="text-gray-600">
              Highly recommended by students like you
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTrainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/trainers">
            <Button variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
              View All Trainers →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}