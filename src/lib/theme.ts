import { track } from 'ripple';

export type Theme = 'light' | 'dark';

export function initTheme() {
  const savedTheme = localStorage.getItem('theme') as Theme | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  return track<Theme>(initialTheme);
}

export function updateTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
