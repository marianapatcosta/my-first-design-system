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
import { StyledRadioButtonWrapper, StyledRadioButton, StyledRadioButtonInput, } from './RadioButton.style';
export var RadioButton = function (_a) {
    var label = _a.label, id = _a.id, disabled = _a.disabled, checked = _a.checked, props = __rest(_a, ["label", "id", "disabled", "checked"]);
    return (_jsxs(StyledRadioButtonWrapper, __assign({ "aria-checked": checked }, { children: [_jsx(StyledRadioButtonInput, __assign({ "data-testid": id || 'radio-button', type: 'radio', role: 'radio', checked: checked, disabled: disabled }, props), void 0),
            _jsx(StyledRadioButton, { disabled: disabled }, void 0), label] }), void 0));
};
RadioButton.defaultProps = {
    id: '',
    className: '',
    style: {},
    name: '',
    value: '',
    label: '',
    checked: false,
    disabled: false,
    onChange: function () { return null; },
};
