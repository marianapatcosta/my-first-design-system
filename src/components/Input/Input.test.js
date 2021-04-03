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
import { Input } from './Input';
import { Tick as Success } from '../../assets/icons';
describe('Input', function () {
    var defaultProps = { label: 'Input', value: 'Hello', onChange: function () { return null; } };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Input, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByTestId = render(_jsx(Input, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByTestId;
        var input = getByTestId('input-field');
        fireEvent.click(input, { target: { value: 'bye' } });
        expect(input.value).toBe('bye');
    });
    test('should handle blur events', function () {
        var onBlurMock = jest.fn();
        var getByTestId = render(_jsx(Input, __assign({}, defaultProps, { onBlur: onBlurMock }), void 0)).getByTestId;
        var input = getByTestId('input-field');
        fireEvent.blur(input);
        expect(onBlurMock).toBeCalled();
    });
    describe('Disabled Input', function () {
        test('should not handle change events', function () {
            var onChangeMock = jest.fn();
            var firstChild = render(_jsx(Input, __assign({}, defaultProps, { disabled: true, onChange: onChangeMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChangeMock).not.toBeCalled();
        });
    });
    describe('Input with icon', function () {
        test('should render icon if icon prop is passed', function () {
            var getByTestId = render(_jsx(Input, __assign({}, defaultProps, { icon: Success }), void 0)).getByTestId;
            var icon = getByTestId('input-icon');
            expect(icon).toBeTruthy();
            expect(icon).toHaveAttribute('src', Success);
        });
        test('should handle click events', function () {
            var onIconClickMock = jest.fn();
            var getByTestId = render(_jsx(Input, __assign({}, defaultProps, { icon: Success, onIconClick: onIconClickMock }), void 0)).getByTestId;
            var icon = getByTestId('input-icon');
            icon && fireEvent.click(icon);
            expect(onIconClickMock).toBeCalled();
        });
    });
    describe('Input with error', function () {
        test('should render error message', function () {
            var getByText = render(_jsx(Input, __assign({}, defaultProps, { errorMessage: 'There is an error' }), void 0)).getByText;
            var input = getByText(/There is an error/i);
            expect(input).toBeTruthy();
        });
    });
});
