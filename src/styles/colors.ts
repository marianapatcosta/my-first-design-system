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
  highlight: '#212529',
  primary: '#F8F9FA',
  secondary: '#ADB5BD',
  font: '#212529',
  disabled: '#aaaaaa',
  icon: css`
    filter: invert(12%) sepia(16%) saturate(421%) hue-rotate(169deg)
      brightness(92%) contrast(93%);
  `,
  iconHighlight: css`
    filter: invert(100%) sepia(28%) saturate(1271%) hue-rotate(179deg)
      brightness(103%) contrast(96%);
  `,
};
