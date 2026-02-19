import { useState, FormEvent } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

const WHATSAPP_NUMBER = '201119500192';

const BookingForm = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', goal: '', branch: '' });

  const goals = [
    { ar: 'فقدان الوزن', en: 'Weight Loss' },
    { ar: 'تغذية علاجية', en: 'Therapeutic Nutrition' },
    { ar: 'صحة عامة', en: 'Public Health' },
    { ar: 'متابعة', en: 'Follow-up' },
  ];

  const branches = [
    { ar: 'الإسكندرية - سموحة', en: 'Alexandria - Smouha' },
    { ar: 'الشيخ زايد - بيفرلي هيلز', en: 'Sheikh Zayed - Beverly Hills' },
    { ar: 'دمنهور', en: 'Damanhour' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `مرحبًا د. نيللي شمس،\nأود حجز استشارة.\n\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالهدف: ${form.goal}\nالفرع: ${form.branch}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto max-w-2xl">
        <div className="scroll-reveal text-center mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('احجزي استشارتك', 'Book Your Consultation')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('املئي البيانات التالية وسنتواصل معك عبر واتساب', 'Fill in the form below and we\'ll reach you via WhatsApp')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="scroll-reveal bg-card rounded-2xl p-8 card-elevated space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">{t('الاسم الكامل', 'Full Name')}</label>
            <input
              required
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              placeholder={t('أدخلي اسمك', 'Enter your name')}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">{t('رقم الهاتف', 'Phone Number')}</label>
            <input
              required type="tel"
              value={form.phone}
              onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              placeholder={t('أدخلي رقم هاتفك', 'Enter your phone number')}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">{t('الهدف', 'Goal')}</label>
            <select
              required
              value={form.goal}
              onChange={e => setForm(p => ({ ...p, goal: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            >
              <option value="">{t('اختاري الهدف', 'Select a goal')}</option>
              {goals.map(g => <option key={g.en} value={t(g.ar, g.en)}>{t(g.ar, g.en)}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">{t('الفرع المفضل', 'Preferred Branch')}</label>
            <select
              required
              value={form.branch}
              onChange={e => setForm(p => ({ ...p, branch: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
            >
              <option value="">{t('اختاري الفرع', 'Select a branch')}</option>
              {branches.map(b => <option key={b.en} value={t(b.ar, b.en)}>{t(b.ar, b.en)}</option>)}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-lg btn-glow glow-primary hover:scale-[1.02] transition-transform"
          >
            <Send className="w-5 h-5" />
            {t('احجزي استشارتك الآن', 'Book Your Consultation Now')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
