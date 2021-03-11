import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ShowMore, ShowMoreProps } from './ShowMore';

export default {
  title: 'ShowMore',
  component: ShowMore,
  args: {},
} as Meta;

const Template: Story<ShowMoreProps> = (args) =>
  <ShowMore {...args} />;

  export const Default = Template.bind({});
  Default.args = {

  };