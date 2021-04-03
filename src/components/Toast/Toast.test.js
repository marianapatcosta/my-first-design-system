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
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Toast } from './Toast';
describe('Toast', function () {
    var defaultProps = { message: 'info toast', onClear: function () { return null; } };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Toast, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display message', function () {
        var getByText = render(_jsx(Toast, __assign({}, defaultProps), void 0)).getByText;
        getByText(/Toast/i);
    });
    test('should handle onClear events when message is truthy', function () {
        jest.useFakeTimers();
        var onClearMock = jest.fn();
        var container = render(_jsx(Toast, __assign({}, defaultProps, { onClear: onClearMock }), void 0)).container;
        act(function () {
            jest.runAllTimers();
        });
        jest.useRealTimers();
        expect(onClearMock).toBeCalled();
    });
    test('should not handle onClear events when message is falsy', function () {
        jest.useFakeTimers();
        var onClearMock = jest.fn();
        var container = render(_jsx(Toast, __assign({}, defaultProps, { message: '', onClear: onClearMock }), void 0)).container;
        act(function () {
            jest.runAllTimers();
        });
        jest.useRealTimers();
        expect(onClearMock).not.toBeCalled();
    });
    test('should return null on change if onClear prop is not passed', function () {
        var _a;
        var result = ((_a = Toast.defaultProps) === null || _a === void 0 ? void 0 : _a.onClear) && Toast.defaultProps.onClear();
        expect(result).toBeNull();
    });
});
