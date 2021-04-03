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
import { ShowMore } from './ShowMore';
describe('ShowMore', function () {
    var defaultProps = {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n  Donec vitae mollis velit. Vestibulum lacinia nisi vitae lorem sollicitudin, vel ultricies enim suscipit. \n  Etiam vel sodales dolor. Nunc iaculis quis arcu faucibus tincidunt. Maecenas blandit dapibus porttitor. \n  Quisque sed mauris elit. Ut placerat, augue ut blandit ultricies, nunc nulla vehicula mi, in vehicula urna lectus nec nibh. \n  Aenean quis risus imperdiet, bibendum mauris vitae, consequat tortor. Donec aliquam ante vel turpis fringilla facilisis. \n  Integer varius non lacus id ultrices. In eleifend dolor ante, congue placerat elit maximus eget. Duis varius ligula erat, et varius neque euismod\n   ac. In vitae posuere nisl. Sed non justo tortor. Integer risus est, feugiat at ultrices vitae, pretium in est.",
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(ShowMore, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display the first part of the content but not the last part', function () {
        var getByText = render(_jsx(ShowMore, __assign({}, defaultProps), void 0)).getByText;
        var text = getByText(/Lorem ipsum dolor/i);
        var style = window.getComputedStyle(text);
        expect(style.maxHeight).not.toBe('inherit');
    });
    test('should display the all content on showMore click', function () {
        var _a = render(_jsx(ShowMore, __assign({}, defaultProps), void 0)), getByText = _a.getByText, queryByText = _a.queryByText;
        var showMoreLink = getByText(/show more/i);
        showMoreLink && fireEvent.click(showMoreLink);
        expect(queryByText(/Lorem ipsum dolor/i)).toBeTruthy();
        expect(queryByText(/pretium in est/i)).toBeTruthy();
    });
    test('render `show less`label after click', function () {
        var getByText = render(_jsx(ShowMore, __assign({}, defaultProps), void 0)).getByText;
        var showMoreLink = getByText(/show more/i);
        showMoreLink && fireEvent.click(showMoreLink);
        getByText(/show less/i);
    });
});
