import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

export const StyledRadioButtonWrapper = styled.label`
  ${baseStyles}
  display: flex;
  align-items: center;
  user-select: none;
  font-size: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledRadioButton = styled.span<{
  disabled?: boolean;
}>`
  position: relative;
  height: 1rem;
  width: 1rem;
  border: 0.063rem solid ${colors.highlight};
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.75;
  }

  :after {
    content: '';
    height: 0;
    width: 0;
    background-color: ${colors.highlight};
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
  }

  ${({ disabled }) => disabled && `${disabledStyles}`}
`;

export const StyledRadioButtonInput = styled.input`
  position: absolute;
  visibility: hidden;

  :checked + ${StyledRadioButton}:after {
    width: 0.625rem;
    height: 0.625rem;
  }
`;
