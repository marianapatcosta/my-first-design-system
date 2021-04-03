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
import { useEffect, useRef, useState, } from 'react';
import { Chevron } from '../../assets/icons';
import { KEYBOARD_KEY } from '../../constants';
import { Checkbox } from '../Checkbox/Checkbox';
import { StyledDropdownMultiselection, StyledDropdownMultiselectionHeader, StyledDropdownMultiselectionArrow, StyledDropdownMultiselectionOptions, StyledDropdownMultiselectionOption, } from './DropdownMultiselection.style';
export var DropdownMultiselection = function (_a) {
    var placeholder = _a.placeholder, options = _a.options, optionKey = _a.optionKey, disabled = _a.disabled, isSingleSelection = _a.isSingleSelection, selectedOptions = _a.selectedOptions, selectedOption = _a.selectedOption, onOptionClick = _a.onOptionClick, props = __rest(_a, ["placeholder", "options", "optionKey", "disabled", "isSingleSelection", "selectedOptions", "selectedOption", "onOptionClick"]);
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var dropdownRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            var element = event.target;
            if (dropdownRef.current && !(dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current.contains(element))) {
                event.preventDefault();
                setIsExpanded(false);
            }
        };
        document.addEventListener('mouseup', handleClickOutside);
        return function () { return document.removeEventListener('mouseup', handleClickOutside); };
    }, [dropdownRef]);
    var isOptionSelected = function (option) {
        if (!!(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.length)) {
            var selectedOptionsLabels = optionKey
                ? selectedOptions.map(function (option) { return option[optionKey]; })
                : selectedOptions;
            return selectedOptionsLabels === null || selectedOptionsLabels === void 0 ? void 0 : selectedOptionsLabels.includes(optionKey ? option[optionKey] : option);
        }
        return optionKey
            ? option[optionKey] === selectedOption[optionKey]
            : selectedOption === option;
    };
    var toggleDropdownExpansion = function () {
        !disabled && setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; });
    };
    var handleKeyEvent = function (event) {
        event.stopPropagation();
        if (disabled)
            return;
        if (event.key === KEYBOARD_KEY.ESCAPE_KEY) {
            return setIsExpanded(false);
        }
        if (event.key === KEYBOARD_KEY.ENTER_KEY) {
            return setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; });
        }
        if (event.key === KEYBOARD_KEY.SPACE_KEY) {
            return setIsExpanded(true);
        }
    };
    var getPlaceholder = function () {
        if (!isSingleSelection)
            return placeholder;
        return optionKey ? selectedOption[optionKey] : selectedOption;
    };
    return (_jsxs(StyledDropdownMultiselection, __assign({}, props, { ref: dropdownRef }, { children: [_jsxs(StyledDropdownMultiselectionHeader, __assign({ disabled: disabled, role: 'button', tabIndex: disabled ? -1 : 0, "aria-label": "Select " + placeholder, "aria-expanded": isExpanded, onClick: toggleDropdownExpansion, onKeyDown: handleKeyEvent }, { children: [_jsx("div", { children: getPlaceholder() || placeholder }, void 0),
                    _jsx(StyledDropdownMultiselectionArrow, { isExpanded: isExpanded, alt: 'chevron-icon', src: Chevron }, void 0)] }), void 0),
            isExpanded && (_jsx(StyledDropdownMultiselectionOptions, __assign({ "data-testid": 'dropdown-options' }, { children: options.map(function (option, index) { return (_jsx(StyledDropdownMultiselectionOption, { children: _jsx(Checkbox, { disabled: disabled, onChange: function () { return onOptionClick(option); }, checked: isOptionSelected(option), label: optionKey ? option[optionKey] : option }, void 0) }, index * Math.random())); }) }), void 0))] }), void 0));
};
DropdownMultiselection.defaultProps = {
    id: '',
    className: '',
    style: {},
    placeholder: '',
    disabled: false,
    isSingleSelection: false,
    options: [],
    selectedOptions: [],
    selectedOption: '',
    optionKey: '',
};
