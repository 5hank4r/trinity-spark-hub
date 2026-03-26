import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anish Gurung",
    course: "Ethical Hacking",
    text: "Trinity Academy changed my life. I went from knowing nothing about cybersecurity to landing a job as a security analyst within 2 months of completing the course!",
    rating: 5,
  },
  {
    name: "Priya Maharjan",
    course: "Digital Marketing",
    text: "The hands-on approach is what sets Trinity apart. I now run my own digital agency and all the skills I use daily were learned here.",
    rating: 5,
  },
  {
    name: "Bikash Tamang",
    course: "Web Development",
    text: "The instructors are incredibly patient and knowledgeable. I built my first website during the course and now I freelance full-time on Upwork.",
    rating: 5,
  },
  {
    name: "Suman Rai",
    course: "Graphic Design",
    text: "From zero design skills to creating professional brand identities. The practical projects gave me a portfolio that got me hired immediately.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            What Our <span className="text-primary text-glow">Students</span> Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-3.5 h-3.5 ${si < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="font-display text-sm font-bold text-foreground">
                  {t.name}
                </p>
                <p className="text-xs text-primary">{t.course}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
