import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Carousel } from './Carousel';
import Test from '../../assets/images/test.jpg';
import Test1 from '../../assets/images/test1.jpg';
import Test2 from '../../assets/images/test2.jpg';
import Test3 from '../../assets/images/test3.jpg';
import Test4 from '../../assets/images/test4.jpg';

describe('Carousel', () => {
  const defaultProps = {
    title: 'Image slider',
    items: [
      { src: Test, name: 'test' },
      { src: Test1, name: 'test1' },
      { src: Test2, name: 'test2' },
      { src: Test3, name: 'test3' },
      { src: Test4, name: 'test4' },
    ],
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Carousel {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display the first image item on render', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} />);

    const firstImage = getByAltText('image-test');
    const style = window.getComputedStyle(firstImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the second image item after click on right chevron', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} />);

    const chevron = getByAltText('right-chevron');
    fireEvent.click(chevron);
    const secondImage = getByAltText('image-test1');
    const style = window.getComputedStyle(secondImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the second image item after press `enter` on right chevron', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} />);

    const chevron = getByAltText('right-chevron');
    fireEvent.keyDown(chevron, { key: 'Enter' });
    const secondImage = getByAltText('image-test1');
    const style = window.getComputedStyle(secondImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the last image item after click on left chevron', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} />);

    const chevron = getByAltText('left-chevron');
    fireEvent.keyDown(chevron, { key: 'Enter' });

    const lastImage = getByAltText('image-test4');
    const style = window.getComputedStyle(lastImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the last image item after press `enter` on left chevron', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} />);

    const chevron = getByAltText('left-chevron');
    fireEvent.click(chevron);
    const lastImage = getByAltText('image-test4');
    const style = window.getComputedStyle(lastImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the image previews if hasPreviews prop is passed', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} hasPreviews />);
    const previewThirdImage = getByAltText('preview-test3');
    expect(previewThirdImage).toBeInTheDocument();
  });

  test('should display the image 4 after clicking on image 4 preview', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} hasPreviews />);

    const previewFourthImage = getByAltText('preview-test4');
    fireEvent.click(previewFourthImage);
    const fourthImage = getByAltText('image-test4');
    const style = window.getComputedStyle(fourthImage);
    expect(style.opacity).toBe('1');
  });

  test('should display the image 3 after clicking on image 3 preview', () => {
    const { getByAltText } = render(<Carousel {...defaultProps} hasPreviews />);

    const previewThirdImage = getByAltText('preview-test3');
    fireEvent.click(previewThirdImage);
    const thirdImage = getByAltText('image-test3');
    const style = window.getComputedStyle(thirdImage);
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

  test('should display image 3 if the fourth bar item is clicked', () => {
    const { getByTestId, getByAltText } = render(
      <Carousel {...defaultProps} allowAutomaticView />
    );

    const fourthBarItem = getByTestId('bar-item-3');
    fireEvent.click(fourthBarItem);

    const fourthImage = getByAltText('image-test3');
    const style = window.getComputedStyle(fourthImage);
    expect(style.opacity).toBe('1');
  });

  test('should display image 3 after press `enter` on fourth bar item', () => {
    const { getByTestId, getByAltText } = render(
      <Carousel {...defaultProps} allowAutomaticView />
    );

    const fourthBarItem = getByTestId('bar-item-3');
    fireEvent.keyDown(fourthBarItem, { key: 'Enter' });

    const fourthImage = getByAltText('image-test3');
    const style = window.getComputedStyle(fourthImage);
    expect(style.opacity).toBe('1');
  });
});
