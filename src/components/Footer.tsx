import { useLang } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/DrNillyShams', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/nillyshams', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/201119500192', label: 'WhatsApp' },
];

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">{t('د. نيللي شمس', 'Dr. Nelly Shams')}</h3>
            <p className="text-background/70 leading-relaxed">
              {t(
                'استشاري التغذية العلاجية والصحة العامة. نساعدك على تحقيق أهدافك الصحية بأسلوب علمي.',
                'Consultant of Therapeutic Nutrition & Public Health. Helping you achieve your health goals with scientific methods.'
              )}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">{t('تواصلي معنا', 'Contact Us')}</h4>
            <div className="space-y-3 text-background/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">{t('الإسكندرية، مصر 21500', 'Alexandria, Egypt 21500')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:01119500192" className="text-sm hover:text-primary transition-colors" dir="ltr">01119500192</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">info@drnellyshams.com</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">{t('تابعينا', 'Follow Us')}</h4>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          {t(
            `© ${new Date().getFullYear()} د. نيللي شمس. جميع الحقوق محفوظة.`,
            `© ${new Date().getFullYear()} Dr. Nelly Shams. All rights reserved.`
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
