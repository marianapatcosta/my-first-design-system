import React, { CSSProperties, KeyboardEventHandler, MouseEventHandler } from 'react';
export interface ImageProps {
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
     * additional css class for image placeholder
     */
    placeholderClass?: string;
    /**
    /**
     * Image src attribute
     */
    src: string;
    /**
     * Image alt attribute
     */
    alt?: string;
    /**
     * is Image increasing size on click?
     */
    isZoomable?: boolean;
    /**
     * an event should be triggered on Image click? (Only available if isZoomable = false)
     */
    isClickable?: boolean;
    /**
     * Click handler (Only available if isZoomable = false)
     */
    onClick?: MouseEventHandler<HTMLImageElement> | KeyboardEventHandler<HTMLImageElement>;
}
export declare const Image: React.FC<ImageProps>;
