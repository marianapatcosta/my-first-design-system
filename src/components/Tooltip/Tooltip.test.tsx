import React from 'react';
import { render } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  const defaultProps = {text:'Tooltip'};
   test('renders without errors and matches snapshot', () => {
     const { container: { firstChild }  } = render(<Tooltip  {...defaultProps}/>); 

     expect(firstChild).toMatchSnapshot();
   });

   test('should display text', () => {
    const { getByText } = render(<Tooltip  {...defaultProps}/>); 

    getByText(/Tooltip/i);
  });
});