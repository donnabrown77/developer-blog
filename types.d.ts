export type PreProps = {
  children: ReactNode[];
  raw: any;
  [props: string]: string;
};

export type PrimaryLanguage = {
  color: string;
  id: string;
  name: string;
};

export type Repository = {
  description: string;
  forkCount: number;
  id?: number;
  name: string;
  primaryLanguage: PrimaryLanguage;
  stargazerCount: number;
  url: string;
};

type DataProps = {
  viewer: {
    login: string;
    repositories: {
      first: number;
      privacy: string;
      orderBy: { field: string; direction: string };
      nodes: {
        [x: string]: any;
        id: string;
        name: string;
        description: string;
        url: string;
        primaryLanguage: PrimaryLanguage;
        forkCount: number;
        stargazerCount: number;
      };
    };
  };
};

export type ProjectsProps = {
  data: Repository[];
};

export type SvgProps = {
  width: string;
  height: string;
  href?: string;
};
