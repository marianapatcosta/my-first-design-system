import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';
import { Success } from '../../assets/icons';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Seconday button',
};

export const FullLength = Template.bind({});
FullLength.args = {
  isFullLength: true,
  label: 'Full length button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small button',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Medium button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'This is large button',
};

export const Icon = Template.bind({});
Icon.args = {
  primary: true,
  icon: Success,
  size: 'small'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  primary: true,
  label: 'icon button',
  icon: Success,
};
