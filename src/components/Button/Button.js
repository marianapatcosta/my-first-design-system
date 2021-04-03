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
import { forwardRef } from 'react';
import { StyledButton, StyledButtonLabel, StyledButtonIcon, } from './Button.style';
/**
 * Primary UI component for user interaction
 */
export var Button = forwardRef(function (_a, ref) {
    var label = _a.label, icon = _a.icon, iconText = _a.iconText, props = __rest(_a, ["label", "icon", "iconText"]);
    return (_jsxs(StyledButton, __assign({ ref: ref }, props, { children: [icon && (_jsx(StyledButtonIcon, { "data-testid": 'button-icon', src: icon, alt: iconText, label: label }, void 0)),
            label && (_jsx(StyledButtonLabel, __assign({ hasIcon: !!icon }, { children: label }), void 0))] }), void 0));
});
Button.defaultProps = {
    id: '',
    className: '',
    style: {},
    primary: false,
    size: 'medium',
    isFullLength: false,
    label: '',
    disabled: false,
    type: 'button',
    icon: '',
    iconText: '',
    onClick: function () { return null; }
};
