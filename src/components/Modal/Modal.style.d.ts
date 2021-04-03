import { MouseEventHandler } from 'react';
import { ModalSize } from './Modal';
export declare const StyledModalOverlay: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledModalContent: import("styled-components").StyledComponent<"div", any, {
    size?: ModalSize | undefined;
}, never>;
export declare const StyledModalHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
export declare const StyledModalHeaderTitle: import("styled-components").StyledComponent<"h2", any, {}, never>;
export declare const StyledModalHeaderClose: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Button/Button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {
    icon?: string | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}, never>;
export declare const StyledModalMessage: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const StyledModalFooter: import("styled-components").StyledComponent<"footer", any, {}, never>;
export declare const StyledModalFooterButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Button/Button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>, any, {
    label?: string | undefined;
    isConfirmationModal?: boolean | undefined;
    onClick: MouseEventHandler<HTMLButtonElement>;
}, never>;
