// Types reducer menu.ts
export interface DataMenu {
  name: string;
  link: string;
  active: boolean;
  subMenu: boolean;
}

// Types reducer menuFloat.ts
export interface DataMenuFloat extends DataMenu {
  src?: string;
}

// Types reducer headerState.ts
export interface HeaderState {
  banner: Banner;
}

export interface Banner {
  title: string;
  subTitle: string;
  link: string;
  urlImg: string;
}

// Types reducer headerState.ts
export interface CurrentSearch {
  namePage: string;
  title: string;
  path: string;
  search: string;
}
