import { useLang } from '@/contexts/LanguageContext';
import { Scale, Apple, Droplets, HeartPulse, ClipboardList } from 'lucide-react';

const services = [
  {
    icon: Scale,
    ar: 'برامج إدارة الوزن',
    en: 'Weight Management Programs',
    arDesc: 'خطط مخصصة لفقدان الوزن أو زيادته بطريقة صحية ومستدامة',
    enDesc: 'Customized plans for healthy and sustainable weight loss or gain',
  },
  {
    icon: Apple,
    ar: 'التغذية العلاجية',
    en: 'Therapeutic Nutrition',
    arDesc: 'برامج غذائية متخصصة لدعم العلاج من الأمراض المزمنة',
    enDesc: 'Specialized nutrition programs to support chronic disease treatment',
  },
  {
    icon: Droplets,
    ar: 'تغذية السكري ومقاومة الأنسولين',
    en: 'Diabetes & Insulin Resistance',
    arDesc: 'خطط غذائية علمية للتحكم في مستويات السكر ومقاومة الأنسولين',
    enDesc: 'Evidence-based nutrition plans for blood sugar and insulin management',
  },
  {
    icon: HeartPulse,
    ar: 'استشارات الصحة العامة',
    en: 'Public Health Consultation',
    arDesc: 'استشارات شاملة لتحسين نمط الحياة والوقاية من الأمراض',
    enDesc: 'Comprehensive consultations for lifestyle improvement and disease prevention',
  },
  {
    icon: ClipboardList,
    ar: 'خطط غذائية مخصصة',
    en: 'Personalized Diet Plans',
    arDesc: 'أنظمة غذائية مصممة خصيصًا وفقًا لاحتياجاتك وأهدافك',
    enDesc: 'Tailored dietary systems designed around your needs and goals',
  },
];

const Services = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('خدماتنا', 'Our Services')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t(
              'نقدم مجموعة شاملة من خدمات التغذية العلاجية والصحة العامة لتلبية احتياجاتك',
              'We offer a comprehensive range of therapeutic nutrition and public health services to meet your needs'
            )}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl p-7 card-elevated group cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{t(s.ar, s.en)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(s.arDesc, s.enDesc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
