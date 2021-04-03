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
import { useState, } from 'react';
import { Chevron } from '../../assets/icons';
import { KEYBOARD_KEY } from '../../constants';
import { StyledDropdown, StyledDropdownContainer, StyledDropdownLabel, StyledDropdownHeader, StyledDropdownOption, } from './Dropdown.style';
export var Dropdown = function (_a) {
    var className = _a.className, name = _a.name, placeholder = _a.placeholder, options = _a.options, selectedOption = _a.selectedOption, label = _a.label, disabled = _a.disabled, optionKey = _a.optionKey, onChooseOption = _a.onChooseOption;
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var handleOptionChange = function (event) {
        event.stopPropagation();
        onChooseOption(event);
    };
    var handleKeyEvent = function (event) {
        event.stopPropagation();
        // keyUp
        if (event.key === KEYBOARD_KEY.ESCAPE_KEY) {
            return setIsExpanded(false);
        }
        // keyDown
        if (event.key === KEYBOARD_KEY.ENTER_KEY) {
            return setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; });
        }
        // keyUp
        if (event.key === KEYBOARD_KEY.SPACE_KEY) {
            return setIsExpanded(true);
        }
    };
    return (_jsxs(StyledDropdownContainer, __assign({ className: className }, { children: [!!label && (_jsx(StyledDropdownLabel, __assign({ htmlFor: name || label, disabled: disabled }, { children: label }), void 0)),
            _jsxs(StyledDropdown, __assign({ isExpanded: isExpanded, disabled: disabled }, { children: [_jsx("img", { src: Chevron, alt: 'chevron-icon' }, void 0),
                    _jsxs(StyledDropdownHeader, __assign({ "aria-label": "Select " + (name || label), name: name || label, disabled: disabled, value: selectedOption, onChange: handleOptionChange, onClick: function () { return setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; }); }, onBlur: function () { return setIsExpanded(false); }, onKeyUp: handleKeyEvent, onKeyDown: handleKeyEvent }, { children: [!!placeholder && (_jsx(StyledDropdownOption, __assign({ value: '', hidden: true }, { children: placeholder }), void 0)),
                            options.map(function (option, index) {
                                var optionValue = optionKey ? option[optionKey] : option;
                                return (_jsx(StyledDropdownOption, __assign({ "data-testid": 'select-option', value: optionValue }, { children: optionValue }), "dropdown-option-" + (index + Math.random())));
                            })] }), void 0)] }), void 0)] }), void 0));
};
Dropdown.defaultProps = {
    id: '',
    className: '',
    style: {},
    name: '',
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
    selectedOption: null,
    optionKey: '',
    onChooseOption: function () { return null; },
};
