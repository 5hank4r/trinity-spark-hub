import { motion } from "framer-motion";
import { Users, BookOpen, Briefcase, Clock, Laptop, Award } from "lucide-react";

const features = [
  { icon: Users, title: "Expert Instructors", desc: "Learn from certified industry professionals with real-world experience." },
  { icon: BookOpen, title: "Practical Curriculum", desc: "No boring theory — 80% hands-on labs, projects & real scenarios." },
  { icon: Briefcase, title: "Job Placement Support", desc: "Resume building, interview prep & connections with top employers." },
  { icon: Clock, title: "Flexible Timings", desc: "Morning, day & evening batches to fit your schedule." },
  { icon: Laptop, title: "Modern Lab", desc: "High-speed internet, latest hardware & licensed software." },
  { icon: Award, title: "Verified Certificates", desc: "Globally shareable certificates with QR code verification." },
];

const WhyUsSection = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Why Trinity</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Why Students <span className="text-primary text-glow">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
