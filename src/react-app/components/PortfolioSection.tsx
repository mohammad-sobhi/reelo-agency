import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function PortfolioSection() {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Campaign 2024',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=400&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 2,
      title: 'Product Launch Video',
      category: 'Videography',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center',
      type: 'video'
    },
    {
      id: 3,
      title: 'Creative Studio Session',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 4,
      title: 'Corporate Identity',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      type: 'image'
    },
    {
      id: 5,
      title: 'Documentary Film',
      category: 'Videography',
      image: 'https://images.unsplash.com/photo-1518112327744-ec994ad9a18d?w=600&h=400&fit=crop&crop=center',
      type: 'video'
    },
    {
      id: 6,
      title: 'Event Coverage',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&crop=center',
      type: 'image'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t('portfolio.subtitle')}
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
            {t('portfolio.title')}
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Play Button for Videos */}
              {item.type === 'video' && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500/80 transition-all duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
