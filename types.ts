
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Page = 'home' | 'about' | 'academics' | 'admissions' | 'facilities' | 'gallery' | 'contact' | 'disclosure';

export interface NavItem {
  label: string;
  page: Page;
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
