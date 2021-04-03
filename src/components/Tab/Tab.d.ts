import React, { CSSProperties, MouseEventHandler } from 'react';
export interface TabProps {
    /**
     * element id
     */
    id?: string;
    /**
     * additional css class
     */
    tabClassName?: string;
    /**
     * additional style
     */
    style?: CSSProperties;
    /**
    /**
     * Dropdown's label
     */
    label: string;
    /**
     * Is Tab disabled?
     */
    disabled?: boolean;
    /**
     * Is Tab active, i.e, is the one is content is being rendered?
     */
    isActive?: boolean;
    /**
     * Click handler
     */
    onClick: MouseEventHandler<HTMLLIElement>;
}
export declare const Tab: React.FC<TabProps>;
