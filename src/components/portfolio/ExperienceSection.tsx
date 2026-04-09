import { Briefcase, Calendar, ExternalLink, FileText, BarChart3, Database, Brain, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { icon: Code2, label: "Python" },
  { icon: Database, label: "SQL" },
  { icon: BarChart3, label: "Pandas" },
  { icon: Brain, label: "Scikit-learn" },
];

const impacts = [
  "Identified 3 key sentiment patterns that correlated with 15% price movement accuracy",
  "Reduced data processing pipeline time by 40% through optimized Pandas workflows",
  "Built dashboards used by a team of 5 analysts for weekly market reporting",
  "Delivered final presentation to stakeholders, resulting in adoption of sentiment scoring model",
];

const ExperienceSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Internship <span className="glow-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Where theory met real-world data challenges.
        </p>

        {/* Timeline line */}
        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="glass-card p-6 md:p-8 md:ml-16 relative">
            {/* Timeline dot */}
            <div className="hidden md:flex absolute -left-[3.25rem] top-8 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={18} className="text-primary" />
                  <h3 className="text-xl font-bold">Data Science Intern</h3>
                </div>
                <p className="text-primary font-mono text-sm">QuantEdge Analytics</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Calendar size={14} />
                Jan 2026 – Mar 2026
              </div>
            </div>

            {/* Story */}
            <div className="space-y-4 mb-6">
              <p className="text-secondary-foreground leading-relaxed">
                Joined as part of a small data team analyzing cryptocurrency market data. My role was to build and maintain the <span className="text-primary font-medium">sentiment analysis pipeline</span> — ingesting social media data, processing it with NLP techniques, and correlating sentiment scores with Bitcoin price movements.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                I worked with <span className="text-primary font-medium">real production datasets</span> containing over 500K tweets and Reddit posts, built ML classification models to categorize market sentiment, and created interactive Plotly dashboards that the analyst team used for weekly strategy meetings.
              </p>
              <p className="text-secondary-foreground leading-relaxed">
                The most challenging part was handling noisy, unstructured text data — learning to preprocess, tokenize, and engineer features that actually improved model accuracy from 62% to <span className="text-primary font-medium">78%</span>.
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tools.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 text-xs font-mono text-secondary-foreground">
                  <Icon size={14} className="text-primary" /> {label}
                </span>
              ))}
            </div>

            {/* Impact */}
            <div className="mb-6">
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <BarChart3 size={16} className="text-primary" /> Key Impact
              </h4>
              <ul className="space-y-2">
                {impacts.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Screenshot placeholder */}
            <div className="glass-card p-4 mb-6 border-dashed border-border/50">
              <div className="aspect-video rounded-lg bg-secondary/30 flex items-center justify-center text-muted-foreground text-sm font-mono">
                [ Dashboard Screenshot Placeholder ]
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                <ExternalLink size={14} /> View Project
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors">
                <FileText size={14} /> Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
