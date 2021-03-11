import React, { CSSProperties } from 'react';
import { StyledTooltip } from './Tooltip.style';

export interface TooltipProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * additional style
   */
  style?: CSSProperties;
  /**
   * Tooltip's text
   */
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, ...props }) => {
  return <StyledTooltip {...props}>{text}</StyledTooltip>;
};

Tooltip.defaultProps = {
  className: '',
  style: {},
  id: '',
  text: '',
};
