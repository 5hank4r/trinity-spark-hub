import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Start Your <span className="text-primary text-glow">Journey</span> Today
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: MapPin, label: "Visit Us", value: "Machapokhari Shopping Center, 2nd Floor, Kathmandu" },
              { icon: Phone, label: "Call Us", value: "+977 980-3103604" },
              { icon: Mail, label: "Email", value: "info@trinitytech.com.np" },
              { icon: Clock, label: "Hours", value: "Sun-Fri: 7:00 AM - 6:00 PM" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-xs text-muted-foreground tracking-wider uppercase">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-border mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d85.3!3d27.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMachapokhari%2C+Kathmandu!5e0!3m2!1sen!2snp!4v1600000000000"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                title="Trinity Academy Location"
              />
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4 bg-card p-6 rounded-xl border border-border">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Quick Enquiry</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <select className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:border-primary transition-colors">
                <option value="">Select Course</option>
                <option>Basic Computer Training</option>
                <option>Ethical Hacking & Cybersecurity</option>
                <option>Digital Marketing</option>
                <option>Web Development</option>
                <option>Data Science & Analytics</option>
                <option>Graphic Design</option>
                <option>Networking & IT Support</option>
                <option>Freelancing & Remote Work</option>
                <option>Other</option>
              </select>
              <textarea
                rows={3}
                placeholder="Your Message (optional)"
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="button"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-display text-sm font-semibold tracking-wider hover:bg-primary/90 transition-all box-glow-strong"
              >
                SEND ENQUIRY
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
