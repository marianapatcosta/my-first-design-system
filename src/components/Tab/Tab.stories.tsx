import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tab, TabProps } from './Tab';

export default {
  title: 'Tab',
  component: Tab,
  // args behavior in each story
  args: { label: 'Tab 1' },
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = { isActive: true };
