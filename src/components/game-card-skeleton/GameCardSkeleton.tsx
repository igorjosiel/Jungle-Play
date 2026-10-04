import { Skeleton } from "@/components/ui/skeleton";

export function GameCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <Skeleton className="aspect-3/2 w-full" />

      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <Skeleton className="h-10 w-full" />
      </div>
    </article>
  );
}
