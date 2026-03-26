import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/trinity-logo-clean.png";

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
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                  <Icon className="w-4 h-4" />
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
