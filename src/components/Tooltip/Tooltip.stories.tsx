import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tooltip, TooltipProps } from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {},
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Tooltip', style: { marginLeft: '100px' } };
