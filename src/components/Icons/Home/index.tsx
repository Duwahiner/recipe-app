import React from 'react';
import { Svg, SvgProps } from '../../Svg';

interface HomeIconProps extends Omit<SvgProps, 'viewBox'> {}

const HomeIcon: React.FC<HomeIconProps> = props => {
  return (
    <Svg viewBox='0 0 200 200' {...props}>
      <g transform='translate(0 0)'>
        <path
          d='M200,104.9c-0.5,0.1-0.5,0.6-0.6,0.9c-2.6,7.8-10,12.9-18.2,12.4c-1.9,0-2.3,0.4-2.3,2.3c0.1,19.2,0.1,38.3,0,57.5
						c0.2,10.2-6.7,19.1-16.6,21.4c-1.9,0.4-3.9,0.6-5.8,0.6c-10,0-20.1,0-30.1,0c-3.3,0.5-6.4-1.9-6.9-5.2c-0.1-0.5-0.1-1.1,0-1.6
						c0-15-0.2-30,0.1-45c0.4-5.7-3.9-10.7-9.6-11.1c-0.5,0-1.1,0-1.6,0c-5.5,0.2-11.1,0-16.6,0c-5.4-0.5-10.2,3.5-10.7,9
						c-0.1,0.6-0.1,1.2,0,1.7c0,15,0,30,0,45c0,5.1-2.2,7.2-7.3,7.2c-9.9,0-19.8,0-29.7,0c-11.9,0.5-21.9-8.8-22.4-20.7
						c0-0.6,0-1.2,0-1.8c0-19,0-38.1,0-57.1c0-1.9-0.5-2.3-2.4-2.3C9.1,118.7,0.5,110.9,0,100.8c0-0.6,0-1.2,0-1.9c0.2-4.1,1.7-8,4.4-11
						c0.5-0.6,1.1-1.2,1.6-1.7L86.4,5.8c1.6-1.7,3.4-3,5.4-4.1c7-3.2,15.3-2,21.1,3.1c3.2,3.4,6.5,6.5,9.8,9.8
						c22.3,22.3,44.6,44.5,66.8,66.8c4.5,3.7,8.1,8.4,10.4,13.7L200,104.9z M33.2,145.8c0,10.6,0,21.3,0,31.9c-0.4,5.4,3.6,10.2,9,10.6
						c0.5,0,1,0,1.6,0c7.8,0,15.5-0.1,23.3,0c1.7,0,2.2-0.4,2.1-2.1c-0.1-13.3-0.2-26.6,0-39.9c0.1-10.8,8.4-19.7,19.1-20.7
						c7.6-0.5,15.3-0.5,22.9-0.1c0.9,0,1.8,0.2,2.7,0.4c10.2,2.1,17.5,11.3,17.2,21.7c0,13,0,26,0,38.9c0,1.5,0.4,1.8,1.8,1.8
						c7.7-0.1,15.4,0,23.1,0c5.5,0.7,10.4-3.2,11.1-8.7c0.1-0.8,0.1-1.6,0-2.4c0-21.3,0-42.7,0-64c-0.4-3.3,2-6.3,5.3-6.7
						c0.4-0.1,0.9-0.1,1.3,0c2.8,0,5.6,0,8.4,0c2.8-0.1,5.3-1.9,6.1-4.7c0.8-3-0.3-6.1-2.8-8c-26.5-26.5-53.1-53.1-79.6-79.6
						c-2.2-3.2-6.6-4-9.7-1.8c-0.7,0.5-1.3,1.1-1.8,1.9L23.5,85.3c-3.2,3.2-6.5,6.4-9.7,9.7c-2.7,2.5-2.8,6.8-0.3,9.5
						c1.3,1.4,3.2,2.2,5.1,2.1h7.6c3.4-0.5,6.5,1.8,6.9,5.2c0.1,0.6,0.1,1.2,0,1.8C33.2,124.3,33.2,135,33.2,145.8'
        />
      </g>
    </Svg>
  );
};

export default HomeIcon;
