import { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LanguageContext';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

const navItems = [
  { ar: 'الرئيسية', en: 'Home', href: '#hero' },
  { ar: 'خدماتنا', en: 'Services', href: '#services' },
  { ar: 'احجزي الآن', en: 'Book Now', href: '#booking' },
  { ar: 'آراء العملاء', en: 'Testimonials', href: '#testimonials' },
  { ar: 'الكورسات', en: 'Courses', href: '#courses' },
  { ar: 'المدونة', en: 'Blog', href: '#blog' },
  { ar: 'الفروع', en: 'Locations', href: '#locations' },
];

const Navbar = () => {
  const { t, toggleLang, lang } = useLang();
  const { isDark, toggle: toggleDark } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#hero" className="font-display text-xl font-bold text-primary">
          {t('د. نيللي شمس', 'Dr. Nelly Shams')}
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t(item.ar, item.en)}
            </a>
          ))}
          <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button onClick={toggleDark} className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleLang} className="p-2 rounded-full bg-secondary text-secondary-foreground">
            <Globe className="w-4 h-4" />
          </button>
          <button onClick={toggleDark} className="p-2 rounded-full bg-secondary text-secondary-foreground">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in-up">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary py-2 font-medium transition-colors">
                {t(item.ar, item.en)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
