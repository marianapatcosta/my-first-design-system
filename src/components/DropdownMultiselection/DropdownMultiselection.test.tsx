import React from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import { DropdownMultiselection } from './DropdownMultiselection';

describe('DropdownMultiselection', () => {
  const defaultProps = {
    options: [{ name: 'option 1' }, { name: 'option 2' }, { name: 'option 3' }],
    selectedOptions: [],
    optionKey: 'name',
    label: 'select an option',
    onOptionClick: () => null,
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<DropdownMultiselection {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label if label prop is passed', () => {
    const { container } = render(
      <DropdownMultiselection {...defaultProps} label='Dropdown' />
    );
    getByText(container, 'Dropdown');
  });

  test('should display the field of `optionKey` as option element label, if objects are passed in `options array', () => {
    const { getByText, getByLabelText } = render(
      <DropdownMultiselection
        {...defaultProps}
        label='Dropdown'
        options={[
          { label: 'option 1' },
          { label: 'option 2' },
          { label: 'option 3' },
        ]}
        optionKey='label'
      />
    );
    const dropdown = getByLabelText(/select/i) as HTMLDivElement;
    fireEvent.click(dropdown);
    getByText('option 1');
  });

  test('should handle click events and simulate selection', async () => {
    const onOptionClickMock = jest.fn();
    const { getByText, getByLabelText } = render(
      <DropdownMultiselection
        {...defaultProps}
        onOptionClick={onOptionClickMock}
      />
    );
    const dropdown = getByLabelText(/select/i) as HTMLDivElement;
    fireEvent.click(dropdown);
    const option1 = getByText(/option 1/i) as HTMLLIElement;
    fireEvent.click(option1);
    expect(onOptionClickMock).toBeCalled();
  });

  test('should set isExpanded = true onclick', () => {
    const { getByLabelText, getByTestId } = render(
      <DropdownMultiselection {...defaultProps} />
    );
    const dropdown = getByLabelText(/select/i) as HTMLDivElement;
    fireEvent.click(dropdown);
    const options = getByTestId('dropdown-options');
    expect(options).toBeInTheDocument();
  });

  test('should set isExpanded to false if click outside of dropdown', () => {
    const { getByLabelText, getByTestId } = render(
      <DropdownMultiselection {...defaultProps} />
    );
    const dropdown = getByLabelText(/select/i) as HTMLDivElement;
    fireEvent.click(dropdown);
    const options = getByTestId('dropdown-options');
    expect(options).toBeInTheDocument();
    fireEvent.mouseUp(document);
    expect(options).not.toBeInTheDocument();
  });

  describe('Keyboard events handling', () => {
    let dropdown: HTMLDivElement;
    let chevron: HTMLImageElement;
    beforeEach(() => {
      const { getByText, getByAltText } = render(
        <DropdownMultiselection {...defaultProps} />
      );
      dropdown = getByText(/select/i) as HTMLDivElement;
      chevron = getByAltText('chevron-icon') as HTMLImageElement;
    });

    test('should set isExpanded = true on `space`', () => {
      fireEvent.keyDown(dropdown, { key: ' ' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('rotate(180deg)');
    });

    test('should set isExpanded = true on `enter`', () => {
      fireEvent.keyDown(dropdown, { key: 'Enter' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('rotate(180deg)');
    });

    test('should set isExpanded = true on `escape`', () => {
      fireEvent.keyDown(dropdown, { key: 'Escape' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('');
    });
  });

  describe('Disabled Dropdown', () => {
    test('should be disabled and not expand on click', () => {
      const { getByLabelText, getByAltText } = render(
        <DropdownMultiselection {...defaultProps} disabled />
      );

      let dropdown = getByLabelText(/select/i) as HTMLDivElement;
      let chevron = getByAltText('chevron-icon') as HTMLImageElement;
      fireEvent.click(dropdown);
      expect(dropdown).toHaveAttribute('disabled');
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('');
    });

    test('should not handle click events', () => {
      const onOptionClickMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <DropdownMultiselection
          {...defaultProps}
          disabled={true}
          onOptionClick={onOptionClickMock}
        />
      );

      firstChild && fireEvent.click(firstChild);
      expect(onOptionClickMock).not.toBeCalled();
    });
  });
});
