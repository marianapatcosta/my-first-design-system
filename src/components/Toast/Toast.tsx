import React, { CSSProperties, useEffect } from 'react';
import { Alert, Info, Success, Warning } from '../../assets/icons';
import {
  StyledToast,
  StyledToastIcon,
  StyledToastMessage,
} from './Toast.style';

const toastIcons: {
  alert: string;
  info: string;
  success: string;
  warning: string;
} = {
  alert: Alert,
  info: Info,
  success: Success,
  warning: Warning,
};

type ToastType = 'alert' | 'info' | 'success' | 'warning';

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
  onClear?: (clearObject: string | {}) => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  className,
  autoClearTime,
  onClear,
  ...props
}) => {
  useEffect(() => {
    let timer: number;
    if (message)
      timer = setTimeout(() => onClear && onClear({}), autoClearTime);
    return () => clearTimeout(timer);
  }, [autoClearTime, message, onClear]);

  return (
    <StyledToast className={className} type={type} {...props}>
      <StyledToastIcon
        src={type && toastIcons[type]}
        alt={`${type && toastIcons[type]} icon`}
      />
      <StyledToastMessage type={type}>{message}</StyledToastMessage>
    </StyledToast>
  );
};

Toast.defaultProps = {
  id: '',
  className: '',
  style: {},
  message: '',
  type: 'info',
  autoClearTime: 2000,
  onClear: () => null,
};
