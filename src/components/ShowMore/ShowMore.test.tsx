import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShowMore } from './ShowMore';

describe('ShowMore', () => {
  const defaultProps = {
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Donec vitae mollis velit. Vestibulum lacinia nisi vitae lorem sollicitudin, vel ultricies enim suscipit. 
  Etiam vel sodales dolor. Nunc iaculis quis arcu faucibus tincidunt. Maecenas blandit dapibus porttitor. 
  Quisque sed mauris elit. Ut placerat, augue ut blandit ultricies, nunc nulla vehicula mi, in vehicula urna lectus nec nibh. 
  Aenean quis risus imperdiet, bibendum mauris vitae, consequat tortor. Donec aliquam ante vel turpis fringilla facilisis. 
  Integer varius non lacus id ultrices. In eleifend dolor ante, congue placerat elit maximus eget. Duis varius ligula erat, et varius neque euismod
   ac. In vitae posuere nisl. Sed non justo tortor. Integer risus est, feugiat at ultrices vitae, pretium in est.`,
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ShowMore {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display the first part of the content but not the last part', () => {
    const { getByText } = render(<ShowMore {...defaultProps} />);

    const text = getByText(/Lorem ipsum dolor/i);
    const style = window.getComputedStyle(text);
    expect(style.maxHeight).not.toBe('inherit');
  });

  test('should display the all content on showMore click', () => {
    const { getByText, queryByText } = render(<ShowMore {...defaultProps} />);
    const showMoreLink = getByText(/show more/i);
    showMoreLink && fireEvent.click(showMoreLink);
    expect(queryByText(/Lorem ipsum dolor/i)).toBeTruthy();
    expect(queryByText(/pretium in est/i)).toBeTruthy();
  });

  test('render `show less`label after click', () => {
    const { getByText } = render(<ShowMore {...defaultProps} />);
    const showMoreLink = getByText(/show more/i);
    showMoreLink && fireEvent.click(showMoreLink);
    getByText(/show less/i);
  });
});
