import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Upload, UploadProps } from './Upload';

export default {
  title: 'Upload',
  component: Upload,
  args: {},
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Upload',
};
