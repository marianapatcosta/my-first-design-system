import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Textarea',
  component: Textarea,
  args: { value: 'hello' },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Textarea' };

export const WithError = Template.bind({});
WithError.args = { errorMessage: 'This is an error!' };
