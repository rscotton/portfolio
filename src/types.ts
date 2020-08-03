export enum Color {
  SpaceBlack = '#1f2324',
  StarYellow = '#ffd71d',
  EarthBlue = '#00a2ff',
  MoonRock = '#95999a',
  GalaxyWhite = '#f1f2f2',
  OffWhite = '#feffff',
}

export type ScreenSize = 'small' | 'medium' | 'large' | 'max';

export enum Breakpoint {
  Small = 400,
  Medium = 640,
  Large = 960,
  Max = 1440,
}

export interface MenuItemNode {
  href: string;
  label: string;
}

export interface SocialMediaNode {
  name: string;
  label: string;
  href: string;
}

export type StackItem =
  | 'php'
  | 'javascript'
  | 'wordpress'
  | 'sass'
  | 'twig'
  | 'drupal'
  | 'symfony'
  | 'angular'
  | 'doctrine';

export interface PortfolioItemNode {
  frontmatter: {
    published: boolean;
    weight: number;
    path: string;
    title: string;
    website: string;
    description: string;
    screenshot: any; // TODO: Implement Gatsby node typing
    stack: StackItem[];
  };
  html: string;
}
