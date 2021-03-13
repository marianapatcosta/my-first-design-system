import { css } from 'styled-components';

export const colors = {
  transparent: 'Transparent',
  darkBlue: '#12217c',
  blue: '#3a8ccf',
  orange: '#eb8d53',
  white: '#ffffff',
  black: '#000000',
  red: '#b33030',
  green: '#008000',
  yellow: '#f5d252',
  grey: '#808080',
  shadow: '#000000',
  highlight: '#008000',
  primary: '#b1be9c',
  secondary: '#e8dfd5',
  font: '#161616',
  disabled: '#aaaaaa',
  icon: css`
    filter: invert(98%) sepia(26%) saturate(2%) hue-rotate(98deg)
      brightness(116%) contrast(100%);
  `,
  iconHighlight: css`
    filter: invert(23%) sepia(43%) saturate(3232%) hue-rotate(100deg)
      brightness(92%) contrast(104%);
  `,
};
