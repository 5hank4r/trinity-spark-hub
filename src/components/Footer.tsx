import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/trinity-logo-clean.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Trinity Academy" className="w-8 h-8" />
              <span className="font-display text-sm font-bold tracking-wider text-primary">TRINITY ACADEMY</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Empowering students with industry-ready tech skills. From basic computing to advanced cybersecurity — your career transformation starts here.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold tracking-wider text-foreground mb-4 uppercase">Quick Links</h4>
            <div className="space-y-2">
              {["Courses", "Verify Certificate", "About", "Contact"].map((l) => (
                <Link key={l} to={l === "Verify Certificate" ? "/verify" : "/"} className="block text-xs text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold tracking-wider text-foreground mb-4 uppercase">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/trinityacademyhq", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/trinityacademyhq", label: "Instagram" },
                { icon: TikTokIcon, href: "https://tiktok.com/@trinityacademyhq", label: "TikTok" },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Trinity Academy — A Unit of Trinity Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
