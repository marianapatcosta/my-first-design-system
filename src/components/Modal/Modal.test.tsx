import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const defaultProps = {};
   test('renders without errors and matches snapshot', () => {
     const { container: { firstChild }  } = render(<Modal  {...defaultProps}/>); 

     expect(firstChild).toMatchSnapshot();
   });
});