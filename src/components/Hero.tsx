import { useLang } from '@/contexts/LanguageContext';
import doctorImg from '@/assets/doctor-hero.jpg';

const Hero = () => {
  const { t } = useLang();

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-20">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 animate-float blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent/5 animate-float-delayed blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-primary/8 animate-float-slow blur-2xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-start" style={{ animation: 'fade-in-up 0.8s ease-out forwards' }}>
            <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
              {t('استشاري التغذية العلاجية والصحة العامة', 'Consultant of Therapeutic Nutrition & Public Health')}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {t(
                'ابدئي رحلتك نحو صحة أفضل ونظام غذائي متوازن',
                'Start Your Journey Towards Better Health & Balanced Nutrition'
              )}
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              {t(
                'مع د. نيللي شمس، احصلي على خطة غذائية مصممة خصيصًا لاحتياجاتك الصحية. نساعدك على تحقيق أهدافك الصحية بأسلوب علمي ومتابعة مستمرة.',
                'With Dr. Nelly Shams, get a personalized nutrition plan designed for your unique health needs. We help you achieve your health goals with scientific methods and continuous follow-up.'
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full text-lg btn-glow glow-primary hover:scale-105 transition-transform"
              >
                {t('احجزي الآن', 'Book Now')}
              </button>
              <a
                href="tel:01119500192"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-full text-lg hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all"
              >
                {t('تواصل عبر الهاتف', 'Call Us')}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center" style={{ animation: 'slide-in-right 0.9s ease-out forwards' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3 blur-sm" />
              <img
                src={doctorImg}
                alt={t('د. نيللي شمس', 'Dr. Nelly Shams')}
                className="relative w-80 sm:w-96 rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
