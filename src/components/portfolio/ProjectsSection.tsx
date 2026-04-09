import { ExternalLink, Github, TrendingUp, BarChart3, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    icon: TrendingUp,
    title: "Bitcoin Market Sentiment Analysis",
    problem: "Crypto markets are volatile and driven by emotion. Can social media sentiment predict short-term price movements?",
    tools: ["Python", "NLTK", "Pandas", "Plotly", "Twitter API"],
    results: "Achieved 78% accuracy in sentiment classification. Identified Fear/Greed cycles that preceded 3 major price swings in a 6-month window.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Trader Behavior Analysis Dashboard",
    problem: "How do retail traders react during market crashes vs rallies? Understanding behavior patterns can improve risk models.",
    tools: ["Python", "Streamlit", "SQL", "Matplotlib", "Scikit-learn"],
    results: "Analyzed 100K+ trade records. Found that 73% of retail traders increase position size during downtrends — a key contrarian indicator.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Unsafe Activity Detection System",
    problem: "Online platforms need automated detection of harmful content. Can NLP models flag unsafe activity in real-time?",
    tools: ["Python", "TensorFlow", "SpaCy", "FastAPI", "PostgreSQL"],
    results: "Built a classifier with 91% precision on a 50K-sample dataset. Reduced manual review time by 60% in testing environment.",
    color: "primary",
  },
];

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Featured <span className="glow-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Real problems. Real data. Real outcomes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ icon: Icon, title, problem, tools, results, color }, i) => (
            <div key={i} className="glass-card-hover p-6 flex flex-col">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
                <Icon size={20} className={color === "accent" ? "text-accent" : "text-primary"} />
              </div>
              <h3 className="font-bold text-lg mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{problem}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tools.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary/60 text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-secondary-foreground mb-6 flex-1">
                <span className="text-primary font-medium">Result:</span> {results}
              </p>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <Github size={14} /> View Code
                </a>
                <a href="#" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
