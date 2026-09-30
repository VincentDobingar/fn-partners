export function StepIndicator({
  steps,
  currentStep,
}: {
  steps: readonly string[];
  currentStep: number;
}) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((label, i) => {
        const stepNumber = i + 1;
        const state = stepNumber === currentStep ? "current" : stepNumber < currentStep ? "done" : "upcoming";

        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-mono " +
                (state === "done"
                  ? "bg-gold text-navy"
                  : state === "current"
                    ? "bg-navy text-white"
                    : "border border-line text-muted")
              }
            >
              {state === "done" ? "✓" : stepNumber}
            </span>
            <span
              className={
                "hidden sm:inline text-xs font-mono uppercase tracking-wider " +
                (state === "upcoming" ? "text-muted" : "text-navy")
              }
            >
              {label}
            </span>
            {stepNumber < steps.length && <span className="mx-1 h-px w-4 bg-line" aria-hidden />}
          </li>
        );
      })}
    </ol>
  );
}
