import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need prior experience to join?",
    a: "Not at all! Our Basic Computer Training starts from absolute zero. For advanced courses like Ethical Hacking, we recommend basic computer knowledge which you can gain from our beginner course first.",
  },
  {
    q: "What is the class schedule?",
    a: "We offer flexible timings — morning (7 AM–10 AM), day (10 AM–2 PM), and evening (4 PM–6 PM) batches. Weekend batches are also available for working professionals.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes! Upon successful completion of any course, you receive a professionally designed certificate with a unique verification ID and QR code. It can be verified online and shared on LinkedIn, Facebook, and Twitter.",
  },
  {
    q: "What are the fees?",
    a: "Fees vary by course and duration. We offer affordable pricing with installment options. Contact us or visit our center for the latest fee structure. Group discounts are also available.",
  },
  {
    q: "Is there job placement support?",
    a: "Absolutely! We provide resume building workshops, mock interviews, portfolio reviews, and connect students with our network of hiring partners across Nepal and internationally for remote opportunities.",
  },
  {
    q: "Can I take multiple courses?",
    a: "Yes! Many students start with Basic Computer Training and then move on to specialized courses. We offer combo packages at discounted rates for students enrolling in multiple programs.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
            Frequently <span className="text-primary text-glow">Asked</span>{" "}
            Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-sm font-display font-semibold text-foreground hover:text-primary py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
