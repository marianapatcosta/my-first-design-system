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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledToggleSwitch, StyledToggleSwitchLabel, StyledToggleSwitchSlider, StyledToggleInput, } from './ToggleSwitch.style';
export var ToggleSwitch = function (_a) {
    var className = _a.className, style = _a.style, name = _a.name, label = _a.label, leftLabel = _a.leftLabel, rightLabel = _a.rightLabel, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange;
    return (_jsxs(StyledToggleSwitch, __assign({ className: className, style: style, disabled: disabled }, { children: [_jsx(StyledToggleInput, { type: 'checkbox', name: name || label, checked: checked, disabled: disabled, onChange: onChange }, void 0), !!label && label, _jsxs(StyledToggleSwitchSlider, __assign({ checked: checked, disabled: disabled, label: label, "data-testid": 'toggle-slider' }, { children: [_jsx(StyledToggleSwitchLabel, __assign({ disabled: disabled }, { children: checked && leftLabel }), void 0),
                    _jsx(StyledToggleSwitchLabel, { children: !checked && rightLabel }, void 0)] }), void 0)] }), void 0));
};
ToggleSwitch.defaultProps = {
    id: '',
    className: '',
    style: {},
    name: '',
    label: '',
    leftLabel: '',
    rightLabel: '',
    checked: false,
    disabled: false,
    onChange: function () { return null; },
};
