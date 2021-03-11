import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Search } from './Search';

describe('Search', () => {
  const defaultProps = {
    label: 'Search',
    value: 'Hello',
    onChange: () => null,
    onClear: () => null,
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Search {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Search {...defaultProps} onChange={onChangeMock} />
    );
    const input = getByTestId('search-field') as HTMLInputElement;
    fireEvent.click(input, { target: { value: 'bye' } });
    expect(input.value).toBe('bye');
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
      Search.defaultProps?.onChange && Search.defaultProps.onChange();
    expect(result).toBeNull();
  });

  test('should return null on close icon click if onClear prop is not passed', () => {
    const result =
      Search.defaultProps?.onClear && Search.defaultProps.onClear();
    expect(result).toBeNull();
  });

  test('should display magnifying glass icon when no value is inserted in search field', () => {
    const { getByAltText } = render(<Search {...defaultProps} value='' />);

    const magnifyingGlassIcon = getByAltText('magnifying-glass-icon');
 //   const clearIcon = getByAltText('clear icon');

    expect(magnifyingGlassIcon).toBeTruthy();
  //  expect(clearIcon).toBeFalsy();
  });

  test('should display clear icon when some value is inserted in search field', () => {
    const { getByAltText } = render(<Search {...defaultProps} />);
    const clearIcon = getByAltText('clear-icon');
    clearIcon && fireEvent.click(clearIcon);
    expect(clearIcon).toBeTruthy();
  });

  test('should clear input field after click on clear icon ', () => {
    const onClearMock = jest.fn();
    const { getByAltText, getByTestId } = render(
      <Search {...defaultProps} onClear={onClearMock} />
    );
    const clearIcon = getByAltText('clear-icon');
    clearIcon && fireEvent.click(clearIcon);

    expect(onClearMock).toBeCalled();
  });

  describe('Disabled Search', () => {
    test('should not handle change events', () => {
      const onChangeMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Search {...defaultProps} disabled={true} onChange={onChangeMock} />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChangeMock).not.toBeCalled();
    });
  });
});
