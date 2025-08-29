import { cn } from "@/lib/utils";

interface SpiceLevelProps {
  level: number;
  maxLevel?: number;
  onChange?: (level: number) => void;
  className?: string;
  readonly?: boolean;
}

export const SpiceLevel = ({ 
  level, 
  maxLevel = 5, 
  onChange, 
  className,
  readonly = false 
}: SpiceLevelProps) => {
  const levels = Array.from({ length: maxLevel }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <span className="text-sm text-muted-foreground mr-2">Spice:</span>
      {levels.map((levelNum) => (
        <button
          key={levelNum}
          onClick={readonly ? undefined : () => onChange?.(levelNum)}
          disabled={readonly}
          className={cn(
            "w-4 h-4 rounded-full border-2 transition-smooth",
            levelNum <= level
              ? "bg-saffron border-saffron-dark"
              : "bg-background border-border hover:border-saffron/50",
            !readonly && "cursor-pointer hover:scale-110",
            readonly && "cursor-default"
          )}
          aria-label={`Spice level ${levelNum}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium">{level}/{maxLevel}</span>
    </div>
  );
};