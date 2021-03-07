import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToggleSwitch, ToggleSwitchProps } from './ToggleSwitch';

export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  // args behavior in each story
  args: { checked: false, leftLabel: 'off', rightLabel: 'on' },
} as Meta;

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'ToggleSwitch' };
