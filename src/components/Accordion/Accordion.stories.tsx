import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Accordion, AccordionProps } from './Accordion';
import Test from '../../assets/images/test.jpg';

export default {
  title: 'Accordion',
  component: Accordion,
  args: {
    title: 'Accordion title',
    content: (
      <div>
        Accordion content <img style={{ width: '200px' }} src={Test} alt='test' />
      </div>
    ),
    style: { width: '300px' },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {};
