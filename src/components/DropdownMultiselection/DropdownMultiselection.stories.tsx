import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  DropdownMultiselection,
  DropdownMultiselectionProps,
} from './DropdownMultiselection';

export default {
  title: 'DropdownMultiselection',
  component: DropdownMultiselection,
  args: {
    options: [{ name: 'option 1' }, { name: 'option 2' }, { name: 'option 3' }],
    optionKey: 'name',

    label: 'select an option',
  },
} as Meta;

const Template: Story<DropdownMultiselectionProps> = (args) => (
  <DropdownMultiselection {...args} />
);

export const Default = Template.bind({});
Default.args = { selectedOptions: [] };

export const SingleSelection = Template.bind({});
SingleSelection.args = { isSingleSelection: true, selectedOption: '' };
