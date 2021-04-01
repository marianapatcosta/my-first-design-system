import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  const defaultProps = {
    title: 'Accordion title',
    content: 'Accordion content',
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Accordion {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display title', () => {
    const { getByText } = render(<Accordion {...defaultProps} />);
    getByText(/title/i);
  });

  test('should show content on click', () => {
    const { getByText } = render(<Accordion {...defaultProps} />);
    const accordionTitle = getByText(/title/i);
    const accordionContent = getByText(/content/i);
    fireEvent.click(accordionTitle);

    expect(accordionContent).toBeVisible();
  });

  test('should set isExpanded to false if click outside of accordion', () => {
    const { getByText, getByAltText } = render(<Accordion {...defaultProps} />);
    const accordion = getByText(/title/i) as HTMLDivElement;
    fireEvent.click(accordion);
    const chevron = getByAltText('chevron-icon') as HTMLImageElement;
    fireEvent.mouseUp(document);
    const style = window.getComputedStyle(chevron);
    expect(style.transform).toBe('');
  });

  describe('Disabled Accordion', () => {
    test('should display title', () => {
      const { getByText } = render(
        <Accordion {...defaultProps} disabled={true} />
      );
      getByText(/title/i);
    });

    test('should be disabled', () => {
      const { getByText } = render(<Accordion {...defaultProps} disabled />);
      const accordionTitle = getByText(/title/i);
      expect(accordionTitle).toHaveAttribute('disabled');
    });

    test('should not handle click events', () => {
      const { getByText } = render(
        <Accordion {...defaultProps} disabled={true} />
      );

      const accordionTitle = getByText(/title/i);
      const accordionContent = getByText(/content/i);
      fireEvent.click(accordionTitle);

      const titleStyle = window.getComputedStyle(accordionTitle);
      const contentStyle = window.getComputedStyle(accordionContent);
      expect(titleStyle.pointerEvents).toBe('none');
      expect(contentStyle.visibility).toBe('hidden');
    });
  });
});
