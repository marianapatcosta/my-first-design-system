import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Stepper, StepperProps } from './Stepper';
import { ORIENTATION } from '../../constants';

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
  },
} as Meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Landscape = Template.bind({});
Landscape.args = {};

export const Vertical = Template.bind({});
Vertical.args = { orientation: ORIENTATION.VERTICAL };
