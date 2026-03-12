import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";

interface Props {
  onResume: () => void;
  onRecap: () => void;
}

export function ReentryOverlay({ onResume, onRecap }: Props) {
  const [dismissing, setDismissing] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDismissing(true);
      setTimeout(() => setVisible(false), 300);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-30"
      style={{ top: '108px' }}
      onClick={() => {
        setDismissing(true);
        setTimeout(() => setVisible(false), 300);
      }}
    >
      <div className="absolute left-6 bottom-6" style={{ maxWidth: 'min(480px, calc(100% - 344px))' }}>
        <div
          className={`overlay-card px-5 py-4 ${dismissing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
          onClick={(e) => e.stopPropagation()}
          style={{ 
            background: 'linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 9%) 100%)',
            boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5), 0 0 0 1px hsl(0 0% 18%)'
          }}
        >
          {/* Subtle accent line at top */}
          <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <p className="text-xs text-muted-foreground mb-1">
            Last visited <span className="text-foreground/70">5 days ago</span>
          </p>
          <p className="text-[13px] text-foreground leading-relaxed">
            Covered <span className="font-medium">Newton's First Law</span> and <span className="font-medium">Inertia</span>
          </p>
          <p className="text-[13px] text-foreground leading-relaxed mb-3.5">
            Left off at <span className="font-medium text-primary/90">47:23</span> — <span className="font-medium">Newton's Second Law (F=ma)</span>
          </p>

          <div className="flex items-center gap-2.5">
            <button onClick={onResume} className="pill-button pill-secondary text-xs py-2 px-4">
              Resume
            </button>
            <button onClick={onRecap} className="pill-button pill-primary text-xs py-2 px-4 flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" />
              Quick Recap
            </button>
          </div>

          {/* Auto-dismiss indicator */}
          <div className="mt-3 h-0.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-muted-foreground/30 rounded-full"
              style={{ animation: 'shrink 10s linear forwards' }}
            />
          </div>
          <style>{`
            @keyframes shrink {
              from { width: 100%; }
              to { width: 0%; }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
