import styled from '@emotion/styled';

export interface SvgProps {
  width?: string;
  height?: string;
  size?: string;
  color?: string;
  mt?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  m?: string;
  p?: string;
  pt?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  viewBox?: string;
}

export const Svg = styled.svg<SvgProps>`
  width: ${props => props.width || props.size};
  height: ${props => props.height || props.size};
  fill: ${props => props.color};
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
`;

Svg.defaultProps = {
  size: '24px',
  color: '#ffffff',
};
