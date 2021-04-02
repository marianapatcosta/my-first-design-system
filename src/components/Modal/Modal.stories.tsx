import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  args: {},
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: 'Modal Header',
  content: 'Modal content',
  buttonLabel: 'ok',
  onClose: () => console.log('closed'),
};

export const Small = Template.bind({});
Small.args = {
  header: 'Modal Header',
  content: 'Modal content',
  buttonLabel: 'ok',
  size: 'small',
  onClose: () => console.log('closed'),
};

export const Large = Template.bind({});
Large.args = {
  header: 'Modal Header',
  content: 'Modal content',
  buttonLabel: 'ok',
  size: 'large',
  onClose: () => console.log('closed'),
};

export const Confirmation = Template.bind({});
Confirmation.args = {
  header: 'Confirmation Modal Header',
  content: 'Confirmation modal content',
  isConfirmationModal: true,
  buttonLabel: 'decline',
  confirmationButtonLabel: 'confirm',
  onClose: () => console.log('closed'),
  onConfirm: () => console.log('confirmed'),
};
