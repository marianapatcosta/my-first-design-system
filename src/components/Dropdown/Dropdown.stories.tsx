import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  args: {
    options: ['option 1', 'option 2', 'option 3'],
    selectedOption: '',
    placeholder: 'select an option',
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {label: 'Example'};
