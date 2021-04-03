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
import { Close, MagnifyingGlass } from '../../assets/icons';
import { isEventValid } from '../../utils/utils';
import { StyledSearchWrapper, StyledLabel, StyledSearchContainer, StyledSearch, StyledSearchIconWrapper, StyledSearchIcon, } from './Search.style';
export var Search = function (_a) {
    var className = _a.className, id = _a.id, label = _a.label, value = _a.value, disabled = _a.disabled, placeholder = _a.placeholder, isExpandable = _a.isExpandable, onClear = _a.onClear, props = __rest(_a, ["className", "id", "label", "value", "disabled", "placeholder", "isExpandable", "onClear"]);
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    useEffect(function () { return setIsExpanded(isExpandable ? false : true); }, [isExpandable]);
    var toggleIsExpanded = function () {
        return isExpandable && setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; });
    };
    var handleClear = function (event) {
        if (isExpandable)
            setIsExpanded(false);
        onClear(event);
    };
    var handleKeyDown = function (event) {
        return isEventValid(event) && isExpandable && toggleIsExpanded();
    };
    return (_jsxs(StyledSearchWrapper, __assign({ className: className }, { children: [label && (_jsx(StyledLabel, __assign({ htmlFor: id, disabled: disabled }, { children: label }), void 0)),
            _jsxs(StyledSearchContainer, __assign({ isExpanded: !isExpandable ? true : isExpanded }, { children: [_jsx(StyledSearch, __assign({ "data-testid": 'search-field', id: id, "aria-label": !!label ? label : placeholder, type: 'search', placeholder: isExpanded ? placeholder : '', disabled: disabled, isExpanded: !isExpandable ? true : isExpanded, value: isExpanded ? value : '', onBlur: function () { return setIsExpanded(false); }, onKeyDown: handleKeyDown }, props), void 0),
                    _jsx(StyledSearchIconWrapper, { children: _jsx(StyledSearchIcon, { "data-testid": 'search-icon', alt: !!value && isExpanded ? 'clear-icon' : 'magnifying-glass-icon', src: !!value && isExpanded ? Close : MagnifyingGlass, isExpandable: isExpandable, hasValue: !!value, isExpanded: !isExpandable ? true : isExpanded, onClick: !value ? toggleIsExpanded : handleClear }, void 0) }, void 0)] }), void 0)] }), void 0));
};
Search.defaultProps = {
    id: '',
    className: '',
    style: {},
    label: '',
    name: '',
    maxLength: 150,
    placeholder: 'Search',
    disabled: false,
    isExpandable: false,
    value: '',
    onChange: function () { return null; },
    onClear: function () { return null; },
};
