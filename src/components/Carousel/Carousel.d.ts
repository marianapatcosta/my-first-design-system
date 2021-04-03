import React, { CSSProperties } from 'react';
import { ORIENTATION } from '../../constants';
declare type orientationTypes = ORIENTATION;
export interface CarouselProps {
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
     * Carousel's title
     */
    title?: string;
    /**
     * array of images to display
     */
    items: Array<{
        src: string;
        name: string;
    }>;
    /**
     * Carousel's orientation
     */
    orientation?: orientationTypes;
    /**
     * is it supposed to change the main image automatically after a certain time interval, i.e without user request?
     */
    allowAutomaticView?: boolean;
    /**
     * is it supposed to show a toggle to alternate between automatic and manual mode?
     */
    canControlAutomaticView?: boolean;
    /**
     * is it supposed to show image previwes beside the main image?
     */
    hasPreviews?: boolean;
    /**
     * time interval to automatically change the main image, in milliseconds, if automatic view is enable
     */
    imageChangeInterval?: number;
}
export declare const Carousel: React.FC<CarouselProps>;
export {};
