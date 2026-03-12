import { Play } from "lucide-react";

interface Props {
  onStartWatching: () => void;
}

export function QuickRecap({ onStartWatching }: Props) {
  return (
    <div className="p-5">
      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-5 block">Quick Recap</span>

      {/* What you covered */}
      <div className="mb-5">
        <h3 className="text-xs font-medium text-muted-foreground mb-2">What you covered</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-state-covered mt-1.5 flex-shrink-0" />
            <span>Newton's First Law — concept of inertia, real-world examples, and reference frames</span>
          </li>
          <li className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-state-covered mt-1.5 flex-shrink-0" />
            <span>Inertia of rest vs motion — demonstrations and numerical intro</span>
          </li>
        </ul>
      </div>

      {/* Where you left off */}
      <div className="mb-5">
        <h3 className="text-xs font-medium text-muted-foreground mb-2">Where you left off</h3>
        <p className="text-sm">
          Newton's Second Law (F=ma) at <span className="text-primary font-medium">47:23</span> — was deriving the relationship between force, mass, and acceleration
        </p>
      </div>

      {/* What's coming next */}
      <div className="mb-8">
        <h3 className="text-xs font-medium text-muted-foreground mb-2">What's coming next</h3>
        <p className="text-sm">
          Newton's Third Law — action-reaction pairs and free body diagrams
        </p>
      </div>

      <button
        onClick={onStartWatching}
        className="w-full py-3 rounded-full pill-primary text-sm font-medium flex items-center justify-center gap-2"
      >
        <Play className="w-4 h-4" />
        Start Watching from 47:23
      </button>
    </div>
  );
}
