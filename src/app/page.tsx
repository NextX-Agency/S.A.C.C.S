import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ClientsCarousel from '@/components/ClientsCarousel';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ReferencesSection from '@/components/ReferencesSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientsCarousel />
        <AboutSection />
        <ServicesSection />
        <ReferencesSection />
        <ProcessSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
