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
import { StyledTextareaWrapper, StyledTextarea, StyledLabel, StyledTextareaError, } from './Textarea.style';
export var Textarea = function (_a) {
    var id = _a.id, label = _a.label, disabled = _a.disabled, errorMessage = _a.errorMessage, placeholder = _a.placeholder, props = __rest(_a, ["id", "label", "disabled", "errorMessage", "placeholder"]);
    return (_jsxs(StyledTextareaWrapper, { children: [label && (_jsx(StyledLabel, __assign({ htmlFor: id, disabled: disabled }, { children: label }), void 0)),
            _jsx(StyledTextarea, __assign({ id: id, "data-testid": 'textarea-field', "aria-label": !!label ? label : placeholder, placeholder: placeholder, errorMessage: errorMessage, disabled: disabled }, props), void 0),
            !!errorMessage && (_jsx(StyledTextareaError, { children: errorMessage }, void 0))] }, void 0));
};
Textarea.defaultProps = {
    id: '',
    className: '',
    style: {},
    name: '',
    rows: 5,
    disabled: false,
    value: '',
    placeholder: '',
    errorMessage: '',
};
