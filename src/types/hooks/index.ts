export enum CurrentDeviceEnum {
  Phones = 'phones',
  Tablets = 'tablets',
  Desktops = 'desktops',
}

export enum CurrentBreakpointEnum {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}

export interface CurrentNumberBreakpoint {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

export type CurrentDevice = CurrentDeviceEnum;
export type CurrentBreakpoint = CurrentBreakpointEnum;
