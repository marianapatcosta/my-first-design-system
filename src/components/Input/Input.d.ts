import React, { ChangeEvent, CSSProperties, MouseEventHandler } from 'react';
declare type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | undefined;
export interface InputProps {
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
     * Input label
     */
    label?: string;
    /**
     * Input name
     */
    name?: string;
    /**
     * Input value
     */
    value: string;
    /**
     * Input type
     */
    type?: InputType;
    /**
     * Input's displaying text when no option is selected
     */
    placeholder?: string;
    /**
     * Is Input disabled?
     */
    disabled?: boolean;
    /**
     * what is maxLength allowed for the input field?
     */
    maxLength?: number;
    /**
     * is autoComplete functionality available?
     */
    autoComplete?: string;
    /**
     * is autoFocus functionality available?
     */
    autoFocus?: boolean;
    /**
     * text to display in case of error
     */
    errorMessage?: string;
    /**
     * icon to display in input field
     */
    icon?: string;
    /**
     * text to describe the input icon (for accessibility purposes)
     */
    iconText?: string;
    /**
     * Change handler
     */
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Blur handler
     */
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Click handler on icon click
     */
    onIconClick?: MouseEventHandler<HTMLImageElement>;
}
export declare const Input: React.FC<InputProps>;
export {};
