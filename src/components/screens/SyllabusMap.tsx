import { ArrowLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

interface Props {
  onBack: () => void;
}

type TopicStatus = "covered" | "partial" | "not-started" | "flagged";

interface Topic {
  name: string;
  status: TopicStatus;
  videos?: { title: string; channel: string }[];
}

interface Unit {
  name: string;
  topics: Topic[];
}

const SYLLABUS: Unit[] = [
  {
    name: "Unit 1 — Physical World & Measurement",
    topics: [
      { name: "Physical World", status: "covered", videos: [{ title: "Physical World — Full Chapter", channel: "Physics Wallah" }] },
      { name: "Units and Measurements", status: "covered", videos: [{ title: "Units & Dimensions", channel: "Physics Wallah" }] },
    ],
  },
  {
    name: "Unit 2 — Kinematics",
    topics: [
      { name: "Motion in a Straight Line", status: "covered", videos: [{ title: "1D Motion Complete", channel: "Physics Wallah" }] },
      { name: "Motion in a Plane", status: "partial", videos: [{ title: "Projectile Motion", channel: "Physics Wallah" }] },
    ],
  },
  {
    name: "Unit 3 — Laws of Motion",
    topics: [
      { name: "Newton's Laws of Motion", status: "partial", videos: [{ title: "NLM Complete Chapter", channel: "Physics Wallah" }] },
      { name: "Friction", status: "not-started", videos: [{ title: "Friction — Theory + Numericals", channel: "Physics Wallah" }] },
    ],
  },
  {
    name: "Unit 4 — Work, Energy & Power",
    topics: [
      { name: "Work-Energy Theorem", status: "not-started" },
      { name: "Conservation of Energy", status: "not-started" },
      { name: "Power", status: "not-started" },
    ],
  },
  {
    name: "Unit 5 — Rotational Motion",
    topics: [
      { name: "Torque & Angular Momentum", status: "not-started" },
      { name: "Moment of Inertia", status: "not-started" },
    ],
  },
];

const statusDotClass: Record<TopicStatus, string> = {
  covered: "bg-state-covered",
  partial: "bg-state-partial",
  "not-started": "bg-state-not-started",
  flagged: "bg-state-flagged",
};

export function SyllabusMap({ onBack }: Props) {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-5">
        <button onClick={onBack} className="p-1 rounded-lg hover:bg-accent transition-colors">
          <ArrowLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Syllabus Map — NEET Physics</span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-5 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-state-covered" /> Covered</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-state-partial" /> Partial</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-state-not-started" /> Not Started</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-state-flagged" /> Flagged</span>
      </div>

      <div className="space-y-1">
        {SYLLABUS.map((unit) => (
          <div key={unit.name}>
            <p className="text-[11px] font-medium text-muted-foreground px-2 py-2 uppercase tracking-wide">{unit.name}</p>
            <div className="space-y-0.5">
              {unit.topics.map((topic) => (
                <div key={topic.name}>
                  <button
                    onClick={() => setExpandedTopic(expandedTopic === topic.name ? null : topic.name)}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${statusDotClass[topic.status]}`} />
                    <span className="text-sm flex-1">{topic.name}</span>
                    {topic.videos && (
                      <ChevronRight className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${expandedTopic === topic.name ? 'rotate-90' : ''}`} />
                    )}
                  </button>
                  {expandedTopic === topic.name && topic.videos && (
                    <div className="ml-7 space-y-1 mb-2 animate-fade-in-up">
                      {topic.videos.map((v) => (
                        <div key={v.title} className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent/30 transition-colors">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs truncate">{v.title}</p>
                            <p className="text-[10px] text-muted-foreground">{v.channel}</p>
                          </div>
                          <button className="p-1 rounded-full hover:bg-accent transition-colors flex-shrink-0">
                            <Play className="w-3 h-3 text-muted-foreground" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
