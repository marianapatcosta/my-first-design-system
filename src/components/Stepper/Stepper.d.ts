import React, { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { ORIENTATION } from '../../constants';
declare type orientationTypes = ORIENTATION;
export interface StepperProps {
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
     * stepper's orientation
     */
    orientation?: orientationTypes;
    /**
     * label of stepper's button in the last step
     */
    buttonLabel?: string;
    /**
     * Array of objects defining the metadata for each stepper's steps
     */
    stepsMetadata: Array<{
        content: ReactNode;
        isValid?: boolean;
    }>;
    /**
     * Click handler to call on finish the fulfill/visualization of all steps
     */
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}
export declare const Stepper: React.FC<StepperProps>;
export {};
