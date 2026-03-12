import type { ScreenId } from "@/pages/Index";

interface Props {
  screens: Record<ScreenId, string>;
  active: ScreenId;
  onChange: (s: ScreenId) => void;
}

export function ScreenNavigator({ screens, active, onChange }: Props) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-1 px-4 py-2 bg-background/90 backdrop-blur-md border-b border-border">
      <span className="text-xs text-muted-foreground mr-3 font-medium tracking-wide uppercase">Screens</span>
      {(Object.entries(screens) as [string, string][]).map(([id, label]) => {
        const screenId = Number(id) as ScreenId;
        const isActive = screenId === active;
        return (
          <button
            key={id}
            onClick={() => onChange(screenId)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            {id}. {label}
          </button>
        );
      })}
    </div>
  );
}
