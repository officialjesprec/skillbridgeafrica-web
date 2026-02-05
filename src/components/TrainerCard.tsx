import { MapPin, Clock, DollarSign, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export interface Trainer {
  id: string;
  name: string;
  skill: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  imageUrl: string;
  experience: string;
  studentsCount: number;
}

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        {/* Trainer Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={trainer.imageUrl}
            alt={trainer.name}
            className="h-full w-full object-cover"
          />
          {trainer.verified && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-green-600 text-white gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Verified
              </Badge>
            </div>
          )}
        </div>

        {/* Trainer Details */}
        <div className="p-4">
          {/* Name and Skill */}
          <div className="mb-3">
            <h3 className="font-semibold text-lg">{trainer.name}</h3>
            <p className="text-sm text-green-700 font-medium">{trainer.skill}</p>
          </div>

          {/* Rating */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{trainer.rating}</span>
            </div>
            <span className="text-sm text-gray-600">
              ({trainer.reviewCount} reviews)
            </span>
          </div>

          {/* Key Info - The most important for Sadiq */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-700">{trainer.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">{trainer.price}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span className="text-gray-700">{trainer.duration}</span>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4 text-sm text-gray-600">
            <span className="font-medium">{trainer.experience}</span> • {trainer.studentsCount}+ students
          </div>

          {/* CTA */}
          <Link to={`/trainer/${trainer.id}`}>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              View Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}