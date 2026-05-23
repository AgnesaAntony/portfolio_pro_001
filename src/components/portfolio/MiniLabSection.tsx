import { useRef, useState } from "react";
import { Upload, Send, Sparkles, FileText, X, CheckCircle2, Swords } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "@/hooks/use-toast";

interface AssignedTask {
  id: string;
  title: string;
  problem: string;
  files: { name: string; size: number }[];
  assignedAt: Date;
  status: "Received" | "In Progress" | "Solved";
}

const MiniLabSection = () => {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [tasks, setTasks] = useState<AssignedTask[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const ref = useScrollAnimation();

  const handleFiles = (selected: FileList | null) => {
    if (!selected) return;
    const arr = Array.from(selected);
    setFiles((prev) => [...prev, ...arr].slice(0, 5));
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !problem.trim()) {
      toast({ title: "Missing details", description: "Please add a challenge title and description." });
      return;
    }
    setSubmitting(true);

    const fileList = files.length
      ? `\n\nAttachments (please attach manually):\n${files.map((f) => `- ${f.name} (${(f.size / 1024).toFixed(1)} KB)`).join("\n")}`
      : "";
    const body = `Challenge: ${title.trim()}\n\n${problem.trim()}${fileList}`;
    const mailto = `mailto:agnesa892004@gmail.com?subject=${encodeURIComponent(
      `[Challenge Me] ${title.trim()}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setTimeout(() => {
      const newTask: AssignedTask = {
        id: crypto.randomUUID(),
        title: title.trim(),
        problem: problem.trim(),
        files: files.map((f) => ({ name: f.name, size: f.size })),
        assignedAt: new Date(),
        status: "Received",
      };
      setTasks((prev) => [newTask, ...prev]);
      setTitle("");
      setProblem("");
      setFiles([]);
      setSubmitting(false);
      toast({ title: "Opening your email…", description: `Sending "${newTask.title}" to Agnesa.` });
    }, 600);
  };


  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <section id="lab" className="section-padding relative">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Challenge <span className="glow-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Got a tricky problem or coding challenge? Drop it here and I'll take it on.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Challenge form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Swords size={18} className="text-primary" />
              <h3 className="font-semibold">Send a Challenge</h3>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Challenge title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={100}
                placeholder="e.g. Optimize this SQL query"
                className="w-full px-3 py-2 rounded-lg bg-secondary/40 border border-border/50 text-sm focus:outline-none focus:border-primary/50"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Describe the challenge</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                maxLength={1000}
                rows={4}
                placeholder="What's the problem, constraints, and what does success look like?"
                className="w-full px-3 py-2 rounded-lg bg-secondary/40 border border-border/50 text-sm resize-none focus:outline-none focus:border-primary/50"
              />
              <p className="text-[10px] text-muted-foreground mt-1 text-right">{problem.length}/1000</p>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Attachments</label>
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-border/50 rounded-xl p-5 text-center hover:border-primary/30 transition-colors cursor-pointer"
              >
                <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-xs text-muted-foreground">
                  Drag & drop or <span className="text-primary">browse</span> (max 5)
                </p>
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>

              {files.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {files.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs bg-secondary/30 rounded-lg px-3 py-2"
                    >
                      <FileText size={14} className="text-primary shrink-0" />
                      <span className="flex-1 truncate">{f.name}</span>
                      <span className="text-muted-foreground">{formatSize(f.size)}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Remove file"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Sparkles size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Challenge
                </>
              )}
            </button>
          </form>

          {/* Task queue */}
          <div className="glass-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={18} className="text-primary" />
              <h3 className="font-semibold">Challenge Board</h3>
              <span className="ml-auto text-xs text-muted-foreground">{tasks.length} total</span>
            </div>

            {tasks.length === 0 ? (
              <div className="text-center py-12 text-sm text-muted-foreground">
                No challenges yet. Send one and watch it land here.
              </div>
            ) : (
              <ul className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {tasks.map((t) => (
                  <li key={t.id} className="bg-secondary/30 rounded-xl p-4 animate-fade-in">
                    <div className="flex items-start gap-2 mb-1">
                      <h4 className="font-medium text-sm flex-1">{t.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                        {t.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-3">{t.problem}</p>
                    {t.files.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {t.files.map((f, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] bg-background/60 rounded px-2 py-0.5"
                          >
                            <FileText size={10} /> {f.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-[10px] text-muted-foreground">
                      Received {t.assignedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniLabSection;
