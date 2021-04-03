import React, { CSSProperties } from 'react';
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
export declare const Emoji: React.FC<EmojiProps>;
