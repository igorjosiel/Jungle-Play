import type { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

export function KpiCard({
  title,
  value,
  icon: Icon,
  description,
}: KpiCardProps) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="rounded-lg bg-emerald-400/10 p-2.5">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
      </div>

      {description && (
        <p className="mt-4 text-xs text-zinc-500">
          {description}
        </p>
      )}
    </article>
  );
}
