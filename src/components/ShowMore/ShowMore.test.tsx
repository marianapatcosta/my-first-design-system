import React from 'react';
import { render } from '@testing-library/react';
import { ShowMore } from './ShowMore';

describe('ShowMore', () => {
  const defaultProps = {};
   test('renders without errors and matches snapshot', () => {
     const { container: { firstChild }  } = render(<ShowMore  {...defaultProps}/>); 

     expect(firstChild).toMatchSnapshot();
   });
});