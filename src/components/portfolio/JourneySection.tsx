import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { year: "2024", title: "Started Learning Python", desc: "First script, first bug, first 'Hello World'. The spark that started everything." },
  { year: "2024", title: "Data Analysis Deep Dive", desc: "Mastered Pandas, NumPy, and visualization. Cleaned my first real-world dataset." },
  { year: "2025", title: "First ML Project", desc: "Built a sentiment classifier for crypto tweets. Discovered the power of NLP." },
  { year: "2025", title: "Open Source Contributions", desc: "Contributed to data science libraries and shared notebooks on Kaggle." },
  { year: "2026", title: "Data Science Internship", desc: "Joined QuantEdge Analytics. Worked with production data and real stakeholders." },
  { year: "2026", title: "Building What's Next", desc: "Seeking full-time roles. Continuing to learn, build, and push boundaries." },
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
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent md:-translate-x-px" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`relative flex items-start mb-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-2 z-10" />

                {/* Content */}
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
