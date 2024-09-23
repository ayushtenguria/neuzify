import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyUseUs from "./components/WhyUseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyUseUs />
      <FeatureSection />
      <WhyChooseUs />
    </div>
  );
}
