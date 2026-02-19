import { useState } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';
import healthyImg from '@/assets/healthy-lifestyle.jpg';
import ramadanImg from '@/assets/ramadan-healthy.jpg';
import fitnessImg from '@/assets/fitness-health.jpg';

const articles = [
  {
    img: ramadanImg,
    arTitle: 'نصائح غذائية صحية لشهر رمضان',
    enTitle: 'Healthy Nutrition Tips for Ramadan',
    arExcerpt: 'كيف تحافظين على نظام غذائي صحي خلال شهر رمضان المبارك',
    enExcerpt: 'How to maintain a healthy diet during the holy month of Ramadan',
    arBody: 'شهر رمضان فرصة رائعة لتحسين عاداتك الغذائية. ابدئي إفطارك بالتمر والماء، ثم تناولي شوربة خفيفة. احرصي على تناول وجبة سحور غنية بالبروتين والألياف للحفاظ على طاقتك طوال اليوم. تجنبي الأطعمة المقلية والمشروبات الغنية بالسكر، واستبدليها بخيارات صحية مثل الفواكه والمكسرات.',
    enBody: 'Ramadan is a great opportunity to improve your eating habits. Start your iftar with dates and water, then have a light soup. Make sure your suhoor meal is rich in protein and fiber to maintain energy throughout the day. Avoid fried foods and sugary drinks, replacing them with healthy options like fruits and nuts.',
  },
  {
    img: healthyImg,
    arTitle: 'أسرار فقدان الوزن الصحي والمستدام',
    enTitle: 'Secrets of Healthy & Sustainable Weight Loss',
    arExcerpt: 'تعرفي على أفضل الطرق العلمية لخسارة الوزن بشكل صحي',
    enExcerpt: 'Learn the best scientific methods for healthy weight loss',
    arBody: 'فقدان الوزن المستدام يعتمد على تغيير نمط الحياة وليس الحميات القاسية. ركزي على تناول أطعمة غنية بالعناصر الغذائية، واشربي كمية كافية من الماء. مارسي الرياضة بانتظام وحافظي على نوم جيد. تذكري أن الهدف هو صحة أفضل وليس فقط رقم على الميزان.',
    enBody: 'Sustainable weight loss depends on lifestyle changes, not crash diets. Focus on nutrient-rich foods and drink enough water. Exercise regularly and maintain good sleep. Remember, the goal is better health, not just a number on the scale.',
  },
  {
    img: fitnessImg,
    arTitle: 'كيف تعززين أيضك لحرق الدهون بشكل أسرع',
    enTitle: 'How to Boost Your Metabolism for Faster Fat Burning',
    arExcerpt: 'نصائح عملية لتسريع عملية الأيض وزيادة حرق السعرات',
    enExcerpt: 'Practical tips to speed up metabolism and burn more calories',
    arBody: 'يمكنك تعزيز عملية الأيض من خلال عدة طرق: تناولي البروتين في كل وجبة، واشربي الماء البارد، ومارسي تمارين المقاومة. النوم الكافي والتقليل من التوتر لهما دور كبير أيضًا. إضافة التوابل مثل الفلفل الحار والزنجبيل يمكن أن يساعد في تعزيز الحرق.',
    enBody: 'You can boost your metabolism in several ways: eat protein with every meal, drink cold water, and do resistance training. Adequate sleep and reducing stress play a big role too. Adding spices like chili pepper and ginger can help enhance calorie burning.',
  },
];

const Blog = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('المدونة', 'Blog')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('نصائح وأخبار صحية من د. نيللي شمس', 'Health tips and news from Dr. Nelly Shams')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article key={i} className="scroll-reveal bg-card rounded-2xl overflow-hidden card-elevated group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="overflow-hidden h-48">
                <img src={a.img} alt={t(a.arTitle, a.enTitle)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(a.arTitle, a.enTitle)}</h3>
                <p className="text-muted-foreground text-sm mb-4">{t(a.arExcerpt, a.enExcerpt)}</p>
                <button
                  onClick={() => setSelected(i)}
                  className="text-primary font-semibold text-sm hover:underline"
                >
                  {t('اقرأي المزيد', 'Read More')} →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative" onClick={e => e.stopPropagation()} style={{ animation: 'fade-in-up 0.3s ease-out' }}>
              <button onClick={() => setSelected(null)} className="absolute top-4 end-4 p-2 rounded-full bg-secondary text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
              <img src={articles[selected].img} alt="" className="w-full h-48 object-cover rounded-xl mb-6" />
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {t(articles[selected].arTitle, articles[selected].enTitle)}
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                {t(articles[selected].arBody, articles[selected].enBody)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
