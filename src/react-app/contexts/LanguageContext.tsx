import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Our Work',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'We Create Visual Stories That Move People',
    'hero.subtitle': 'Your Story, In Motion',
    'hero.description': 'Professional photography, videography, editing, and creative marketing solutions that bring your vision to life.',
    'hero.cta1': 'Our Work',
    'hero.cta2': 'Contact Us',
    
    // About Section
    'about.title': 'Who We Are',
    'about.subtitle': 'Crafting Visual Excellence',
    'about.description': 'We are Reelo Agency, a creative studio dedicated to transforming ideas into compelling visual narratives. Our passion lies in creating authentic stories that resonate with audiences and drive meaningful connections.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Complete Creative Solutions',
    'services.photography': 'Photography',
    'services.videography': 'Videography',
    'services.editing': 'Editing & Montage',
    'services.branding': 'Branding',
    'services.marketing': 'Social Media Marketing',
    'services.design': 'Design',
    
    // Portfolio Section
    'portfolio.title': 'Our Work',
    'portfolio.subtitle': 'Creative Excellence in Motion',
    
    // Team Section
    'team.title': 'Our Team',
    'team.subtitle': 'Creative Minds Behind the Magic',
    
    // Clients Section
    'clients.title': 'Trusted By',
    'clients.subtitle': 'In Collaboration With Amazing Brands',
    
    // Contact Section
    'contact.title': 'Let\'s Create Together',
    'contact.subtitle': 'Ready to bring your vision to life?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Why Us Section
    'why.title': 'Why Reelo',
    'why.subtitle': 'What Makes Us Different',
    'why.description': 'We combine European design sensibilities with cutting-edge technology to deliver visual experiences that captivate and inspire. Our commitment to excellence ensures every project exceeds expectations.'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.portfolio': 'أعمالنا',
    'nav.team': 'فريقنا',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'نحن نبدع القصص المرئية التي تحرك المشاعر',
    'hero.subtitle': 'قصتك، في حركة',
    'hero.description': 'حلول احترافية للتصوير والمونتاج والتسويق الإبداعي التي تحول رؤيتك إلى واقع.',
    'hero.cta1': 'أعمالنا',
    'hero.cta2': 'تواصل معنا',
    
    // About Section
    'about.title': 'من نحن',
    'about.subtitle': 'صناعة التميز البصري',
    'about.description': 'نحن وكالة ريلو، استوديو إبداعي مُكرس لتحويل الأفكار إلى قصص بصرية مقنعة. شغفنا يكمن في إنشاء قصص أصيلة تتردد مع الجماهير وتحفز الروابط المعنوية.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول إبداعية شاملة',
    'services.photography': 'التصوير الفوتوغرافي',
    'services.videography': 'التصوير المرئي',
    'services.editing': 'المونتاج والتحرير',
    'services.branding': 'الهوية التجارية',
    'services.marketing': 'التسويق عبر وسائل التواصل',
    'services.design': 'التصميم',
    
    // Portfolio Section
    'portfolio.title': 'أعمالنا',
    'portfolio.subtitle': 'التميز الإبداعي في الحركة',
    
    // Team Section
    'team.title': 'فريقنا',
    'team.subtitle': 'العقول المبدعة وراء السحر',
    
    // Clients Section
    'clients.title': 'يثقون بنا',
    'clients.subtitle': 'بالتعاون مع علامات تجارية مذهلة',
    
    // Contact Section
    'contact.title': 'لنبدع معاً',
    'contact.subtitle': 'مستعد لتحويل رؤيتك إلى واقع؟',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    
    // Why Us Section
    'why.title': 'لماذا ريلو',
    'why.subtitle': 'ما يجعلنا مختلفين',
    'why.description': 'نحن نجمع بين الحساسيات التصميمية الأوروبية والتكنولوجيا المتطورة لتقديم تجارب بصرية تأسر وتلهم. التزامنا بالتميز يضمن أن كل مشروع يتجاوز التوقعات.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
