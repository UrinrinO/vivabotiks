import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Vivabotiks logo — the brand's own mark, carried over from the previous site.
 * `onDark` swaps to the white version for use on dark backgrounds.
 */
export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Image
      src={onDark ? "/assets/logo-white.png" : "/assets/logo.png"}
      alt="Vivabotiks"
      width={540}
      height={220}
      priority
      className={cn("h-10 w-auto", className)}
    />
  );
}
