import { Map } from "lucide-react";

interface Props {
  onOpenMap: () => void;
}

export function SidebarIdle({ onOpenMap }: Props) {
  const progress = 34;
  const recentTopics = [
    { name: "Newton's Laws", subject: "Physics", status: "covered" as const },
    { name: "Friction", subject: "Physics", status: "partial" as const },
    { name: "Work, Energy & Power", subject: "Physics", status: "not-started" as const },
  ];

  const statusColor = {
    covered: "bg-state-covered",
    partial: "bg-state-partial",
    "not-started": "bg-state-not-started",
  };

  const statusTextColor = {
    covered: "text-state-covered",
    partial: "text-state-partial",
    "not-started": "text-state-not-started",
  };

  const circumference = 2 * Math.PI * 42;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Learning State</span>
        <button onClick={onOpenMap} className="p-1.5 rounded-lg hover:bg-accent transition-colors" title="Syllabus Map">
          <Map className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Progress Ring */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="42" fill="none" stroke="hsl(var(--yt-border))" strokeWidth="4" />
            <circle
              cx="48" cy="48" r="42" fill="none"
              stroke="hsl(var(--state-covered))"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{progress}%</span>
            <span className="text-[10px] text-muted-foreground">Syllabus</span>
          </div>
        </div>

        {/* Topic pills */}
        <div className="flex gap-2 mt-4">
          {recentTopics.map((t) => (
            <span key={t.name} className={`text-[11px] px-2.5 py-1 rounded-full border border-border ${statusTextColor[t.status]}`}>
              {t.name}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-5" />

      {/* Recent Activity */}
      <div>
        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Recent Activity</span>
        <div className="space-y-3">
          {recentTopics.map((t) => (
            <div key={t.name} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${statusColor[t.status]}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
