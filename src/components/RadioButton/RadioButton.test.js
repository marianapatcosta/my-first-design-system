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
import { RadioButton } from './RadioButton';
describe('RadioButton', function () {
    var defaultProps = {
        label: 'option 1',
        checked: false,
        value: '',
        onChange: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(RadioButton, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label', function () {
        var getByText = render(_jsx(RadioButton, __assign({}, defaultProps), void 0)).getByText;
        getByText('option 1');
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByLabelText = render(_jsx(RadioButton, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByLabelText;
        var radioButton = getByLabelText(/option 1/i);
        fireEvent.click(radioButton);
        expect(onChangeMock).toBeCalled();
    });
    test('should return null on change if onChange prop is not passed', function () {
        var _a;
        var result = ((_a = RadioButton.defaultProps) === null || _a === void 0 ? void 0 : _a.onChange) && RadioButton.defaultProps.onChange();
        expect(result).toBeNull();
    });
    describe('Disabled RadioButton', function () {
        test('should display label', function () {
            var getByText = render(_jsx(RadioButton, __assign({}, defaultProps, { disabled: true }), void 0)).getByText;
            getByText('option 1');
        });
        test('should be disabled', function () {
            var getByTestId = render(_jsx(RadioButton, __assign({}, defaultProps, { disabled: true }), void 0)).getByTestId;
            var radioButton = getByTestId('radio-button');
            expect(radioButton).toHaveAttribute('disabled');
        });
    });
});
