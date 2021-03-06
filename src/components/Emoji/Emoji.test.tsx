import React from 'react';
import { render } from '@testing-library/react';
import { Emoji } from './Emoji';

describe('Emoji', () => {
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Emoji emoji='😃' />);

    expect(firstChild).toMatchSnapshot();
  });

  test('display label prop as aria-label', () => {
    const { getByLabelText } = render(<Emoji emoji='😃' label='smiley' />);

    const emoji = getByLabelText(/smiley/i) as HTMLInputElement;
    expect(emoji).toBeTruthy();
  });
});
