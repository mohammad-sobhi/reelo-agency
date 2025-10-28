import { LanguageProvider } from "@/react-app/contexts/LanguageContext";
import Header from "@/react-app/components/Header";
import HeroSection from "@/react-app/components/HeroSection";
import AboutSection from "@/react-app/components/AboutSection";
import ServicesSection from "@/react-app/components/ServicesSection";
import PortfolioSection from "@/react-app/components/PortfolioSection";
import TeamSection from "@/react-app/components/TeamSection";
import ClientsSection from "@/react-app/components/ClientsSection";
import ContactSection from "@/react-app/components/ContactSection";
import Footer from "@/react-app/components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Enhanced Global animated background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Primary animated particles */}
          <div className="absolute inset-0 animate-float">
            {Array.from({ length: 80 }, (_, i) => (
              <div
                key={`primary-${i}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Secondary floating particles */}
          <div className="absolute inset-0 animate-float-delayed">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={`secondary-${i}`}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full opacity-30 animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Large spinning particles */}
          <div className="absolute inset-0 animate-float-slow">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={`large-${i}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full opacity-10 animate-spin"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating shapes */}
          <div className="absolute inset-0 animate-drift">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={`shape-${i}`}
                className={`absolute opacity-5 animate-morph ${
                  i % 3 === 0 ? 'w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400' :
                  i % 3 === 1 ? 'w-6 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 rotate-45' :
                  'w-10 h-6 rounded-full bg-gradient-to-br from-green-400 to-teal-400'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Gradient waves */}
          <div className="absolute inset-0 animate-wave opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-wave-x" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-wave-y" />
          </div>
        </div>
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <TeamSection />
            <ClientsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
