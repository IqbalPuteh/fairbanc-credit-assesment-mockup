
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardOptionProps {
  id: string;
  name: string;
  value: string;
  selected: string | null;
  onChange: (value: string) => void;
  icon: ReactNode;
  label: string;
  className?: string;
}

export function CardOption({
  id,
  name,
  value,
  selected,
  onChange,
  icon,
  label,
  className,
}: CardOptionProps) {
  const isSelected = selected === value;
  
  return (
    <div 
      className={cn(
        "relative border rounded-lg p-4 cursor-pointer transition-all",
        isSelected 
          ? "border-primary bg-primary/5" 
          : "border-gray-200 hover:border-primary/60",
        className
      )}
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <div className="absolute top-4 left-4">
        <div className={cn(
          "w-5 h-5 rounded-full border flex items-center justify-center",
          isSelected ? "border-primary" : "border-gray-300"
        )}>
          {isSelected && (
            <div className="w-3 h-3 rounded-full bg-primary" />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center pt-8 pb-4">
        <div className="mb-4 text-center">
          {icon}
        </div>
        <label htmlFor={id} className="text-center font-medium">
          {label}
        </label>
      </div>
    </div>
  );
}
