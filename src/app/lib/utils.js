import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn - Merge Tailwind CSS classes conditionally
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
