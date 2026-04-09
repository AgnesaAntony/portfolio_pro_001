import { Code2, Database, Brain, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "R", "Bash"],
  },
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Excel", "Tableau", "Power BI"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "NLP", "Regression", "Classification"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "Jupyter", "VS Code", "Docker", "Streamlit"],
  },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Technical <span className="glow-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Tools and technologies I work with.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <div key={i} className="glass-card-hover p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm font-mono text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
