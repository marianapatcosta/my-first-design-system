import React, { CSSProperties, ReactNode } from 'react';
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
    /**
     * show more content
     */
    content: string | ReactNode;
    /**
     * number of content lines that are visible when show more is collapsed
     */
    numberOfPreviewLines?: number;
}
export declare const ShowMore: React.FC<ShowMoreProps>;
