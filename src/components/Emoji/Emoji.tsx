import React, { CSSProperties } from 'react';
import { StyledEmoji } from './Emoji.style';

export interface EmojiProps {
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
   * element's label'
   */
  label?: string;
  /**
   * emoji to display
   */
  emoji: any;
}

export const Emoji: React.FC<EmojiProps> = ({ label, emoji }) => {
  return (
    <StyledEmoji
      role='img'
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {emoji}
    </StyledEmoji>
  );
};

Emoji.defaultProps = {
  id: '',
  className: '',
  style: {},
  label: '',
  emoji: null,
};
