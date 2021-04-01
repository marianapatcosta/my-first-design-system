import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Toast, ToastProps } from './Toast';
import { TOAST_TYPE } from '../../constants';

export default {
  title: 'Toast',
  component: Toast,
  args: {},
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Info = Template.bind({});
Info.args = { message: 'info toast', type: TOAST_TYPE.INFO };

export const Alert = Template.bind({});
Alert.args = { message: 'alert toast', type: TOAST_TYPE.ALERT };

export const Warning = Template.bind({});
Warning.args = { message: 'warning toast', type: TOAST_TYPE.WARNING };

export const Success = Template.bind({});
Success.args = { message: 'success toast', type: TOAST_TYPE.SUCCESS };
