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
import { Tick } from '../../assets/icons';
import { StyledCheckbox, StyledCheckboxToggle, StyledCheckboxInput, StyledCheckboxToggleTick, } from './Checkbox.style';
export var Checkbox = function (_a) {
    var checked = _a.checked, name = _a.name, disabled = _a.disabled, label = _a.label, className = _a.className, onChange = _a.onChange, props = __rest(_a, ["checked", "name", "disabled", "label", "className", "onChange"]);
    return (_jsxs(StyledCheckbox, __assign({ className: className, disabled: disabled }, props, { children: [_jsx(StyledCheckboxInput, { type: 'checkbox', name: name || label, checked: checked, disabled: disabled, onChange: onChange }, void 0),
            _jsx(StyledCheckboxToggle, __assign({ disabled: disabled }, { children: checked && _jsx(StyledCheckboxToggleTick, { alt: 'checkbox-tick', src: Tick }, void 0) }), void 0), label] }), void 0));
};
Checkbox.defaultProps = {
    id: '',
    className: '',
    style: {},
    name: '',
    label: '',
    checked: false,
    disabled: false,
    onChange: function () { return null; },
};
