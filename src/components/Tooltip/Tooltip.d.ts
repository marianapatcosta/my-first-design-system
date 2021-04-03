import React, { CSSProperties } from 'react';
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
export declare const Tooltip: React.FC<TooltipProps>;
