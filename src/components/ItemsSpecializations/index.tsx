import { WrapperFlex } from 'components/WrapperFlex';

import { ChefIcon, PortionIcon, TimeIcon } from 'components/Icons';
import { ItemsSpecializationsProps } from 'types/components';

export const ItemsSpecializations: React.FC<ItemsSpecializationsProps> = ({ data }) => {
  return (
    <WrapperFlex className='items-specializations-wrapper-flex-container'>
      <div className='items-specializate-container'>
        <PortionIcon color='#D84A4A' size='20px' />
        <span className='items-specializations-title'> Tamaño de la porción </span>
        <span className='items-specializations-count'> {data.yield} raciones </span>
      </div>

      <div className='items-specializate-container'>
        <TimeIcon color='#D84A4A' size='22px' />
        <span className='items-specializations-title'> Tiempo de preparación </span>
        <span className='items-specializations-count'>
          {data.totalTime} {data.totalTime > 1 ? 'minutos' : 'minuto'}{' '}
        </span>
      </div>

      <div className='items-specializate-container'>
        <ChefIcon color='#D84A4A' size='20px' />
        <span className='items-specializations-title'> Dificultad </span>
        <span className='items-specializations-count'>
          {' '}
          {data.totalTime >= 40 ? 'Complejo' : 'Fácil'}{' '}
        </span>
      </div>
    </WrapperFlex>
  );
};
