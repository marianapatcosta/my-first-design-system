import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toast, ToastProps } from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  args: {},
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = { message: 'info toast' };

export const Alert = Template.bind({});
Alert.args = { message: 'alert toast', type: 'alert'};

export const Warning = Template.bind({});
Warning.args = { message: 'warning toast', type: 'warning'};

export const Success = Template.bind({});
Success.args = { message: 'success toast', type: 'success'};