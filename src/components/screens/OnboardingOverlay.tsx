import { useState } from "react";

interface Props {
  onComplete: () => void;
}

const EXAMS = ["JEE Mains/Advanced", "NEET", "UPSC", "CUET", "Boards"];

export function OnboardingOverlay({ onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm" style={{ top: '108px' }}>
      <div className="overlay-card p-8 w-full max-w-md animate-fade-in-up">
        <h2 className="text-xl font-medium text-center mb-6">
          Which exam are you preparing for?
        </h2>
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {EXAMS.map((exam) => (
            <button
              key={exam}
              onClick={() => setSelected(exam)}
              className={`pill-button transition-all duration-200 ${
                selected === exam
                  ? "pill-primary shadow-lg shadow-primary/20"
                  : "pill-secondary"
              }`}
            >
              {exam}
            </button>
          ))}
        </div>
        <button
          onClick={onComplete}
          disabled={!selected}
          className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            selected
              ? "pill-primary"
              : "bg-secondary text-muted-foreground cursor-not-allowed"
          }`}
        >
          Let's Go
        </button>
      </div>
    </div>
  );
}
