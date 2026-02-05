import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface Testimonial {
  id: string;
  name: string;
  skill: string;
  location: string;
  text: string;
  rating: number;
  trainerName: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sadiq Musa",
    skill: "Phone Repair",
    location: "Ilorin",
    text: "I was scared of being scammed, but SkillBridge showed me real reviews and clear pricing. Now I fix phones and earn ₦15,000 weekly. Best decision I made.",
    rating: 5,
    trainerName: "Chinedu",
  },
  {
    id: "2",
    name: "Fatima Ahmed",
    skill: "Photography",
    location: "Abuja",
    text: "The trainer was close to my area, and I could see all the costs before starting. No surprises. I now shoot events every weekend!",
    rating: 5,
    trainerName: "Aisha",
  },
  {
    id: "3",
    name: "Tunde Bakare",
    skill: "Barbing",
    location: "Lagos",
    text: "I read all the reviews first. People were honest. My trainer was patient and skilled. After 4 weeks, I opened my own shop.",
    rating: 5,
    trainerName: "Ibrahim",
  },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from people who learned real skills and now earn from them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4 text-green-600 opacity-20">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    Learned {testimonial.skill} • {testimonial.location}
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Trained by {testimonial.trainerName}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional trust statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <p className="text-gray-700">
              <span className="font-semibold text-green-700">Every review is verified.</span> We only show feedback from real students who completed training. No fake reviews allowed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
