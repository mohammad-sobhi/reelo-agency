import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video, Edit, Palette, Share2, Laptop } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function ServicesSection() {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Camera,
      key: 'photography',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Video,
      key: 'videography',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Edit,
      key: 'editing',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      key: 'branding',
      gradient: 'from-pink-500 to-red-500',
    },
    {
      icon: Share2,
      key: 'marketing',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Laptop,
      key: 'design',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Enhanced background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-drift opacity-5">
          {Array.from({ length: 25 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 4 === 0 ? 'w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30' :
                i % 4 === 1 ? 'w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30' :
                i % 4 === 2 ? 'w-20 h-20 bg-gradient-to-br from-green-500/30 to-teal-500/30' :
                'w-8 h-8 bg-gradient-to-br from-orange-500/30 to-red-500/30'
              }`}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                rotate: [0, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-cyan-400 text-sm font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('services.subtitle')}
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {t('services.title')}
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-8 h-64 flex flex-col justify-between hover:bg-gray-800 transition-all duration-500 group-hover:scale-105">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {t(`services.${service.key}`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Professional {service.key} services that bring your vision to life with stunning visual impact.
                  </p>
                </div>

                {/* Hover Animation Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
