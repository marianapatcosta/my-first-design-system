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
import { Button } from './Button';
import { Success } from '../../assets/icons';
import { colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';
describe('Button', function () {
    var defaultProps = {
        label: 'Button',
        onClick: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Button, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display label', function () {
        var container = render(_jsx(Button, __assign({}, defaultProps), void 0)).container;
        getByText(container, 'Button');
    });
    test('should handle click events', function () {
        var onClickMock = jest.fn();
        var firstChild = render(_jsx(Button, __assign({}, defaultProps, { onClick: onClickMock }), void 0)).container.firstChild;
        firstChild && fireEvent.click(firstChild);
        expect(onClickMock).toBeCalled();
    });
    /*   test('should return null on click if onClick prop is not passed', () => {
      const result = Button.defaultProps?.onClick && Button.defaultProps.onClick();
      expect(result).toBeNull();
    }); */
    describe('Primary button', function () {
        test('should be rendered', function () {
            var getByRole = render(_jsx(Button, __assign({}, defaultProps, { primary: true }), void 0)).getByRole;
            var button = getByRole('button');
            var style = window.getComputedStyle(button);
            expect(style.backgroundColor).toBe(hexToRGB(colors.highlight));
        });
    });
    describe('Full length button', function () {
        test('should be rendered', function () {
            var getByRole = render(_jsx(Button, __assign({}, defaultProps, { isFullLength: true }), void 0)).getByRole;
            var button = getByRole('button');
            var style = window.getComputedStyle(button);
            expect(style.maxWidth).toBe('100%');
        });
    });
    describe('Button with icon', function () {
        test('should render icon if icon prop is passed', function () {
            var getByTestId = render(_jsx(Button, __assign({}, defaultProps, { icon: Success }), void 0)).getByTestId;
            var icon = getByTestId('button-icon');
            expect(icon).toBeTruthy();
            expect(icon).toHaveAttribute('src', Success);
        });
    });
    describe('Disabled Button', function () {
        test('should display text', function () {
            var container = render(_jsx(Button, __assign({}, defaultProps, { disabled: true }), void 0)).container;
            getByText(container, 'Button');
        });
        test('should be disabled', function () {
            var firstChild = render(_jsx(Button, __assign({}, defaultProps, { disabled: true }), void 0)).container.firstChild;
            // expect(firstChild).toBeDisabled();
            expect(firstChild).toHaveAttribute('disabled');
        });
        test('should not handle click events', function () {
            var onClickMock = jest.fn();
            var firstChild = render(_jsx(Button, __assign({}, defaultProps, { disabled: true, onClick: onClickMock }), void 0)).container.firstChild;
            // fireEvent.click(component);
            firstChild && fireEvent.click(firstChild);
            expect(onClickMock).not.toBeCalled();
        });
    });
});
