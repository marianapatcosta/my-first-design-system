import React, { CSSProperties, ReactNode } from 'react';
export interface CardProps {
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
     * element id
     */
    children?: string | ReactNode;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
