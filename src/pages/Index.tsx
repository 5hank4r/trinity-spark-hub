import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CertificateSection from "@/components/CertificateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
