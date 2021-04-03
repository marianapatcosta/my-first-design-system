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
import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';
describe('Tabs', function () {
    var defaultProps = {
        tabsMetadata: [
            { label: 'Tab 1', content: _jsx("div", { children: "Tab 1 content" }, void 0) },
            { label: 'Tab 2', content: _jsx("div", { children: "Tab 2 content" }, void 0) },
        ],
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Tabs, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display Tab 1 content by default', function () {
        var queryByText = render(_jsx(Tabs, __assign({}, defaultProps), void 0)).queryByText;
        expect(queryByText('Tab 1 content')).toBeTruthy();
        expect(queryByText('Tab 2 content')).toBeNull();
    });
    test('should display Tab 2 content when Tab 2 is clicked', function () {
        var queryByText = render(_jsx(Tabs, __assign({}, defaultProps), void 0)).queryByText;
        var tab2 = queryByText('Tab 2');
        tab2 && fireEvent.click(tab2);
        expect(queryByText('Tab 2 content')).toBeTruthy();
        expect(queryByText('Tab 1 content')).toBeNull();
    });
});
