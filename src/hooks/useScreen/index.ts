import { useState, useEffect } from 'react';
import {
  CurrentBreakpoint,
  CurrentBreakpointEnum,
  CurrentDevice,
  CurrentDeviceEnum,
  CurrentNumberBreakpoint,
} from 'types/hooks';

export const useScreen = (init = 1200) => {
  const [width, setWidth] = useState<number>(init);
  const [device, setDevice] = useState<CurrentDevice>(CurrentDeviceEnum.Phones);
  const [breakpoint, setBreakpoint] = useState<CurrentBreakpoint>(
    CurrentBreakpointEnum.Xs
  );

  const currentNumberBreakpoint: CurrentNumberBreakpoint = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
  };

  useEffect(() => {
    const updateWidth = () => {
      const innerWidth = window ? window.innerWidth : width;

      setWidth(innerWidth);
    };

    updateWidth();

    if (window) {
      window.addEventListener('resize', updateWidth, false);
    }

    return () => window.removeEventListener('resize', updateWidth);
  }, [width, setWidth]);

  useEffect(() => {
    if (width <= 576) setDevice(CurrentDeviceEnum.Phones);
    else if (width > 576 && width <= 992) setDevice(CurrentDeviceEnum.Tablets);
    else if (width > 992) setDevice(CurrentDeviceEnum.Desktops);

    if (width <= 576) setBreakpoint(CurrentBreakpointEnum.Xs);
    else if (width > 576 && width <= 768)
      setBreakpoint(CurrentBreakpointEnum.Sm);
    else if (width > 768 && width <= 992)
      setBreakpoint(CurrentBreakpointEnum.Md);
    else if (width > 1200) setBreakpoint(CurrentBreakpointEnum.Lg);
  }, [width, setDevice, setBreakpoint]);

  return {
    setWidth,
    setDevice,
    setBreakpoint,
    width,
    device,
    breakpoint,
    numberBreakpoints: currentNumberBreakpoint,
  };
};
