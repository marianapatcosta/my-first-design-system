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
import { ToggleSwitch } from './ToggleSwitch';
describe('ToggleSwitch', function () {
    var defaultProps = {
        checked: false,
        leftLabel: 'off',
        rightLabel: 'on',
        onChange: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(ToggleSwitch, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label, if label prop is passed', function () {
        var container = render(_jsx(ToggleSwitch, __assign({}, defaultProps, { label: 'Toggle Switch' }), void 0)).container;
        getByText(container, 'Toggle Switch');
    });
    test('should display leftLabel, if checked', function () {
        var queryByText = render(_jsx(ToggleSwitch, __assign({}, defaultProps, { checked: true }), void 0)).queryByText;
        expect(queryByText('off')).toBeTruthy();
        expect(queryByText('on')).toBeNull();
    });
    test('should display rightLabel, if not checked', function () {
        var queryByText = render(_jsx(ToggleSwitch, __assign({}, defaultProps), void 0)).queryByText;
        expect(queryByText('on')).toBeTruthy();
        expect(queryByText('off')).toBeNull();
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByTestId = render(_jsx(ToggleSwitch, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByTestId;
        var toggleSwitch = getByTestId('toggle-slider');
        fireEvent.click(toggleSwitch);
        expect(onChangeMock).toBeCalled();
    });
    test('should return null on change if onChange prop is not passed', function () {
        var _a;
        var result = ((_a = ToggleSwitch.defaultProps) === null || _a === void 0 ? void 0 : _a.onChange) &&
            ToggleSwitch.defaultProps.onChange();
        expect(result).toBeNull();
    });
    describe('Disabled ToggleSwitch', function () {
        test('should be disabled', function () {
            var firstChild = render(_jsx(ToggleSwitch, __assign({}, defaultProps, { disabled: true }), void 0)).container.firstChild;
            expect(firstChild).toHaveAttribute('disabled');
        });
        test('should not handle change events', function () {
            var onChangeMock = jest.fn();
            var firstChild = render(_jsx(ToggleSwitch, __assign({}, defaultProps, { disabled: true, onChange: onChangeMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChangeMock).not.toBeCalled();
        });
    });
});
