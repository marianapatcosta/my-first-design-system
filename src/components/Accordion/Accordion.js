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
import { isEventValid } from '../../utils/utils';
import { StyledAccordion, StyledAccordionTitle, StyledAccordionArrow, StyledAccordionContent, } from './Accordion.style';
export var Accordion = function (_a) {
    var title = _a.title, content = _a.content, disabled = _a.disabled, props = __rest(_a, ["title", "content", "disabled"]);
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var accordionRef = useRef(null);
    useEffect(function () {
        var handleClickOutside = function (event) {
            var element = event.target;
            if (accordionRef.current && !(accordionRef === null || accordionRef === void 0 ? void 0 : accordionRef.current.contains(element))) {
                event.preventDefault();
                setIsExpanded(false);
            }
        };
        document.addEventListener('mouseup', handleClickOutside);
        return function () { return document.removeEventListener('mouseup', handleClickOutside); };
    }, [accordionRef]);
    var toggleIsExpanded = function (event) {
        return isEventValid(event) &&
            !disabled &&
            setIsExpanded(function (prevIsExpanded) { return !prevIsExpanded; });
    };
    return (_jsxs(StyledAccordion, __assign({}, props, { ref: accordionRef }, { children: [_jsxs(StyledAccordionTitle, __assign({ role: 'button', tabIndex: disabled ? -1 : 0, "aria-disabled": disabled, "aria-expanded": isExpanded, onClick: toggleIsExpanded, onKeyDown: toggleIsExpanded, disabled: disabled, isExpanded: isExpanded }, { children: [title, _jsx(StyledAccordionArrow, { src: Chevron, alt: 'chevron-icon', isExpanded: isExpanded }, void 0)] }), void 0),
            _jsx(StyledAccordionContent, __assign({ isExpanded: isExpanded }, { children: content }), void 0)] }), void 0));
};
Accordion.defaultProps = {
    id: '',
    className: '',
    style: {},
    disabled: false,
    title: '',
    content: '',
};
