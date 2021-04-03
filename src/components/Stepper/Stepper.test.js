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
import { ORIENTATION } from '../../constants';
import { Stepper } from './Stepper';
describe('Stepper', function () {
    var defaultProps = {
        stepsMetadata: [
            {
                content: _jsx("p", { children: "Step 1 content" }, void 0),
            },
            {
                content: _jsx("p", { children: "Step 2 content" }, void 0),
            },
            {
                content: _jsx("p", { children: "Step 3 content" }, void 0),
            },
        ],
        onSubmit: function () { return null; },
    };
    test('should render without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Stepper, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should render step 1 content by default', function () {
        var getByText = render(_jsx(Stepper, __assign({}, defaultProps), void 0)).getByText;
        getByText(/Step 1/i);
        !getByText(/Step 2/i);
        !getByText(/Step 3/i);
    });
    test('should render `next` button but not `prev` button when rendering', function () {
        var queryByTestId = render(_jsx(Stepper, __assign({}, defaultProps), void 0)).queryByTestId;
        expect(queryByTestId('next-button')).toBeInTheDocument();
        expect(queryByTestId('prev-button')).not.toBeInTheDocument();
    });
    test('should render step 2 content on `next` button click', function () {
        var _a = render(_jsx(Stepper, __assign({}, defaultProps), void 0)), getByText = _a.getByText, getByTestId = _a.getByTestId;
        var nextButton = getByTestId('next-button');
        nextButton && fireEvent.click(nextButton);
        getByText(/Step 2/i);
        !getByText(/Step 1/i);
        !getByText(/Step 3/i);
    });
    test('should render step 1 content after `next` button click and `prev`button click', function () {
        var _a = render(_jsx(Stepper, __assign({}, defaultProps), void 0)), getByText = _a.getByText, getByTestId = _a.getByTestId;
        var nextButton = getByTestId('next-button');
        nextButton && fireEvent.click(nextButton);
        var prevButton = getByTestId('prev-button');
        prevButton && fireEvent.click(prevButton);
        getByText(/Step 1/i);
        !getByText(/Step 2/i);
        !getByText(/Step 3/i);
    });
    test('should call `onSubmit` on `submit` click', function () {
        var onSubmitMock = jest.fn();
        var getByTestId = render(_jsx(Stepper, __assign({}, defaultProps, { onSubmit: onSubmitMock }), void 0)).getByTestId;
        var nextButton = getByTestId('next-button');
        nextButton && fireEvent.click(nextButton);
        nextButton && fireEvent.click(nextButton);
        nextButton && fireEvent.click(nextButton);
        expect(onSubmitMock).toBeCalled();
    });
    test('should have default styles if orientation= landscape', function () {
        var _a = render(_jsx(Stepper, __assign({}, defaultProps), void 0)), firstChild = _a.container.firstChild, getByLabelText = _a.getByLabelText;
        var stepperIndicator = getByLabelText('progress');
        var stepperStyle = firstChild && window.getComputedStyle(firstChild);
        var stepperIndicatorStyle = window.getComputedStyle(stepperIndicator);
        expect(stepperStyle === null || stepperStyle === void 0 ? void 0 : stepperStyle.flexDirection).toBe('column');
        expect(stepperIndicatorStyle.flexDirection).toBe('');
    });
    test('should have `isVertical` styles if orientation = vertical', function () {
        var _a = render(_jsx(Stepper, __assign({}, defaultProps, { orientation: ORIENTATION.VERTICAL }), void 0)), firstChild = _a.container.firstChild, getByLabelText = _a.getByLabelText;
        var stepperIndicator = getByLabelText('progress');
        var stepperStyle = firstChild && window.getComputedStyle(firstChild);
        var stepperIndicatorStyle = window.getComputedStyle(stepperIndicator);
        stepperStyle && expect(stepperStyle.flexDirection).toBe('row');
        expect(stepperIndicatorStyle.flexDirection).toBe('column');
    });
});
