import styled from '@emotion/styled';

import { ContainerFullWidth } from 'components/ContainerFullWidth';
import { Logo } from 'components/Logo';
import { WrapperFlex } from 'components/WrapperFlex';
import { ThemeProps } from 'types/components';

interface ContainerProps extends ThemeProps {}

const Container = styled(ContainerFullWidth)<ContainerProps>`
  height: 50px;
  background-color: ${props => `${props.theme.colors.bgPrymary100}`};
`;

export const Header: React.FC = () => {
  return (
    <Container>
      <WrapperFlex>
        <WrapperFlex>
          <Logo />
        </WrapperFlex>

        <WrapperFlex>
          <h2> menu </h2>
        </WrapperFlex>
      </WrapperFlex>
    </Container>
  );
};
