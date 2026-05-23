import { Briefcase, Calendar, ExternalLink, FileText, BarChart3, Database, Brain, Code2, Eye, ScanLine, Server } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    role: "Intern",
    company: "Larsen & Toubro (L&T)",
    duration: "Feb 2026 – May 2026",
    description: [
      "Worked on real-time Machine Learning projects including <span class='text-primary font-medium'>PPE Detection</span> and <span class='text-primary font-medium'>Crowd Detection</span> systems using computer vision and deep learning models.",
      "Implemented <span class='text-primary font-medium'>OCR with Tesseract</span> for automated document processing and text extraction from images and scanned documents.",
      "Handled backend connectivity and database management using <span class='text-primary font-medium'>SQL Server Management Studio (SSMS)</span>, integrating ML model outputs with production backend systems.",
    ],
    tools: [
      { icon: Code2, label: "Python" },
      { icon: Eye, label: "OpenCV" },
      { icon: ScanLine, label: "Tesseract OCR" },
      { icon: Server, label: "SSMS" },
      { icon: Brain, label: "ML/DL" },
    ],
    impacts: [
      "Built real-time PPE detection pipeline for workplace safety compliance monitoring",
      "Developed crowd density estimation system for facility management applications",
      "Automated document digitization workflow using Tesseract OCR integration",
      "Established backend data pipelines connecting ML outputs to SQL Server databases",
    ],
    current: true,
  },
  {
    role: "Data Science Intern",
    company: "CodSoft (Virtual)",
    duration: "Jan 2025 – Feb 2025",
    description: [
      "Worked on real-world data projects as part of a virtual internship, delivering insights independently in a remote environment.",
      "Performed <span class='text-primary font-medium'>data analysis, cleaning, transformation, and EDA</span> using NumPy, Pandas, Matplotlib, and Seaborn to support data-driven decision-making.",
      "Developed strong problem-solving and communication skills, transforming raw data into <span class='text-primary font-medium'>actionable insights</span> across multiple project deliverables.",
    ],
    tools: [
      { icon: Code2, label: "Python" },
      { icon: Database, label: "Pandas" },
      { icon: BarChart3, label: "Matplotlib" },
      { icon: Brain, label: "Seaborn" },
    ],
    impacts: [
      "Completed multiple data science projects with independent analysis and reporting",
      "Built comprehensive EDA pipelines for real-world datasets",
      "Created visualizations that communicated complex data patterns clearly",
      "Delivered project documentation and insights to virtual team stakeholders",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work <span className="glow-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Where theory meets real-world challenges.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 md:ml-16 relative">
                <div className="hidden md:flex absolute -left-[3.25rem] top-8 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {exp.current && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-4">
                    Currently Working
                  </span>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={18} className="text-primary" />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {exp.description.map((para, i) => (
                    <p key={i} className="text-secondary-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {exp.tools.map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/60 text-xs font-mono text-secondary-foreground">
                      <Icon size={14} className="text-primary" /> {label}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                    <BarChart3 size={16} className="text-primary" /> Key Impact
                  </h4>
                  <ul className="space-y-2">
                    {exp.impacts.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
