import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Step, StepProps } from './Step';

export default {
  title: 'Step',
  component: Step,
  args: {},
} as Meta;

const Template: Story<StepProps> = (args) => <Step {...args} />;

export const Default = Template.bind({});
Default.args = { content: <div>Step </div>, isActive: true };
