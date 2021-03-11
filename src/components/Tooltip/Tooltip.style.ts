import styled from "styled-components";
import { baseStyles, colors } from '../../styles';

export const StyledTooltip = styled.div`
  ${baseStyles};
  position: absolute;
  background-color: ${colors.highlight};
  opacity: 0.8;
  font-size: 85%;
  padding: 0.3rem;
  box-shadow: 0 0.125rem 0.125rem ${colors.shadow};
  bottom: -1.2rem;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;

  &::after {
    content: ' ';
    position: absolute;
    top: -0.4rem;
    left: 0;
    right: 0;
    width: 0;
    margin: 0 auto;
    border: 0.4rem solid ${colors.transparent};
    border-top-color: ${colors.highlight};
    color: ${colors.primary};
    border-bottom: 0;
    transform: rotate(180deg) scaleX(-1);
    -webkit-transform: rotate(180deg) scaleX(-1);
    -moz-transform: rotate(180deg) scaleX(-1);
    -ms-transform: rotate(180deg) scaleX(-1);
    -o-transform: rotate(180deg) scaleX(-1);
  }
`;