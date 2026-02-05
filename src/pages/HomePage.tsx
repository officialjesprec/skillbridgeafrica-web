import { Hero } from "../components/Hero";
import { SkillCategories } from "../components/SkillCategories";
import { FeaturedTrainers } from "../components/FeaturedTrainers";
import { TrustSection } from "../components/TrustSection";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CallToAction } from "../components/CallToAction";

export function HomePage() {
  return (
    <>
      <Hero />
      <SkillCategories />
      <FeaturedTrainers />
      <TrustSection />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </>
  );
}
