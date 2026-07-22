export function LogoChip({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="flex items-center gap-3 border border-border bg-surface px-5 py-3">
      <span
        aria-hidden
        className="flex size-8 items-center justify-center bg-ink font-heading text-xs font-bold text-white"
      >
        {initials}
      </span>
      <span className="font-heading text-sm font-medium text-ink-soft">{name}</span>
    </div>
  );
}
