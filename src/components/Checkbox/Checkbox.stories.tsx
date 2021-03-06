import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
  checked: false,
};
