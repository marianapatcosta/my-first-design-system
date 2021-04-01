import React from 'react';
import { render } from '@testing-library/react';
import { RadioButtonGroup } from './RadioButtonGroup';

describe('RadioButtonGroup', () => {
  const defaultProps = {
    title: 'radio group',
    items: [
      { label: 'option 1', name: 'name 1' },
      { label: 'option 2', name: 'name 2' },
      { label: 'option 3', name: 'name 3' },
    ],
    selectedItem: '',
    onChange: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<RadioButtonGroup {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
      RadioButtonGroup.defaultProps?.onChange &&
      RadioButtonGroup.defaultProps.onChange();
    expect(result).toBeNull();
  });

  test('should display title, if `title`prop is passed', () => {
    const { getByText } = render(<RadioButtonGroup {...defaultProps} />);

    getByText(/radio group/);
  });

  test('should pass props to RadioButton component', () => {
    const { getByLabelText } = render(<RadioButtonGroup {...defaultProps} />);

    const radioButton = getByLabelText(/option 1/);
    expect(radioButton).toBeInTheDocument();
  });
});
