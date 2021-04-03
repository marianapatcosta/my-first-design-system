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
import { Modal } from './Modal';
describe('Modal', function () {
    var defaultProps = {
        header: 'Modal header',
        message: 'Content',
        buttonLabel: 'ok',
        onClose: function () { return null; },
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Modal, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display content', function () {
        var getByText = render(_jsx(Modal, __assign({}, defaultProps), void 0)).getByText;
        getByText(/Content/i);
    });
    test('should handle click event and call on close on button click', function () {
        var onCloseMock = jest.fn();
        var getByText = render(_jsx(Modal, __assign({}, defaultProps, { onClose: onCloseMock }), void 0)).getByText;
        var button = getByText('ok');
        button && fireEvent.click(button);
        expect(onCloseMock).toBeCalled();
    });
    test('should handle click event and call on close on close icon click', function () {
        var onCloseMock = jest.fn();
        var getByLabelText = render(_jsx(Modal, __assign({}, defaultProps, { onClose: onCloseMock }), void 0)).getByLabelText;
        var close = getByLabelText('close modal');
        close && fireEvent.click(close);
        expect(onCloseMock).toBeCalled();
    });
    test('should call on close if click outside of modal', function () {
        var onCloseMock = jest.fn();
        var container = render(_jsx(Modal, __assign({}, defaultProps, { onClose: onCloseMock }), void 0)).container;
        fireEvent.click(document);
        expect(onCloseMock).toBeCalled();
    });
    describe('Confirmation Modal', function () {
        test('should display confirmation button', function () {
            var getByText = render(_jsx(Modal, __assign({}, defaultProps, { isConfirmationModal: true, confirmationButtonLabel: 'confirm', onConfirm: function () { return null; } }), void 0)).getByText;
            getByText(/confirm/i);
        });
        test('should handle click event and call on confirm on confirmation button click', function () {
            var onConfirmMock = jest.fn();
            var getByText = render(_jsx(Modal, __assign({}, defaultProps, { isConfirmationModal: true, confirmationButtonLabel: 'confirm', onConfirm: onConfirmMock }), void 0)).getByText;
            var button = getByText('confirm');
            button && fireEvent.click(button);
            expect(onConfirmMock).toBeCalled();
        });
    });
});
