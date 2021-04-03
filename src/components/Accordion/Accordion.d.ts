import React, { CSSProperties, ReactNode } from 'react';
export interface AccordionProps {
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
     * Accordion's title
     */
    title: string | ReactNode;
    /**
     * Accordion's content; is only visible when the component is expanded
     */
    content?: string | ReactNode;
    /**
     * Is Accordion disabled?
     */
    disabled?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
