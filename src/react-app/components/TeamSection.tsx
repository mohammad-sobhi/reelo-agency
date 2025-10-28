import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/react-app/contexts/LanguageContext';

export default function TeamSection() {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Al-Mahmoud',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      quote: 'Creativity is intelligence having fun.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Lead Photographer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1bc?w=400&h=400&fit=crop&crop=face',
      quote: 'Every picture tells a story.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Marcus Chen',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      quote: 'Motion creates emotion.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Layla Hassan',
      role: 'Brand Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      quote: 'Design is thinking made visual.',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-black" dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
            {t('team.subtitle')}
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
            {t('team.title')}
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 text-center hover:bg-gray-800 transition-all duration-500 group-hover:scale-105">
                {/* Profile Image */}
                <motion.div
                  className="relative mx-auto mb-6 w-32 h-32 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    "{member.quote}"
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = platform === 'linkedin' ? Linkedin : 
                                  platform === 'instagram' ? Instagram : Twitter;
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="w-4 h-4" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-2xl transition-colors duration-300" />

                {/* Background Pattern */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Creative Team</h3>
            <p className="text-gray-400 mb-6">We're always looking for talented individuals to join our mission.</p>
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Openings
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
