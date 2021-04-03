import React, { ChangeEvent, CSSProperties } from 'react';
export interface DropdownProps {
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
     * Dropdown's label
     */
    label?: string;
    /**
     * Dropdown's name
     */
    name?: string;
    /**
     * Dropdown's displaying text when no option is selected
     */
    placeholder?: string;
    /**
     * Is Dropdown disabled?
     */
    disabled?: boolean;
    /**
     * the option that is selected
     */
    selectedOption?: any;
    /**
     * name of the field to be displayed in the list of dropdown's options, when options prop is an array of objects
     */
    optionKey?: string;
    /**
     * options to display in the dropdown content
     */
    options: Array<any>;
    /**
     * Change handler
     */
    onChooseOption: (event?: ChangeEvent<HTMLSelectElement>) => void;
}
export declare const Dropdown: React.FC<DropdownProps>;
