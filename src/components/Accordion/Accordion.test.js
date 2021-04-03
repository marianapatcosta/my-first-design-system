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
import { Accordion } from './Accordion';
describe('Accordion', function () {
    var defaultProps = {
        title: 'Accordion title',
        content: 'Accordion content',
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Accordion, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display title', function () {
        var getByText = render(_jsx(Accordion, __assign({}, defaultProps), void 0)).getByText;
        getByText(/title/i);
    });
    test('should show content on click', function () {
        var getByText = render(_jsx(Accordion, __assign({}, defaultProps), void 0)).getByText;
        var accordionTitle = getByText(/title/i);
        var accordionContent = getByText(/content/i);
        fireEvent.click(accordionTitle);
        expect(accordionContent).toBeVisible();
    });
    test('should set isExpanded to false if click outside of accordion', function () {
        var _a = render(_jsx(Accordion, __assign({}, defaultProps), void 0)), getByText = _a.getByText, getByAltText = _a.getByAltText;
        var accordion = getByText(/title/i);
        fireEvent.click(accordion);
        var chevron = getByAltText('chevron-icon');
        fireEvent.mouseUp(document);
        var style = window.getComputedStyle(chevron);
        expect(style.transform).toBe('');
    });
    describe('Disabled Accordion', function () {
        test('should display title', function () {
            var getByText = render(_jsx(Accordion, __assign({}, defaultProps, { disabled: true }), void 0)).getByText;
            getByText(/title/i);
        });
        test('should be disabled', function () {
            var getByText = render(_jsx(Accordion, __assign({}, defaultProps, { disabled: true }), void 0)).getByText;
            var accordionTitle = getByText(/title/i);
            expect(accordionTitle).toHaveAttribute('disabled');
        });
        test('should not handle click events', function () {
            var getByText = render(_jsx(Accordion, __assign({}, defaultProps, { disabled: true }), void 0)).getByText;
            var accordionTitle = getByText(/title/i);
            var accordionContent = getByText(/content/i);
            fireEvent.click(accordionTitle);
            var titleStyle = window.getComputedStyle(accordionTitle);
            var contentStyle = window.getComputedStyle(accordionContent);
            expect(titleStyle.pointerEvents).toBe('none');
            expect(contentStyle.visibility).toBe('hidden');
        });
    });
});
