import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: BookOpen, title: "Curious Learner", desc: "Self-taught Python & data analysis through hands-on projects and real-world datasets from Kaggle." },
  { icon: Lightbulb, title: "Problem Solver", desc: "Passionate about critical thinking and finding patterns — from sentiment analysis to real-time ML." },
  { icon: TrendingUp, title: "Growth-Driven", desc: "From basic scripts to ML models & OCR systems — constantly leveling up through deliberate practice." },
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
          Computer Science Engineer, passionate about turning raw data into stories that drive decisions.
        </p>

        <div className="glass-card p-6 md:p-10 mb-12 space-y-4">
          <p className="text-secondary-foreground leading-relaxed">
            I'm a data science enthusiast with a strong foundation in <span className="text-primary font-medium">Python</span> and hands-on experience in data analysis and machine learning. I've worked on projects like <span className="text-primary font-medium">Bitcoin sentiment analysis</span> and job market trends, focusing on extracting meaningful insights from real-world data.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            During my <span className="text-primary font-medium">CodSoft internship</span>, I handled data cleaning, exploratory data analysis, and insight generation on real datasets. At <span className="text-primary font-medium">L&T</span>, I worked on real-time machine learning projects such as PPE detection, crowd detection, and OCR using Tesseract.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            I'm passionate about solving real-world problems using data and continuously improving my skills in analytics and machine learning.
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
