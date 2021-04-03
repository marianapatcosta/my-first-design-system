import React, { CSSProperties, MouseEventHandler } from 'react';
export interface DropdownMultiselectionProps {
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
     * Dropdown's displaying text when no option is selected or if multiple options can be selected
     */
    placeholder?: string;
    /**
     * Is Dropdown disabled?
     */
    disabled?: boolean;
    /**
     * Is Dropdown songle selection?
     */
    isSingleSelection?: boolean;
    /**
     * the options that are selected
     */
    selectedOptions?: Array<any>;
    /**
     * the selected option, if dropdown only allows to select on item each time
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
    onOptionClick: MouseEventHandler<HTMLLIElement>;
}
export declare const DropdownMultiselection: React.FC<DropdownMultiselectionProps>;
