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
import { Textarea } from './Textarea';
describe('Textarea', function () {
    var defaultProps = {
        label: 'textarea',
        value: 'Hello',
        onChange: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Textarea, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByTestId = render(_jsx(Textarea, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByTestId;
        var textarea = getByTestId('textarea-field');
        fireEvent.click(textarea, { target: { value: 'bye' } });
        expect(textarea.value).toBe('bye');
    });
    test('should handle blur events', function () {
        var onBlurMock = jest.fn();
        var getByTestId = render(_jsx(Textarea, __assign({}, defaultProps, { onBlur: onBlurMock }), void 0)).getByTestId;
        var textarea = getByTestId('textarea-field');
        fireEvent.blur(textarea);
        expect(onBlurMock).toBeCalled();
    });
    describe('Disabled Textarea', function () {
        test('should not handle change events', function () {
            var onChangeMock = jest.fn();
            var firstChild = render(_jsx(Textarea, __assign({}, defaultProps, { disabled: true, onChange: onChangeMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChangeMock).not.toBeCalled();
        });
    });
    describe('Textarea with error', function () {
        test('should render error message', function () {
            var getByText = render(_jsx(Textarea, __assign({}, defaultProps, { errorMessage: 'There is an error' }), void 0)).getByText;
            var textarea = getByText(/There is an error/i);
            expect(textarea).toBeTruthy();
        });
    });
});
