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
import { render, getByText, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';
describe('Checkbox', function () {
    var defaultProps = {
        label: 'Checkbox',
        checked: false,
        onChange: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Checkbox, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label', function () {
        var container = render(_jsx(Checkbox, __assign({}, defaultProps), void 0)).container;
        getByText(container, 'Checkbox');
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByLabelText = render(_jsx(Checkbox, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByLabelText;
        var checkbox = getByLabelText(/Checkbox/i);
        fireEvent.click(checkbox);
        expect(onChangeMock).toBeCalled();
        /* expect(checkbox).not.toBeChecked();
        expect(checkbox.checked).toBeTruthy();
        fireEvent.click(checkbox)
        expect(checkbox.checked).toBeFalsy(); */
    });
    test('should return null on change if onChange prop is not passed', function () {
        var _a;
        var result = ((_a = Checkbox.defaultProps) === null || _a === void 0 ? void 0 : _a.onChange) && Checkbox.defaultProps.onChange();
        expect(result).toBeNull();
    });
    describe('Disabled Checkbox', function () {
        test('should display label', function () {
            var container = render(_jsx(Checkbox, __assign({}, defaultProps, { disabled: true }), void 0)).container;
            getByText(container, 'Checkbox');
        });
        test('should be disabled', function () {
            var firstChild = render(_jsx(Checkbox, __assign({}, defaultProps, { disabled: true }), void 0)).container.firstChild;
            expect(firstChild).toHaveAttribute('disabled');
        });
        test('should not handle change events', function () {
            var onChangeMock = jest.fn();
            var firstChild = render(_jsx(Checkbox, __assign({}, defaultProps, { disabled: true, onChange: onChangeMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChangeMock).not.toBeCalled();
        });
    });
});
