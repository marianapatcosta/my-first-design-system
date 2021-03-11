import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tabs } from './Tabs';
import { Tab } from '../Tab/Tab';

describe('Tabs', () => {
  const defaultProps = {
    tabsMetadata: [
      { label: 'Tab 1', content: <div>Tab 1 content</div> },
      { label: 'Tab 2', content: <div>Tab 2 content</div> },
    ],
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Tabs {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display Tab 1 content by default', () => {
    const { queryByText } = render(<Tabs {...defaultProps} />);
    expect(queryByText('Tab 1 content')).toBeTruthy();
    expect(queryByText('Tab 2 content')).toBeNull();
  });

  test('should display Tab 2 content when Tab 2 is clicked', () => {
    const { queryByText } = render(<Tabs {...defaultProps} />);

    const tab2 = queryByText('Tab 2');
    tab2 && fireEvent.click(tab2);

    expect(queryByText('Tab 2 content')).toBeTruthy();
    expect(queryByText('Tab 1 content')).toBeNull();
  });
});
