import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Film, Palette, Users } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function AboutSection() {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Camera, number: '500+', label: 'Projects Completed' },
    { icon: Film, number: '100+', label: 'Video Productions' },
    { icon: Palette, number: '50+', label: 'Brand Identities' },
    { icon: Users, number: '200+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background animation layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20"
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -40, 30, 0],
                scale: [1, 1.3, 0.7, 1],
                rotate: [0, 120, 240, 360],
              }}
              transition={{
                duration: 12 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
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
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileInView={{
                x: [0, 5, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                {t('about.subtitle')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                {t('about.title')}
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('about.description')}
            </motion.p>

            {/* Enhanced Stats with animations */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.8, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="relative mb-4"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <stat.icon className="w-10 h-10 text-cyan-400 mx-auto animate-pulse-glow" />
                    {/* Floating particles around icons */}
                    {[...Array(3)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        animate={{
                          x: [0, Math.random() * 30 - 15],
                          y: [0, Math.random() * 30 - 15],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: particleIndex * 0.8,
                          ease: "easeOut",
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-white mb-2"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 5px rgba(6, 182, 212, 0.5)",
                        "0 0 15px rgba(6, 182, 212, 0.8)",
                        "0 0 5px rgba(6, 182, 212, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Visual Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Enhanced Main Visual */}
              <motion.div 
                className="aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-cyan-500/20"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                  borderColor: "rgba(6, 182, 212, 0.5)"
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative"
                  animate={{
                    background: [
                      "linear-gradient(135deg, #374151 0%, #1f2937 100%)",
                      "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
                      "linear-gradient(135deg, #374151 0%, #1f2937 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Camera className="w-16 h-16 text-cyan-400 mx-auto mb-4 drop-shadow-2xl animate-pulse-glow" />
                    </motion.div>
                    <motion.p 
                      className="text-gray-400 font-semibold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Creative Excellence
                    </motion.p>
                  </div>
                  
                  {/* Background particles inside the main visual */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeOut",
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Film className="w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                whileHover={{ scale: 1.3, rotate: -20 }}
              >
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Palette className="w-6 h-6 text-white drop-shadow-lg" />
                </motion.div>
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-xl"
                animate={{
                  x: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Users className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
