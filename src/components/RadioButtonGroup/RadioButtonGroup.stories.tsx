import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RadioButtonGroup, RadioButtonGroupProps } from './RadioButtonGroup';
import { ORIENTATION } from '../../constants';

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
  args: {
    title: 'radio group',
    items: [
      { label: 'option 1', name: 'name 1' },
      { label: 'option 2', name: 'name 2' },
      { label: 'option 3', name: 'name 3' },
    ],
  },
} as Meta;

const Template: Story<RadioButtonGroupProps> = (args) => (
  <RadioButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = { orientation: ORIENTATION.VERTICAL };
