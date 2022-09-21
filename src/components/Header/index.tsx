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
import {
  getDataBannerSelector,
  getDataMenuFloatSelector,
  getDataMenuSelector,
} from 'store/selectors';
import { useController } from 'hooks/useController';
import { useAppSelector } from 'hooks/useStore';

const Container = styled.div``;
const ContainerBanner = styled.div``;

export const Header: React.FC = () => {
  const theme = useTheme() as ThemeApp;
  const dataMenu = useAppSelector(getDataMenuSelector);
  const dataMenuFloat = useAppSelector(getDataMenuFloatSelector);
  const dataBanner = useAppSelector(getDataBannerSelector);
  const controller = useController();

  return (
    <Container>
      <WrapperFlex className='header-wrapper-flex'>
        <ContainerFullWidth className='header-container-full-width'>
          <WrapperFlex>
            <Logo />
          </WrapperFlex>

          <WrapperFlex className='header-wrapper-flex-nenu-container'>
            <div className='header-menu-container'>
              <Menu
                dataMenu={dataMenu}
                handleCurrentActiveItem={controller.handleCurrentActiveItem}
              />
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
        <CurrentBanner dataBanner={dataBanner} />
      </ContainerBanner>

      <ContainerFullWidth className='header-container-full-width-menu-float'>
        <MenuFloat
          dataMenuFloat={dataMenuFloat}
          handleCurrentActiveItemFloat={controller.handleCurrentActiveItemFloat}
        />
      </ContainerFullWidth>
    </Container>
  );
};
