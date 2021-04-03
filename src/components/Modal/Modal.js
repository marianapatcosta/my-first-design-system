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
import { useEffect, useRef, } from 'react';
import { Close } from '../../assets/icons';
import { StyledModalOverlay, StyledModalContent, StyledModalHeader, StyledModalHeaderTitle, StyledModalHeaderClose, StyledModalMessage, StyledModalFooter, StyledModalFooterButton, } from './Modal.style';
export var Modal = function (_a) {
    var header = _a.header, message = _a.message, buttonLabel = _a.buttonLabel, confirmationButtonLabel = _a.confirmationButtonLabel, isConfirmationModal = _a.isConfirmationModal, size = _a.size, onClose = _a.onClose, onConfirm = _a.onConfirm, props = __rest(_a, ["header", "message", "buttonLabel", "confirmationButtonLabel", "isConfirmationModal", "size", "onClose", "onConfirm"]);
    var modalRef = useRef(null);
    var modalButtonRef = useRef(null);
    useEffect(function () {
        // !!modalButtonRef.current && modalButtonRef.current.focus();
        var handleClickOutside = function (event /* MouseEvent */) {
            var element = event.target;
            if (modalRef.current && !(modalRef === null || modalRef === void 0 ? void 0 : modalRef.current.contains(element))) {
                event.preventDefault();
                event.stopPropagation();
                !!onClose && onClose(event);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return function () { return document.removeEventListener('click', handleClickOutside); };
    }, [modalRef, onClose]);
    return (_jsx(StyledModalOverlay, { children: _jsxs(StyledModalContent, __assign({ ref: modalRef }, props, { size: size }, { children: [_jsxs(StyledModalHeader, { children: [_jsx(StyledModalHeaderTitle, { children: header }, void 0),
                        _jsx(StyledModalHeaderClose, { "aria-label": 'close modal', icon: Close, onClick: onClose }, void 0)] }, void 0),
                _jsx("main", { children: _jsx(StyledModalMessage, { children: message }, void 0) }, void 0),
                _jsxs(StyledModalFooter, { children: [isConfirmationModal && confirmationButtonLabel && onConfirm && (_jsx(StyledModalFooterButton, { size: 'small', label: confirmationButtonLabel, onClick: onConfirm }, void 0)),
                        _jsx(StyledModalFooterButton, { size: 'small', isConfirmationModal: isConfirmationModal, ref: modalButtonRef, label: buttonLabel, onClick: onClose }, void 0)] }, void 0)] }), void 0) }, void 0));
};
Modal.defaultProps = {
    id: '',
    className: '',
    style: {},
    header: '',
    message: '',
    buttonLabel: '',
    size: 'medium',
    confirmationButtonLabel: '',
    isConfirmationModal: false,
    onClose: function () { return null; },
    onConfirm: function () { return null; },
};
