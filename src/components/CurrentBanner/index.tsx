import styled from '@emotion/styled';

import { WrapperFlex } from 'components/WrapperFlex';
import { CurrentBannerProps } from 'types/components';

const ContainerTitleBanner = styled.div``;

export const CurrentBanner: React.FC<CurrentBannerProps> = ({ dataBanner }) => {
  return (
    <WrapperFlex
      className='current-banner-wrapper-flex-container'
      style={{
        background: `url(${dataBanner.urlImg}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <ContainerTitleBanner className='current-banner-container-title'>
        <h1 className='current-banner-title'> {dataBanner.title} </h1>
        <h3 className='current-banner-subtitle'> {dataBanner.subTitle} </h3>
      </ContainerTitleBanner>
    </WrapperFlex>
  );
};
