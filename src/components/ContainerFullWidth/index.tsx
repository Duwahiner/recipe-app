import styled from '@emotion/styled';

import { ThemeProps } from 'types/components';

interface ContainerProps extends ThemeProps {}

export const ContainerFullWidth = styled.div<ContainerProps>`
  width: ${props => `${props.theme.space[8]}%`};
  padding-right: ${props => `${props.theme.space[5]}px`};
  padding-left: ${props => `${props.theme.space[5]}px`};
  box-sizing: border-box;
`;
