import { useLang } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

const testimonials = [
  {
    ar: 'د. نيللي غيرت حياتي! خسيت 15 كيلو في 3 شهور بدون حرمان. النظام الغذائي كان متوازن ومناسب لأسلوب حياتي.',
    en: 'Dr. Nelly changed my life! I lost 15 kg in 3 months without deprivation. The diet was balanced and suited to my lifestyle.',
    nameAr: 'سارة أحمد', nameEn: 'Sara Ahmed', stars: 5,
  },
  {
    ar: 'بعد سنين من المعاناة مع مقاومة الأنسولين، أخيرًا لقيت الحل مع د. نيللي. تحاليلي اتحسنت بشكل ملحوظ.',
    en: 'After years of struggling with insulin resistance, I finally found the solution with Dr. Nelly. My lab results improved significantly.',
    nameAr: 'منى خالد', nameEn: 'Mona Khaled', stars: 5,
  },
  {
    ar: 'أفضل دكتورة تغذية! أسلوبها العلمي والمتابعة المستمرة خلتني أحقق أهدافي الصحية بسهولة.',
    en: 'Best nutritionist ever! Her scientific approach and continuous follow-up helped me achieve my health goals easily.',
    nameAr: 'ريم محمد', nameEn: 'Reem Mohamed', stars: 5,
  },
  {
    ar: 'النظام الغذائي اللي وضعته د. نيللي مش بس ساعدني أخس، كمان حسّن مستوى طاقتي ونومي بشكل كبير.',
    en: 'The diet plan Dr. Nelly created not only helped me lose weight, but also significantly improved my energy levels and sleep.',
    nameAr: 'نورهان علي', nameEn: 'Nourhan Ali', stars: 5,
  },
];

const Testimonials = () => {
  const { t } = useLang();

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('آراء عملائنا', 'What Our Clients Say')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('قصص نجاح حقيقية من عملائنا', 'Real success stories from our clients')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl p-6 card-elevated"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-4 text-sm">
                "{t(item.ar, item.en)}"
              </p>
              <p className="font-display font-bold text-primary text-sm">
                {t(item.nameAr, item.nameEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
