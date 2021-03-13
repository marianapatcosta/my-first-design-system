import React, {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { Alert, Close, Info, Success, Warning } from '../../assets/icons';
import {
  StyledToast,
  StyledToastClose,
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
  onClear: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  className,
  autoClearTime,
  onClear,
  ...props
}) => {
  const [willBeDeleted, setWillBeDeleted] = useState<boolean>(false);

  useEffect(() => {
    let autoDeleteTimer: number;
    let fadeOutTimer: number;
    if (message) {
      const fadeOutTime = autoClearTime && autoClearTime - 500;
      fadeOutTimer = setTimeout(() => setWillBeDeleted(true), fadeOutTime);
      autoDeleteTimer = setTimeout(() => onClear && onClear(), autoClearTime);
    }
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(autoDeleteTimer);
    };
  }, [autoClearTime, message, onClear]);

  onClear as MouseEventHandler<HTMLButtonElement>;
  return (
    <StyledToast
      className={className}
      type={type}
      {...props}
      willBeDeleted={willBeDeleted}
    >
      <StyledToastClose icon={Close} size='small' onClick={onClear} />
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
  autoClearTime: 2500,
  onClear: () => null,
};
