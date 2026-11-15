export function SectionHeading({
  id,
  children,
  count,
}: {
  id: string;
  children: React.ReactNode;
  count?: string;
}) {
  return (
    <div className="mb-5 flex items-baseline justify-between gap-4">
      <h2 id={id} className="text-xl font-semibold tracking-tight">
        {children}
      </h2>
      {count && (
        <span className="shrink-0 font-mono text-xs text-muted">{count}</span>
      )}
    </div>
  );
}
