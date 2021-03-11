import { createGlobalStyle } from 'styled-components';
import { colors, typography } from './styles';
 
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${typography.type.body};
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  * :focus {
    outline: 0.125rem solid ${colors.highlight};
  }

  * :focus:not(:focus-visible) {
    outline: none;
  }
`;
 
export default GlobalStyle;