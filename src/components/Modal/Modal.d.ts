import React, { CSSProperties, MouseEventHandler } from 'react';
export declare type ModalSize = 'small' | 'medium' | 'large';
export interface ModalProps {
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
     * How large should the Modal be?
     */
    size?: ModalSize;
    /**
     * Modal's header
     */
    header?: string;
    /**
     * Modal's message content
     */
    message: string;
    /**
     * Label to display in Modal's button
     */
    buttonLabel: string;
    /**
     * Is Modal for confirm some action? It display 2 buttons for confirm and cancel action
     */
    isConfirmationModal?: boolean;
    /**
     * Label to display in confirmation modal, if isConfirmationModal = true
     */
    confirmationButtonLabel?: string;
    /**
     * Click handler to call on close ou on cancel (if isConfirmationModal = true)
     */
    onClose: MouseEventHandler<HTMLButtonElement>;
    /**
     * Click handler to call on confirmation, if isConfirmationModal = true
     */
    onConfirm?: MouseEventHandler<HTMLButtonElement>;
}
export declare const Modal: React.FC<ModalProps>;
