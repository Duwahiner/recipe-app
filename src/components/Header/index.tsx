import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { ContainerFullWidth } from 'components/ContainerFullWidth';
import { CurrentBanner } from 'components/CurrentBanner';
import { HomeIcon } from 'components/Icons';
import { Logo } from 'components/Logo';
import { Menu } from 'components/Menu';
import { MenuFloat } from 'components/MenuFloat';
import { WrapperFlex } from 'components/WrapperFlex';
import { ThemeApp } from 'types/theme';

const Container = styled.div``;
const ContainerBanner = styled.div``;

export const Header: React.FC = () => {
  const theme = useTheme() as ThemeApp;

  return (
    <Container>
      <WrapperFlex className='header-wrapper-flex'>
        <ContainerFullWidth className='header-container-full-width'>
          <WrapperFlex>
            <Logo />
          </WrapperFlex>

          <WrapperFlex className='header-wrapper-flex-nenu-container'>
            <div className='header-menu-container'>
              <Menu />
            </div>
            <div className='header-icon-home-container'>
              <Link to='/'>
                <HomeIcon color={theme.colors.prymary} size='25px' />
              </Link>
            </div>
          </WrapperFlex>
        </ContainerFullWidth>
      </WrapperFlex>

      <ContainerBanner>
        <CurrentBanner />
      </ContainerBanner>

      <ContainerFullWidth className='header-container-full-width-menu-float'>
        <MenuFloat />
      </ContainerFullWidth>
    </Container>
  );
};
