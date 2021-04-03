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
import { StyledInputWrapper, StyledInput, StyledInputField, StyledLabel, StyledInputIcon, StyledInputError, } from './Input.style';
export var Input = function (_a) {
    var id = _a.id, className = _a.className, label = _a.label, disabled = _a.disabled, placeholder = _a.placeholder, errorMessage = _a.errorMessage, icon = _a.icon, iconText = _a.iconText, onIconClick = _a.onIconClick, props = __rest(_a, ["id", "className", "label", "disabled", "placeholder", "errorMessage", "icon", "iconText", "onIconClick"]);
    return (_jsxs(StyledInputWrapper, { children: [!!label && (_jsx(StyledLabel, __assign({ htmlFor: id, disabled: disabled }, { children: label }), void 0)),
            _jsxs(StyledInputField, __assign({ className: className, disabled: disabled }, { children: [_jsx(StyledInput, __assign({ "data-testid": 'input-field', "aria-label": !!label ? label : placeholder, id: id, disabled: disabled, errorMessage: errorMessage, placeholder: placeholder }, props), void 0),
                    icon && (_jsx(StyledInputIcon, { "data-testid": 'input-icon', "aria-label": !!onIconClick ? 'click me' : 'image', alt: iconText, src: icon, onClick: onIconClick, tabIndex: onIconClick ? 0 : -1 }, void 0))] }), void 0),
            !!errorMessage && _jsx(StyledInputError, { children: errorMessage }, void 0)] }, void 0));
};
Input.defaultProps = {
    id: '',
    className: '',
    style: {},
    label: '',
    name: '',
    disabled: false,
    maxLength: 150,
    type: 'text',
    autoComplete: 'off',
    autoFocus: false,
    value: '',
    placeholder: '',
    errorMessage: '',
    icon: '',
    iconText: '',
    onChange: function () { return null; },
};
