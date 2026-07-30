interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Tag({ children, className = "", variant = "default" }: TagProps) {
  const variants = {
    default: "bg-bg-surface text-text-secondary",
    outline: "border border-border text-text-secondary",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
