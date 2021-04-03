import React, { CSSProperties, ChangeEvent } from 'react';
export interface RadioButtonProps {
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
     * Radio Button's label
     */
    label: string;
    /**
     * Radio Button's name
     */
    name?: string;
    /**
     * radio button' value
     */
    value: any;
    /**
     * Is Radio Button checked?
     */
    checked: boolean;
    /**
     * Is Radio Button disabled?
     */
    disabled?: boolean;
    /**
     * Change handler
     */
    onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
