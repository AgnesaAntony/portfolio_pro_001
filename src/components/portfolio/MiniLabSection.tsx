import { useState } from "react";
import { Upload, Play, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const dummyResults = [
  { label: "Positive", value: 42, color: "bg-green-400" },
  { label: "Neutral", value: 31, color: "bg-foreground/30" },
  { label: "Negative", value: 27, color: "bg-red-400" },
];

const MiniLabSection = () => {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useScrollAnimation();

  const handleRun = () => {
    setRunning(true);
    setDone(false);
    setTimeout(() => {
      setRunning(false);
      setDone(true);
    }, 2000);
  };

  return (
    <section id="lab" className="section-padding relative">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Mini <span className="glow-text">Lab</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Try a sentiment prediction demo.</p>

        <div className="glass-card p-6 md:p-8">
          {/* Upload area */}
          <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center mb-6 hover:border-primary/30 transition-colors cursor-pointer">
            <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">
              Drag & drop a CSV file or <span className="text-primary">browse</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Demo uses sample data — no upload needed</p>
          </div>

          <button
            onClick={handleRun}
            disabled={running}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {running ? (
              <>
                <Sparkles size={16} className="animate-spin" /> Analyzing...
              </>
            ) : (
              <>
                <Play size={16} /> Run Sentiment Analysis
              </>
            )}
          </button>

          {done && (
            <div className="mt-6 animate-fade-in">
              <h4 className="font-semibold text-sm mb-4">Prediction Results (Sample Data)</h4>
              <div className="space-y-3">
                {dummyResults.map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="text-sm w-20 text-muted-foreground">{r.label}</span>
                    <div className="flex-1 h-6 rounded bg-secondary/40 overflow-hidden">
                      <div
                        className={`h-full rounded ${r.color} transition-all duration-700`}
                        style={{ width: `${r.value}%` }}
                      />
                    </div>
                    <span className="text-sm font-mono text-foreground w-10 text-right">{r.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MiniLabSection;
