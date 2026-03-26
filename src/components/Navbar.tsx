import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/trinity-logo-clean.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/#courses" },
  { label: "Verify Certificate", path: "/verify" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setOpen(false);
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Trinity Academy" className="w-10 h-10" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-sm font-bold tracking-wider text-primary">TRINITY</span>
            <span className="font-display text-xs tracking-widest text-foreground/80">ACADEMY</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path.startsWith("/#") ? "/" : link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#courses"
            onClick={() => handleNavClick("/#courses")}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path.startsWith("/#") ? "/" : link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-muted-foreground hover:text-primary py-2 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#courses"
                onClick={() => handleNavClick("/#courses")}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center mt-2"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
