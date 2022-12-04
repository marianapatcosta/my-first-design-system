import React, {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { Alert, CloseWhite, Info, Success, Warning } from '../../assets/icons';
import { TOAST_TYPE } from '../../constants';
import {
  StyledToast,
  StyledToastClose,
  StyledToastIcon,
  StyledToastMessage,
  StyledToastMessageWrapper,
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

type ToastType = TOAST_TYPE;

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
    let autoDeleteTimer: undefined | ReturnType<typeof setTimeout>;
    let fadeOutTimer: undefined | ReturnType<typeof setTimeout>;
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
      <StyledToastClose
        icon={CloseWhite}
        aria-label='close toast'
        size='small'
        onClick={onClear}
      />
      <StyledToastMessageWrapper>
        <StyledToastIcon
          src={type && toastIcons[type]}
          alt={`${type && toastIcons[type]} icon`}
        />
        <StyledToastMessage type={type}>{message}</StyledToastMessage>
      </StyledToastMessageWrapper>
    </StyledToast>
  );
};

Toast.defaultProps = {
  id: '',
  className: '',
  style: {},
  message: '',
  type: TOAST_TYPE.INFO,
  autoClearTime: 2500,
  onClear: () => null,
};
