import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsCarousel from '@/components/ClientsCarousel';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ReferencesSection from '@/components/ReferencesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsCarousel />
        <AboutSection />
        <ServicesSection />
        <ReferencesSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
