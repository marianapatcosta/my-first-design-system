import React from 'react';
import { render } from '@testing-library/react';
import { Step } from './Step';

describe('Step', () => {
  const defaultProps = { content: <div>Step </div>, isActive: true };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Step {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display content', () => {
    const { getByText } = render(<Step {...defaultProps} />);
    getByText('Step');
  });

  test('should not display content if isActive is false', () => {
    const { getByText } = render(<Step {...defaultProps} isActive={false} />);
    !getByText('Step');
  });
});
