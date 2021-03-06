import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Template.bind({}) makes a copy of Template function
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const FullLength = Template.bind({});
FullLength.args = {
  isFullLength: true,
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
