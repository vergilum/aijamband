import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BandSection } from "@/components/sections/BandSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HostSection } from "@/components/sections/HostSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { AvailableDatesSection } from "@/components/sections/AvailableDatesSection";
import { PhotoSection } from "@/components/sections/PhotoSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { VideoSection } from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PositioningSection />
        <HostSection />
        <BandSection />
        <VideoSection />
        <PhotoSection />
        <PackagesSection />
        <AvailableDatesSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
