import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/react-app/contexts/LanguageContext';
import { Camera, Video, Palette, TrendingUp, Award, Users, Globe, Zap } from 'lucide-react';

export default function ClientsSection() {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Enhanced client logos with real brand icons
  const clients = [
    { 
      name: 'TechCorp', 
      icon: Camera,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Creative Studio', 
      icon: Palette,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'MediaFlow', 
      icon: Video,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'BrandX', 
      icon: TrendingUp,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'NextGen', 
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Visionary', 
      icon: Award,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'InnovateLab', 
      icon: Globe,
      color: 'from-teal-500 to-blue-500'
    },
    { 
      name: 'FutureWorks', 
      icon: Users,
      color: 'from-pink-500 to-red-500'
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Enhanced background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-drift opacity-20">
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 60, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
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
            className="text-cyan-400 text-sm font-semibold tracking-wide uppercase animate-pulse-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            TRUSTED BY
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t('clients.title')}
            </span>
          </motion.h2>
        </motion.div>

        {/* Enhanced Client Icons Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="group relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ 
                delay: 0.8 + index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${client.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              />
              
              {/* Main container */}
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${client.color} group-hover:shadow-2xl transition-all duration-500`}>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <client.icon className="w-8 h-8 text-white drop-shadow-lg" />
                </motion.div>
                
                {/* Company name on hover */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="text-cyan-400 text-sm font-semibold bg-gray-800/80 px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
                    {client.name}
                  </span>
                </motion.div>
              </div>
              
              {/* Floating particles around icon */}
              {[...Array(3)].map((_, particleIndex) => (
                <motion.div
                  key={particleIndex}
                  className="absolute w-2 h-2 bg-white/40 rounded-full pointer-events-none"
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2 + particleIndex * 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          {[
            { number: '500+', label: 'Projects Completed', icon: Award },
            { number: '200+', label: 'Happy Clients', icon: Users },
            { number: '50+', label: 'Awards Won', icon: TrendingUp },
            { number: '24/7', label: 'Support', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
              }}
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Testimonial */}
        <motion.div
          className="text-center max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20">
            {/* Animated quote marks */}
            <motion.div
              className="absolute -top-4 -left-4 text-6xl text-cyan-500/40 font-serif"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              "
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 text-6xl text-cyan-500/40 font-serif rotate-180"
              animate={{ rotate: [180, 190, 180] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              "
            </motion.div>
            
            <motion.blockquote
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
            >
              Working with Reelo Agency has been transformative for our brand. Their creative vision and technical expertise brought our ideas to life in ways we never imagined possible.
            </motion.blockquote>
            
            <motion.div
              className="flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=60&h=60&fit=crop&crop=face"
                alt="Client"
                className="w-16 h-16 rounded-full border-2 border-cyan-400/50"
                whileHover={{ scale: 1.1, borderColor: "rgba(6, 182, 212, 1)" }}
              />
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Alex Johnson</p>
                <p className="text-cyan-400 text-sm">CEO, TechCorp</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
