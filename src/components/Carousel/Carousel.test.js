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
import { Carousel } from './Carousel';
import Test from '../../assets/images/test.jpg';
import Test1 from '../../assets/images/test1.jpg';
import Test2 from '../../assets/images/test2.jpg';
import Test3 from '../../assets/images/test3.jpg';
import Test4 from '../../assets/images/test4.jpg';
describe('Carousel', function () {
    var defaultProps = {
        title: 'Image slider',
        items: [
            { src: Test, name: 'test' },
            { src: Test1, name: 'test1' },
            { src: Test2, name: 'test2' },
            { src: Test3, name: 'test3' },
            { src: Test4, name: 'test4' },
        ],
    };
    test('renders without errors and matches snapshot', function () {
        var firstChild = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).container.firstChild;
        expect(firstChild).toMatchSnapshot();
    });
    test('should display the first image item on render', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).getByAltText;
        var firstImage = getByAltText('image-test');
        var style = window.getComputedStyle(firstImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the second image item after click on right chevron', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).getByAltText;
        var chevron = getByAltText('right-chevron');
        fireEvent.click(chevron);
        var secondImage = getByAltText('image-test1');
        var style = window.getComputedStyle(secondImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the second image item after press `enter` on right chevron', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).getByAltText;
        var chevron = getByAltText('right-chevron');
        fireEvent.keyDown(chevron, { key: 'Enter' });
        var secondImage = getByAltText('image-test1');
        var style = window.getComputedStyle(secondImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the last image item after click on left chevron', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).getByAltText;
        var chevron = getByAltText('left-chevron');
        fireEvent.keyDown(chevron, { key: 'Enter' });
        var lastImage = getByAltText('image-test4');
        var style = window.getComputedStyle(lastImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the last image item after press `enter` on left chevron', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps), void 0)).getByAltText;
        var chevron = getByAltText('left-chevron');
        fireEvent.click(chevron);
        var lastImage = getByAltText('image-test4');
        var style = window.getComputedStyle(lastImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the image previews if hasPreviews prop is passed', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps, { hasPreviews: true }), void 0)).getByAltText;
        var previewThirdImage = getByAltText('preview-test3');
        expect(previewThirdImage).toBeInTheDocument();
    });
    test('should display the image 4 after clicking on image 4 preview', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps, { hasPreviews: true }), void 0)).getByAltText;
        var previewFourthImage = getByAltText('preview-test4');
        fireEvent.click(previewFourthImage);
        var fourthImage = getByAltText('image-test4');
        var style = window.getComputedStyle(fourthImage);
        expect(style.opacity).toBe('1');
    });
    test('should display the image 3 after clicking on image 3 preview', function () {
        var getByAltText = render(_jsx(Carousel, __assign({}, defaultProps, { hasPreviews: true }), void 0)).getByAltText;
        var previewThirdImage = getByAltText('preview-test3');
        fireEvent.click(previewThirdImage);
        var thirdImage = getByAltText('image-test3');
        var style = window.getComputedStyle(thirdImage);
        expect(style.opacity).toBe('1');
    });
    /* test('should automatically change image if `allowAutomaticView` prop is passed', () => {
      const { getByAltText } = render(
        <Carousel {...defaultProps} allowAutomaticView />
      );
      jest.useFakeTimers();
      act(() => {
        jest.runAllTimers();
      });
      jest.useRealTimers();
      const secondImage = getByAltText('image-test1');
      const style = window.getComputedStyle(secondImage);
      expect(style.opacity).toBe('1');
    });
  
    test('should display a toogle component is `allowAutomaticView` and `canControlAutomaticView` props are passed', () => {
      const { getByTestId } = render(
        <Carousel {...defaultProps} allowAutomaticView canControlAutomaticView />
      );
  
      const toggle = getByTestId('carousel-toggle');
      expect(toggle).toBeInTheDocument();
    }); */
    test('should display image 3 if the fourth bar item is clicked', function () {
        var _a = render(_jsx(Carousel, __assign({}, defaultProps, { allowAutomaticView: true }), void 0)), getByTestId = _a.getByTestId, getByAltText = _a.getByAltText;
        var fourthBarItem = getByTestId('bar-item-3');
        fireEvent.click(fourthBarItem);
        var fourthImage = getByAltText('image-test3');
        var style = window.getComputedStyle(fourthImage);
        expect(style.opacity).toBe('1');
    });
    test('should display image 3 after press `enter` on fourth bar item', function () {
        var _a = render(_jsx(Carousel, __assign({}, defaultProps, { allowAutomaticView: true }), void 0)), getByTestId = _a.getByTestId, getByAltText = _a.getByAltText;
        var fourthBarItem = getByTestId('bar-item-3');
        fireEvent.keyDown(fourthBarItem, { key: 'Enter' });
        var fourthImage = getByAltText('image-test3');
        var style = window.getComputedStyle(fourthImage);
        expect(style.opacity).toBe('1');
    });
});
