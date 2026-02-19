import { LanguageProvider } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BookingForm from '@/components/BookingForm';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

const IndexContent = () => {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <BookingForm />
      <Courses />
      <Testimonials />
      <Blog />
      <Locations />
      <Footer />
    </main>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;
