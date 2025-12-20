import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNavbar />
      <main className="pt-20">
        {children}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
