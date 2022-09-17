import { WrapperFlex } from 'components/WrapperFlex';

import { PortionIcon } from 'components/Icons';

export const ItemsSpecializations: React.FC = () => {
  return (
    <WrapperFlex className='items-specializations-wrapper-flex-container'>
      <PortionIcon color='#D84A4A' size='20px' />
      <span className='items-specializations-title'> Tamaño de la porción </span>
      <span className='items-specializations-count'> 4 raciones </span>
    </WrapperFlex>
  );
};
