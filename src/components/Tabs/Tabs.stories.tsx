import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tabs, TabsProps } from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
  // args behavior in each story
  args: {
    tabsMetadata: [
      { label: 'Tab 1', content: <div>Tab 1 content</div>  },
      { label: 'Tab 2', content: <div>Tab 2 content</div> },
    ],
  },
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {};
