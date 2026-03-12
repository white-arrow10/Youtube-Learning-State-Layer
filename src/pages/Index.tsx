import { useState } from "react";
import { MockYouTubeLayout } from "@/components/MockYouTubeLayout";
import { ScreenNavigator } from "@/components/ScreenNavigator";
import { OnboardingOverlay } from "@/components/screens/OnboardingOverlay";
import { SidebarIdle } from "@/components/screens/SidebarIdle";
import { SidebarActiveWatching } from "@/components/screens/SidebarActiveWatching";
import { ReentryOverlay } from "@/components/screens/ReentryOverlay";
import { QuickRecap } from "@/components/screens/QuickRecap";
import { SyllabusMap } from "@/components/screens/SyllabusMap";
import { NextVideoOverlay } from "@/components/screens/NextVideoOverlay";

export type ScreenId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const SCREEN_LABELS: Record<ScreenId, string> = {
  1: "Onboarding",
  2: "Idle State",
  3: "Active Watching",
  4: "Re-entry Overlay",
  5: "Quick Recap",
  6: "Syllabus Map",
  7: "Next Video",
};

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(1);

  const getSidebarContent = () => {
    switch (activeScreen) {
      case 2: return <SidebarIdle onOpenMap={() => setActiveScreen(6)} />;
      case 3: return <SidebarActiveWatching />;
      case 5: return <QuickRecap onStartWatching={() => setActiveScreen(3)} />;
      case 6: return <SyllabusMap onBack={() => setActiveScreen(2)} />;
      default: return null;
    }
  };

  const getOverlayContent = () => {
    switch (activeScreen) {
      case 1: return <OnboardingOverlay onComplete={() => setActiveScreen(2)} />;
      case 4: return <ReentryOverlay onResume={() => setActiveScreen(3)} onRecap={() => setActiveScreen(5)} />;
      case 7: return <NextVideoOverlay onWatch={() => setActiveScreen(3)} />;
      default: return null;
    }
  };

  const showSidebar = [2, 3, 5, 6].includes(activeScreen);
  const isVideoPlaying = [3, 4, 7].includes(activeScreen);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <ScreenNavigator
        screens={SCREEN_LABELS}
        active={activeScreen}
        onChange={setActiveScreen}
      />
      <MockYouTubeLayout
        sidebarContent={showSidebar ? getSidebarContent() : null}
        overlayContent={getOverlayContent()}
        isVideoPlaying={isVideoPlaying}
        activeScreen={activeScreen}
      />
    </div>
  );
};

export default Index;
