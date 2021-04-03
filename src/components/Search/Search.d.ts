import React, { ChangeEvent, CSSProperties, MouseEventHandler } from 'react';
export interface SearchProps {
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
     * Search label
     */
    label?: string;
    /**
     * Search name
     */
    name?: string;
    /**
     * Search value
     */
    value: string;
    /**
     * Search's displaying text when no option is selected
     */
    placeholder?: string;
    /**
     * what is maxLength allowed for the search field?
     */
    maxLength?: number;
    /**
     * Is Search disabled?
     */
    disabled?: boolean;
    /**
     * Is Search expansible i.e. is search collapsed and search field is rendered after click,
     * or search field is always visible?
     */
    isExpandable?: boolean;
    /**
     * Change handler
     */
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Click handler to remove the value in search field
     */
    onClear: MouseEventHandler<HTMLImageElement>;
}
export declare const Search: React.FC<SearchProps>;
