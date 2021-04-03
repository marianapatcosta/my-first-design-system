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
import { Step } from './Step';
describe('Step', function () {
    var defaultProps = { content: _jsx("div", { children: "Step " }, void 0), isActive: true };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Step, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display content', function () {
        var getByText = render(_jsx(Step, __assign({}, defaultProps), void 0)).getByText;
        getByText('Step');
    });
    test('should not display content if isActive is false', function () {
        var getByText = render(_jsx(Step, __assign({}, defaultProps, { isActive: false }), void 0)).getByText;
        !getByText('Step');
    });
});
