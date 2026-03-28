import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsCarousel from '@/components/ClientsCarousel';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ReferencesSection from '@/components/ReferencesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsCarousel />
        <ServicesSection />
        <AboutSection />
        <ReferencesSection />
        <ProcessSection />
      </main>
      <Footer />
    </>
  );
}
