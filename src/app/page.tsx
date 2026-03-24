import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReferencesSection from '@/components/ReferencesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileFloatingCTA from '@/components/MobileFloatingCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <ClientsCarousel />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <ProcessSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileFloatingCTA />
    </>
  );
}
