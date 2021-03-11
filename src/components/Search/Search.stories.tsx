import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Search, SearchProps } from './Search';

export default {
  title: 'Search',
  component: Search,
  // args behavior in each story
  args: {},
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = { value: 'hello' };

export const Expansible = Template.bind({});
Expansible.args = { isExpandable: true };

export const WithLabel = Template.bind({});
WithLabel.args = { label: 'Search' };
