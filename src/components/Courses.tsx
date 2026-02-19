import { useState, FormEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { GraduationCap, Clock, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '201119500192';

const courses = [
  {
    ar: 'برنامج فقدان الوزن أونلاين',
    en: 'Online Weight Loss Program',
    arDesc: 'برنامج شامل لفقدان الوزن بشكل صحي مع متابعة أسبوعية عن بُعد',
    enDesc: 'Comprehensive healthy weight loss program with weekly online follow-up',
    arDuration: '8 أسابيع',
    enDuration: '8 Weeks',
  },
  {
    ar: 'دورة التغذية العلاجية المكثفة',
    en: 'Therapeutic Nutrition Intensive Course',
    arDesc: 'تعلمي أساسيات التغذية العلاجية وكيفية التعامل مع الأمراض المزمنة',
    enDesc: 'Learn therapeutic nutrition fundamentals and chronic disease management',
    arDuration: '6 أسابيع',
    enDuration: '6 Weeks',
  },
  {
    ar: 'برنامج التغذية الصحية في رمضان',
    en: 'Ramadan Healthy Eating Program',
    arDesc: 'خطة غذائية متكاملة لشهر رمضان للحفاظ على صحتك وطاقتك',
    enDesc: 'Complete nutrition plan for Ramadan to maintain health and energy',
    arDuration: '4 أسابيع',
    enDuration: '4 Weeks',
  },
  {
    ar: 'دورة الوعي بالصحة العامة',
    en: 'Public Health Awareness Course',
    arDesc: 'دورة تثقيفية شاملة عن الصحة العامة والوقاية من الأمراض',
    enDesc: 'Comprehensive health education course on public health and disease prevention',
    arDuration: '4 أسابيع',
    enDuration: '4 Weeks',
  },
];

const Courses = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', course: '', contact: '' });

  const contactMethods = [
    { ar: 'واتساب', en: 'WhatsApp' },
    { ar: 'مكالمة هاتفية', en: 'Phone Call' },
    { ar: 'بريد إلكتروني', en: 'Email' },
  ];

  const handleCourseBook = (courseName: string) => {
    const msg = encodeURIComponent(`مرحبًا د. نيللي شمس،\nأود حجز الكورس: ${courseName}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `مرحبًا د. نيللي شمس،\nأود حجز كورس.\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالكورس: ${form.course}\nطريقة التواصل المفضلة: ${form.contact}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('الكورسات والبرامج', 'Courses & Programs')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('برامج تدريبية متخصصة لتحسين صحتك ومعرفتك الغذائية', 'Specialized training programs to improve your health and nutrition knowledge')}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courses.map((c, i) => (
            <div
              key={i}
              className="scroll-reveal bg-card rounded-2xl p-6 card-elevated group flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <GraduationCap className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{t(c.ar, c.en)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{t(c.arDesc, c.enDesc)}</p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                <Clock className="w-4 h-4" />
                {t(c.arDuration, c.enDuration)}
              </div>
              <button
                onClick={() => handleCourseBook(t(c.ar, c.en))}
                className="w-full py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
              >
                {t('احجز الكورس', 'Book Course')}
              </button>
            </div>
          ))}
        </div>

        {/* Course Booking Form */}
        <div className="max-w-2xl mx-auto">
          <div className="scroll-reveal text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {t('احجز كورسك الآن', 'Book Your Course Now')}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="scroll-reveal bg-card rounded-2xl p-8 card-elevated space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">{t('الاسم الكامل', 'Full Name')}</label>
              <input
                required
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder={t('أدخل اسمك', 'Enter your name')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">{t('رقم الهاتف', 'Phone Number')}</label>
              <input
                required type="tel"
                value={form.phone}
                onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder={t('أدخل رقم هاتفك', 'Enter your phone number')}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">{t('الكورس المطلوب', 'Selected Course')}</label>
              <select
                required
                value={form.course}
                onChange={e => setForm(p => ({ ...p, course: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="">{t('اختر الكورس', 'Select a course')}</option>
                {courses.map(c => <option key={c.en} value={t(c.ar, c.en)}>{t(c.ar, c.en)}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">{t('طريقة التواصل المفضلة', 'Preferred Contact Method')}</label>
              <select
                required
                value={form.contact}
                onChange={e => setForm(p => ({ ...p, contact: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="">{t('اختر طريقة التواصل', 'Select contact method')}</option>
                {contactMethods.map(m => <option key={m.en} value={t(m.ar, m.en)}>{t(m.ar, m.en)}</option>)}
              </select>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg btn-glow glow-primary hover:scale-[1.02] transition-transform"
            >
              <Send className="w-5 h-5" />
              {t('احجز الكورس الآن', 'Book Your Course Now')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Courses;
