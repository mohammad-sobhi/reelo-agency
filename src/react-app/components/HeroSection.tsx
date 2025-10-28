import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function HeroSection() {
  const { language, t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
          onError={(e) => {
            console.error('Video failed to load:', e);
            // Hide video and show fallback background
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Fallback Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/30 via-transparent to-blue-900/30" />
        </div>
        
        {/* Video Overlay with Animated Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.img 
            src="https://mocha-cdn.com/019a2779-0425-7388-a06f-5ae7d0c6e3c3/reelo-logo-03.png"
            alt="Reelo Agency"
            className="h-20 mx-auto mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-cyan-300 text-xl md:text-2xl font-light tracking-wide drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {t('hero.description')}
          </motion.p>

          {/* Service Icons */}
          <motion.div
            className="flex justify-center items-center space-x-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {[
              { icon: '📸', label: language === 'ar' ? 'التصوير' : 'Photography' },
              { icon: '🎬', label: language === 'ar' ? 'المونتاج' : 'Editing' },
              { icon: '📈', label: language === 'ar' ? 'التسويق' : 'Marketing' },
              { icon: '🎨', label: language === 'ar' ? 'التصميم' : 'Design' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl mb-1">{service.icon}</div>
                <span className="text-cyan-300 text-sm font-medium">{service.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('#portfolio')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t('hero.cta1')}</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm bg-black/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>{t('hero.cta2')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
