import React, { ChangeEvent, CSSProperties } from 'react';
export interface CheckboxProps {
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
     * Checkbox's label
     */
    label: string;
    /**
     * Checkbox's name
     */
    name?: string;
    /**
     * Is Checkbox checked?
     */
    checked: boolean;
    /**
     * Is Checkbox disabled?
     */
    disabled?: boolean;
    /**
     * Change handler
     */
    onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Checkbox: React.FC<CheckboxProps>;
