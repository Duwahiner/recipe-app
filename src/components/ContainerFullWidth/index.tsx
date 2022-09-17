import styled from '@emotion/styled';

import { ThemeProps } from 'types/components';

interface ContainerProps extends ThemeProps {}

export const ContainerFullWidth = styled.div<ContainerProps>`
  width: ${props => `${props.theme.space[11]}%`};
  padding-right: 4%;
  padding-left: 4%;
  box-sizing: border-box;

  @media (ma-width: ${props => `${props.theme.breakpoints.sm}`}) {
    padding-right: 3%;
    padding-left: 3%;
  }
`;
