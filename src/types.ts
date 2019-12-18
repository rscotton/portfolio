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
