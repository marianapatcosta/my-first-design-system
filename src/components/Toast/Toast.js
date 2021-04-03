var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState, } from 'react';
import { Alert, CloseWhite, Info, Success, Warning } from '../../assets/icons';
import { TOAST_TYPE } from '../../constants';
import { StyledToast, StyledToastClose, StyledToastIcon, StyledToastMessage, StyledToastMessageWrapper, } from './Toast.style';
var toastIcons = {
    alert: Alert,
    info: Info,
    success: Success,
    warning: Warning,
};
export var Toast = function (_a) {
    var message = _a.message, type = _a.type, className = _a.className, autoClearTime = _a.autoClearTime, onClear = _a.onClear, props = __rest(_a, ["message", "type", "className", "autoClearTime", "onClear"]);
    var _b = useState(false), willBeDeleted = _b[0], setWillBeDeleted = _b[1];
    useEffect(function () {
        var autoDeleteTimer;
        var fadeOutTimer;
        if (message) {
            var fadeOutTime = autoClearTime && autoClearTime - 500;
            fadeOutTimer = setTimeout(function () { return setWillBeDeleted(true); }, fadeOutTime);
            autoDeleteTimer = setTimeout(function () { return onClear && onClear(); }, autoClearTime);
        }
        return function () {
            clearTimeout(fadeOutTimer);
            clearTimeout(autoDeleteTimer);
        };
    }, [autoClearTime, message, onClear]);
    onClear;
    return (_jsxs(StyledToast, __assign({ className: className, type: type }, props, { willBeDeleted: willBeDeleted }, { children: [_jsx(StyledToastClose, { icon: CloseWhite, "aria-label": 'close toast', size: 'small', onClick: onClear }, void 0),
            _jsxs(StyledToastMessageWrapper, { children: [_jsx(StyledToastIcon, { src: type && toastIcons[type], alt: (type && toastIcons[type]) + " icon" }, void 0),
                    _jsx(StyledToastMessage, __assign({ type: type }, { children: message }), void 0)] }, void 0)] }), void 0));
};
Toast.defaultProps = {
    id: '',
    className: '',
    style: {},
    message: '',
    type: TOAST_TYPE.INFO,
    autoClearTime: 2500,
    onClear: function () { return null; },
};
