import React, { ChangeEvent, CSSProperties } from 'react';
export interface ToggleSwitchProps {
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
    /**
     * ToggleSwitch's label
     */
    label?: string;
    /**
     * label to display inside the ToggleSwitch, on the left side
     */
    leftLabel?: string;
    /**
     * label to display inside the ToggleSwitch, on the right side
     */
    rightLabel?: string;
    /**
     * ToggleSwitch's name
     */
    name?: string;
    /**
     * Is ToggleSwitch checked?
     */
    checked: boolean;
    /**
     * Is ToggleSwitch disabled?
     */
    disabled?: boolean;
    /**
     * Change handler
     */
    onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}
export declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
