import { Github, TrendingUp, BarChart3, Search, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    icon: FileText,
    title: "Resume Analyzer & Builder",
    problem: "How can job seekers identify gaps in their resumes? Built a web-based tool to evaluate resumes and suggest improvements.",
    tools: ["Python", "Text Analysis", "NLP", "Web Dev"],
    results: "Developed a full resume parsing pipeline with personalized feedback, skill gap identification, and a builder module with structured templates.",
    color: "primary",
    github: "https://github.com/AgnesaAntony",
  },
  {
    icon: TrendingUp,
    title: "Bitcoin Sentiment Analysis",
    problem: "Can social media sentiment patterns predict cryptocurrency market movements? Analyzed a Kaggle sentiment dataset to uncover trends.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "NLP"],
    results: "Identified sentiment distribution patterns and word frequency trends. Built comprehensive EDA with text preprocessing and visualizations.",
    color: "primary",
    github: "https://github.com/AgnesaAntony/SentimentAnalyse",
  },
  {
    icon: Search,
    title: "Job Detection & Classification",
    problem: "How can we classify job roles based on skills and descriptions? Imported and analyzed job description datasets for skill-based role classification.",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA"],
    results: "Uncovered patterns in job roles, most in-demand skills, and company distributions. Created clear visualizations of job type frequency and skill demand.",
    color: "accent",
    github: "https://github.com/AgnesaAntony",
  },
  {
    icon: BarChart3,
    title: "Movie Rating Analysis",
    problem: "What drives movie ratings? Analyzed movie datasets including titles, genres, ratings, and reviews to identify trends in performance.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    results: "Identified rating distributions, top-rated movies, genre popularity trends, and year-wise performance patterns with rich data visualizations.",
    color: "primary",
    github: "https://github.com/AgnesaAntony/Python_Project_1",
  },
  {
    icon: FileText,
    title: "Resume Analyzer & Builder",
    problem: "How can job seekers identify gaps in their resumes? Built a web-based tool to evaluate resumes and suggest improvements.",
    tools: ["Python", "Text Analysis", "NLP", "Web Dev"],
    results: "Developed a full resume parsing pipeline with personalized feedback, skill gap identification, and a builder module with structured templates.",
    color: "accent",
    github: "https://github.com/AgnesaAntony",
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ icon: Icon, title, problem, tools, results, color, github }, i) => (
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
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary hover:underline">
                  <Github size={14} /> View Code
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
