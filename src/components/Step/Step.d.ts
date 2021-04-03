import React, { CSSProperties, ReactNode } from 'react';
export interface StepProps {
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
     * step content
     */
    content: string | ReactNode;
    /**
     * Is this the current step?
     */
    isActive: boolean;
}
export declare const Step: React.FC<StepProps>;
