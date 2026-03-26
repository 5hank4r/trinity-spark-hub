import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BadgeCheck, XCircle, Download, Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Demo certificates for demonstration
const demoCertificates: Record<string, {
  name: string;
  course: string;
  date: string;
  grade: string;
  certId: string;
}> = {
  "TRIN-2026-001": {
    name: "Ram Sharma",
    course: "Ethical Hacking & Cybersecurity",
    date: "March 15, 2026",
    grade: "A+",
    certId: "TRIN-2026-001",
  },
  "TRIN-2026-002": {
    name: "Sita Thapa",
    course: "Digital Marketing",
    date: "February 20, 2026",
    grade: "A",
    certId: "TRIN-2026-002",
  },
  "TRIN-2026-003": {
    name: "Hari Prasad",
    course: "Web Development",
    date: "January 10, 2026",
    grade: "A+",
    certId: "TRIN-2026-003",
  },
};

const VerifyCertificate = () => {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<null | "found" | "not_found">(null);
  const [certData, setCertData] = useState<typeof demoCertificates[string] | null>(null);

  const handleVerify = () => {
    const cert = demoCertificates[searchId.trim().toUpperCase()];
    if (cert) {
      setResult("found");
      setCertData(cert);
    } else {
      setResult("not_found");
      setCertData(null);
    }
  };

  const shareUrl = `https://academy.trinitytech.com.np/verify?id=${certData?.certId}`;
  const shareText = `I completed ${certData?.course} at Trinity Academy! Verify: `;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <BadgeCheck className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Verify <span className="text-primary text-glow">Certificate</span>
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter the certificate ID to verify its authenticity.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Try demo IDs: TRIN-2026-001, TRIN-2026-002, TRIN-2026-003
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-3 mb-8"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g., TRIN-2026-001)"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              onClick={handleVerify}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display text-xs font-semibold tracking-wider hover:bg-primary/90 transition-all"
            >
              VERIFY
            </button>
          </motion.div>

          {/* Result */}
          {result === "found" && certData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-green-500/30 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <BadgeCheck className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-display text-lg font-bold text-green-400">Certificate Verified ✓</h3>
                  <p className="text-xs text-muted-foreground">This certificate is authentic and issued by Trinity Academy.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Student Name", value: certData.name },
                  { label: "Course", value: certData.course },
                  { label: "Completion Date", value: certData.date },
                  { label: "Grade", value: certData.grade },
                  { label: "Certificate ID", value: certData.certId },
                  { label: "Issuer", value: "Trinity Academy" },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-display">{field.label}</p>
                    <p className="text-sm text-foreground font-medium">{field.value}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="border-t border-border pt-6 space-y-4">
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-display text-xs font-semibold tracking-wider hover:bg-primary/90 transition-all">
                  <Download className="w-4 h-4" />
                  DOWNLOAD CERTIFICATE (PDF)
                </button>

                <div>
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <Share2 className="w-3 h-3" /> Share on social media
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2]/10 text-[#1877F2] py-2.5 rounded-lg text-xs font-semibold hover:bg-[#1877F2]/20 transition-colors"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText + shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-foreground/10 text-foreground py-2.5 rounded-lg text-xs font-semibold hover:bg-foreground/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4" /> Twitter
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#0A66C2]/10 text-[#0A66C2] py-2.5 rounded-lg text-xs font-semibold hover:bg-[#0A66C2]/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {result === "not_found" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-destructive/30 rounded-xl p-8 text-center"
            >
              <XCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-destructive mb-2">Certificate Not Found</h3>
              <p className="text-sm text-muted-foreground">
                No certificate found with ID "<span className="text-foreground">{searchId}</span>". Please check the ID and try again.
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyCertificate;
