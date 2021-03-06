import React from 'react';
import { render, getByText } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Card />);

    expect(firstChild).toMatchSnapshot();
  });

  test('renders children ', () => {
    const { container } = render(
      <Card>
        <div id='card-child'>Card Children</div>
      </Card>
    );

    getByText(container, 'Card Children');
  });
});
