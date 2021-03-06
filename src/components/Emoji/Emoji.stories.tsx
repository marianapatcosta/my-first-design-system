import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Emoji, EmojiProps } from './Emoji';

export default {
  title: 'Emoji',
  component: Emoji,
  // args behavior in each story
  args: {},
} as Meta;

const Template: Story<EmojiProps> = (args) => <Emoji {...args} />;

export const Default = Template.bind({});
Default.args = {
  emoji: '😃',
  label: 'smiley',
};
