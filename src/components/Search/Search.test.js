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
import { Search } from './Search';
describe('Search', function () {
    var defaultProps = {
        label: 'Search',
        value: 'Hello',
        onChange: function () { return null; },
        onClear: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Search, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should handle change events', function () {
        var onChangeMock = jest.fn();
        var getByTestId = render(_jsx(Search, __assign({}, defaultProps, { onChange: onChangeMock }), void 0)).getByTestId;
        var input = getByTestId('search-field');
        fireEvent.click(input, { target: { value: 'bye' } });
        expect(input.value).toBe('bye');
    });
    test('should display magnifying glass icon when no value is inserted in search field', function () {
        var getByAltText = render(_jsx(Search, __assign({}, defaultProps, { value: '' }), void 0)).getByAltText;
        var magnifyingGlassIcon = getByAltText('magnifying-glass-icon');
        //   const clearIcon = getByAltText('clear icon');
        expect(magnifyingGlassIcon).toBeTruthy();
        //  expect(clearIcon).toBeFalsy();
    });
    test('should display clear icon when some value is inserted in search field', function () {
        var getByAltText = render(_jsx(Search, __assign({}, defaultProps), void 0)).getByAltText;
        var clearIcon = getByAltText('clear-icon');
        clearIcon && fireEvent.click(clearIcon);
        expect(clearIcon).toBeTruthy();
    });
    test('should clear input field after click on clear icon ', function () {
        var onClearMock = jest.fn();
        var _a = render(_jsx(Search, __assign({}, defaultProps, { onClear: onClearMock }), void 0)), getByAltText = _a.getByAltText, getByTestId = _a.getByTestId;
        var clearIcon = getByAltText('clear-icon');
        clearIcon && fireEvent.click(clearIcon);
        expect(onClearMock).toBeCalled();
    });
    describe('Disabled Search', function () {
        test('should not handle change events', function () {
            var onChangeMock = jest.fn();
            var firstChild = render(_jsx(Search, __assign({}, defaultProps, { disabled: true, onChange: onChangeMock }), void 0)).container.firstChild;
            firstChild && fireEvent.click(firstChild);
            expect(onChangeMock).not.toBeCalled();
        });
    });
});
