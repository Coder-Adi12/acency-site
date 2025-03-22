import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to prepend base path for GitHub Pages when needed
export function getImagePath(path: string): string {
  // Check if we're on GitHub Pages by looking at the hostname
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // If we're on GitHub Pages and the path starts with a slash, prepend the base path
  if (isGitHubPages && path.startsWith('/')) {
    return `/acency-site${path}`;
  }
  
  // Otherwise, return the path as is
  return path;
}
