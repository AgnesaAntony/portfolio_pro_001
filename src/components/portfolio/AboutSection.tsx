import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BookOpen, title: "Curious Learner", desc: "Self-taught Python & data analysis through hands-on projects and real datasets." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Passionate about finding patterns that others overlook — especially in financial data." },
  { icon: TrendingUp, title: "Growth-Driven", desc: "From basic scripts to ML models — constantly leveling up through deliberate practice." },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="glow-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A data enthusiast on a mission to transform raw numbers into stories that drive decisions.
        </p>

        <div className="glass-card p-6 md:p-10 mb-12">
          <p className="text-secondary-foreground leading-relaxed">
            My journey started with a simple question: <span className="text-primary font-medium">"Can data predict market trends?"</span> That curiosity led me to teach myself Python, dive deep into Pandas and NumPy, and start building projects that analyze real-world financial data. I spent countless hours cleaning messy datasets, debugging code at 2 AM, and celebrating when a model finally clicked. Today, I focus on sentiment analysis, trader behavior, and building dashboards that make complex data accessible. I believe the best insights come from asking better questions — and I'm always looking for the next one to answer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="glass-card-hover p-6 text-center" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
