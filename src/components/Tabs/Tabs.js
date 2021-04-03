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
import { useState } from 'react';
import { Tab } from '../Tab/Tab';
import { StyledTabs, StyledTabsListWrapper, StyledTabsList, StyledTabsContent, StyledTabsSpacer, } from './Tabs.style';
export var Tabs = function (_a) {
    var disabled = _a.disabled, tabsPurpose = _a.tabsPurpose, tabsMetadata = _a.tabsMetadata, className = _a.className, props = __rest(_a, ["disabled", "tabsPurpose", "tabsMetadata", "className"]);
    var _b = useState(+localStorage.getItem('activeTab') || 0), activeTabIndex = _b[0], setActiveTabIndex = _b[1];
    var onClickTab = function (tabIndex) {
        setActiveTabIndex(tabIndex);
        localStorage.setItem('activeTab', '' + tabIndex);
    };
    return (_jsxs(StyledTabs, __assign({ className: className }, props, { children: [_jsx(StyledTabsListWrapper, { children: _jsx(StyledTabsList, __assign({ role: 'tablist', "aria-label": "Select " + tabsPurpose }, { children: tabsMetadata.map(function (_a, index) {
                        var label = _a.label;
                        return (_jsx(Tab, { label: label, disabled: disabled, isActive: index === activeTabIndex, onClick: function () { return onClickTab(index); } }, "tab-" + (index + Math.random())));
                    }) }), void 0) }, void 0),
            _jsxs(StyledTabsContent, __assign({ role: 'tabpanel' }, { children: [_jsx(StyledTabsSpacer, {}, void 0), tabsMetadata[activeTabIndex].content] }), void 0)] }), void 0));
};
Tabs.defaultProps = {
    id: '',
    className: '',
    style: {},
    tabsPurpose: '',
    tabsMetadata: [],
    disabled: false,
};
