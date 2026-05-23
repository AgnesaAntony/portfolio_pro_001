import { Mail, Linkedin, Github, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const links = [
  { icon: Mail, label: "agnesa892004@gmail.com", href: "mailto:agnesa892004@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/agnesa" },
  { icon: Github, label: "GitHub", href: "https://github.com/AgnesaAntony" },
];

const ContactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto max-w-2xl text-center" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Let's <span className="glow-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Open to full-time roles, collaborations, and data challenges.
        </p>

        <div className="glass-card p-8 space-y-5">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </a>
          ))}

          <div className="pt-4">
            <a
              href="/Agnesa-Antony-Resume.pdf"
              download="Agnesa-Antony-Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-16">
          © 2026 Agnesa A. Built with passion and data.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
