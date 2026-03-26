import { motion } from "framer-motion";
import { Monitor, ShieldCheck, TrendingUp, Code, Database, Globe, Palette, Wifi } from "lucide-react";

const courses = [
  {
    icon: Monitor,
    title: "Basic Computer Training",
    desc: "Master computer fundamentals, MS Office, email & internet essentials from scratch.",
    duration: "2 Months",
    level: "Beginner",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Hacking & Cybersecurity",
    desc: "Learn penetration testing, vulnerability assessment, and network security hands-on.",
    duration: "4 Months",
    level: "Advanced",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "SEO, social media marketing, Google Ads, content strategy & analytics.",
    duration: "3 Months",
    level: "Intermediate",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Full-stack web development with HTML, CSS, JavaScript, React & Node.js.",
    duration: "6 Months",
    level: "Intermediate",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    desc: "Python, data visualization, machine learning fundamentals & real-world projects.",
    duration: "5 Months",
    level: "Advanced",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Adobe Photoshop, Illustrator, branding, UI/UX design principles.",
    duration: "3 Months",
    level: "Beginner",
  },
  {
    icon: Wifi,
    title: "Networking & IT Support",
    desc: "Network setup, troubleshooting, CCNA preparation & system administration.",
    duration: "4 Months",
    level: "Intermediate",
  },
  {
    icon: Globe,
    title: "Freelancing & Remote Work",
    desc: "Build your freelancing career on Upwork, Fiverr & global platforms.",
    duration: "1 Month",
    level: "Beginner",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced: "text-red-400 bg-red-400/10",
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Our Programs</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Courses That <span className="text-primary text-glow">Transform</span> Careers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Industry-aligned curriculum designed to make you job-ready with practical, hands-on training.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <course.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{course.title}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{course.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{course.duration}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[course.level]}`}>
                  {course.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-wider hover:bg-primary/90 transition-all box-glow-strong"
          >
            ENROLL NOW — START YOUR JOURNEY
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
