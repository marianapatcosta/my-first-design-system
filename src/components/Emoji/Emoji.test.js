import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { Emoji } from './Emoji';
describe('Emoji', function () {
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Emoji, { emoji: '\uD83D\uDE03' }, void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('display label prop as aria-label', function () {
        var getByLabelText = render(_jsx(Emoji, { emoji: '\uD83D\uDE03', label: 'smiley' }, void 0)).getByLabelText;
        var emoji = getByLabelText(/smiley/i);
        expect(emoji).toBeTruthy();
    });
});
