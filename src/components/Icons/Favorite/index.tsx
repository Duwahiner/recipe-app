import React from 'react';
import { Svg, SvgProps } from '../../Svg';

interface FavoriteIconProps extends Omit<SvgProps, 'viewBox'> {}

const FavoriteIcon: React.FC<FavoriteIconProps> = props => {
  return (
    <Svg viewBox='0 0 200 200' {...props}>
      <g>
        <path
          d='M199.6,75.8c-0.9-2.6-3.2-4.4-5.9-4.7l-63.2-4.9L106.4,4.4c-1.4-3.5-5.4-5.3-8.9-3.9c-1.8,0.7-3.2,2.1-3.9,3.9l-24,61.9
	L6.3,71.2c-3.8,0.3-6.6,3.6-6.3,7.4c0.1,1.8,1,3.4,2.3,4.6L51,126.4l-15.2,65.1c-0.9,3.7,1.4,7.4,5.1,8.2c1.8,0.4,3.7,0.1,5.3-0.9
	l53.8-35.1l53.8,35.1c3.2,2.1,7.4,1.2,9.5-2c1-1.6,1.4-3.5,0.9-5.3L149,126.4l48.7-43.2C199.8,81.3,200.5,78.4,199.6,75.8z'
        />
      </g>
    </Svg>
  );
};

export default FavoriteIcon;
