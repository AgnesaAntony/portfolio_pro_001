import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "2022", title: "Started B.E. in CSE", desc: "Joined DMI College of Engineering, Chennai. Began exploring programming and data." },
  { year: "2023", title: "Learned Python & Data Analysis", desc: "Mastered Pandas, NumPy, Matplotlib, and Seaborn. Started working with real datasets on Kaggle." },
  { year: "2024", title: "First Data Projects", desc: "Built Bitcoin Sentiment Analysis, Job Detection, and Movie Rating Analysis projects." },
  { year: "2025", title: "Resume Analyzer & Builder", desc: "Developed a web-based tool for resume evaluation with NLP and text analysis." },
  { year: "2026", title: "CodSoft Internship", desc: "Virtual Data Science internship — worked on real-world data projects independently." },
  { year: "2026", title: "L&T Internship", desc: "Working on real-time ML: PPE detection, crowd detection, OCR with Tesseract, and SSMS backend." },
];

const JourneySection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding relative">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="glow-text">Journey</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">From curiosity to career — the timeline.</p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:-translate-x-px" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`relative flex items-start mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-2 z-10" />
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <span className="font-mono text-xs text-primary">{m.year}</span>
                  <h3 className="font-bold mt-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
