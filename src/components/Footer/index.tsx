import { ContainerFullWidth } from 'components/ContainerFullWidth';
import { WrapperFlex } from 'components/WrapperFlex';

import imgProducts from 'assets/images/grupo-products.png';

export const Footer: React.FC = () => {
  return (
    <ContainerFullWidth className='footer-container-full-width'>
      <WrapperFlex className='footer-wrapper-flex-container'>
        <div className='footer-title-container'>
          <span className='footer-title'>Con el Patrocinio de</span>
        </div>
        <WrapperFlex className='footer-img-ontainer'>
          <img className='footer-img' src={imgProducts} alt='Productos patrocinadores' />
        </WrapperFlex>
      </WrapperFlex>
    </ContainerFullWidth>
  );
};
