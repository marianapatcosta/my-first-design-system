import React, { CSSProperties } from 'react';
import { StyledShowMore } from './ShowMore.style';

export interface ShowMoreProps {
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
};

export const ShowMore: React.FC<ShowMoreProps>= ({ ...props}) => {
  return (
    <StyledShowMore  {...props}>
      
    </StyledShowMore>
  );
};


ShowMore.defaultProps = {
  id: '',
  className: '',
  style: {}
};