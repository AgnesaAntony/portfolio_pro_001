import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const generateData = (fear: number) => {
  const base = 100 - fear;
  return Array.from({ length: 30 }, (_, i) => {
    const noise = Math.sin(i * 0.5) * 10 + Math.random() * 8 - 4;
    const trend = base * 0.4 + noise + i * (fear < 50 ? 0.5 : -0.3);
    return {
      day: `Day ${i + 1}`,
      sentiment: Math.max(5, Math.min(95, Math.round(trend))),
      price: Math.max(20000, Math.round(30000 + trend * 200 + Math.random() * 2000)),
    };
  });
};

const InteractiveSection = () => {
  const [fear, setFear] = useState(50);
  const data = useMemo(() => generateData(fear), [fear]);
  const ref = useScrollAnimation();
  const label = fear < 30 ? "Extreme Greed" : fear < 45 ? "Greed" : fear < 55 ? "Neutral" : fear < 70 ? "Fear" : "Extreme Fear";
  const labelColor = fear < 30 ? "text-green-400" : fear < 45 ? "text-emerald-400" : fear < 55 ? "text-foreground" : fear < 70 ? "text-orange-400" : "text-red-400";

  return (
    <section className="section-padding relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Interactive <span className="glow-text">Dashboard</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Slide to see how sentiment shifts the market.
        </p>

        <div className="glass-card p-6 md:p-8">
          {/* Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-mono text-green-400">Greed</span>
              <span className={`font-bold ${labelColor}`}>{label}</span>
              <span className="text-sm font-mono text-red-400">Fear</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={fear}
              onChange={(e) => setFear(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, hsl(160,70%,45%), hsl(45,80%,50%), hsl(0,70%,50%))`,
              }}
            />
          </div>

          {/* Chart */}
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="sentGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(175,80%,50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(175,80%,50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,16%,18%)" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(215,15%,55%)" }} tickLine={false} axisLine={false} interval={4} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215,15%,55%)" }} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220,18%,12%)",
                    border: "1px solid hsl(220,16%,22%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="sentiment" stroke="hsl(175,80%,50%)" fill="url(#sentGrad)" strokeWidth={2} name="Sentiment" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
