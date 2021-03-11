import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Image } from './Image';
import Test from '../../assets/images/test.jpg';

describe('Image', () => {
  const defaultProps = { src: Test };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Image {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should render image after onLoad call', () => {
    const { getByTestId } = render(<Image {...defaultProps} />);

    const img = getByTestId('image');
    const imgPlaceholder = getByTestId('image-placeholder');
    fireEvent.load(img);

    expect(img).toBeInTheDocument();
    expect(imgPlaceholder).not.toBeInTheDocument();
  });

  test('should not call onClick prop nor zoom image in on click if isZoomable prop nor isCLickable props are passed ', () => {
    const onClickMock = jest.fn();
   
    const { getByTestId } = render(
      <Image {...defaultProps}  />
    );

    const img = getByTestId('image');
    fireEvent.load(img);
    fireEvent.click(img);
    const style = window.getComputedStyle(img);
    expect(style.cursor).toBe('default');
    expect(onClickMock).not.toBeCalled();

  });

  test('should not call onClick prop on click if isZoomable prop is passed ', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Image {...defaultProps} isZoomable={true} onClick={onClickMock}/>
    );

    const img = getByTestId('image');
    fireEvent.load(img);

    fireEvent.click(img);
  
    expect(onClickMock).not.toBeCalled();
  });

  test('should zoom image in on click if isZoomable prop is passed ', () => {
    const { getByTestId } = render(
      <Image {...defaultProps} isZoomable={true} />
    );

    const img = getByTestId('image');
    fireEvent.load(img);
    fireEvent.click(img);
    const style = window.getComputedStyle(img);
    expect(style.cursor).toBe('zoom-out');
  });

  test('should handle click events if isClickable prop is passed ', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Image {...defaultProps} isClickable={true} onClick={onClickMock} />
    );
    const img = getByTestId('image');
    fireEvent.load(img);
    fireEvent.click(img);
    expect(onClickMock).toBeCalled();
  });

  test('should return null on click if isClickable prop is passed and onClick prop is not passed', () => {
    render(<Image {...defaultProps} isClickable={true} />);

    const result = Image.defaultProps?.onClick && Image.defaultProps.onClick();
    expect(result).toBeNull();
  });
});
