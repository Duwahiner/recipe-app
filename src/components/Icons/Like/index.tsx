import React from 'react';
import { Svg, SvgProps } from '../../Svg';

interface LikeIconProps extends Omit<SvgProps, 'viewBox'> {}

const LikeIcon: React.FC<LikeIconProps> = props => {
  return (
    <Svg viewBox='0 0 200 200' {...props}>
      <g>
        <path
          d='M112.4,183.8c-7,6.3-17.7,6.3-24.7,0l-2.2-2C34,135,0,104.2,0,66.5c-0.3-30.1,23.8-54.7,53.9-55c0.4,0,0.7,0,1.1,0
	c17.3,0.1,33.7,7.8,45,20.9c11.3-13.2,27.7-20.8,45-20.9c30.1-0.3,54.7,23.9,54.9,54c0,0.3,0,0.7,0,1c0,37.8-34,68.6-85.5,115.4
	L112.4,183.8z'
        />
      </g>
    </Svg>
  );
};

export default LikeIcon;
