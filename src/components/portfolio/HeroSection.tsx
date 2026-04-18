import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const phrases = [
  "Data Analyst",
  "ML Enthusiast",
  "Python Developer",
  "Problem Solver",
];

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const speed = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((p) => (p + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIdx((c) => c + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding grid-bg overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-mono text-primary text-sm mb-4 animate-fade-in">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="glow-text">Agnesa A</span>
          </h1>
          <div className="text-xl md:text-2xl font-light text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Aspiring{" "}
            <span className="text-foreground font-medium typing-cursor">
              {phrases[phraseIdx].slice(0, charIdx)}
            </span>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            I analyze data, build ML models, and uncover patterns from real-world datasets
            — turning raw numbers into actionable insights.
          </p>
          <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#contact" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors">
              View Work
            </a>
          </div>
          <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: Github, href: "https://github.com/AgnesaAntony" },
              { icon: Linkedin, href: "https://linkedin.com/in/agnesa" },
              { icon: Mail, href: "mailto:agnesa892004@gmail.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 animate-float">
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-primary via-accent to-primary/30 shadow-[0_0_60px_-10px_hsl(var(--primary)/0.5)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-secondary/30 backdrop-blur-sm border border-primary/20">
              <img
                src={profileImg}
                alt="Agnesa A — Aspiring Data Scientist"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
