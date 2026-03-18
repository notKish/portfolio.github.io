import { track } from 'ripple';

export type Theme = 'light' | 'dark';

export function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const isValidTheme = (value: string | null): value is Theme => {
    return value === 'light' || value === 'dark';
  };
  
  const initialTheme = (isValidTheme(savedTheme) ? savedTheme : (prefersDark ? 'dark' : 'light'));
  
  document.documentElement.setAttribute('data-theme', initialTheme);
  
  return track<Theme>(initialTheme);
}

export function updateTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
