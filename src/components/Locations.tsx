import { useLang } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';

const locations = [
  {
    arName: 'الإسكندرية - سموحة',
    enName: 'Alexandria - Smouha',
    arAddr: '14 شارع زكي رجب، مجمع سموحة الطبي والإداري، المبنى C، الدور الأول (إداري)',
    enAddr: '14 Zaki Ragab St, Smouha Medical Complex, Building C, 1st Floor',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.5!2d29.96!3d31.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEzJzEyLjAiTiAyOcKwNTcnMzYuMCJF!5e0!3m2!1sar!2seg!4v1700000000000',
  },
  {
    arName: 'الشيخ زايد - بيفرلي هيلز',
    enName: 'Sheikh Zayed - Beverly Hills',
    arAddr: 'بيفرلي هيلز - سوديك، البرج الطبي B3/2F/19',
    enAddr: 'Beverly Hills - SODIC, Medical Tower B3/2F/19',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1!2d30.98!3d30.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzAwLjAiTiAzMMKwNTknMDAuMCJF!5e0!3m2!1sar!2seg!4v1700000000000',
  },
  {
    arName: 'دمنهور',
    enName: 'Damanhour',
    arAddr: 'شارع الجمهورية، مبنى الزهراء',
    enAddr: 'Gomhoryia Street, Zahraa Building',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.1!2d30.47!3d31.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDAyJzAwLjAiTiAzMMKwMjgnMDAuMCJF!5e0!3m2!1sar!2seg!4v1700000000000',
  },
];

const Locations = () => {
  const { t } = useLang();

  return (
    <section id="locations" className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('فروعنا', 'Our Locations')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('نتواجد في ثلاثة فروع لخدمتك', 'We have three branches to serve you')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div key={i} className="scroll-reveal bg-card rounded-2xl overflow-hidden card-elevated" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="h-48">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t(loc.arName, loc.enName)}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-1">{t(loc.arName, loc.enName)}</h3>
                    <p className="text-muted-foreground text-sm">{t(loc.arAddr, loc.enAddr)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
