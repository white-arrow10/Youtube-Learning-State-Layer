import { ReactNode } from "react";
import type { ScreenId } from "@/pages/Index";
import { Search, Bell, User, Menu, ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from "lucide-react";

interface Props {
  sidebarContent: ReactNode;
  overlayContent: ReactNode;
  isVideoPlaying: boolean;
  activeScreen: ScreenId;
}

export function MockYouTubeLayout({ sidebarContent, overlayContent, isVideoPlaying, activeScreen }: Props) {
  const showOnboarding = activeScreen === 1;

  return (
    <div className="pt-12 min-h-screen flex flex-col">
      {/* YouTube Top Bar */}
      <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-background">
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 text-muted-foreground" />
          <div className="flex items-center gap-1">
            <div className="w-7 h-5 bg-primary rounded-md flex items-center justify-center">
              <span className="text-[9px] font-bold text-primary-foreground">▶</span>
            </div>
            <span className="text-base font-semibold tracking-tight">YouTube</span>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-8">
          <div className="flex items-center bg-secondary rounded-full border border-border">
            <input
              className="flex-1 bg-transparent px-4 py-1.5 text-sm text-foreground placeholder:text-muted-foreground outline-none"
              placeholder="Search"
              readOnly
            />
            <div className="px-4 border-l border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <div className="w-8 h-8 rounded-full bg-yt-blue flex items-center justify-center">
            <User className="w-4 h-4 text-foreground" />
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 relative">
        {/* Video / Home content */}
        <div className={`flex-1 p-6 ${sidebarContent ? 'pr-0' : ''}`}>
          {isVideoPlaying || activeScreen === 4 || activeScreen === 5 ? (
            <VideoPlayerView activeScreen={activeScreen} />
          ) : showOnboarding ? (
            <HomeView />
          ) : (
            <HomeView />
          )}
        </div>

        {/* Extension Sidebar */}
        {sidebarContent && (
          <aside className="w-80 border-l border-border bg-card flex-shrink-0 animate-fade-in-up overflow-y-auto" style={{ maxHeight: 'calc(100vh - 108px)' }}>
            {sidebarContent}
          </aside>
        )}

        {/* Overlays */}
        {overlayContent}
      </div>
    </div>
  );
}

function VideoPlayerView({ activeScreen }: { activeScreen: ScreenId }) {
  return (
    <div className="max-w-4xl">
      {/* Video player */}
      <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-3 mx-auto backdrop-blur-sm">
              <span className="text-2xl ml-1">▶</span>
            </div>
            <p className="text-muted-foreground text-sm">Physics Wallah — NEET 2026</p>
          </div>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary">
          <div className="h-full bg-primary" style={{ width: activeScreen === 7 ? '100%' : '47%' }} />
        </div>
      </div>

      {/* Video title area — this is where Screen 4 overlay anchors */}
      <div className="mt-4 relative" id="video-title-area">
        <h1 className="text-lg font-medium leading-snug">
          Newton's Laws of Motion — Complete Chapter | NEET 2026 Physics
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Physics Wallah · 1.2M views · 3 weeks ago</p>

        <div className="flex items-center gap-3 mt-3">
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-sm">
            <ThumbsUp className="w-4 h-4" /> 45K
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-sm">
            <ThumbsDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-sm">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-secondary text-sm">
            <Download className="w-4 h-4" /> Download
          </button>
          <button className="flex items-center gap-1.5 p-1.5 rounded-full bg-secondary text-sm">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeView() {
  const thumbnails = [
    { title: "Thermodynamics Full Chapter | NEET 2026", channel: "Physics Wallah", views: "890K views" },
    { title: "Organic Chemistry — GOC | JEE 2026", channel: "Unacademy JEE", views: "1.1M views" },
    { title: "Indian Polity — Fundamental Rights", channel: "StudyIQ UPSC", views: "450K views" },
    { title: "Calculus — Integration | JEE Advanced", channel: "Vedantu JEE", views: "670K views" },
    { title: "Human Physiology — Digestion | NEET", channel: "Aakash NEET", views: "320K views" },
    { title: "Modern History — Freedom Movement", channel: "Drishti IAS", views: "560K views" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-5xl">
      {thumbnails.map((t, i) => (
        <div key={i} className="cursor-pointer group">
          <div className="aspect-video bg-secondary rounded-lg mb-2 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
              <span className="text-2xl">▶</span>
            </div>
            <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 rounded text-foreground">
              {Math.floor(Math.random() * 2 + 1)}:{String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00
            </div>
          </div>
          <p className="text-sm font-medium leading-tight line-clamp-2">{t.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.channel}</p>
          <p className="text-xs text-muted-foreground">{t.views}</p>
        </div>
      ))}
    </div>
  );
}
