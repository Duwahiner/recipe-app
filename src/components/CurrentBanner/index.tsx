import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';

const dataBanner = {
  title: 'Recetas',
  subTitle: 'para todos',
  link: false,
  urlImg: '',
};

const ContainerTitleBanner = styled.div``;

export const CurrentBanner: React.FC = () => {
  return (
    <WrapperFlex className='current-banner-wrapper-flex-container'>
      <ContainerTitleBanner className='current-banner-container-title'>
        <h1 className='current-banner-title'> {dataBanner.title} </h1>
        <h3 className='current-banner-subtitle'> {dataBanner.subTitle} </h3>
      </ContainerTitleBanner>
    </WrapperFlex>
  );
};
