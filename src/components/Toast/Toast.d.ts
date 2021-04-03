import React, { CSSProperties } from 'react';
import { TOAST_TYPE } from '../../constants';
declare type ToastType = TOAST_TYPE;
export interface ToastProps {
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
     * Toast message
     */
    message: string;
    /**
     * Toast type; there are 4 types available: alert, info, success and warning
     */
    type?: ToastType;
    /**
     * Time to toast autodelete, in milliseconds
     */
    autoClearTime?: number;
    /**
     * Handles event on Toast autodelete
     */
    onClear: () => void;
}
export declare const Toast: React.FC<ToastProps>;
export {};
