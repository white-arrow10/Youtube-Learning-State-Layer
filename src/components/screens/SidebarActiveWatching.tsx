export function SidebarActiveWatching() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2.5">
        <div className="pulsing-dot flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">
            Tracking: <span className="text-foreground">Newton's Laws of Motion</span>
          </p>
          <p className="text-xs text-muted-foreground">NEET · Physics · Unit 3</p>
        </div>
      </div>
    </div>
  );
}
