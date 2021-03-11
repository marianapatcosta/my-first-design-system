import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Input, InputProps } from './Input';
import { Tick } from '../../assets/icons';

export default {
  title: 'Input',
  component: Input,
  args: { value: 'hello' },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Input' };

export const WithIcon = Template.bind({});
WithIcon.args = { icon: Tick };

export const WithError = Template.bind({});
WithError.args = { errorMessage: 'This is an error!' };
