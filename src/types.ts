export enum Colors {
  SpaceBlack = '#1f2324',
  StarYellow = '#ffd71d',
  EarthBlue = '#00a2ff',
  MoonRock = '#4c4f50',
  GalaxyWhite = '#f1f2f2',
  OffWhite = '#feffff',
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

export interface PortfolioItemNode {
  frontmatter: {
    published: boolean;
    weight: number;
    path: string;
    title: string;
    website: string;
    description: string;
    stack: string[];
  };
  html: string;
}
