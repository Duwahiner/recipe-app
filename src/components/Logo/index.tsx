import { Link } from 'react-router-dom';

import { WrapperFlex } from 'components/WrapperFlex';
import { LogoProps } from 'types/components';

export const Logo: React.FC<LogoProps> = () => {
  return (
    <WrapperFlex className='logo-wrapper-flex-container'>
      <Link className='logo-link' to='/'>
        <span className='logo-link-items-1'> Recipe </span>
        <span className='logo-link-items-2'> App </span>
      </Link>
    </WrapperFlex>
  );
};
