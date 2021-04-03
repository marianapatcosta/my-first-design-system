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
import { Image } from './Image';
import Test from '../../assets/images/test.jpg';
describe('Image', function () {
    var defaultProps = { src: Test };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Image, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should render image after onLoad call', function () {
        var getByTestId = render(_jsx(Image, __assign({}, defaultProps), void 0)).getByTestId;
        var img = getByTestId('image');
        var imgPlaceholder = getByTestId('image-placeholder');
        fireEvent.load(img);
        expect(img).toBeInTheDocument();
        expect(imgPlaceholder).not.toBeInTheDocument();
    });
    test('should not call onClick prop nor zoom image in on click if isZoomable prop nor isCLickable props are passed ', function () {
        var onClickMock = jest.fn();
        var getByTestId = render(_jsx(Image, __assign({}, defaultProps), void 0)).getByTestId;
        var img = getByTestId('image');
        fireEvent.load(img);
        fireEvent.click(img);
        var style = window.getComputedStyle(img);
        expect(style.cursor).toBe('default');
        expect(onClickMock).not.toBeCalled();
    });
    test('should not call onClick prop on click if isZoomable prop is passed ', function () {
        var onClickMock = jest.fn();
        var getByTestId = render(_jsx(Image, __assign({}, defaultProps, { isZoomable: true, onClick: onClickMock }), void 0)).getByTestId;
        var img = getByTestId('image');
        fireEvent.load(img);
        fireEvent.click(img);
        expect(onClickMock).not.toBeCalled();
    });
    test('should zoom image in on click if isZoomable prop is passed ', function () {
        var getByTestId = render(_jsx(Image, __assign({}, defaultProps, { isZoomable: true }), void 0)).getByTestId;
        var img = getByTestId('image');
        fireEvent.load(img);
        fireEvent.click(img);
        var style = window.getComputedStyle(img);
        expect(style.cursor).toBe('zoom-out');
    });
    test('should handle click events if isClickable prop is passed ', function () {
        var onClickMock = jest.fn();
        var getByTestId = render(_jsx(Image, __assign({}, defaultProps, { isClickable: true, onClick: onClickMock }), void 0)).getByTestId;
        var img = getByTestId('image');
        fireEvent.load(img);
        fireEvent.click(img);
        expect(onClickMock).toBeCalled();
    });
});
