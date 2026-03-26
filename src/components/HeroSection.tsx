import { motion } from "framer-motion";
import { ChevronDown, Shield, Zap, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/trinity-logo-clean.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Animated particles / grid effect */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(195 100% 50%) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img src={logo} alt="Trinity Academy Logo" className="w-28 h-28 mx-auto animate-float" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4"
        >
          <span className="text-primary text-glow">TRINITY</span>{" "}
          <span className="text-foreground">ACADEMY</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Master the Future of Technology — From Fundamentals to Cybersecurity
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-muted-foreground mb-10"
        >
          Machapokhari Shopping Center, 2nd Floor | academy.trinitytech.com.np
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#courses"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-wider hover:bg-primary/90 transition-all box-glow-strong"
          >
            EXPLORE COURSES
          </a>
          <a
            href="#about"
            className="border border-primary/40 text-primary px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-wider hover:bg-primary/10 transition-all"
          >
            LEARN MORE
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Shield, label: "Industry-Ready Skills", value: "10+ Courses" },
            { icon: Zap, label: "Hands-On Training", value: "100% Practical" },
            { icon: Award, label: "Certified Program", value: "Verified Certs" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <span className="font-display text-lg font-bold text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
