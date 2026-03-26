import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck, Download, Share2 } from "lucide-react";
import certPreview from "@/assets/certificate-preview.jpg";

const CertificateSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-display text-sm tracking-widest uppercase">Certification</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground mb-6">
              Earn <span className="text-primary text-glow">Verified</span> Certificates
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Upon course completion, receive a professionally designed certificate with a unique verification code.
              Share it on LinkedIn, Facebook, Twitter & more — employers can instantly verify its authenticity.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: BadgeCheck, text: "Unique QR code & verification ID for each certificate" },
                { icon: Download, text: "Download as high-quality PDF anytime" },
                { icon: Share2, text: "One-click share to LinkedIn, Facebook & Twitter" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/verify"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-display text-sm font-semibold tracking-wider hover:bg-primary/90 transition-all box-glow-strong"
            >
              VERIFY A CERTIFICATE
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-border box-glow">
              <img
                src={certPreview}
                alt="Sample Certificate"
                loading="lazy"
                width={1024}
                height={720}
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
