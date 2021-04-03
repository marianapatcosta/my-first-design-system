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
import { render, getByText } from '@testing-library/react';
import { Card } from './Card';
describe('Card', function () {
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Card, {}, void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('renders children ', function () {
        var container = render(_jsx(Card, { children: _jsx("div", __assign({ id: 'card-child' }, { children: "Card Children" }), void 0) }, void 0)).container;
        getByText(container, 'Card Children');
    });
});
