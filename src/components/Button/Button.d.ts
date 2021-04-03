import React, { CSSProperties, MouseEventHandler } from 'react';
declare type ButtonType = 'button' | 'submit' | 'reset' | undefined;
export declare type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps {
    /**
     * element id
     */
    id?: string;
    /**
     * additional class
     */
    className?: string;
    /**
     * additional style
     */
    style?: CSSProperties;
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What is button's type
     */
    type?: ButtonType;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
     * Will the button occupy all the available width?
     */
    isFullLength?: boolean;
    /**
     * Button's label
     */
    label?: string;
    /**
     * Is Button disabled?
     */
    disabled?: boolean;
    /**
     * Button icon
     */
    icon?: string;
    /**
     * text to describe the button icon (for accessibility purposes)
     */
    iconText?: string;
    /**
     * Click handler
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
