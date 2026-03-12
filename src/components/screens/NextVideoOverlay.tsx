import { useState, useEffect } from "react";

interface Props {
  onWatch: () => void;
}

export function NextVideoOverlay({ onWatch }: Props) {
  const [dismissing, setDismissing] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDismissing(true);
      setTimeout(() => setVisible(false), 300);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40" style={{ marginLeft: '-160px' }}>
      <div
        className={`overlay-card px-5 py-4 flex items-center gap-4 max-w-lg ${dismissing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
        style={{
          background: 'linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 9%) 100%)',
          boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px hsl(0 0% 18%)',
        }}
      >
        {/* Thumbnail */}
        <div className="w-28 h-16 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center">
          <span className="text-xl">▶</span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">Friction — Theory & Numericals</p>
          <p className="text-xs text-muted-foreground mt-0.5">Next in syllabus · Unit 3 · Laws of Motion</p>

          <div className="flex items-center gap-3 mt-3">
            <button onClick={onWatch} className="pill-button pill-primary text-xs py-1.5 px-4">
              Watch Now
            </button>
            <button
              onClick={() => {
                setDismissing(true);
                setTimeout(() => setVisible(false), 300);
              }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
