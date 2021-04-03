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
import { Tab } from './Tab';
describe('Tab', function () {
    var defaultProps = {
        label: 'Tab 1',
        onClick: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Tab, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should handle click events', function () {
        var onClickMock = jest.fn();
        var firstChild = render(_jsx(Tab, __assign({}, defaultProps, { onClick: onClickMock }), void 0)).container.firstChild;
        firstChild && fireEvent.click(firstChild);
        expect(onClickMock).toBeCalled();
    });
    describe('Disabled Tab', function () {
        test('should display label', function () {
            var getByText = render(_jsx(Tab, __assign({}, defaultProps, { disabled: true }), void 0)).getByText;
            getByText('Tab 1');
        });
        test('should be disabled', function () {
            var firstChild = render(_jsx(Tab, __assign({}, defaultProps, { disabled: true }), void 0)).container.firstChild;
            expect(firstChild).toHaveAttribute('disabled');
        });
        test('should not handle click events', function () {
            var onClickMock = jest.fn();
            var firstChild = render(_jsx(Tab, __assign({}, defaultProps, { disabled: true, onClick: onClickMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onClickMock).not.toBeCalled();
        });
    });
});
