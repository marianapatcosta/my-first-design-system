import React, { CSSProperties } from 'react';
export interface TabsProps {
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
     * for accessibility purposes indicates for which purpose will Tabs be used?
     */
    tabsPurpose?: string;
    /**
     * content for Tabs
     */
    tabsMetadata: Array<{
        label: string;
        content: JSX.Element;
    }>;
    /**
     * Are Tabs disabled?
     */
    disabled?: boolean;
}
export declare const Tabs: React.FC<TabsProps>;
