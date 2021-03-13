import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Stepper, StepperProps } from './Stepper';

export default {
  title: 'Stepper',
  component: Stepper,
  args: {
    stepsMetadata: [
      {
        content: (
          <p style={{ textAlign: 'center', margin: '100px auto' }}>
            Step 1 content
          </p>
        ),
      },
      {
        content: (
          <p style={{ textAlign: 'center', margin: '100px auto' }}>
            Step 2 content
          </p>
        ),
      },
      {
        content: (
          <p style={{ textAlign: 'center', margin: '100px auto' }}>
            Step 3 content
          </p>
        ),
      },
    ],
    onSubmit: () => console.log('submitted'),
    style: { backgroundColor: 'gray' },
  },
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Landscape = Template.bind({});
Landscape.args = {};

export const Portrait = Template.bind({});
Portrait.args = { orientation: 'portrait' };
