import { WrapperFlex } from 'components/WrapperFlex';

import LogoZero from 'assets/svg/logo-zero.svg';
import { LogoProps } from 'types/components';

export const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <WrapperFlex>
      <a href='/'>
        <img src={LogoZero} alt='logo zero' width={width} height={height} />
      </a>
    </WrapperFlex>
  );
};

Logo.defaultProps = {
  width: 91,
  height: 30,
};
